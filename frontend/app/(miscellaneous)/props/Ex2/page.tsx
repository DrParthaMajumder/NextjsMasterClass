"use client"

import UserProfile from "./_components/UserProfile"

export default function Page() {
  function handleContact() {
    alert("Contact request sent! The user will receive an email.")
  }

  const userSkills = [
    { name: "React", level: "advanced" as const },
    { name: "TypeScript", level: "intermediate" as const },
    { name: "Node.js", level: "advanced" as const },
    { name: "Python", level: "beginner" as const }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            User Profiles
          </h1>
          <p className="text-lg text-gray-600">
            Advanced props example with objects, arrays, and optional props
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User with all props including optional ones */}
          <UserProfile
            name="Sarah Johnson"
            age={28}
            email="sarah.johnson@example.com"
            isVerified={true}
            skills={userSkills}
            avatar="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            onContact={handleContact}
          />

          {/* User without optional avatar prop */}
          <UserProfile
            name="Mike Chen"
            age={32}
            email="mike.chen@example.com"
            isVerified={false}
            skills={[
              { name: "JavaScript", level: "advanced" as const },
              { name: "Vue.js", level: "intermediate" as const },
              { name: "CSS", level: "advanced" as const }
            ]}
            onContact={handleContact}
          />

          {/* User without optional onContact prop */}
          <UserProfile
            name="Emily Davis"
            age={25}
            email="emily.davis@example.com"
            isVerified={true}
            skills={[
              { name: "HTML", level: "advanced" as const },
              { name: "CSS", level: "advanced" as const },
              { name: "JavaScript", level: "beginner" as const }
            ]}
          />
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Props Demonstrated:</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <strong>Basic types:</strong> string (name, email), number (age), boolean (isVerified)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <strong>Array of objects:</strong> skills array with name and level properties
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <strong>Optional props:</strong> avatar and onContact (marked with ?)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <strong>Conditional rendering:</strong> Contact button only shows when onContact is provided
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}