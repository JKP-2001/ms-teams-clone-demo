import React, { useContext, useState } from 'react'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import Cards from '../NavbarComponet/Cards'
import SecondNav from '../NavbarComponet/SecondNav'
import Posts from './Posts'
import SideBar from './SideBar'
import GS from "../../images/GS.jpg"
import MeetEnded from './MeetCards/MeetEnded'
import EntryMessage from './MeetCards/EntryMessage'
import GeneralMessage from './MeetCards/GeneralMessage'
import MeetingCard from './MeetCards/MeetingCard'
import FileInMeetCard from './MeetCards/FileInMeetCard'
import GoToTop from '../GoToTop'
import GoToBottom from '../GoToBottom'
import GeneralNavBar from './MeetCards/GeneralNavBar'
import GeneralContent from './MeetCards/GeneralContent'
import GrpContext from '../../Context/GrpContext/GrpContext'
import AssignmentCard from './AssignmentCard'

export default function GeneralComponent() {

  const [topNav, setToNav] = useState(<GeneralNavBar />);
  const { grpState } = useContext(GrpContext);
  return (
    <>
      <div>
        <NavbarCoponent />
        <div class="flex">
          <div>
            <SideBarComponent />
          </div>
          {topNav}
        </div>
        <div className="entrymessage ">
          {grpState === "general" ? <EntryMessage /> : <div className='container pl-[100px] pt-[150px]  min-[946px]:pl-[400px] mb-2 pr-10 w-screen'>
          
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
            
          
          </div>}
        </div>
        {grpState === "general" ? <GeneralContent /> : <div className="cards ml-[150px] w-[70%] min-[946px]:ml-[450px] mb-4"><h1></h1></div>}
      </div>
    </>
  )
}
