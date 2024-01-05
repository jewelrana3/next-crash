import Link from 'next/link'
import React from 'react'

function aboutLayout({children}) {
  return (
    <div>
      <nav>
          <ul className='flex gap-6 mt-8 mb-6'>
            <li><Link href='/about/mission'>mission</Link></li>
            <li><Link href='/about/vission'>vission</Link></li>
          </ul>
  
        </nav>
      {children}
    </div>
  )
}

export default aboutLayout
