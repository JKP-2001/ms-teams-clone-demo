import React from 'react'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import Cards from '../NavbarComponet/Cards'
import SecondNav from '../NavbarComponet/SecondNav'
import Posts from './Posts'
import SideBar from './SideBar'

export default function GeneralComponent() {
  return (
    <div>
        <NavbarCoponent />
      <div class="flex">
        <div>
          <SideBarComponent />
        </div>
        <div  class="ml-[56px] mt-[54px] grid grid-cols-1">
            <div><SideBar/></div>
            <div>
              <Posts/>
            </div>
        </div>
      </div>
    </div>
  )
}
