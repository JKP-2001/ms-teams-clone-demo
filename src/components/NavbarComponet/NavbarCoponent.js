import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function NavbarCoponent() {
  return (
    <nav style={{backgroundColor: "#444791"}} class="z-[1] w-full flex fixed top-0">
    <div class='text-[#fcfcfc] my-2 mx-2 flex-auto text-left w-1'>Microsoft Teams</div>
    <div class='my-2 flex-auto text-center w-70'>
        <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
    </div>
    <div class='text-[#fcfcfc] my-2 flex-auto mx-2 text-right'><MoreHorizIcon/>  bye</div>
    </nav>
  )
}
