import PostCard from '@/app/components/PostCard';
import { client } from '@/sanity/lib/client'
import { Post } from '@/utils/models/post';
import React from 'react'

async function getPosts() {
  const query = `
    *[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
    _id,
  tags[] -> {
    name,
    slug,
    _id
  },
}
  `
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

const BlogPage = async () => {
  const posts: Post[] = await getPosts();
  console.log('posts:', posts);
  return (
    <section className='blog_page'>
      <div className='blog_banner'>
        Blog Banner
      </div>
      <div className='container mx-auto xl:px-6'>
        <div className='blog-card'>
          <div className='blogs grid grid-cols-4 gap-7'>
            {
              posts.length > 0 && posts.map((post) => (
                <div key={post._id}>
                  <PostCard post={post} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPage