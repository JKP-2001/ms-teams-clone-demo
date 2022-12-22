import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import cardImage from "../../images/image2.jpeg";
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <Link to="/grp">
    <button class="truncate border-2 border-grey mx-2 my-2 grid grid-cols-1">
        <div class="text-right"><MoreHorizIcon/></div>
        <div class='scale-50 text-center m-auto'><img src={cardImage} alt="Grp displayPicture"/></div>
        <div class='text-center mb-6 mx-auto'>Grp_WHATEVER</div>
    </button>
    </Link>
  )
}
