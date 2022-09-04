const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [ true, "Please add a name for this student"],
            unique: true,
            trim: true,
            maxlength: [30, ' The name of the student cannot be more than 30 characters']
        },

        rate: { type: Number, min: 0, max: 1000 }, 

        email: {
            type: String,
            required: [ true, "Please add an  Email address for this student"],
            unique: true,
            trim: true,
            maxlength: [30, ' The Email of the student cannot be more than 30 characters']
        }

    }
)

module.exports= mongoose.models.Student || mongoose.model('Student', StudentSchema);