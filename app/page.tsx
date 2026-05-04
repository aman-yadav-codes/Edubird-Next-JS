import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-[#1f1f1f] text-white px-4 py-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="text-red-500 font-bold text-xl">🐦</div>
          <div className="text-sm">Varanasi, Uttar Pradesh</div>
        </div>

        {/* Search */}
        <div className="flex-1 mx-6 hidden md:block">
          <input
            type="text"
            placeholder='Search by "Skill"'
            className="w-full px-4 py-2 rounded-full text-black"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm">
          <button className="text-red-400">Launch CRM</button>
          <button className="text-red-400">List Now</button>
          <button>Login</button>
        </div>
      </header>

      {/* NAV */}
      <nav className="bg-gray-200 px-4 py-2 text-sm overflow-x-auto">
        <div className="flex gap-4 whitespace-nowrap">
          <span>Feeds</span>
          <span>Courses</span>
          <span>College</span>
          <span>School</span>
          <span>Coaching</span>
          <span>Teachers</span>
          <span>Exams</span>
          <span>Hostel</span>
          <span>Library</span>
          <span>Jobs</span>
          <span>Product</span>
          <span>Service</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-red-500 text-5xl">🐦</span> Edubird
          </h1>

          <p className="text-lg text-gray-700 mb-2">
            Everything for students — in one platform
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Learn Easy. Buy Tools. Get Job. Become Pro.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="border-l-4 border-green-500 pl-2 text-sm">
              Right Guidance
            </span>
            <span className="border-l-4 border-green-500 pl-2 text-sm">
              Right Skills
            </span>
            <span className="border-l-4 border-green-500 pl-2 text-sm">
              Right Career Path
            </span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            From learning to earning — we've got your journey covered.
            Edubird is an all-in-one educational ecosystem — from your first
            day of learning to your first day on the job.
          </p>
        </div>

        {/* RIGHT (Illustration placeholder) */}
        <div className="flex justify-center items-center w-full lg:w-[500px] h-[300px] bg-white rounded-xl shadow">
          <span className="text-gray-400">Illustration Area</span>
        </div>
      </section>
    </div>
  );
};

export default Page;