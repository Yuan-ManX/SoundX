export default function ScrollProgress() {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: '0%' }} />
    </div>
  )
}
