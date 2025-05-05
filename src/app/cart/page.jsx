'use client'
import useCardStore from '@/lib/store/card'
import React from 'react'

const CartPage = () => {
    const items = useCardStore((stest)=>stest.items)
  return (
    <div>{items.map((item)=>{
            return <div className=''>
                <p>{item.name}</p>
            </div>
        })}
    </div>
  )
}

export default CartPage
