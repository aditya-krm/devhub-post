import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const posts = await Post.find({
      creator: params.id,
    }).populate("creator");

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
