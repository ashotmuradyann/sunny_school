import mongoose from "mongoose";

interface PostAttrs {
  auther: string;
  image: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostDoc extends mongoose.Document {
  auther: string;
  image: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostModel extends mongoose.Model<PostDoc> {
  build(attrs: PostAttrs): PostDoc;
}

const postSchema = new mongoose.Schema({
  auther: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  mineImage: {
    type: mongoose.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs);
};

const Post = mongoose.model<PostDoc, PostModel>("Post", postSchema);

export default Post;
