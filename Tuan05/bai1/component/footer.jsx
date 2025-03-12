import React from 'react'

const Footer = () => {
    var tieumuc = 'text-lg font-bold text-white'
    var muccon = 'text-lg text-white'

    return (
        <div className='bg-[#1D2128] p-8 grid grid-cols-4 gap-20'>
            <div className='col-span-2'>
                <div className='space-y-2 mb-40'>
                    <p className={tieumuc}>About us</p>
                    <p className={muccon}>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className='flex gap-4'>
                        <input placeholder='Enter your email' className='rounded-lg p-2 border bg-white w-[500px]' type="text" name="" id="" />
                        <button className='p-2 rounded-lg bg-[#F44B87FF] w-[100px] text-white'>Send</button>
                    </div>
                </div>
                <div className='gap-4'>
                    <img className='inline-block' src="/src/assets/chefify.png" alt="" />
                    <span className='w-[150px] ml-4 text-md text-white'>2023 Chefify Company</span>
                    <span className='w-[150px] ml-4 text-md text-white'>Terms of Service | Privacy Policy</span>
                </div>
            </div>
            <div>
                <div className='space-y-2 mb-20' >
                    <p className={tieumuc}>Learn More</p>
                    <p className={muccon}>Our Cooks</p>
                    <p className={muccon}>See Our Features</p>
                    <p className={muccon}>FAQ</p>
                </div>

                <div className='space-y-2' >
                    <p className={tieumuc}>Shop</p>
                    <p className={muccon}>Gift Subscription</p>
                    <p className={muccon}>Send Us Feedback</p>
                </div>
            </div>
            <div className='space-y-3'>
                <p className={tieumuc}>Recipes</p>
                {["What to Cook This Week", "Pasta", "Dinner", "Healthy", "Vegetarian", "Vegan", "Christmas"].map(item => (
                    <p className={muccon} key={item}>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default Footer