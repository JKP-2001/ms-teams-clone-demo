import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Groups3Icon from '@mui/icons-material/Groups3';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HelpIcon from '@mui/icons-material/Help';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Link } from 'react-router-dom';
export default function SideBarComponent() {
  return (
    <div style={{backgroundColor:'#ebebeb'}} class='fixed top-[48px] bottom-[0px] text-center text-[10px] w-[72px] grid gap-2 -z-1'>
        <button class='pt-8 w-full'>
            <div><NotificationsActiveOutlinedIcon/></div>
            <div>Activity</div>
        </button>
        <button class=''>
            <div><ChatBubbleOutlineOutlinedIcon/></div>
            <div>Chats</div>
        </button>
        <button class=''>
            <Link to="/"><div><GroupsOutlinedIcon/></div>
            <div>Teams</div></Link>
        </button>
        
        <button class=''>
            <Link to="/assignment"><div ><AssignmentOutlinedIcon/></div></Link>
            <div className='hover:text-[#444791]'>Assignments</div>
        </button>
        <button class=''>
            <div><CalendarMonthOutlinedIcon/></div>
            <div>Calendar</div>
        </button>
        <button class=''>
            <div><CallOutlinedIcon/></div>
            <div>Calls</div>
        </button>
        <button class=''>
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
