import React from 'react'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CalendarTodaySharpIcon from '@mui/icons-material/CalendarTodaySharp';

const AssignmentCard = () => {
    return (
        <div className="flex min-[946px]:w-[90%]">
            <div className="image">
                <AssignmentOutlinedIcon fontSize='medium' />
            </div>

            <div className="container mx-2 m-auto m-h-12 mb-8">
                <div className="upper bg-white">
                    <div className="flex">
                        <div className="authorname pl-3 pt-1 font-semibold ml-3 text-sm">
                            Assignments
                        </div>
                        <div className="date pt-[5.55px] pl-4 font-normal text-sm ">
                            31/08/2021, 14:41
                        </div>
                    </div>
                    <div className="container pt-1 pr-[40px] md:pr-[180px] pl-3  bg-white  pb-6 ">
                        <div className="msg mt-1 pb-10 border-2 rounded-4 border-t-[#444791]  h-[140px]  pt-6 pl-6">
                            <div className="title text-2xl font-semibold">Midsem</div>
                            <div className="duedate mt-2 ml-[2px] text-xs">Due Feb 28</div>
                            <div className="assbutton pb-2 margin-auto">
                                <button class="bg-transparent h-[40px] md:h-[35px] hover:bg-[#d2d3e5] text-[#444791] font-semibold hover:text-white py-2 w-[140px] border border-gray hover:border-transparent rounded mt-[10px] md:w-[200px]">
                                    <div className="text-sm">View Assginment</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower">
                    <div className="name px-3 py-2 border-[0.3px] bg-white rounded-b-md"><ReplyOutlinedIcon fontSize='small' /> Reply</div>
                </div>
            </div>
        </div>
    )
}

export default AssignmentCard