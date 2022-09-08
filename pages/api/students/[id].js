import dbConnect from "../../../back-end/utilities/dbConnect";
import Student from "../../../back-end/models/Student";



dbConnect();

export default async (req, res) => {  

    const {
        query: { id },
        method
    } = req;
    const jwt = require('jsonwebtoken');
                const JWTSecret = process.env.JWT_SECRET;
                const token = req.headers.authorization.split(' ')[1];
                const decodedToken = jwt.verify(token, `${JWTSecret}`);
                const userId = decodedToken.userId;
                req.auth = { userId };
                if (req.body.userId && req.body.studentId !== userId) {
                    throw 'Authorisation failed';
                } else {

    switch (method) {
        case 'GET':
            try {
                const student = await Student.findById(id);

                /*
                * part 1/2 of route authorisation start
                */
                // const jwt = require('jsonwebtoken');
                // const JWTSecret = process.env.JWT_SECRET;
                // const token = req.headers.authorization.split(' ')[1];
                // const decodedToken = jwt.verify(token, `${JWTSecret}`);
                // const userId = decodedToken.userId;
                // req.auth = { userId };
                // if (req.body.userId && req.body.studentId !== userId) {
                //     throw 'Authorisation failed';
                // } else {
                    // next();                 
                    /*
                    * part 1/2 of route authorisation end
                    */   
                    if (!student) {
                        return res.status(400).json({ success: false });
                    }

                    res.status(200).json({ success: true, data: student });
                //}  part 2/2 of route authorisation
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const student = await Student.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!student) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: student });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedStudent = await Student.deleteOne({ _id: id });

                if (!deletedStudent) {
                    res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: { }, message: "student deleted successfully" });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
        
    }
}
}