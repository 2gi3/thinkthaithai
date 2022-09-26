import dbConnect from "../../../back-end/utilities/dbConnect";
import Feedback from "../../../back-end/models/Feedback";
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
            

            try {
                const feedback = await Feedback.find({});

                res.status(200).json({ success: true, data: feedback })
            }catch (error) {
                res.status(400).json({ success: false });                
            }
            
        break;
        case 'POST':
            try 
            {
                if(  authoriseRoute(req, res) === true){ // part 2/3 of route authorisation 
                // hash(req.body.password, 10, async function(err, hash) {
                    const body = (
                        {
                         studentName: req.body.studentName,
                         studentJob: req.body.studentJob,
                         studentLocation: req.body.studentLocation,
                         feedbackTitle: req.body.feedbackTitle,
                         content: req.body.content,
                         imageUrl: req.body.imageUrl
                      }
                      );
                      const student = await Feedback.create(body);

                      res.status(201).json({ success: true, data: student});
                    // });  
                    // part 3/3 of route authorisation start    
        }else{
            res.status(400).json({ success: false, message: "Failed authorisation test" });
         }
         // part 3/3 of route authorisation end              
            }catch(error){
                res.status(400).json({ success: false }) ;                
            }
            
        break;
        default:
            res.status(400).json({ success: false });    
        break;                


    }

}