import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function SecondNav() {
  return (
    <div class="w-[1423px] z-[1] fixed grid grid-cols-2 mx-5">
        <div class='text-left mx-2'>Teams</div>
        {/* <div class="text-right grid grid-cols-3"> */}
        <div class="flex ml-auto">
            <div><button><FilterListIcon/></button></div>
            <div><button><SettingsIcon/></button></div>
            <div><button><GroupAddIcon/> Join or create team</button></div>
        </div>
    </div>
  )
}
