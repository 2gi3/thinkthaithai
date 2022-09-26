const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: [ true, "Please add a name for this student"],
            unique: true,
            trim: true,
            maxlength: [30, ' The name of the student cannot be more than 30 characters']
        }, 
        studentJob: {
            type: String,
            required: false,
            unique: true,
            trim: true,
            maxlength: [30, ' The name of the student cannot be more than 30 characters']
        }, 
        studentLocation: {
            type: String,
            required:  false,
            unique: true,
            trim: true,
            maxlength: [30, ' The location of the student cannot be more than 30 characters']
        }, 
        feedbackTitle: {
            type: String,
            required: [ true, "Please add a title for this feedback"],
            unique: true,
            trim: true,
            maxlength: [30, ' The title cannot be more than 30 characters']
        }, 

        content: {
            type: String,
            required: [ true, "Please add a feedback"],
            unique: true,
            trim: true,
            maxlength: [300, ' The feedback cannot be more than 300 characters']
        },
        imageUrl: { type: String},


    }
)

module.exports= mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);