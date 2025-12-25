"use client"

type Skill = {
  name: string
  level: "beginner" | "intermediate" | "advanced"
}

type UserProfileProps = {
  name: string
  age: number
  email: string
  isVerified: boolean
  skills: Skill[]
  avatar?: string  // Optional prop
  onContact?: () => void  // Optional function prop
}

export default function UserProfile({ 
  name, 
  age, 
  email, 
  isVerified, 
  skills, 
  avatar, 
  onContact 
}: UserProfileProps) {
  const getLevelColor = (level: Skill["level"]) => {
    switch (level) {
      case "beginner": return "bg-green-100 text-green-800"
      case "intermediate": return "bg-yellow-100 text-yellow-800"
      case "advanced": return "bg-red-100 text-red-800"
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="bg-linear-to-r from-indigo-500 to-purple-600 p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-indigo-600">
                {name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div className="text-white">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">{name}</h2>
              {isVerified && (
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="text-indigo-100">Age: {age}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-1">Email</p>
          <p className="text-gray-900 font-medium">{email}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}
              >
                {skill.name} ({skill.level})
              </span>
            ))}
          </div>
        </div>

        {onContact && (
          <button
            onClick={onContact}
            className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-colors duration-200"
          >
            Contact User
          </button>
        )}
      </div>
    </div>
  )
}
