import React from 'react'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SecondNav from '../NavbarComponet/SecondNav'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import create_icon from "../../images/create_icon.svg"
import join_code from "../../images/join_code.svg"
import team_mem1 from "../../images/team_mem1.svg"
import team_mem2 from "../../images/team_mem2.svg"
import team_mem3 from "../../images/team_mem3.svg"
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';

const JoinOrCreate = () => {
    return (
        <div>
            <NavbarCoponent />
            <div class="flex">
                <div>
                    <SideBarComponent />
                </div>
                <div class="ml-[80px] sm:ml-[100px] mt-[70px] grid-cols-1 mb-2">
                    <span className='text-[#6064c9] font-semibold text-base font-["Segoe UI Web", "Segoe UI", "Segoe WP", "Segoe UI Emoji", Tahoma, Arial, sans-serif]'><Link to="/" ><ChevronLeftIcon fontSize='large' className="mb-[2px]" /> <span>Back</span></Link></span>
                </div>
            </div>
            <div className="container ml-[105px]">
                <div className="name  text-2xl">
                    Join or create a team
                </div>
                <div className="flex flex-wrap">
                    <div className="flex pr-3">
                        <div className="createteambox border-2 mt-4 bg-white  w-[268px] h-[260px] rounded-[0.4rem] hover:bg-[#f5f5f5] hover:border-[#f5f5f5]">
                            <div className=" icon ml-[99px] mt-5">
                                <img className='w-[64px] h-[64px] rounded-md' src={create_icon} alt="" />
                            </div>
                            <div className="title ml-[75px] pt-2 font-semibold text-lg">
                                Create a Team
                            </div>
                            <div className="flex threememicon space-x-2 ml-[75px] pt-4">
                                <div className="icon1">
                                    <img className=' rounded-full w-[32px] h-[32px] ' src={team_mem1} alt="" />
                                </div>
                                <div className="icon2">
                                    <img className=' rounded-full w-[32px] h-[32px]' src={team_mem2} alt="" />
                                </div>
                                <div className="icon3">
                                    <img className=' rounded-full w-[32px] h-[32px]' src={team_mem3} alt="" />
                                </div>

                            </div>
                            <div className="createbutton py-6 mx-14 text-sm">
                                <button class="bg-[#5b5fc7] hover:bg-blue-700 text-white font-semibold py-1  border border-blue-700 rounded w-[144.72px] h-[32px]">
                                    <GroupAddOutlinedIcon fontSize='medium' className='pb-1 pr-2' /> Create team
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex pr-3">
                        <div className="createteambox border-2 mt-4 bg-white w-[268px] h-[260px] rounded-[0.4rem] ">
                            <div className=" icon ml-[99px] mt-5">
                                <img className='w-[64px] h-[64px] rounded-md' src={join_code} alt="" />
                            </div>
                            <div className="title ml-[40px] pt-2 font-semibold text-lg">
                                Join a team with a code
                            </div>
                            <div className="codespace ml-[43px] mr-[80px] pt-[10px]">
                                <input maxLength={10} placeholder="  Enter Code" className='border-0 w-[180px] pr-[20px] bg-[#f5f5f5] h-[34px] border-white'></input>
                            </div>
                            <div className="createbutton pt-6 mx-14 text-sm">
                                <button class="bg-[#5b5fc7] hover:bg-blue-700 text-white font-semibold py-1  border border-blue-700 rounded w-[144.72px] h-[32px]">
                                    <WorkspacesOutlinedIcon fontSize='medium' className='pb-1 pr-2' /> Join team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinOrCreate