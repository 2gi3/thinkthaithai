import dbConnect from "../../../back-end/utilities/dbConnect";
import Student from "../../../back-end/models/Student";

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWTSecret = process.env.JWT_SECRET; 

dbConnect();

export default (req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    Student.findOne({ email: req.body.email }).then(
      (student) => {
        if (!student) {
          return res.status(401).json({
            error: new Error('student not found!')
          });
        }
        bcrypt.compare(req.body.password, student.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { studentId: student._id },
              `${JWTSecret}`,
              { expiresIn: '24h' });
            res.status(200).json({
              studentName: student.name,  
              studentEmail: student.email,
              studentId: student._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        ); 
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }