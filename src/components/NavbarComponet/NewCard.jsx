import React from 'react'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import cardImage from "../../images/image2.jpeg";
import GS from "../../images/GS.jpg"

const NewCard = () => {
  return (
    
    <Link to="/grp"><div className="border-2 bg-white rounded-sm mx-2 pb-7 mb-3 justify-center items-center hover:bg-[#f5f5f5] hover:border-[1px] hover:border-black">
            <div class="text-right"><MoreHorizIcon/></div>
            <div class='scale-75 justify-center items-center flex mb-4'><img className='rounded-md' src={GS} alt="Grp displayPicture"/></div>
            <div class='text-center mb-6 mx-auto'>Grp_WHATEVER</div>
            
        </div>
        </Link>
    
  )
}

export default NewCard