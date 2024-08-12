import React from 'react'
import emptyImg from '../../assets/images/empty.png'

export const Empty = () => {
  return (
    <>
    <div className="flex flex-col justify-center gap-5 w-fit">
        <h1 className='font-extrabold text-xl text-center' >Вы пока не создали ни одного товара</h1>
        <img src={emptyImg} alt="empty" />

    </div>
    </>
  )
}
