import dbConnect from "../../../back-end/utilities/dbConnect";
import Feedback from "../../../back-end/models/Feedback";
import authoriseRoute from "../../../back-end/middleware/auth" // part 1/3 of route authorisation
import { hash } from "bcrypt"
import feedbacks from "../../feedbacks";
const cloudinary = require('../../../back-end/utilities/cloudinary');


// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
// Store hash in your password DB.
// });



dbConnect();

export default async (req, res) => {
    const { method } = req;
    // const {studentName, studentJob, studentLocation, feedbackTitle, content, imageUrl} = req.body

    switch (method) {
        case 'GET':


            try {
                const feedback = await Feedback.find({});
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

                res.status(200).json({ success: true, data: feedback })
            } catch (error) {
                res.status(400).json({ success: false });
            }

            break;
        case 'POST':
            try {
                if (authoriseRoute(req, res) === true) { // part 2/3 of route authorisation 
                    // hash(req.body.password, 10, async function(err, hash) {
                    // console.log(req.body.imageUrl)
                    const image = req.body.imageUrl
                    // console.log()
                    const result = await cloudinary.uploader.upload(

                        image
                        // , function(error, result) {console.log(result, error); }
                        // {
                        //     overwrite: true,
                        //     invalidate: true,
                        //     width: 810, height: 456, crop: "fill"
                        // }
                        // {
                        //     folder: "thinkthaithai"                            
                        // }
                    )

                    const body = (
                        {
                            studentName: req.body.studentName,
                            studentJob: req.body.studentJob,
                            studentLocation: req.body.studentLocation,
                            feedbackTitle: req.body.feedbackTitle,
                            content: req.body.content,
                            imageUrl: result.secure_url
                            //  imageUrl:{
                            //     public_id: result.public_id,
                            //     url: result.secure_url                        
                            // }
                        }
                    );
                    const student = await Feedback.create(body);
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
                    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

                    res.status(201).json({ success: true, data: student });
                    // });  
                    // part 3/3 of route authorisation start    
                } else {
                    res.status(400).json({ success: false, message: "Failed authorisation test" });
                }
                // part 3/3 of route authorisation end              
            } catch (error) {
                res.status(400).json({ success: false });
            }

            break;
        default:
            res.status(400).json({ success: false });
            break;


    }

}