export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Natural Language', desc: 'Create music with simple text commands' },
            { title: 'AI Mixing', desc: 'Intelligent audio mastering powered by AI' },
            { title: 'Multi-modal', desc: 'Generate audio from text, image, and more' },
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
