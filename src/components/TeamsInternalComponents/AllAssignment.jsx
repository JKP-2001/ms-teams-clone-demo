import React,{useState, useEffect} from 'react'
import GoToTop from '../GoToTop'
import Cards from '../NavbarComponet/Cards'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import AssignmentCard from './AssignmentCard'
import { useLocation } from 'react-router-dom'

const AllAssignment = () => {

  const [isassign, setIsAssign] = useState(true);

  const clickAssign = ()=>{
    setIsAssign(true);
    window.scrollTo(0,0);
  }

  const clickCompleted = ()=>{
    setIsAssign(false);
    window.scrollTo(0,0);
  }

  return (
    <div>
      <NavbarCoponent />
      <div>
        <div>
          <SideBarComponent />
        </div>
        <div className="ml-[72px] mt-[48px] bg-[#f5f5f5]  justify-center items-center flex">
          {/* <div ><SecondNav/></div> */}
          <div className="py-5 ml-[90px] md:py-[20px] px-12 justify-center items-center fixed top-10 bg-[#f5f5f5] w-screen border-b-gray-200 border-b-[1px]">
            <div className="flex space-x-8 pt-2">
              {isassign?<div className="assigned">
                <span className='text-[#444791] text-sm font-semibold cursor-pointer border-b-[3px] border-indigo-500' onClick={()=>clickAssign()}>Assigned</span>
              </div>:<div className="assigned">
                <span className='text-black text-sm font-base cursor-pointer hover:border-b-[3px] ' onClick={()=>clickAssign()}>Assigned</span>
              </div>}
              {!isassign?<div className="completed">
                <span className='text-[#444791] text-sm font-semibold cursor-pointer border-b-[3px]  border-indigo-500' onClick={()=>clickCompleted()}>Completed</span>
              </div>:<div className="completed">
                <span className='text-black text-sm font-base cursor-pointer hover:border-b-[3px]  ' onClick={()=>clickCompleted()}>Completed</span>
              </div>}
              <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex w-56 sm:h-8 sm:w-40 " type="button">All Classes<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

              <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-2 md:my-0 h-px bg-gray-50 border-2 dark:bg-gray-300"></hr>
        </div>
      </div>
      {isassign ? <div className="ml-[120px] md:ml-[120px] mr-[20px] md:mr-[48px] mt-[80px] justify-center items-center pb-10">
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
      </div> : <div className="ml-[120px] md:ml-[120px] mr-[20px] md:mr-[48px] mt-[80px] justify-center items-center pb-10">
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
      </div>}
      <GoToTop />
    </div>
  )
}

export default AllAssignment