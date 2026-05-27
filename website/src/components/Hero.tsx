export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          SoundX
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          AI Native Digital Audio Workstation
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Create music with natural language. Experience the future of audio production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            View Demo
          </button>
        </div>
      </div>
    </section>
  )
}
