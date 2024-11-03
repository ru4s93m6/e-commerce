export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative flex flex-col items-center gap-5">
        {/* spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gray-800" />

        {/* Loading text */}
        <div className="flex items-center gap-1 text-lg font-medium tracking-wider text-gray-800">
          Loading
          <span className="animate-bounce">.</span>
          <span className="animate-bounce delay-200">.</span>
          <span className="animate-bounce delay-300">.</span>
        </div>
      </div>
    </div>
  );
}
