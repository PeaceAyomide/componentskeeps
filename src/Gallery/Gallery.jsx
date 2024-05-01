import React from 'react'

const Gallery = () => {
  return (
      <div className='gallery-walls  grid max-w-1200px  mx-auto gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pt-6rem pl-8 pr-8 pb-12 column:pr-0 custom:pl-7'>
          <div className='flex justify-center items-center h-400px overflow-hidden'><img src="https://images.unsplash.com/photo-1613366211183-a729adcfc224?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className='flex justify-center items-center h-400px overflow-hidden'><img src="https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className='flex justify-center items-center h-400px overflow-hidden'><img src="https://images.unsplash.com/photo-1630255733038-0eaa251036c9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className='flex justify-center items-center h-400px overflow-hidden'><img src="https://images.unsplash.com/photo-1621786030484-4c855eed6974?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className='flex justify-center items-center h-400px overflow-hidden'><img src="https://images.unsplash.com/photo-1613365765813-e29fea16ecaa?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className='flex justify-center items-center h-400px overflow-hidden'><img src="https://images.unsplash.com/photo-1613366309799-89deb380e8ef?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
    </div>
  )
}

export default Gallery
