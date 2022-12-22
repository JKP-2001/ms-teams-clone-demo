import React from 'react'
import Cards from '../NavbarComponet/Cards'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import SecondNav from '../NavbarComponet/SecondNav'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'

export default function RenderingFirst() {
  return (
    <div>
        <NavbarCoponent />
      <div class="flex">
        <div>
          <SideBarComponent />
        </div>
        <div  class="ml-[56px] mt-[54px] grid grid-cols-1">
          <div ><SecondNav/></div>
          <div class="mx-5 my-[27px] grid grid-cols-5">
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
            <div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
