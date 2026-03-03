'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Linkedin, Terminal } from 'lucide-react'

const stats = [
  { val: '15+', label: 'Years' },
  { val: '200+', label: 'Partner Meetings' },
  { val: '30%', label: 'Resolution Boost' },
  { val: '95%', label: 'First-Contact Fix' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(ellipse, #3fb950 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(ellipse, #d47c0f 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Terminal prompt badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-md glass font-mono text-xs"
        >
          <Terminal size={12} className="text-green" style={{ color: '#3fb950' }} />
          <span style={{ color: '#3fb950' }}>rohit@portfolio</span>
          <span style={{ color: '#8b949e' }}>:~$</span>
          <span style={{ color: '#e6edf3' }} className="cursor">whoami</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans font-700 text-5xl md:text-7xl leading-tight mb-3"
          style={{ fontWeight: 700 }}
        >
          Rohit Kanojia
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl mb-2 font-mono"
          style={{ color: '#3fb950' }}
        >
          Delivery &amp; Ops Leader
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base mb-10"
          style={{ color: '#8b949e' }}
        >
          Enterprise SaaS · UCaaS · Hybrid &amp; On-Prem Support · Partner Management
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-6 mb-10"
        >
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
              className="glass rounded-lg px-5 py-3 text-center min-w-[90px]">
              <div className="font-mono font-500 text-xl" style={{ color: i % 2 === 0 ? '#3fb950' : '#d47c0f' }}>
                {s.val}
              </div>
              <div className="text-xs mt-0.5" style={{ color: '#8b949e' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#contact"
            className="flex items-center gap-2 px-7 py-3 rounded-md font-medium transition-all duration-200 hover:opacity-90"
            style={{ background: '#3fb950', color: '#0d1117' }}>
            <Mail size={15} /> Contact Me
          </a>
          <a href="#experience"
            className="flex items-center gap-2 px-7 py-3 rounded-md font-medium glass transition-all duration-200 hover:border-green-500"
            style={{ color: '#e6edf3' }}>
            View Work <ArrowDown size={15} />
          </a>
          <a href="https://www.linkedin.com/in/rohit-kan" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-md glass transition-all duration-200"
            style={{ color: '#8b949e' }}>
            <Linkedin size={15} />
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, #0d1117, transparent)' }} />
    </section>
  )
}