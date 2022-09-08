import dbConnect from "../../../back-end/utilities/dbConnect";
import Student from "../../../back-end/models/Student";
import authoriseRoute from "../../../back-end/middleware/auth" // part 1/3 of route authorisation

import {hash} from "bcrypt"


// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
// });


dbConnect();

export default async (req, res) =>{
    const { method } = req;

    switch(method) {
        case 'GET':
            if( authoriseRoute(req, res) === true){ // part 2/3 of route authorisation 

            try {
                const students = await Student.find({});

                res.status(200).json({ success: true, data: students })
            }catch (error) {
                res.status(400).json({ success: false });                
            }
            // part 3/3 of route authorisation start    
            }else{
               res.status(400).json({ success: false, message: "Failed authorisation test" });
            }
            // part 3/3 of route authorisation end
        break;
        case 'POST':
            try {
                hash(req.body.password, 10, async function(err, hash) {
                    const hashedBody = (
                        {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                      }
                      );
                      const student = await Student.create(hashedBody);

                      res.status(201).json({ success: true, data: student});
                    });                
            }catch(error){
                res.status(400).json({ success: false }) ;                
            }
        break;
        default:
            res.status(400).json({ success: false });    
        break;                


    }

}