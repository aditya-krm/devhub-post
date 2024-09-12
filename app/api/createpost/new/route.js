import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { userId, content, hashtag } = await req.json();
  console.log("userId", userId);
  console.log("content", content);
  console.log("hashtag", hashtag);

  try {
    await connectToDB();
    const newPost = new Post({
      creator: userId,
      content,
      hashtag,
    });

    await newPost.save();
    return new Response(JSON.stringify(newPost), {
      status: 201,
    });
  } catch (error) {
    console.log("error in creating post", error);
    return new Response(JSON.stringify({ message: "Error in creating post" }), {
      status: 500,
    });
  }
};
