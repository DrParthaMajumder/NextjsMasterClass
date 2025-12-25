/*
  TAILWIND CSS LEARNING PATH - SMALL EXAMPLES
  
  Goal: Learn Tailwind CSS one concept at a time
  Approach: Each file focuses on specific classes with clear examples
  
  Current File: Interactive & Transitions
  Classes Covered: hover, focus, transitions, transforms
  
  Key Concepts:
  - State Variants: hover:, focus:, active:, disabled:, group-hover:
  - Transitions: transition-{properties}, duration-{timing}, ease-{type}
  - Transforms: scale, rotate, translate, skew
  - Animation: animate-{name}
  
  Transition Properties:
  - transition-all, transition-colors, transition-opacity, transition-shadow
  - transition-transform, transition-none
  
  Duration Classes:
  - duration-75, duration-100, duration-150, duration-200, duration-300, duration-500, duration-700, duration-1000
  
  Ease Functions:
  - ease-linear, ease-in, ease-out, ease-in-out
  
  Transform Classes:
  - Scale: scale-{amount}, scale-x-{amount}, scale-y-{amount}
  - Rotate: rotate-{deg}, rotate-x-{deg}, rotate-y-{deg}
  - Translate: translate-x-{amount}, translate-y-{amount}
  - Skew: skew-x-{deg}, skew-y-{deg}
  
  Focus States:
  - focus:outline-none, focus:ring-{width}, focus:ring-{color}
  - focus:border-{color}, focus:ring-offset-{width}
  
  Usage Tips:
  - Always add transition classes for smooth animations
  - Use group-hover for parent-child hover effects
  - Consider accessibility with focus states
  - Test animations on lower-end devices for performance
  - Use transform for better performance than position changes
*/

export default function InteractiveBasics() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Interactive & Transitions Example
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Hover Effects
        </h2>

        <div className="space-y-4">
          <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
            Hover to change color
          </button>

          <button className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transform hover:scale-125 transition-all">
            Hover to scale up
          </button>

          <button className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 hover:shadow-2xl transition-all">
            Hover to add shadow
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Focus Effects
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Focus me"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            type="email"
            placeholder="Email focus effect"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Transitions & Transforms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600 transition-colors cursor-pointer">
            transition-colors
          </div>

          <div className="bg-green-500 text-white p-4 rounded-lg text-center hover:rotate-4 transition-transform cursor-pointer">
            rotate on hover
          </div>

          <div className="bg-purple-500 text-white p-4 rounded-lg text-center hover:translate-x-2 transition-transform cursor-pointer">
            slide right
          </div>

          <div className="bg-red-500 text-white p-4 rounded-lg text-center hover:translate-y-2 transition-transform cursor-pointer">
            slide down
          </div>
        </div>
      </div>
    </div>
  );
}
