import Comments from '@/app/components/comments';
import getAllData from '@/lib/getAllData';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/page';
import { list } from 'postcss';
import React, { Suspense } from 'react'


export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {

    title: post.title,
    description: post.body
  }
};

export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = await getPost(id);
  const commentsPromise = await getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise])
  const post = await postPromise
  
  return (
    <div>
      <h2> {post.title}</h2>
      <p>{post.body}</p>
      <hr />

      <Suspense fallback="<h1>loading segments...</h1>">
         <Comments promise={commentsPromise}/>
      </Suspense>

      
    </div>
  )
}

export async function generateStaticParams(){
  const posts = await getAllData();

  return posts.map(post => ({
    id:post.id.toString()
  }))
}
