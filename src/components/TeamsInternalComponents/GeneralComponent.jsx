import React, { useState } from 'react'
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
import AssignmentCard from './MeetCards/AssignmentCard'
import FileInMeetCard from './MeetCards/FileInMeetCard'
import GoToTop from '../GoToTop'
import GoToBottom from '../GoToBottom'
import GeneralNavBar from './MeetCards/GeneralNavBar'
import GeneralContent from './MeetCards/GeneralContent'

export default function GeneralComponent() {

  const[topNav, setToNav] = useState(<GeneralNavBar />);
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
          <EntryMessage />
        </div>
        <GeneralContent />
      </div>
    </>
  )
}
