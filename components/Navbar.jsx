'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Skills', 'Certifications', 'AI Assistant', 'Contact']

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
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className={`mx-4 md:mx-auto md:max-w-5xl rounded-2xl px-6 transition-all duration-300 ${
        scrolled ? 'glass' : ''
      }`}>
        <div className="flex items-center justify-between h-12">
          <a href="#home" className="font-display font-700 text-white text-lg"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            RK<span className="text-electric-400">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {link}
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 glass rounded-2xl p-4"
          >
            {links.map((link) => (
              <a key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-400 hover:text-white text-sm transition-colors border-b border-navy-800 last:border-0"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
