import React from 'react'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Item = (props) => {
    return (
        <div className="item flex ml-2 hover:cursor-pointer">
            <div className="text py-2  m-h-10 pt-[8px] border-b-[0.2px] px-3 rounded-t-md"><PictureAsPdfIcon /></div>
            <div className="item_name py-2">{props.body}.{props.type}</div>
        </div>

    )
}

export default Item