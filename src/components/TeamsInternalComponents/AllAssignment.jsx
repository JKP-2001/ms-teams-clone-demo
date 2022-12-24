import React from 'react'
import Cards from '../NavbarComponet/Cards'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import AssignmentCard from './AssignmentCard'

const AllAssignment = () => {
  return (
    <div>
      <NavbarCoponent />
      <div>
        <div>
          <SideBarComponent />
        </div>
        <div className="ml-[72px] mt-[48px] bg-[#f5f5f5]  justify-center items-center ">
          {/* <div ><SecondNav/></div> */}
          <div className="py-5 md:py-[20px] px-12 justify-center items-center ">
            <div className="flex space-x-8">
              <div className="assigned">
                <span className='text-[#444791] text-sm font-semibold cursor-pointer border-b-[3px] border-indigo-500'>Assigned</span>
              </div>
              <div className="completed">
                <span className='text-[#444791] text-sm font-semibold cursor-pointer border-b-[3px] hover:border-[#f5f5f5] border-indigo-500'>Completed</span>
              </div>
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
          <hr className="my-2 md:my-0 h-px bg-gray-50 border-0 dark:bg-gray-300"></hr>
        </div>
      </div>
      <div className="ml-[120px] md:ml-[120px] mr-[20px] md:mr-[48px] mt-[48px] justify-center items-center pb-10">
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
      </div>
    </div>
  )
}

export default AllAssignment