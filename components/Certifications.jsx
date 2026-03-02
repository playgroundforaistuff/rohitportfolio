'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award } from 'lucide-react'

const certs = [
  { name: 'CCNP (R&S)', issuer: 'Cisco', level: 'Professional', color: '#22d3ee', icon: '🔵' },
  { name: 'CCNA Voice', issuer: 'Cisco', level: 'Associate', color: '#06b6d4', icon: '🎙️' },
  { name: 'Customer Success Fundamentals', issuer: 'Gainsight', level: 'Fundamentals', color: '#818cf8', icon: '🤝' },
  { name: 'Registered Scrum Basics™', issuer: 'Scrum Inc.', level: 'Agile', color: '#34d399', icon: '⚡' },
  { name: 'Prompt Engineering for ChatGPT', issuer: 'Vanderbilt / Coursera', level: 'AI & ML', color: '#fb923c', icon: '🤖' },
  { name: 'Linux Unhatched', issuer: 'Cisco NetAcad', level: 'Systems', color: '#f472b6', icon: '🐧' },
  { name: 'Introduction to Generative AI', issuer: 'Google Cloud', level: 'AI & ML', color: '#60a5fa', icon: '✨' },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-electric-400 text-sm tracking-widest">04 /</span>
          <span className="text-slate-600 text-sm tracking-widest uppercase">Certifications</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-700 text-white mb-16"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
        >
          Credentials that<br />
          <span className="gradient-text">validate the depth</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-xl p-5 relative overflow-hidden group cursor-default"
            >
              {/* Glow accent top */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}60, transparent)` }} />

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 rounded-bl-full"
                style={{ background: cert.color }} />

              <div className="text-2xl mb-3">{cert.icon}</div>

              <div className="inline-flex px-2 py-0.5 rounded-full text-xs font-mono mb-2"
                style={{ background: `${cert.color}15`, color: cert.color }}>
                {cert.level}
              </div>

              <h3 className="text-white font-medium text-sm leading-snug mb-1 group-hover:text-electric-400 transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {cert.name}
              </h3>

              <div className="flex items-center gap-1.5 mt-2">
                <Award size={11} className="text-slate-600" />
                <span className="text-slate-500 text-xs">{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
