import React, { useContext, useState } from 'react'
// import Cards from '../../NavbarComponet/Cards'
import SecondNav from "../../NavbarComponet/SecondNav"
import Posts from '../Posts'
import SideBar from "../SideBar"
import GS from "../../../images/GS.jpg"
import MeetEnded from './MeetEnded'
import EntryMessage from './EntryMessage'
import GeneralMessage from './GeneralMessage'
import MeetingCard from './MeetingCard'
import AssignmentCard from './AssignmentCard'
import FileInMeetCard from './FileInMeetCard'
import GrpContext from '../../../Context/GrpContext/GrpContext'

const GeneralNavBar = () => {

  const {setgrpState} = useContext(GrpContext);



  const [click, setClick] = useState("post");

  const clickpost = ()=>{
    setClick("post");
    setgrpState("general");
  }

  const clickAssig =()=>{
    setClick("assig");
    setgrpState("assignment");
    window.scrollTo(0,0);
  } 

  const clickFile = ()=>{
    setClick("file");
  }

  return (
    <>
        <div class="flex">
            <div className="side"><SideBar /></div>
            <div className="teamsnav">
              <div className="assignmentcontainer justify-start fixed translate-x-[72px] bg-[#f5f5f5] border-2 w-screen pb-2 max-[1000px]:block hidden">
                <div className="grpimage ml-[10px] mt-[60px] flex space-x-4">
                  <img src={GS} alt="" className='rounded-md w-8 h-8' />
                  <div className="name font-medium text-xl">General</div>
                  {click === "post"?<div className="name mt-1 border-b-[2.5px] border-b-[#444791] z-100 cursor-pointer " onClick={()=>clickpost()}>Posts</div>:<div className="name mt-1 hover:border-b-[2.5px]  z-100 cursor-pointer" onClick={()=>clickpost()}>Posts</div>}
                  {click=== "assig"?<div className="name mt-1 cursor-pointer border-b-[2.5px] border-b-[#444791]" onClick={()=>clickAssig()}>Assignments</div>:<div className="name mt-1 cursor-pointer hover:border-b-[2.5px]" onClick={()=>clickAssig()}>Assignments</div>}
                  {click==="file"?<div className="name mt-1 cursor-pointer border-b-[2.5px] border-b-[#444791]" onClick={()=>clickFile()}>Files</div>:<div className="name mt-1 cursor-pointer hover:border-b-[2.5px]" onClick={()=>clickFile()}>Files</div>}
                </div>
              </div>
            </div>
          </div>

          <div className="assignmentcontainer justify-start pb-4 fixed translate-x-[352px] w-screen border-2 bg-[#f5f5f5] hidden min-[950px]:block my-2">
            <div className="grpimage ml-[40px] mt-[54px] flex space-x-4">
              <img src={GS} alt="" className='rounded-md w-8 h-8' />
              <div className="name font-medium text-xl ">General</div>
              {click === "post"?<div className="name mt-1 border-b-[2.5px] border-b-[#444791] z-100 cursor-pointer " onClick={()=>clickpost()}>Posts</div>:<div className="name mt-1 hover:border-b-[2.5px]  z-100 cursor-pointer" onClick={()=>clickpost()}>Posts</div>}
              {click==="file"?<div className="name mt-1 cursor-pointer border-b-[2.5px] border-b-[#444791]" onClick={()=>clickFile()}>Files</div>:<div className="name mt-1 cursor-pointer hover:border-b-[2.5px]" onClick={()=>clickFile()}>Files</div>}
            </div>
        </div>
        <hr className="my-2 min-[1000px]:my-0 h-[1.2px] bg-gray-50 border-0 dark:bg-gray-300 relative ml-[72px] min-[1000px]:hidden"></hr>
        <hr className="my-2 min-[1000px]:my-0 h-[1.2px] bg-gray-50 border-0 dark:bg-gray-300 relative ml-[72px] hidden min-[1000px]:block"></hr>
    </>
  )
}

export default GeneralNavBar