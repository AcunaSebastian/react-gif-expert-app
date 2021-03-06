import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {
    const {data, loading} = useFetchGifs( category );

  return (
      <>
        <h3>{ category }</h3>
        { loading && 'Cargando' }
        <div className='card-grid'>
            {
                data.map( images => (
                    <GifGridItem 
                        key={images.id} 
                        {...images}
                    />
                ))
            }
        </div>
      </>
  )
}
