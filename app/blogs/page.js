import Link from 'next/link'
import React from 'react'

export default function blog() {

    const blogs = [
        {
            id: 1,
            title: 'blog 1',
            description: 'blogs 1 title'
        },
        {
            id: 2,
            title: 'blog 2',
            description: 'blogs 2 title'
        },
    ]

    return (
        <div>
            <ul>

                {blogs.map((blog) => (
                    <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}
