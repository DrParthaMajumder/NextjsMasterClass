/**
 * Lesson 19:
 * Demonstrates audio and video elements.
 * Tailwind adds responsive sizing and controls styling.
 */

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold">Media Elements</h2>

      <div className="w-full">
        <h3 className="text-lg font-medium mb-2">Audio Player</h3>
        <audio controls className="w-full">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium mb-2">Video Player</h3>
        <video
          controls
          className="w-full rounded-lg border"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
    </div>
  );
}
