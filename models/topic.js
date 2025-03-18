import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  title:{
    type:String,
    required: [true, "Please Enter Topic title"],
    trim:true
  },
  description:{
    type:String,
    trim:true,
    default: null
  },

},{timestamps:true})

// const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
// export default Topic
const Topic =  mongoose.models.Topic ?? mongoose.model("Topic",topicSchema);
export default Topic;