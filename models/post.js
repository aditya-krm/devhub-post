import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    hashtag: {
      type: String,
      required: [true, "Hashtag is required"],
    },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
