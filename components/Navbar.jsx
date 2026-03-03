'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

const links = ['About','Experience','Skills','Certifications','AI Assistant','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className={`mx-4 md:mx-auto md:max-w-5xl rounded-lg px-6 transition-all duration-300 ${scrolled ? 'glass' : ''}`}>
        <div className="flex items-center justify-between h-12">
          <a href="#home" className="flex items-center gap-2 font-mono font-500 text-base" style={{ color: '#3fb950' }}>
            <Terminal size={14} />
            <span style={{ color: '#e6edf3' }}>rk</span>
            <span style={{ color: '#3fb950' }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm transition-colors duration-200 hover:text-green-400 font-mono"
                style={{ color: '#8b949e', fontFamily: 'IBM Plex Mono, monospace' }}>
                {link}
              </a>
            ))}
          </div>
          <button className="md:hidden transition-colors" style={{ color: '#8b949e' }}
            onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} className="md:hidden mx-4 mt-2 glass rounded-lg p-4">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-mono border-b border-bg3 last:border-0 transition-colors hover:text-green-400"
                style={{ color: '#8b949e', fontFamily: 'IBM Plex Mono, monospace' }}>
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}