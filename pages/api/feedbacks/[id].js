import dbConnect from "../../../back-end/utilities/dbConnect";
import Feedback from "../../../back-end/models/Feedback";
import authoriseRoute from "../../../back-end/middleware/auth" // part 1/3 of route authorisation



dbConnect();

export default async (req, res) => {

    const {
        query: { id },
        method
    } = req;




    if (authoriseRoute(req, res) === true) { // part 2/3 of route authorisation 


        switch (method) {
            case 'GET':
                try {
                    const feedback = await Feedback.findById(id);

                    if (!feedback) {
                        return res.status(400).json({ success: false });
                    }

                    res.status(200).json({ success: true, data: feedback });

                } catch (error) {
                    res.status(400).json({ success: false });
                }
                break;
            case 'PUT':
                try {
                    const feedback = await Feedback.findByIdAndUpdate(id, req.body, {
                        new: true,
                        runValidators: true
                    });

                    if (!feedback) {
                        return res.status(400).json({ success: false });
                    }

                    res.status(200).json({ success: true, data: feedback });

                } catch (error) {
                    res.status(400).json({ success: false });
                }
                break;
            case 'DELETE':
                try {
                    const deletedFeedback = await Feedback.deleteOne({ _id: id });

                    if (!deletedFeedback) {
                        res.status(400).json({ success: false });
                    }

                    res.status(200).json({ success: true, data: {}, message: "Feedback deleted successfully" });

                } catch (error) {
                    res.status(400).json({ success: false });
                }
                break;
            default:
                res.status(400).json({ success: false });
                break;

        }
        // part 3/3 of route authorisation start    
    } else {
        res.status(400).json({ success: false, message: "Failed authorisation" });
    }
    // part 3/3 of route authorisation end
}