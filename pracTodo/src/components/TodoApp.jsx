import React from 'react'

const TodoApp = () => {
    return (
    <>
<div className=" flex justify-center items-center  bg-slate-900 h-screen">
            {/* <div className='p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-4 flex-col sm:flex-row'>
                 <div className='mr-6'>
                    <img className='h-15 w-15 rounded-md' src="https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg" />
                </div>
                    <div className='text-2xl font-medium text-black w-full'>
                        Tailwind CSS
                        <p className='text-slate-400 text-xl'>By Naman</p>
                    </div>
            </div> */}

    {/* <div className='bg-white m-3 p-5 flex justify-center items-center flex-col rounded-lg shadow-slate-300'>
        <div>
            <img className='w-52 h-40 rounded-lg' src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"/>
        </div>
        <div className='p-2'>
            <h2 className='text-2xl font-sans font-semibold'>The Cutest Cat</h2>
        </div>
        <div className='w-56'>
            <p className='ml-3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo optio vitae tempora consectetur repellendus incidunt, suscipit, tenetur dolore aspernatur veniam mollitia ducimus cupiditate!</p>
        </div>
        <div className='mt-2'>
            <button className='bg-blue-600 text-white px-7 py-2 rounded-lg font-semibold hover:bg-blue-800'>Click</button>
        </div>
    </div> */}
    {/* <div className='flex flex-col md:flex md:flex-row'>
    <button className='bg-sky-500 text-white px-4 py-2 rounded-md text-base hover:bg-sky-700 m-2 '>Buy now</button>
    <button className='bg-sky-500 text-white px-4 py-2 rounded-md text-base hover:bg-sky-700 m-2 '>Buy now</button>
    <button className='bg-sky-500 text-white px-4 py-2 rounded-md text-base hover:bg-sky-700 m-2 '>Buy now</button>
    </div> */}



        <div className='max-w-md mx-auto bg-white rounded-md overflow-hidden md:max-w-2xl'>
            <div className='md:flex'>
                <div>
                    <img className='h-48 w-full md:h-full md:w-48' src="https://www.citytour.ae/bigImage/020240507-1305079355838.jpg"/>
                </div>
                <div className='p-8'>
                    <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>An Awesome Card</div>
                    <a className='block mt-2 text-lg' href=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni et molestias nulla quae! Iusbus?</p>
                </div>
            </div>
        </div>


</div>

    </>
    )
}

export default TodoApp