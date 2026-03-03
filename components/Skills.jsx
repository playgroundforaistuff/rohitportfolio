'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Leadership & Strategy',
    color: '#22d3ee',
    skills: [
      { name: 'Stakeholder Management', level: 95 },
      { name: 'Cross-functional Leadership', level: 92 },
      { name: 'Partner Retention & Engagement', level: 90 },
      { name: 'Regulatory Compliance', level: 88 },
    ]
  },
  {
    category: 'Technical Expertise',
    color: '#818cf8',
    skills: [
      { name: 'SaaS / Cloud / On-Prem Delivery', level: 95 },
      { name: 'UCaaS Troubleshooting', level: 90 },
      { name: 'SQL & Data Analysis', level: 85 },
      { name: 'Network Diagnostics', level: 82 },
    ]
  },
  {
    category: 'Operations & Support',
    color: '#34d399',
    skills: [
      { name: 'Enterprise Solution Implementation', level: 93 },
      { name: 'SLA & Escalation Management', level: 95 },
      { name: 'CRM Optimization', level: 85 },
      { name: 'Process Improvement', level: 90 },
    ]
  },
]

function SkillBar({ skill, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {skill.name}
        </span>
        <span className="text-xs font-mono" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-navy-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* bg accent */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(129,140,248,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-electric-400 text-sm tracking-widest">03 /</span>
          <span className="text-slate-600 text-sm tracking-widest uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-700 text-white mb-16"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
        >
          Core competencies<br />
          <span className="gradient-text">across every layer</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + gi * 0.15 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 rounded-full" style={{ background: group.color }} />
                <h3 className="font-display font-600 text-white"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
                  {group.category}
                </h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar key={si} skill={skill} color={group.color} index={si} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {['Cisco UCaaS', 'Microsoft Teams', 'SQL Server', 'Linux', 'Windows Server', 'Zoho One CRM', 'ITIL', 'Scrum', 'Azure', 'Network Protocols', 'VoIP', 'Data Center Mgmt'].map((tag) => (
            <span key={tag}
              className="px-4 py-2 rounded-full text-xs font-mono text-slate-400 glass hover:text-electric-400 hover:border-electric-400/30 transition-all duration-200 cursor-default">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
