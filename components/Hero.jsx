'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Linkedin } from 'lucide-react'

const words = ['Delivery.', 'Operations.', 'Leadership.', 'Impact.']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 70%)'
      }} />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${20 + i * 15}%`,
              background: `linear-gradient(90deg, transparent 0%, rgba(34,211,238,${0.03 + i * 0.01}) 50%, transparent 100%)`
            }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear', delay: i * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass"
        >
          <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
          <span className="text-electric-400 font-mono text-xs tracking-widest uppercase">
            Available for Senior Roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl font-800 tracking-tight mb-4 leading-none"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          <span className="text-white">Rohit</span>{' '}
          <span className="gradient-text">Kanojia</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl mb-3 tracking-wide"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Delivery & Ops Leader · Enterprise SaaS · Hybrid & On-Prem Support
        </motion.p>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-10 mb-12"
        >
          {[
            { val: '15+', label: 'Years Experience' },
            { val: '200+', label: 'Partner Meetings' },
            { val: '30%', label: 'Ticket Resolution Boost' },
            { val: '25%', label: 'NPS Improvement' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-display font-800 text-electric-400 glow-text"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                {s.val}
              </div>
              <div className="text-slate-500 text-xs tracking-wider uppercase mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #818cf8)',
              color: '#020817',
              fontFamily: 'DM Sans, sans-serif'
            }}
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </a>
          <a
            href="#experience"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium glass text-slate-300 hover:text-white hover:border-electric-400/40 transition-all duration-300"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            View My Work
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 rounded-full font-medium glass text-slate-400 hover:text-electric-400 transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 mx-auto"
          style={{ background: 'linear-gradient(to bottom, rgba(34,211,238,0.5), transparent)' }} />
      </motion.div>
    </section>
  )
}
