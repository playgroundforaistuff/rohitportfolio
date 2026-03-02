'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const experiences = [
  {
    company: 'Tollring',
    duration: '9 yrs 8 mos · 2015 – Present',
    location: 'Noida, India',
    roles: [
      {
        title: 'Senior Technical Delivery Lead',
        period: 'Jul 2022 – Present',
        highlights: [
          'Led team of 5 across on-prem analytics and recording products',
          'Facilitated 200+ partner meetings boosting ticket resolution by 30%',
          'Increased operational efficiency by 25% through process improvements',
          'Delivered 25% improvement in Net Promoter Scores',
          'Diagnosed network issues and implemented enterprise solutions',
        ]
      },
      {
        title: 'Senior Technical Delivery Lead',
        period: 'May 2022 – May 2024',
        highlights: ['Strategic delivery oversight for hybrid cloud/on-prem products', 'Cross-functional collaboration and partner retention programs']
      },
      {
        title: 'Escalation Manager',
        period: 'Jul 2018 – May 2022',
        highlights: ['Managed critical escalations across SaaS and UCaaS platforms', 'Developed escalation frameworks reducing P1 resolution times']
      },
      {
        title: 'Technical Lead',
        period: 'Apr 2018 – Jul 2018',
        highlights: ['Provided technical leadership for delivery and support operations']
      },
      {
        title: 'Senior Technical Support',
        period: 'Jul 2016 – Apr 2018',
        highlights: ['Specialized in UCaaS and analytics product troubleshooting']
      },
    ],
    color: '#22d3ee',
  },
  {
    company: 'Remotemen Pvt. Ltd.',
    duration: '1 yr · 2015 – 2016',
    location: 'New Delhi, India',
    roles: [{
      title: 'IT Lead',
      period: 'Aug 2015 – Jul 2016',
      highlights: [
        'Optimized IT expenditures through strategic vendor agreements',
        'Oversaw deployment of advanced technologies for operational efficiency',
        'Streamlined service delivery processes',
      ]
    }],
    color: '#818cf8',
  },
  {
    company: 'RRR IT Services Pvt. Ltd.',
    duration: '8 mos · 2015',
    location: 'New Delhi, India',
    roles: [{
      title: 'Head of Information Technology',
      period: 'Jan 2015 – Aug 2015',
      highlights: [
        'Modernized workflow processes with tailored IT solutions',
        'Upgraded essential technology infrastructure',
        'Ensured uninterrupted operations across the organization',
      ]
    }],
    color: '#34d399',
  },
  {
    company: 'Parin BPO Services',
    duration: '7 mos · 2014 – 2015',
    location: 'Gurugram, India',
    roles: [{
      title: 'System Administrator',
      period: 'Jul 2014 – Jan 2015',
      highlights: [
        'Managed data center with Windows and Linux servers',
        'Delivered seamless operations for contact center agents',
        'Proactive infrastructure management ensuring business continuity',
      ]
    }],
    color: '#fb923c',
  },
  {
    company: 'iYogi',
    duration: '2 yrs 10 mos · 2009 – 2011',
    location: 'Gurugram, India',
    roles: [{
      title: 'Team Leader – Tech',
      period: 'Feb 2011 – Oct 2011',
      highlights: [
        'Led team of 21 to streamline customer support processes',
        'Reduced resolution times by 15%, increased CSAT by 25%',
        'Implemented data-driven strategies and CRM optimization',
      ]
    }],
    color: '#f472b6',
  },
  {
    company: 'Dell International Services',
    duration: '2 yrs 3 mos · 2007 – 2009',
    location: 'Mohali, India',
    roles: [{
      title: 'Technical Support Expert',
      period: 'Apr 2007 – Jun 2009',
      highlights: [
        'Resolved 95% of technical inquiries on first contact',
        'Increased customer satisfaction scores by 20%',
        'Established high standards using advanced diagnostic tools',
      ]
    }],
    color: '#60a5fa',
  },
]

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-3 h-3 rounded-full mt-1.5 shrink-0 ring-4"
          style={{ 
            backgroundColor: exp.color,
            ringColor: `${exp.color}20`,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        />
        <div className="w-px flex-1 mt-2"
          style={{ background: `linear-gradient(to bottom, ${exp.color}40, transparent)` }} />
      </div>

      {/* Card */}
      <div className="glass rounded-xl mb-6 w-full overflow-hidden hover:border-electric-400/20 transition-all duration-300">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 flex items-start justify-between gap-4"
        >
          <div>
            <div className="text-white font-display font-700 text-xl mb-1"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: exp.color }}>
              {exp.company}
            </div>
            <div className="text-white font-medium">{exp.roles[0].title}</div>
            <div className="text-slate-500 text-sm mt-1 font-mono">{exp.duration} · {exp.location}</div>
          </div>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={18} className="text-slate-500 mt-1 shrink-0" />
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-6 pb-6">
            {exp.roles.map((role, ri) => (
              <div key={ri} className={ri > 0 ? 'mt-5 pt-5 border-t border-navy-800' : ''}>
                {ri > 0 && (
                  <div className="text-slate-300 font-medium mb-1">{role.title}</div>
                )}
                <div className="text-electric-400 font-mono text-xs mb-3">{role.period}</div>
                <ul className="space-y-2">
                  {role.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-3 text-slate-400 text-sm">
                      <span style={{ color: exp.color }} className="mt-1.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-electric-400 text-sm tracking-widest">02 /</span>
          <span className="text-slate-600 text-sm tracking-widest uppercase">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-display font-700 text-white mb-16"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
        >
          A decade and a half<br />
          <span className="gradient-text">of building impact</span>
        </motion.h2>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
