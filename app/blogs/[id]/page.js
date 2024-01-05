import { notFound } from 'next/navigation';
import React from 'react'

export default function blogPage({params}) {
const {id} = params;
if(id === '3'){
    notFound();
}
  return (
    <div className='mt-8'>
      <h1>The id number : {id}</h1>
    </div>
  )
}
