import Post from "../components/Post";
import { posts } from "../profile";

function BlogPage() {
  return (
    <div>
      <h1 className="text-center text-dark">My Blog</h1>
      <div className="row">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
