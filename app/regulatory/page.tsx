"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, FileCheck, Zap, ChevronDown, FolderCheck, FileCode, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const globalPaths = [
  {
    region: "US FDA",
    description: "510(k)",
    timeline: "6-9 months",
    complexity: "High",
  },
  {
    region: "EU MDR (Class IIA)",
    description: "CE marking, notified body approval",
    timeline: "4-6 months",
    complexity: "High",
  },
  {
    region: "CDSCO (Class C, D)",
    description: "Import license, clinical trials",
    timeline: "3-5 months",
    complexity: "Medium",
  },
  {
    region: "Health Canada (class II)",
    description: "Medical device license",
    timeline: "2-3 months",
    complexity: "Medium",
  },
]

const offerings = [
  {
    title: "Full-Service",
    description: "Complete regulatory strategy from concept to approval",
    features: ["Strategic planning", "Documentation", "Submission management", "Post-market support"],
    expanded: false,
  },
  {
    title: "Last-Mile Support",
    description: "Expert guidance when you're almost there",
    features: ["Submission review", "Response to queries", "Final documentation", "Approval coordination"],
    expanded: false,
  },
  {
    title: "Qsub/Presub Help",
    description: "Navigate pre-submission meetings with confidence",
    features: ["Meeting preparation", "Question development", "Strategy alignment", "Follow-up planning"],
    expanded: false,
  },
]

const roadmapSteps = [
  { step: "Idea", description: "Innovation concept", color: "bg-purple-500" },
  { step: "Strategy", description: "Regulatory pathway", color: "bg-blue-500" },
  { step: "Dossier", description: "Documentation prep", color: "bg-green-500" },
  { step: "Approval", description: "Market entry", color: "bg-yellow-500" },
]

