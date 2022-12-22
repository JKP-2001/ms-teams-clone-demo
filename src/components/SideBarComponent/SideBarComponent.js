import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import Groups3Icon from '@mui/icons-material/Groups3';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';
export default function SideBarComponent() {
  return (
    <div style={{backgroundColor:'#616161'}} class='fixed top-[54px] bottom-[0px] text-center text-[10px] w-14 grid grid-cols-1 gap-4'>
        <button class='grid my-2 grid-cols-1'>
            <div><NotificationsIcon/></div>
            <div>Activity</div>
        </button>
        <button class='grid my-2 grid-cols-1'>
            <div><ChatIcon/></div>
            <div>Chats</div>
        </button>
        <Link to='/'><button class='grid my-2 grid-cols-1'>
            <div><Groups3Icon/></div>
            <div>Teams</div>
        </button></Link>
        
        <button class='grid my-2 grid-cols-1'>
            <div><AssignmentIcon/></div>
            <div>Assignment</div>
        </button>
        <button class='grid  my-2grid-cols-1'>
            <div><CalendarMonthIcon/></div>
            <div>Calendar</div>
        </button>
        <button class='grid my-2 grid-cols-1'>
            <div><CallIcon/></div>
            <div>Calls</div>
        </button>
        <button class='grid my-2 grid-cols-1'>
            <div><InsertDriveFileIcon/></div>
            <div>Files</div>
        </button>

        <button class='grid my-2 grid-cols-1'>
            <div><HelpIcon/></div>
            <div>Help</div>
        </button>
    </div>
  )
}
