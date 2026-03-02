'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User, Sparkles, RotateCcw } from 'lucide-react'
import { useInView } from 'framer-motion'

const suggestions = [
  "What's Rohit's experience with SaaS delivery?",
  "Tell me about his key achievements",
  "What certifications does Rohit hold?",
  "How has Rohit improved NPS scores?",
]

export default function AiChat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Rohit's AI assistant. Ask me anything about his experience, skills, or achievements — I'm here to help you learn more about him.",
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async (text) => {
    const msg = text || input.trim()
    if (!msg || loading) return
    setInput('')
    setLoading(true)

    const newMessages = [...messages, { role: 'user', content: msg }]
    setMessages(newMessages)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply || data.error || 'Something went wrong. Please try again.'
      }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Connection error. Please try again in a moment.'
      }])
    }
    setLoading(false)
  }

  const reset = () => {
    setMessages([{
      role: 'assistant',
      content: "Hi! I'm Rohit's AI assistant. Ask me anything about his experience, skills, or achievements."
    }])
  }

  return (
    <section id="ai-assistant" className="py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(34,211,238,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-electric-400 text-sm tracking-widest">05 /</span>
          <span className="text-slate-600 text-sm tracking-widest uppercase">AI Assistant</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-display font-700 text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            Ask anything about<br />
            <span className="gradient-text">Rohit's profile</span>
          </h2>
          <p className="text-slate-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Powered by Groq · llama-3.3-70b · Instant responses
          </p>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden glow"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-electric-400/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}>
                <Sparkles size={14} className="text-navy-950" />
              </div>
              <div>
                <div className="text-white text-sm font-medium">Rohit's AI Assistant</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-mono">Online</span>
                </div>
              </div>
            </div>
            <button onClick={reset} className="text-slate-600 hover:text-slate-400 transition-colors">
              <RotateCcw size={14} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto chat-scroll p-6 space-y-4">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    msg.role === 'user' ? 'bg-electric-500/20' : ''
                  }`}
                    style={msg.role === 'assistant' ? {
                      background: 'linear-gradient(135deg, #22d3ee20, #818cf820)'
                    } : {}}>
                    {msg.role === 'assistant'
                      ? <Bot size={13} className="text-electric-400" />
                      : <User size={13} className="text-electric-400" />
                    }
                  </div>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-white rounded-tr-sm'
                      : 'text-slate-300 rounded-tl-sm'
                  }`}
                    style={msg.role === 'user'
                      ? { background: 'linear-gradient(135deg, #22d3ee20, #818cf820)', border: '1px solid rgba(34,211,238,0.2)' }
                      : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }
                    }>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #22d3ee20, #818cf820)' }}>
                  <Bot size={13} className="text-electric-400" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {[0, 1, 2].map(i => (
                    <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-electric-400"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />
                  ))}
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4 flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full text-slate-400 hover:text-electric-400 hover:border-electric-400/30 transition-all duration-200 glass">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-6 pb-6">
            <div className="flex gap-3 glass rounded-xl p-3">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Ask about Rohit's experience..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-slate-600"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              />
              <button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}
              >
                <Send size={13} className="text-navy-950" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
