import React from 'react'
import Cards from '../NavbarComponet/Cards'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import SecondNav from '../NavbarComponet/SecondNav'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'

export default function RenderingFirst() {
  return (
    <div>
        <NavbarCoponent />
      <div class="flex ">
        <div>
          <SideBarComponent />
        </div>
        <div  class="ml-[90px] sm:ml-[80px] mt-[54px] grid grid-cols-1 ">
          {/* <div ><SecondNav/></div> */}
          <div class=" justify-center items-center md:my-[27px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-3">
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
