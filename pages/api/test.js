import dbConnect from "../../back-end/utilities/dbConnect";

dbConnect();

const testController = async (req, res) => {
    res.json({
        test : 'test',
    });
}


export default testController;