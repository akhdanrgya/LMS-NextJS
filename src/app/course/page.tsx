"use client"

import { useState } from "react"
import MyCourse from "./myCourse"
import AllCourse from "./allCourse"


const Course = () => {
  const [activeTab, setActiveTab] = useState("my")
  
    return(
        <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-mono mb-8">
            Courses Learning Management System (LMS)
          </h1>
  
          <div className="gap-8 flex">
          <button 
            className={`font-mono hover:text-blue-800 cursor-pointer text-lg mb-4 ${activeTab === 'my' ? 'text-blue-800' : ''}`}
            onClick={() => setActiveTab('my')}
          >
            My Courses
          </button>
          <button 
            className={`font-mono hover:text-blue-800 cursor-pointer text-lg mb-4 ${activeTab === 'all' ? 'text-blue-800' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Courses
          </button>
        </div>

          <div>
            {activeTab == 'my' ? <MyCourse/> : <AllCourse/>}
          </div>

        </div>
      </main>
    )
}

export default Course