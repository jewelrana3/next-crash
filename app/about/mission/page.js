


import Image from 'next/image'
import React from 'react'
import thum from '@/public/img/next.png'
import Button from '@/app/components/Button'

export default function mission() {
  return (
    <div>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim explicabo in veniam quaerat. Accusamus obcaecati similique a autem corrupti! Neque!</h2>
      <div className='w-[400px]'>
        <Image placeholder='blur' src={thum} alt='pic' />
      </div>
      <Button />
    </div>
  )
}
