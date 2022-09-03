import dbConnect from "../../back-end/utilities/dbConnect";

dbConnect();

export default async (req, res) => {
    res.json({
        test : 'test',
    });
}