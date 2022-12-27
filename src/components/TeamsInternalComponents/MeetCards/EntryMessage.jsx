import React from 'react'
import view_student from "../../../images/view-student-roster.svg"

const EntryMessage = () => {
  return (
    <div className="container ml-[82px] mt-[200px] text-center justify-center min-[946px]:ml-[370px] min-[946px]:w-[70%] mb-2" >
        <div className="text1 font-semibold text-2xl text-[#424242] mb-2 ml-auto mr-auto px-3">
            Welcome to Grp_ME221 Section A
        </div>
        <div className="text2 text-xl text-[#424242] ml-auto mr-auto px-5">
        Try @mentioning the class name or student names to start a conversation.
        </div>
        <div className="text2 text-xl text-[#424242] w-[25%] h-[25%] ml-auto mr-auto py-6">
            <img src={view_student} alt="" />
        </div>
    </div>
  )
}

export default EntryMessage