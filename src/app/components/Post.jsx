import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
function Post({ post }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="overflow">
          <img src={post.imageURL} alt={post.title} className="card-img-top" />
        </div>
        <div className="card-body">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link href={`/post?title=${post.title}`} className="btn btn-light">
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
