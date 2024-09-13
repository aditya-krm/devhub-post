import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id).populate("creator");

    if (!post) {
      return new Response("Post not found", {
        status: 404,
      });
    }
    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to Detect post", {
      status: 500,
    });
  }
};

export const PATCH = async (req, { params }) => {
  const { content, hashtag } = await req.json();

  try {
    await connectToDB();

    const existingPost = await Post.findById(params.id);

    if (!existingPost) {
      return new Response("Post not found", {
        status: 404,
      });
    }

    existingPost.content = content;
    existingPost.hashtag = hashtag;

    await existingPost.save();

    return new Response(JSON.stringify(existingPost), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to Detect post", {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Post.findByIdAndDelete(params.id);

    return new Response("Post Deleted successfully", {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to Detect post", {
      status: 500,
    });
  }
};
