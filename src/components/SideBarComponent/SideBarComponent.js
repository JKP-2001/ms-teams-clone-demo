import React, { useEffect, useState } from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Link, useLocation } from 'react-router-dom';
export default function SideBarComponent() {
    const location = useLocation();
    const [currloc,setCurrloc] = useState("");

    const getCurLoc = ()=>{
        setCurrloc(location.pathname);
    }
    useEffect(() => {
        // Update the document title using the browser API
        getCurLoc();
      });


  return (
    
    <div style={{backgroundColor:'#ebebeb'}} class='fixed top-[48px] bottom-[0px] text-center text-[10px] w-[72px] grid gap-2 -z-1'>
        <button class='mt-8 w-full hover:bg-white'>
            <div><NotificationsActiveOutlinedIcon/></div>
            <div>Activity</div>
        </button>
        <button class='hover:bg-white'>
            <div><ChatBubbleOutlineOutlinedIcon/></div>
            <div>Chats</div>
        </button>
        {currloc.includes("home") || currloc.includes("grp") ? <button class='bg-white'>
            <Link to="/home"><div><GroupsOutlinedIcon/></div>
            <div>Teams</div></Link>
        </button>:<button class='hover:bg-white'>
            <Link to="/home"><div><GroupsOutlinedIcon/></div>
            <div>Teams</div></Link>
        </button>}
        
        {currloc.includes("assignment")?<button class='bg-white'>
            <Link to="/assignment"><div ><AssignmentOutlinedIcon/></div></Link>
            <div className='text-[#444791]'>Assignments</div>
        </button>:<button class='hover:bg-white'>
            <Link to="/assignment"><div ><AssignmentOutlinedIcon/></div></Link>
            <div className='hover:text-[#444791]'>Assignments</div>
        </button>   }

        <button class='hover:bg-white'>
            <div><CalendarMonthOutlinedIcon/></div>
            <div>Calendar</div>
        </button>
        <button class='hover:bg-white'>
            <div><CallOutlinedIcon/></div>
            <div>Calls</div>
        </button>
        <button class='hover:bg-white'>
            <div><InsertDriveFileOutlinedIcon/></div>
            <div>Files</div>
        </button>

        <button class=''>
            <div><HelpOutlineOutlinedIcon/></div>
            <div>Help</div>
        </button>
    </div>
  )
}
