import React from 'react'
import grp_icon from "../../images/grp_icon.jpg"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const AssignmentMaterial = () => {
    return (
        <div className="flex bg-white rounded-lg pt-1 hover:cursor-pointer hover:shadow-lg my-2 border-[3px]">
            {/* <img src={grp_icon} alt="" className='mx-2 mt-[8px] w-6 h-6' /> */}
            <PictureAsPdfIcon className='mx-2 mt-[8px]'/>
            <div className="attachementcontainer w-auto mr-20 sm:w-[300px] md:w-[500px] h-10 pt-[8px] text-sm font-semibold ">Assignment.pdf</div>
        </div>
    )
}

export default AssignmentMaterial