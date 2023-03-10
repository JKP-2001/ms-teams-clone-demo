import React, { useContext } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import GS from "../../images/GS.jpg"
import { Link } from 'react-router-dom';
import GrpContext from '../../Context/GrpContext/GrpContext';

const SideBar = () => {
  const {grpState,setgrpState} = useContext(GrpContext);

  const clickAssign = ()=>{
    setgrpState("assignment");
    window.scrollTo(0, 0);
  }

  const clickGeneral = ()=>{
    setgrpState("general");
  }

  return (
    <div class="ml-[72px] mt-[48px] grid-cols-1 w-[300px] h-full fixed z-30 bg-[#f0f0f0] shadow-2xl  hidden min-[946px]:block">
      <div className="sidecompo mt-5 text-sm font-normal">
        <div className="back my-6 hover:cursor-pointer ml-[20px] text-[#616161]">
          <ChevronLeftIcon fontSize='small' /><Link to="/"> All Teams</Link>
        </div>
        <div className="icon ml-[20px] sclae-50">
          <img src={GS} alt="" className='rounded-md w-20 h-20' />
        </div>
        <div className="grp_name pt-7 pl-[20px] text-xl font-semibold">
        Grp_ME221 Section A
        </div>
        <div className="gap pt-7">
        </div>
        <div className="icon">
          <div className="text py-[5px] text-[#616161] hover:bg-white hover:cursor-pointer hover:rounded-md hover:text-black pl-[25px]">Home Page</div>
          <div className="text py-[5px] text-[#616161] hover:bg-white hover:cursor-pointer hover:rounded-md  hover:text-black pl-[25px]">Class Notebook</div>
          {grpState!=="assignment"?<div className="text py-[5px] text-[#616161] hover:bg-white hover:cursor-pointer hover:rounded-md hover:text-black pl-[25px]" onClick={()=>clickAssign()}>Assignments</div>:<div className="text py-[5px] text-[#616161] bg-white hover:cursor-pointer hover:rounded-md hover:text-black pl-[25px]" onClick={()=>clickAssign()}>Assignments</div>}
          <div className="text py-[5px] text-[#616161] hover:bg-white hover:cursor-pointer hover:rounded-md hover:text-black pl-[25px]">Grades</div>
        </div>
        <div className="gap pt-5">
          <hr className="my-2 md:my-0 h-[1.2px] ml-[20px] mr-[20px] bg-gray-50 border-0 dark:bg-gray-300"></hr>
        </div>
        <div className="grp_name pt-3 pl-[25px] text-sm font-semibold">
          Channels
        </div>
        {grpState!=="general"?<div className="gap pt-3">
          <div className="text py-[5px] text-[#616161] hover:bg-white hover:cursor-pointer hover:rounded-md pl-[25px]" onClick={()=>clickGeneral()}>General</div>
        </div>:<div className="gap pt-3">
          <div className="text py-[5px] text-[#616161] bg-white hover:cursor-pointer hover:rounded-md pl-[25px]" onClick={()=>clickGeneral()}>General</div>
        </div>}
      </div>
    </div>
  )
}

export default SideBar