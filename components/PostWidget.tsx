import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PostWidget = (props: any) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { categories, slug } = props;

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {slug ? "Related Posts" : "Recent Posts"}
        </h3>
        {relatedPosts.map((post: any, i) => (
          <div key={i} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image
                // loader={grpahCMSImageLoader}
                alt={post?.title}
                // height="60px"
                // width="60px"
                unoptimized
                className="align-middle rounded-full"
                src={post?.featuredImage?.url}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                {moment(post?.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link href={`/post/${post?.slug}`} className="text-md" key={i}>
                {post?.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostWidget;
