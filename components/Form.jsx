import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your thoughts with the world of developers and tech
        enthusiasts.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-bold text-gray-700">
            Your Post content
          </span>
          <textarea
            className="form_textarea resize-none"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            required
            placeholder="What's on your mind?"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-bold text-gray-700">
            Hashtags <span className="text-gray-500">(#web, #app, #tech)</span>
            {/* <Link href="/hashtags">
              <p className="text-blue-500">Browse all hashtags</p>
            </Link> TODO: Add this link */}
          </span>
          <input
            className="form_input"
            value={post.hashtag}
            onChange={(e) => setPost({ ...post, hashtag: e.target.value })}
            required
            placeholder="Add a hashtag to your post"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4 ">
          <Link href="/">
            <button className="px-5 py-1.5 text-sm bg-slate-300 rounded-full">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-blue-500 rounded-full"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
