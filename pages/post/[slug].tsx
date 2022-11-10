import React from "react";
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from "../../components";
import { getPostDetails, getPosts } from "../../services";
import AdjacentPosts from "../../sections/AdjacentPosts";

const slug = ({ post }: any) => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post?.slug}
                categories={post?.categories.map(
                  (category: any) => category.slug
                )}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default slug;

// Fetch data at build time
export const getStaticProps = async ({ params }: any) => {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
    fallback: true,
  };
};
