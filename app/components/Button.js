'use client'

import React from 'react'

export default function Button() {
    return (
        <div>
            <button onClick={() => console.log('click have now')} className='bg-red-500 rounded px-4 py-2'>Click Me</button>
        </div>
    )
}
