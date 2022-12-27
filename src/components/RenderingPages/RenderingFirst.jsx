import React from 'react'
import NewCard from '../NavbarComponet/NewCard'
import SideBarComponent from '../SideBarComponent/SideBarComponent'
import SecondNav from '../NavbarComponet/SecondNav'
import NavbarCoponent from '../NavbarComponet/NavbarCoponent'
import GoToTop from '../GoToTop'

export default function RenderingFirst() {
    return (
        <div>
            <NavbarCoponent />

            <div>
                <SideBarComponent />
            </div>
            <div class="ml-[90px] sm:ml-[100px] mt-[60px] grid-cols-1 ">
                <div ><SecondNav /></div>
                <div class=" md:my-[27px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-3">
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                    <NewCard />
                </div>
            </div>

            <GoToTop />
        </div>
    )
}
