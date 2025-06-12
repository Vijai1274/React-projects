import {CgNametag} from 'react-icons/cg';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';

const nav = () => {

  const [toggle, setToggle] = useState(false)

  function openMenu(){
    setToggle(true);
  }

  function closeMenu(){
    setToggle(false);
  }

  return (
    <>
    <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a href="" className="text-white font-mono text-3xl tracking-wider flex items-center"><CgNametag />BLAST</a>
        </div>

        <div className="space-x-4">
            <div className='ssm:hidden lg:block sm:block md:block space-x-2'>
              <a href="" className="text-white hover:bg-blue-600 rounded-full px-5 py-2 text-xl">Home</a>
              <a href="" className="text-white hover:bg-blue-600 rounded-full px-5 py-2 text-xl">About</a>
              <a href="" className="text-white hover:bg-blue-600 rounded-full px-5 py-2 text-xl">Contact</a>
            </div>
            <div className='ssm:block lg:hidden sm:hidden md:hidden'>
              {toggle?(
                <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer'/>
              ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer'/>)}
              
            </div>
        </div>
    </div>

    <div className='ssm:block lg:hidden sm:hidden md:hidden'>
      {toggle?(
        <div className='flex justify-center text-center space-y-2'>
        <ul>
          <li className='text-white hover:bg-blue-600 text-xl mb-2 cursor-pointer px-3 py-2 rounded-lg'>Home</li>
          <li className='text-white hover:bg-blue-600 text-xl mb-2 cursor-pointer px-3 py-2 rounded-lg'>About</li>
          <li className='text-white hover:bg-blue-600 text-xl mb-2 cursor-pointer px-3 py-2 rounded-lg'>Contact</li>
        </ul>
      </div>
      ):(
        <div></div>
      )}
      
    </div>
    </>
  )
}
 
export default nav