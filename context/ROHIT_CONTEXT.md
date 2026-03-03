# Rohit Kanojia — AI Context Layer
# ============================================================
# HOW TO USE THIS FILE:
# This is the single source of truth for the AI assistant.
# Update this file to improve AI answers — no code changes needed.
# The API route reads this file at runtime using Node.js fs module.
# Only verified, first-hand information is included here.
# ============================================================

## IDENTITY

- Name: Rohit Kanojia
- Current Role: Senior Technical Delivery Lead at Tollring
- Experience: 15+ years across SaaS, UCaaS, On-Prem, and IT Operations
- Location: Noida, Uttar Pradesh, India
- Email: rohit.kanojia@gmail.com
- LinkedIn: linkedin.com/in/rohit-kan
- Languages: English (bilingual), Hindi (native)

---

## TOLLRING — Deep Context (Jan 2015 – Present)

### Company Background
Tollring is a UK-based analytics and call recording SaaS company.
Products:
- iCall Suite (iCS Desktop) — on-premises call analytics platform
- iCS Online — cloud-based analytics
- Compliance call recording (MiFID II and regulatory)
Partner-led model — sold and supported via reseller network across UK, Europe, India, and Australia.
Deployed on Cisco UCaaS, Microsoft Teams, and Mitel platforms.
CRM and ticketing: Zoho One.




---

### ROLE: Escalation Manager (Jul 2018 – May 2022)


PROBLEM ROHIT INHERITED:
- No standardised escalation path — tickets assigned ad hoc
- No automated SLA enforcement — SLA tracking was manual and error-prone
- No structured resolution documentation — engineers resolved tickets inconsistently
- Repeat tickets on the same issues consuming team capacity
- No structured partner engagement cadence

WHAT ROHIT BUILT AND DELIVERED:

**1. Tollring Escalation Process Handbook (authored Oct 2018, adopted Tollring-wide)**

Rohit co-authored the official Tollring Escalation Process Handbook (with Pooja Anand,
owned by Shivani Makkar). This became the company-wide standard for escalation management.

The handbook defined:

Two types of escalations:
- Functional: Transfer to a team with higher expertise, e.g. routing to Mondago, Optilogix,
  or internal DevOps. Performed by routing tickets to another group.
- Hierarchic: Engaging senior management for high-priority or major incidents.

Four levels of escalation management:
- Scope Management: Narrow problems to individual parts, prioritise, address one-by-one
- Time Management: Assess business impact, provide correct urgency, take ownership of resolution
- Resource Management: Allocate correct technical and management resources, facilitate teamwork
- Communication Management: Avoid assumptions, provide periodic status updates to all stakeholders

Escalation path defined in the handbook:
Customer → Reseller → Tollring Partner Support → Technical Support
Within technical support: L1 Engineer → Tech Lead → Escalation Manager / Product Specialist → DevOps Engineer

Escalation Manager responsibilities defined by Rohit:
- Prevent escalations: Empower team to make day-to-day decisions on behalf of customers
- Coaching ownership: Train engineers to take and retain ownership of difficult situations
- Support early escalations: Encourage raising issues before SLAs are missed
- Maximise impact, minimise emails: Push for live calls over email chains for complex issues
- Use words of calm and credibility in all customer interactions (full vocabulary framework included)

Technical Escalation Process — 3-phase diagnostic framework Rohit documented:
- Phase 1: Gather information and data about the problem
- Phase 2: Isolate points of failure
- Phase 3: Determine network/system changes — structured 14-question diagnostic checklist covering:
  what failed vs performed poorly, what changed, was it ever working, steps customer performed,
  error messages, when problem began, scope of users affected, frequency, business impact

Incident Report structure Rohit defined (mandatory for every escalated incident):
- Summary: Incident ID, title, services impacted, start time, impact statement, RCA
- Timeline: Outage duration, when staff notified, key actions, restoration time
- Root Cause: Detailed honest explanation — no sugar-coating
- Resolution and Recovery: Step-by-step actions with timestamps
- Corrective and Preventive Measures: Itemised prevention list

**2. SLA Plans Designed and Configured in Zoho One Workflow**

Rohit personally designed and built the SLA automation in Zoho One.
Trigger: Ticket create or priority field update. Timers calculated from ticket creation time.
All escalation levels automated — no manual intervention required.

iCS Online — Full priority matrix:
- P1-Critical (complete outage, all users affected — e.g. complete service outage, call recording
  failure causing financial penalties, fraud not detected):
  Level 1 response: within 1 working hour | Level 2 fix: within 4 working hours (24x7x365)
