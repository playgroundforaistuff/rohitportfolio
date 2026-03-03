import Groq from 'groq-sdk'
import fs from 'fs'
import path from 'path'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

// Reads context file at runtime — update the .md file anytime, no code changes needed
function loadContext() {
  const contextPath = path.join(process.cwd(), 'context', 'ROHIT_CONTEXT.md')
  return fs.readFileSync(contextPath, 'utf-8')
}

export async function POST(req) {
  try {
    const { messages } = await req.json()
    const context = loadContext()

    const SYSTEM_PROMPT = `You are Rohit Kanojia's professional AI assistant on his portfolio website.
    
Use the context below to answer visitor questions about Rohit's experience, skills, achievements, and career.
Follow the AI Response Guidelines at the bottom of the context document.

=== CONTEXT ===
${context}
=== END CONTEXT ===`

    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 500,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
    })

    return Response.json({ reply: response.choices[0].message.content })
  } catch (error) {
    console.error('Error:', error)
    return Response.json({ error: 'Failed to respond. Please try again.' }, { status: 500 })
  }
}