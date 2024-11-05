"use client"
import { Post } from '@/utils/models/post';
import { formattedDate } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    post: Post;
}

const PostCard = ({ post }: Props) => {
    const router = useRouter();
    return (
        <article
            className="overflow-hidden cursor-pointer active:scale-95 h-full rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25" onClick={() => router.push(`blog/posts/${post.slug}`)}
        >
            <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
            />

            <div className="bg-white h-full p-4 sm:p-6 dark:bg-slate-950">
                <time className="block text-xs text-gray-500 dark:text-gray-400">
                    {
                        formattedDate(post.publishedAt)
                    }
                </time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                        {post.title}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                    {post.excerpt}
                </p>
                <div className='tags mt-2 flex gap-2 items-center'>
                    {
                        post?.tags?.map((tag) => (
                            <span className='px-3 py-1 text-sm bg-purple-700 text-white rounded-2xl' key={tag._id}>
                                {tag.name}
                            </span>
                        ))
                    }
                </div>
            </div>
        </article>
    )
}

export default PostCard