- P2-High (partial/complete stoppage, multiple users — e.g. loss of reporting portal access,
  data collection loss, incorrect report stats affecting call centre management):
  Level 1: within 4 working hours | Level 2: within 1 business day
- P3-Medium (partial stoppage, group or single user — e.g. single call recording unplayable,
  scheduled report not delivered, intermittent issues under specific conditions):
  Level 1: within 1 business day | Level 2: within 3 business days
- P4-Low (minor, no business impact — e.g. login reset, configuration change, report explanation):
  Level 1: within 3 business days | Level 2: within 5 business days

iCS Desktop — Priority matrix:
- P2-High (complete work stoppage — e.g. extension matching issue, call data loss, portal
  inaccessible, GUI not working): Level 1: 4 working hours | Level 2: 1 business day
- P3-Medium (partial stoppage — e.g. calls recorded but not processed, incorrect report data,
  calls not playable): Level 1: 1 business day | Level 2: 3 business days
- P4-Low (minor annoyance — e.g. login reset, wallboard setup, recording not emailed):
  Level 1: 3 business days | Level 2: 5 business days

Partner-specific SLA plans also configured in Zoho One:

Hosted Support Standard SLA (Access 4 / Destiny):
- Critical P1 24x7: Respond 1hr | Resolve 5hrs | Resolution escalation: 2 levels
- High (Tollring office hours): Respond 4hrs | Resolve 28hrs
- Medium (Tollring office hours): Respond 24hrs | Resolve 96hrs
- Low (Tollring office hours): Respond 3 days | Resolve 120 days

Australian Partners SLA (MBA — account-associated only, AEDT):
- Critical P1 24x7: Respond 1hr | Resolve 4hrs
- High (AEDT): Respond 1hr | Resolve 8hrs
- Medium (AEDT): Respond 2hrs | Resolve 3 days
- Low (AEDT): Respond 8hrs | Resolve 60 days

OneCom UK SLA (Mitel and iCallSuite platform):
- Critical P1 24x7: Respond 1hr | Resolve 5hrs | Response escalation: 2 levels | Resolution escalation: 2 levels
- High (Tollring office hours): Respond 4hrs | Resolve 28hrs | Response escalation: 1 level
- Medium: Respond 24hrs | Resolve 96hrs | Response escalation: 1 level
- Low: Respond 3 days | Resolve 120 days | Response escalation: 1 level

Webex Priority SLAs (calendar hours, ticket create trigger):
- High: Resolve 6hrs | Medium: Resolve 1 day | Low: Resolve 2 days

Tiered Partner SLAs (calendar hours):
- Gold: High 6hrs | Medium 12hrs | Low 1 day
- Silver: High 12hrs | Medium 1 day | Low 2 days
- Bronze: High 1 day | Medium 2 days | Low 3 days

Design principle: All SLA plans fully automated in Zoho One workflow — timers started from
ticket creation, escalation levels triggered without manual steps, human error eliminated
from SLA tracking entirely.

**3. KCS Resolution Template**

Rohit introduced a standardised resolution template across the team to:
- Reduce variation in how engineers document fixes
- Build a reusable knowledge base from every resolved ticket
- Reduce Mean Time To Resolution (MTTR)

Template structure:
- Reported Issue by Customer: [as stated by partner or end user]
- Actual Issue after Investigation: [root cause identified during investigation]
- Resolution Details: [step-by-step fix, what was changed, what was checked, what was confirmed]
- Resolution Date/Time: [UTC timestamp]

Real example resolved using this template at Tollring:
- Reported: No data on reports portal
- Actual: XSI credentials had expired on 07/10/23, halting data collection into data_calls table
- Fix: Identified expiry via data_calls table investigation, raised to service provider,
  new XSI credentials entered on provisioning portal, data logging confirmed as resumed
- Resolved: 07/11/2023 at 15:30 UTC

**4. Partner Engagement — Periodic Reviews and QBRs**

Rohit conducted structured periodic meetings with Tollring's partner network including
formal QBRs (Quarterly Business Reviews). Topics covered:
- Aging tickets — status, ownership, and action plans
- Tickets awaiting resolution via upcoming patch releases
- Patch release progress tracked through R&D → QA → Model Validation pipeline
- Partner-specific SLA performance review
- Open issues and risk identification

**Combined Business Impact of All Three Initiatives:**
The escalation process handbook, Zoho SLA automation, and KCS resolution template
together delivered a 50% reduction in repeat tickets across Tollring worldwide operations,
achieved over 2 quarters (approximately 6 months).

