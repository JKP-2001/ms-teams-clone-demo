import React from 'react'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

const MeetEnded = () => {
    return (
        <div className="flex">
            <div className="image">
                <VideocamOutlinedIcon fontSize='small' />
            </div>

            <div className="container mx-5 shadow-sm mb-auto m-auto h-12 rounded-md">
                <div className="upper">
                    <div className="text bg-white h-10 pt-4 border-[0.2px] px-3 rounded-t-md">Meeting Ended
                    </div>
                </div>
                <div className="lower">
                    <div className="name px-3 border-[0.2px] bg-white rounded-b-md">Reply</div>
                </div>
            </div>
        </div>
    )
}

export default MeetEnded