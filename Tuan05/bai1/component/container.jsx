import React from 'react'
import dishmage from '../image/dishimage.png'
import save from '../image/save.png'

const Container = ({ name, time }) => {
    return (
        <div className='rounded-lg border border-[0.5px] border-[#424955FF] overflow-hidden'>
            <img src={dishmage} className='w-full scale-110' alt="" />
            <div className='p-4'>
                <div className='flex justity-between gap-4 items-center mb-6 h-16'>
                    <p className='font-bold text-lg'>{name}</p>
                    <button className='rounded-full w-[40px] p-2 aspect-square border border-[#F44B87FF] text-[#F44B87FF]'>
                        <img src={save} alt="" />
                    </button>
                </div>
                <span className='text-[#F44B87FF] bg-[#fcbad1] p-2 rounded-full text-center w-[100px]'>{time} minute</span>
            </div>
        </div>
    )
}

export default Container