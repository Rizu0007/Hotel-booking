
import { useAppContext } from "../contexts/AppContext";
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import * as apiClient from '../api-client';

function Header() {
  const {isLoggedin , showToast} =useAppContext();
  const navigate=useNavigate();
   
  const mutation=useMutation(apiClient.signout , {
    onSuccess:()=>{
  showToast({message:"SignOut !" , type:"SUCCESS"})    
  navigate("/")
  
    },
    onError:(error:Error)=>{
      showToast({message:error.message , type:"ERROR"})    
  
  
    },
 
  })
  
  const handleclick=()=>{
    mutation.mutate();
  }
 
    return (
    <header className='border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px]'>
    <div className='flex flex-wrap items-center relative gap-x-4 gap-y-3'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
      </a>
      <div id="collapseMenu"
        className='lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:w-full max-lg:absolute max-lg:top-16 max-sm:top-24 max-lg:bg-white max-lg:p-4'>
        <ul className='lg:flex lg:space-x-8 max-lg:space-y-2'>
          <li className='max-lg:border-b max-lg:py-2'>
          </li>
       
        </ul>
        <ul className='lg:flex lg:items-center  max-lg:block lg:space-x-8 ml-auto'>
          {isLoggedin ?
          (
        <>
        <li className='max-lg:border-b max-lg:py-2 max-lg:mt-2'>
            <a href='javascript:void(0)'
              className='lg:hover:text-[#007bff] text-gray-600 block font-bold text-3xl'>Pricing</a>
          </li>
          <li className='max-lg:border-b max-lg:py-2 max-lg:mt-2'><a href='javascript:void(0)'
              className='lg:hover:text-[#007bff] text-gray-600 block font-bold text-3xl'>Learn</a>
          </li>
          <button onClick={handleclick} className='max-lg:border-b max-lg:py-2 max-lg:mt-2'><a href='javascript:void(0)'
              className='lg:hover:text-[#007bff] text-gray-600 block font-bold text-3xl'>Sign Out</a>
          </button>
        </>  
       ):(
        <button
        className='px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]'>Login</button>
       )  }
        </ul>
      </div>
      <div className="border-l border-[#333] h-6 max-lg:hidden"></div>
      {/* <div className='flex items-center ml-auto'>
        <a href='javascript:void(0)' className='lg:hover:text-[#007bff] text-gray-600 block font-bold text-[15px] mr-6'>Log
          in</a>
      
        <button id="toggle" className='lg:hidden ml-7'>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div> */}
    </div>
  </header>
  )
}

export default Header
