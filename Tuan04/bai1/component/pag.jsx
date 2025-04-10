import React from 'react'
import leftarrow from '../image/211689_left_arrow_icon.png'
import rightarrow from '../image/211607_right_arrow_icon.png'

const Pagination = () => {
    return (
        <div className='flex items-center justify-end my-6'>
            <img src={leftarrow} className='w-[20px]' />
            <div className='flex gap-2 items-center'>
                {[1, 2, 3, 4, 5].map(item => (
                    <div className={`cursor-pointer p-2 rounded-md border border-[#424955FF] ${item == 1 ? " text-white bg-[#F44B87FF]" : 'text-[#424955FF] bg-white'}`} key={item}>
                        {item}
                    </div>
                ))}
            </div>
            <img src={rightarrow} className='w-[20px]' />
        </div>
    )
}

export default Pagination