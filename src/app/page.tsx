
import { currentUser } from "@clerk/nextjs/server";

const Home = async () => {

  const user = await currentUser()

  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-mono mb-8">
          WELCOME BACK {user?.username?.toUpperCase()}
        </h1>

        <div className="bg-gray-100 p-4 mb-8">
          <h2 className="font-mono text-xl mb-4">Latest announcements</h2>
          <p>belum ada</p>
        </div>

        <div className="bg-gray-100 p-4 mb-8">
          <h2 className="font-mono text-xl mb-4">Timeline</h2>
          <p>belum ada juga</p>
        </div>

        <div className="bg-gray-100 p-4 mb-8">
          <h2 className="font-mono text-xl mb-4">Course</h2>
          <p>belum ada juga</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
