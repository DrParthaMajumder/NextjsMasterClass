/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Advanced Animations & Keyframes
  Classes Covered: animate, animation, keyframes, custom animations
  
  Key Concepts:
  - Built-in Animations: animate-spin, animate-ping, animate-pulse, animate-bounce
  - Animation Properties: animation-{name}, animation-{duration}, animation-{delay}
  - Animation Fill: animate-fill-forwards, animate-fill-backwards
  - Animation Iteration: animate-infinite, animate-once
  - Animation Direction: animate-normal, animate-reverse, animate-alternate
  
  Duration Classes:
  - animate-duration-75, animate-duration-100, animate-duration-200, animate-duration-300
  - animate-duration-500, animate-duration-700, animate-duration-1000
  
  Delay Classes:
  - animate-delay-75, animate-delay-100, animate-delay-200, animate-delay-300
  - animate-delay-500, animate-delay-700, animate-delay-1000
  
  Usage Tips:
  - Use built-in animations for common effects (loading, notifications)
  - Combine with transitions for smooth state changes
  - Consider performance with complex animations
  - Test animations on mobile devices for performance
  - Use prefers-reduced-motion for accessibility
*/

export default function AnimationBasics() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Advanced Animations Example
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
          Built-in Animations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full mb-3 border-4 border-t-transparent border-blue-700 animate-spin animate-duration-1000"></div>
            <span className="text-sm text-gray-600">animate-spin</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500 rounded-full animate-ping mb-3"></div>
            <span className="text-sm text-gray-600">animate-ping</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full animate-pulse mb-3"></div>
            <span className="text-sm text-gray-600">animate-pulse</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-500 rounded-full animate-bounce mb-3"></div>
            <span className="text-sm text-gray-600">animate-bounce</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
          Animation Combinations
        </h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-linear-to-r from-blue-400 to-purple-600 rounded-lg animate-spin animate-duration-1000"></div>
            <span className="text-gray-600">Slow spin (1s)</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-linear-to-r from-green-400 to-blue-500 rounded-lg animate-pulse animate-duration-500"></div>
            <span className="text-gray-600">Fast pulse (0.5s)</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-linear-to-r from-red-400 to-pink-500 rounded-lg animate-bounce animate-delay-200"></div>
            <span className="text-gray-600">Delayed bounce (0.2s)</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-emerald-600 rounded-full animate-ping animate-delay-200" />
            <span className="text-gray-600">Ping (0.2s delay)</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
          Loading Examples
        </h2>

        <div className="space-y-6">
          <div className="flex justify-center space-x-2">
            <div
              className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>

          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
            <div
              className="w-3 h-3 bg-purple-500 rounded-full animate-ping"
              style={{ animationDelay: "200ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-500 rounded-full animate-ping"
              style={{ animationDelay: "400ms" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
