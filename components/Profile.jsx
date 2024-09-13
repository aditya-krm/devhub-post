import { useSession } from "next-auth/react";
import PostCard from "./PostCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const { data: session } = useSession();

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left"> </p>

      <div className="flex gap-6 mx-auto break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter w-full">
        <div className="prompt_card_image">
          <img
            src={session?.user.image}
            alt={session?.user.name}
            className="rounded-full"
          />
        </div>
        <div className="prompt_card_info">
          <h2>{session?.user.name}</h2>
          <p>{session?.user.email}</p>
          {/* <p>user since 2 days</p> */}
        </div>
      </div>
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
