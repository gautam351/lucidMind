"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, FileCheck, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const globalPaths = [
  {
    region: "US FDA",
    description: "510(k), PMA, De Novo pathways",
    timeline: "6-18 months",
    complexity: "High",
  },
  {
    region: "EU MDR",
    description: "CE marking, notified body approval",
    timeline: "12-24 months",
    complexity: "Very High",
  },
  {
    region: "CDSCO (India)",
    description: "Import license, clinical trials",
    timeline: "8-15 months",
    complexity: "Medium",
  },
  {
    region: "Health Canada",
    description: "Medical device license",
    timeline: "6-12 months",
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
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20" />

        <motion.div
          className="container mx-auto px-4 text-center z-10 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Regulatory Strategy</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Don't Let Compliance Be an Afterthought</p>
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
                Why Smart Regulatory Planning Matters
              </h2>
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
                  src="/placeholder.svg?height=400&width=500"
                  alt="Regulatory Strategy Visualization"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate complex international requirements with confidence. Each market has unique challenges - we know
              them all.
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

      {/* Custom Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tailored to Your Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need comprehensive support or targeted expertise, we have the right solution for your stage.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Journey to Market</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to market approval, we guide you through every critical milestone.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
              {roadmapSteps.map((step, index) => (
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

                  {index < roadmapSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-2" />
                  )}
                </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Map Your Regulatory Strategy?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Book a free consultation to discuss your regulatory pathway and get expert guidance tailored to your
              device.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Free Regulatory Roadmap Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
