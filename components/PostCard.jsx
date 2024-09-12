"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { format } from "date-fns";

// Function to format date using date-fns
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return format(date, "MMM dd, yyyy hh:mm a");
};

const PostCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  return (
    <div className="prompt_card">
      <div className="flex flex-col justify-between items-start gap-5">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{post.creator.username}</h3>
            <p className="text-xs font-light text-black/60">
              {formatDate(post.createdAt)}
            </p>
          </div>
        </div>
        <p className="my-4 font-satoshi text-md text-gray-700">
          {post.content}
        </p>
        <p
          className="font-inter text-sm blue_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.hashtag)}
        >
          {post.hashtag}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