Additional outcomes:
- 200+ partner meetings facilitated
- 30% improvement in overall ticket resolution rate
- 25% improvement in Net Promoter Scores
- 25% increase in operational efficiency


This is the role in which Rohit authored the Tollring Escalation Process Handbook (Oct 2018).
He identified the gap in escalation ownership and process consistency, and created the
company-wide framework that standardised how escalations were managed across all teams.

Technical specialisations during this period:
- Cisco CUCM: call routing, dial plan, gateway configuration
- Microsoft Teams Direct Routing: SBC configuration, voice issues
- SIP/RTP: packet capture analysis, codec mismatch, jitter and latency diagnosis
- SQL Server: data_calls table queries, stored procedure performance, missing data investigation
- iCallSuite Desktop and iCS Online: platform-specific analytics and recording issues

---

### ROLE: Technical Lead / Senior Technical Support (2016–2018)

Hands-on technical resolution and team technical leadership across iCall Suite and UCaaS platforms.

---

## EARLIER CAREER

- Remotemen Pvt. Ltd. (Aug 2015 – Jul 2016): IT Lead — IT optimisation and vendor management
- RRR IT Services (Jan 2015 – Aug 2015): Head of IT — infrastructure modernisation
- Parin BPO Services (Jul 2014 – Jan 2015): System Administrator — data centre, Windows/Linux servers
- Dell International Services (Apr 2007 – Jun 2009): Technical Support Expert — 95% first-contact resolution, top of team for 6 consecutive quarters, CSAT 20% above team average
- Genpact (Jul 2006 – Jan 2007): Technical Support Associate — first corporate role

---

## SKILLS

UCaaS: Cisco CUCM, Microsoft Teams Direct Routing, Mitel, Webex, SIP, RTP, VoIP
Analytics Platforms: Tollring iCallSuite (Desktop and Online), compliance call recording
SQL: Query optimisation, stored procedure debugging, data_calls table, SQL Server 2012–2019
Networking: Packet capture (Wireshark), QoS, firewall rules, network topology review
CRM and Ticketing: Zoho One (SLA workflow automation, escalation management, dashboards)
Infrastructure: Windows Server, Linux (CentOS/Ubuntu), VMware, Active Directory, DNS, DHCP
Compliance: GDPR-aligned call recording, MiFID II awareness, data retention policy design
Frameworks: ITIL-aligned delivery, Agile/Scrum basics, KCS (Knowledge-Centred Service)
Process design: Escalation framework authoring, SLA matrix design, incident report standards

---

## CERTIFICATIONS

- CCNP (R&S) — Cisco — Advanced enterprise routing and switching
- CCNA Voice — Cisco — CUCM, Unity, QoS for voice infrastructure
- Customer Success Fundamentals — Partner lifecycle management, NPS, churn prevention
- Registered Scrum Basics — Sprint planning, retrospectives, backlog management
- Prompt Engineering for ChatGPT — Vanderbilt University / Coursera
- Linux Unhatched — Cisco NetAcad — Linux CLI, permissions, shell basics
- Introduction to Generative AI — Google Cloud

---

## EDUCATION

- MSc Information Technology — Sikkim Manipal University (Distance Education)
- BSc Science — Shobhit University
- Senior Secondary (PCM) — Huddard High School

---

## OPEN TO

Senior delivery leadership, operations management, technical account management,
enterprise SaaS support leadership, partner success management — in SaaS, UCaaS,
or cloud-native environments.

---

## AI RESPONSE GUIDELINES

- Broad questions ("tell me about Rohit"): 3-4 sentence executive summary, invite follow-up
- Specific questions ("how did he reduce repeat tickets?"): use the verified detail above —
  the combination of escalation handbook + Zoho SLA automation + KCS template = 50% reduction
  in repeat tickets worldwide over 2 quarters
- SLA questions: cite exact tier configurations — Rohit built these in Zoho One himself
- Escalation process questions: reference the actual handbook Rohit authored in Oct 2018 —
  functional vs hierarchic escalation types, the L1→Tech Lead→Escalation Manager→DevOps path,
  the 3-phase technical diagnostic process, the incident report structure
- Partner engagement questions: mention periodic reviews and QBRs covering aging tickets,
  patch release progress tracking through R&D/QA/model validation pipeline
- Keep responses 3-5 sentences unless more detail is explicitly requested
- Tone: professional, specific, confident — like a colleague who worked directly with Rohit
- NEVER invent tools, metrics, frameworks, or achievements not stated in this document
- If asked something not covered here, say you can connect them with Rohit directly
