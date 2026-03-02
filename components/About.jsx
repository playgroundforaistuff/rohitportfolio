'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Zap, Users, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: Users, label: 'Team Leadership', desc: 'Led cross-functional teams driving operational excellence across SaaS and On-Prem delivery' },
  { icon: Zap, label: 'Technical Depth', desc: 'Deep expertise in UCaaS, SQL diagnostics, cloud analytics, and network infrastructure' },
  { icon: Shield, label: 'Compliance & SLA', desc: 'Champion of regulatory compliance and SLA adherence across enterprise environments' },
  { icon: TrendingUp, label: 'Growth Mindset', desc: 'Continuous improvement methodology yielding measurable NPS and efficiency gains' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-electric-400 text-sm tracking-widest">01 /</span>
          <span className="text-slate-600 text-sm tracking-widest uppercase">About</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-700 text-white leading-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
            >
              15 years of turning<br />
              <span className="gradient-text">complexity into clarity</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              As a Technical Leader at Tollring, I bridge the gap between complex enterprise technology 
              and measurable business outcomes. My career spans the full spectrum of IT operations — 
              from hands-on system administration to strategic delivery leadership.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              I specialize in managing on-prem, hybrid, and cloud analytics with a focus on 
              partner engagement, cross-functional collaboration, and SLA-driven delivery. 
              My mission is to empower teams through strategic leadership and innovative solutions 
              that foster sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-2"
            >
              {[
                { label: 'Location', val: 'Noida, Uttar Pradesh, India' },
                { label: 'Current Role', val: 'Senior Technical Delivery Lead · Tollring' },
                { label: 'Email', val: 'rohit.kanojia@gmail.com' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 text-sm">
                  <span className="text-electric-400 font-mono w-24 shrink-0">{item.label}</span>
                  <span className="text-slate-300">{item.val}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="glass rounded-xl p-5 flex gap-4 hover:border-electric-400/30 transition-all duration-300 group"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(34,211,238,0.1)' }}>
                  <item.icon size={18} className="text-electric-400" />
                </div>
                <div>
                  <div className="text-white font-medium mb-1 group-hover:text-electric-400 transition-colors"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.label}
                  </div>
                  <div className="text-slate-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
