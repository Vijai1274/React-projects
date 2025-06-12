import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs';     
import HeroPic from '../assets/boy.webp';

const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 sm:flex-row md:flex-row
    lg:flex-row ssm:flex-col ssm:space-y-10 text-white '>

        <div className='lg:w-1/3 ssm:w-fit'>

            <p className='text-4xl mb-5 text-slate-300'>I'm</p>
            <h1 className='text-6xl'>Vijai</h1>
            {/* <hr />   */}
            <p className='mt-10 text-xl text-slate-300'>
                Full Stack Developer <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum, omnis dolorem assumenda laudantium accusamus vel quasi aliquam quos perspiciatis!            </p>
        
        </div>

        <div className='lg:w-1/3 items-center ssm:w-fit'>

            <img src={HeroPic} alt="" width={2} height={2} 
            className='rounded-full w-full border-8 border-white'/>
            
        </div>

        <div className='lg:w-1/3 ssm:w-fit'>    

            <p className='text-4xl mb-4'>About Me</p>
            <p className='text-xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae nobis iure at harum possimus beatae iste cupiditate corporis. </p>
            <button className='bg-white text-blue-500 px-10 py-2 my-3 rounded-full
            hover:bg-blue-600 hover:text-white'>Show More...</button>

            <div className='flex mt-5 space-x-5 cursor-pointer'>
                <BsFacebook size={50} className='border-4 rounded-2xl hover:border-blue-600 p-2' />
                <BsInstagram size={50} className='border-4 rounded-2xl hover:border-blue-600 p-2' />
                <BsTwitter size={50} className='border-4 rounded-2xl hover:border-blue-600 p-2' />
                <BsPinterest size={50} className='border-4 rounded-2xl hover:border-blue-600 p-2' />
            </div>
        </div>

    </section>
  )
}

export default hero