import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
            <span className="text-xl font-bold">SoundX</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-colors">{t('nav.home')}</a>
            <a href="#features" className="hover:text-purple-400 transition-colors">{t('nav.features')}</a>
            <a href="#demo" className="hover:text-purple-400 transition-colors">{t('nav.demo')}</a>
            <a href="#docs" className="hover:text-purple-400 transition-colors">{t('nav.docs')}</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">{t('nav.github')}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
