import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1A1624] text-white rounded-sm">
      {/* Banner Section */}
      <div
        className="relative h-40 md:h-48 lg:h-56 bg-cover bg-center rounded-t-sm"
        style={{
          backgroundImage: "url('/images/spiderman.jpg')",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(26,22,36,0.4)" // A dark overlay
        }}
      />



      {/* Profile Picture & Basic Info */}
      <div className="container mx-auto px-4 -mt-16 flex flex-col items-center rounded-sm">
        {/* Profile Picture (floats over banner) */}

        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <Image
            src="/images/me.jpg"  // Use your actual filename
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>


        {/* Name & Bio */}
        <div className="mt-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Loïc Rutabana</h1>
          <p className="mt-1 opacity-80">
            A short bio or tagline goes here.
            {/* e.g. "Software Developer & Fitness Enthusiast" */}
          </p>
          {/* Edit Profile Button (optional) */}
          <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-sm font-semibold rounded transition-shadow shadow-md hover:shadow-lg">
            Edit Profile
          </button>

        </div>
      </div>

      {/* Main Sections */}
      <div className="container mx-auto px-4 py-8 space-y-4">
        {/* Daily Dashboard */}
        <section className="bg-[#2A2336] rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Daily Dashboard</h2>
          <p className="text-sm opacity-90">
            Keep track of daily workouts, calorie intake, or any quick stats you’d like to highlight.
          </p>
        </section>

        {/* Goals & Achievements */}
        <section className="bg-[#2A2336] rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Goals & Achievements</h2>
          <p className="text-sm opacity-90">
            Set and track milestones for fitness, projects, or personal development. Show badges or progress bars.
          </p>
        </section>

        {/* Personal Journal */}
        <section className="bg-[#2A2336] rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Personal Journal</h2>
          <p className="text-sm opacity-90">
            Reflect on daily experiences. Toggle entries as public or private.
          </p>
        </section>

        {/* Project Timeline */}
        <section className="bg-[#2A2336] rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Project Timeline</h2>
          <p className="text-sm opacity-90">
            Highlight past achievements and upcoming projects in a visual timeline.
          </p>
        </section>
      </div>
    </div>
  );
}
