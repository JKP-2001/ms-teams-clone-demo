import React from 'react'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

const MeetEnded = (props) => {
    return (
        <div className="flex min-[946px]:w-[90%]">
            <div className="image">
                <VideocamOutlinedIcon fontSize='small' />
            </div>

            <div className="container mx-2 m-auto m-h-12 rounded-md mb-8">
                <div className="upper bg-white">
                    <div className="text py-2  m-h-10 pt-[8px] border-b-[0.2px] px-3 rounded-t-md">{props.body}
                    </div>
                </div>
                <div className="lower">
                    <div className="name px-3 py-2 border-[0.2px] bg-white rounded-b-md"><ReplyOutlinedIcon fontSize='small'/> Reply</div>
                </div>
            </div>
        </div>
    )
}

export default MeetEnded