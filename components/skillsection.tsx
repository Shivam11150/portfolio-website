'use client'

import { useState } from 'react'
import { ChevronDown, Lightbulb, Users, FileText, Code, Palette, TrendingUp, Rocket, MessageSquare } from 'lucide-react'

export default function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const skillsData = [
  {
    title: 'Product Discovery & Prioritization',
    description: 'Turning business problems into clear, buildable product decisions.',
    icon: Lightbulb,
    builtThrough: {
      tools: ['Miro', 'Notion', 'Docs', 'Sheets'],
      methods: ['Product ideation', 'problem framing', 'feature prioritization', 'roadmap planning'],
    },
    inRealWork: 'Defined product ideas from scratch, balanced user needs with business constraints, and prioritized features based on impact and feasibility',
    perception: ['Problem solver', 'User-centric PM', 'Decision clarity'],
  },
  {
    title: 'Cross-functional Execution',
    description: 'Ensuring ideas move smoothly from discussion to delivery.',
    icon: Users,
    builtThrough: {
      tools: ['Jira', 'Trello'],
      methods: ['Sprint planning', 'task breakdown', 'coordination with design, development, and testing teams'],
    },
    inRealWork: 'Worked closely with designers, developers, and testers to align requirements, manage sprints, and deliver releases',
    perception: ['Team player', 'Agile mindset', 'Low-friction execution'],
  },
  {
    title: 'Product Definition & Business Analysis',
    description: 'Bridging business requirements with product execution.',
    icon: FileText,
    builtThrough: {
      tools: ['Docs', 'Sheets', 'Notion'],
      methods: ['BRDs', 'FRDs', 'requirement clarification', 'stakeholder alignment'],
    },
    inRealWork: 'Handled both PM and BA responsibilities in small teams, translating business needs into clear product requirements',
    perception: ['Ownership', 'Structured thinking', 'Business understanding'],
  },
  {
    title: 'Tech Collaboration & System Thinking',
    description: 'Working effectively with engineering without being dependent on them.',
    icon: Code,
    builtThrough: {
      tools: ['Postman'],
      methods: ['API contract drafting', 'requirement-based API testing', 'feasibility discussions'],
      techExposure: ['APIs', 'frontend–backend interaction', 'databases'],
    },
    inRealWork: 'Collaborated with developers on API design, tested integrations, and ensured product logic matched technical implementation',
    perception: ['Tech-aware PM', 'Engineering empathy', 'Execution confidence'],
  },
  {
    title: 'UX & Product Iteration',
    description: 'Improving usability through feedback and continuous refinement.',
    icon: Palette,
    builtThrough: {
      tools: ['Figma', 'Miro'],
      methods: ['Design thinking', 'UX improvements', 'bug tracking', 'release management'],
    },
    inRealWork: 'Improved product flows, handled bugs and updates, and supported regular product releases based on user feedback',
    perception: ['User focus', 'Quality mindset', 'Continuous improvement'],
  },
  {
    title: 'Data & Business Analysis',
    description: 'Using data to guide product and business decisions.',
    icon: TrendingUp,
    builtThrough: {
      tools: ['SQL', 'Google Analytics'],
      methods: ['User behavior analysis', 'feature usage tracking', 'insight extraction'],
    },
    inRealWork: 'Analyzed database and analytics data to understand user behavior, identify gaps, and inform product improvements',
    perception: ['Data-aware PM', 'Business insight', 'Outcome orientation'],
  },
  {
    title: 'Go-To-Market & Growth Execution',
    description: 'Supporting launches beyond just shipping features.',
    icon: Rocket,
    builtThrough: {
      tools: ['Meta Ads Manager'],
      methods: ['Product launch support', 'GTM execution', 'spend awareness'],
    },
    inRealWork: 'Supported product launches, worked with marketing on distribution, and understood how advertising spend is planned and tracked',
    perception: ['Business alignment', 'GTM exposure', 'Practical growth understanding'],
  },
  {
    title: 'User Feedback & Validation',
    description: 'Closing the loop between users and product decisions.',
    icon: MessageSquare,
    builtThrough: {
      methods: ['UAT', 'early user feedback collection', 'iteration cycles'],
    },
    inRealWork: 'Conducted UAT, gathered feedback from initial users, and converted insights into actionable product changes',
    perception: ['Feedback-driven', 'Customer empathy', 'Product maturity'],
  },
]

  const displayedSkills = isExpanded ? skillsData : skillsData.slice(0, 2)

  return (
    <section className="py-8 md:py-12 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills &{' '}
            <span className="text-purple-400">Capabilities</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-2">
            How I build products that matter
          </p>
        </div>

        {/* Skills List */}
        <div className="border-t border-b border-white/10">
          {displayedSkills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={index}
                className={`py-8 ${index !== displayedSkills.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                {/* Skill Header with Icon */}
                <div className="flex gap-4 items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-950/25 flex items-center justify-center border border-purple-900/30">
                    <IconComponent size={24} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="ml-16 space-y-4 animate-in fade-in duration-300">
                    {/* Built Through */}
                    <div>
                      <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                        Built through
                      </p>
                      {skill.builtThrough.tools && (
                        <div className="mb-2">
                          <span className="text-xs text-gray-400">Tools: </span>
                          <span className="text-sm text-gray-300">
                            {skill.builtThrough.tools.join(', ')}
                          </span>
                        </div>
                      )}
                      {skill.builtThrough.techExposure && (
                        <div className="mb-2">
                          <span className="text-xs text-gray-400">Tech Exposure: </span>
                          <span className="text-sm text-gray-300">
                            {skill.builtThrough.techExposure.join(', ')}
                          </span>
                        </div>
                      )}
                      <div>
                        <span className="text-xs text-gray-400">Methods: </span>
                        <span className="text-sm text-gray-300">
                          {skill.builtThrough.methods.join(', ')}
                        </span>
                      </div>
                    </div>

                    {/* In Real Work */}
                    <div>
                      <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                        In real work
                      </p>
                      <p className="text-sm text-gray-300">{skill.inRealWork}</p>
                    </div>

                    {/* Perception Built */}
                    <div>
                      <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                        Perception built
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.perception.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs bg-purple-950/25 text-purple-300 px-3 py-1 rounded-full border border-purple-900/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Expand/Collapse Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-900/30 text-purple-400 hover:bg-purple-950/25
            active:scale-95 
             active:bg-purple-500/20
            transition-colors font-semibold"
          >
            {isExpanded ? 'Show Less' : 'Show More Skills'}
            <ChevronDown
              size={20} 
              className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
