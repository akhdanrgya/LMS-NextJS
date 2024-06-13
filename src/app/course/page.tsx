const Course = () => {
    return(
        <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-mono mb-8">
            Courses Learning Management System (LMS)
          </h1>
  
          <div className="gap-8 flex">
            <a className="font-mono hover:text-blue-800 cursor-pointer text-lg mb-4">My Courses</a>
            <a className="font-mono hover:text-blue-800 cursor-pointer  text-lg mb-4">All Courses</a>
          </div>

          <div className="bg-gray-100 p-4 mb-8">
            <p>Ini nanti isinya card dari beberapa course</p>
          </div>

        </div>
      </main>
    )
}

export default Course