import React from 'react'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import Cards from '../NavbarComponet/Cards'
import SecondNav from '../NavbarComponet/SecondNav'
import Posts from './Posts'
import SideBar from './SideBar'
import GS from "../../images/GS.jpg"
import MeetEnded from './MeetCards/MeetEnded'

export default function GeneralComponent() {
  return (
    <>
      <div>
        <NavbarCoponent />
        <div class="flex">
          <div>
            <SideBarComponent />
          </div>
          <div class="flex">
            <div className="side"><SideBar /></div>
            <div className="teamsnav">
              <div className="flex assignmentcontainer justify-start relative my-[2px]">
                <div className="grpimage ml-[92px] mt-[63px] flex space-x-4">
                  <img src={GS} alt="" className='rounded-md w-8 h-8' />
                  <div className="name font-medium text-xl">General</div>
                  <div className="name mt-1">Posts</div>
                  <div className="name mt-1">Files</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex assignmentcontainer justify-start pb-4 relative hidden min-[946px]:block">
            <div className="grpimage ml-[92px] mt-[63px] flex space-x-4">
              <img src={GS} alt="" className='rounded-md w-8 h-8' />
              <div className="name font-medium text-xl">General</div>
              <div className="name mt-1">Posts</div>
              <div className="name mt-1">Files</div>
            </div>
          </div>
        </div>
        <hr className="my-2 min-[946px]:my-0 h-[1.2px] bg-gray-50 border-0 dark:bg-gray-300 relative ml-[72px] min-[946px]:hidden"></hr>
        <hr className="my-2 min-[946px]:my-0 h-[1.2px] bg-gray-50 border-0 dark:bg-gray-300 relative ml-[72px] hidden min-[946px]:block"></hr>

        <div className="cards ml-[100px] w-5/6 ">
          <MeetEnded />
        </div>
      </div>
    </>
  )
}
