import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import { Link } from 'react-router-dom';

export default function SecondNav() {
  return (
    <div class="z-50 grid grid-cols-2 mx-5 mb-10">
        <div class='text-left font-medium text-xl mx-5 p-1'>Teams</div>
        {/* <div class="text-right grid grid-cols-3"> */}
        <div class="flex ml-auto space-x-4">
            {/* <div><button><FilterListIcon/></button></div> */}
            <div className="p-1"><button><SettingsOutlinedIcon color='primary'/></button></div>
            <div>
              <Link to="/discover"><div className='jointeam bg-white mr-5 p-1 border-2 rounded-md font-semibold hover:shadow-xl'><button><GroupAddOutlinedIcon className="mr-2 mb-[0.6px]" fontSize='medium' color='primary'/>Join or create team</button></div></Link>
            </div>
        </div>
    </div>
  )
}
