import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();

    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .populate("creator");

    return new Response(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to Fetch posts", {
      status: 500,
    });
  }
};
