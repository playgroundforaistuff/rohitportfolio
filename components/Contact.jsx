'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-electric-400 text-sm tracking-widest">06 /</span>
          <span className="text-slate-600 text-sm tracking-widest uppercase">Contact</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl font-display font-800 text-white leading-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
            >
              Let's build<br />
              <span className="gradient-text">something great</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Open to senior delivery, operations, and technical leadership opportunities. 
              Let's connect and discuss how I can bring measurable impact to your organization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-2 text-slate-500 text-sm"
            >
              <MapPin size={14} className="text-electric-400" />
              <span>Noida, Uttar Pradesh, India</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <a
              href="mailto:rohit.kanojia@gmail.com"
              className="group glass rounded-xl p-6 flex items-center justify-between hover:border-electric-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(34,211,238,0.1)' }}>
                  <Mail size={20} className="text-electric-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-mono mb-1">Email</div>
                  <div className="text-white font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    rohit.kanojia@gmail.com
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-600 group-hover:text-electric-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/rohit-kan"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-xl p-6 flex items-center justify-between hover:border-electric-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(129,140,248,0.1)' }}>
                  <Linkedin size={20} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-mono mb-1">LinkedIn</div>
                  <div className="text-white font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    linkedin.com/in/rohit-kan
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-600 group-hover:text-indigo-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
            </a>

            {/* Response time note */}
            <div className="glass rounded-xl px-6 py-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-slate-400 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Typically responds within 24 hours
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <span className="text-slate-600 text-sm font-mono">
            © 2025 Rohit Kanojia · Built with Next.js & Groq
          </span>
          <div className="flex gap-6">
            {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-slate-600 hover:text-electric-400 text-sm transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