export default function RegulatoryPage() {
  const [expandedOffering, setExpandedOffering] = useState<number | null>(null)

  const toggleOffering = (index: number) => {
    setExpandedOffering(expandedOffering === index ? null : index)
  }

  return (
    <div className="min-h-screen ">
      {/* Header Banner */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/undraw_collaboration_dtwk.png?height=200&width=100')] bg-contain bg-center opacity-20" />

        <motion.div
          className="container mx-auto px-4 text-center z-10 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Global regulatory guidance. Built around you</h1>
          {/* <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Don't Let Compliance Be an Afterthought</p> */}
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-white/20 rounded-full"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </section>
         
     

      {/* service  1 */}
            {/* Smart Planning Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              <span className="text-blue-600"> Building regulatory strategy: </span>Don’t let compliance be an afterthought
              </h2>
              <p className="text-gray-700 mb-6">
                Your device is almost ready. The business team’s chasing leads while you’re eyeing revenue. But without a smart regulatory strategy in place? That’s like starting out on a world tour without an itinerary!
At LucidMind Consulting, we help you map the right regulatory route — one that aligns with your device’s complexity, regulatory landscape and your market ambitions. We make compliance part of your go-to-market strategy, not an obstacle to it. You’ll be surprised at the number of companies who wish they’d done this sooner!
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileCheck className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Strategy Saves Time</h3>
                    <p className="text-gray-600">
                      Planning your regulatory approach from day one prevents costly pivots and delays later in
                      development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Market Access</h3>
                    <p className="text-gray-600">
                      Understanding international requirements early opens doors to multiple markets simultaneously.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Time to Market</h3>
                    <p className="text-gray-600">
                      Strategic planning reduces regulatory review cycles and accelerates your path to
                      commercialization.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <img
                  src="/undraw_business-decisions.png?height=800&width=500"
                  alt="Regulatory Strategy Visualization"
                  className="w-full h-84 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  {/* smart planning section ends  */}

       {/* service  ended */}
      {/* Global Approval Paths */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Global Approval Pathways</h2>
             <p className="text-xl text-gray-600 max-w-10xl mx-auto">
              From the USFDA to the EU MDR, Health Canada, UKCA, CDSCO, and more, our strategies are meticulously crafted with a global perspective. We provide comprehensive support to guide you through approval processes across significant markets, including the United States, the European Union, Canada, the United Kingdom, the Middle East, India, ASEAN countries, and others. Our tailored and market-specific assistance ensures a seamless and efficient regulatory journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{path.region}</h3>
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Timeline:</span>
                        <span className="text-sm font-medium text-gray-900">{path.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Complexity:</span>
                        <span
                          className={`text-sm font-medium ${
                            path.complexity === "High" || path.complexity === "Very High"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {path.complexity}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     {/* service  3 */}
            
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <img
                  src="/medicaldevices01.png?height=800&width=500"
                  alt="Regulatory Strategy Visualization"
                  className="w-full h-84 object-cover rounded-lg"
                />
              </div>
            </motion.div>
            
            
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              We’re the Go-Getters in your corner
              </h2>
              <p className="text-gray-700 mb-6">
                With years of hands-on regulatory experience, we embed ourselves in your team and do the heavy lifting — so you don’t have to.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileCode className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">From Scalpel to Software — We Handle It All</h3>
                    <p className="text-gray-600">
                      Whether it’s a traditional device, an AI-powered software (SaMD), or a wearable like a smartwatch that tracks health conditions, we’ve got your back. We’ll build your regulatory strategy, prep all your docs, and handle the back-and-forth with regulatory bodies.<br/> No jargon, no black box — just clear, actionable steps.
Because compliance shouldn’t be a bottleneck — it should be your launchpad.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileCode className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Execution for Dossier Development</h3>
                    <p className="text-gray-600">
                      From 510(k), De Novo, Breakthrough designation, Tech file, and CER to Cybersecurity, IEC 62304, IEC 62366 documents and more; we prepare every required document with precision.  – We don’t just advise. We partner. Your goals become our mission.

                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pragmatic, No-Fluff Approach</h3>
                    <p className="text-gray-600">
                      Inspired by the FDA’s “least burdensome” principle, we aim for smart submissions, not bloated ones. This ensures that the approval lead times are minimized, predictable, and aligned with your go-to-market strategy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

           
          </div>
        </div>
      </section>
  {/* smart planning section ends  */}

       {/* service  ended */}
      {/* Custom Offerings */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tailored to your needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need comprehensive support or targeted expertise, we have the right solution for you. Whether you’re a manufacturer who needs complete end to end assistance, last-mile support or assistance with just a Presub/Qsub, we’re there for you to ensure you only pay for what you need.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => toggleOffering(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{offering.title}</h3>
                          <p className="text-gray-600">{offering.description}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedOffering === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        </motion.div>
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedOffering === index ? "auto" : 0,
                        opacity: expandedOffering === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t bg-gray-50">
                        <div className="pt-4 grid md:grid-cols-2 gap-4">
                          {offering.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Roadmap */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your journey to market</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to market approval, we guide you through every critical milestone.
            </p>
           
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
              {roadmapSteps.map((step, index) => (
                <>
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.step}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                  {index < roadmapSteps.length - 1 && (
                    <div className="flex md:flex-row flex-col items-center">
                      {/* Arrow for large screens (right) */}
                      <ArrowRightIcon className="hidden md:block h-12 w-24 text-gray-400" />
                      {/* Arrow for small screens (down) */}
                      <svg
                        className="block md:hidden h-10 w-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-6-6m6 6l6-6" />
                      </svg>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           <h2 className="text-4xl font-bold text-white mb-8">
              Cut through the regulatory noise
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Book a free consultation to discuss your regulatory pathway and get expert guidance tailored to your device.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
              href={`mailto:info@lucidmindconsulting.com?subject=${encodeURIComponent(
                "Inquiry from LucidMind Website"
              )}&body=${encodeURIComponent(
                "Hi LucidMind Team,\n I'am interested in learning more about your regulatory consulting services. Please contact me with more information. \n Thank you!"
              )}`}
              >
                Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
