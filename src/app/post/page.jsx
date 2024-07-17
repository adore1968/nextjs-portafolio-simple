/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchParams } from "next/navigation";
import { posts } from "../profile";

function PostPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const currentPost = posts.find((post) => post.title === title);

  return (
    <div>
      <div className="text-center">
        <h1>{currentPost.title}</h1>
        <img
          src={currentPost.imageURL}
          alt={currentPost.title}
          className="img-fluid"
          style={{ width: "50%" }}
        />
        <p>{currentPost.content}</p>
      </div>
    </div>
  );
}

export default PostPage;
