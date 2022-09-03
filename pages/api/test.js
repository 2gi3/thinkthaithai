import dbConnect from "../../back-end/utilities/dbConnect";

dbConnect();

const testController = async (req, res) => {
    res.status(200).json({
        test : 'test1',
    });
}


export default testController; 