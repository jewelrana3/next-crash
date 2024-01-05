
import getAllData from '@/lib/getAllData';
import Link from 'next/link';
import React from 'react'

export default async function posts() {

    const result = await getAllData();

    return (
        <div>
            <h2>All post</h2>

            <ul className='mt-7'>
                {result.map(post => (
                    <li key={post.id}><Link href={`posts/${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}
