const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: [ true, "Please add a name for this student"],
            unique: true,
            trim: true,
            maxLength: [30, ' The name of the student cannot be more than 30 characters']
        },

        rateTHB: { type: Number, min: 0, max: 1000 }, 

        email: {
            type: String,
            required: [ true, "Please add an  Email address for this student"],
            unique: true,
            trim: true,
            maxLength: [30, ' The Email of the student cannot be more than 30 characters']
        }

    }
)

modules.exports= mongoose.models.Student || mongoose.models('Student', StudentSchema);