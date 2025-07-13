"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Award, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const problems = [
  "Excel chaos everywhere",
  "SOPs that nobody follows",
  "Audit panic mode",
  "Template dumping without strategy",
]

const solutions = [
  "Clean, scalable QMS architecture",
  "Processes built for your stage",
  "Audit-ready from day one",
  "Strategic quality planning",
]

const coverage = [
  {
    standard: "ISO 13485",
    description: "International quality management standard for medical devices",
    icon: Award,
  },
  {
    standard: "FDA QSR",
    description: "US Quality System Regulation compliance",
    icon: FileText,
  },
  {
    standard: "EU MDR",
    description: "European Medical Device Regulation requirements",
    icon: CheckCircle,
  },
]

const timeline = [
  { phase: "Gap assessment", description: "Identifying and analyzing gaps", duration: "Week 1-2" },
  { phase: "Foundation", description: "Core QMS structure", duration: "Week 3-6" },
  { phase: "Implementation", description: "Process deployment", duration: "Week 7-12" },
  { phase: "Audit-Ready", description: "Validation & training", duration: "Week 13-16" },
  { phase: "Internal Audit", description: "Evaluating QMS effectiveness and compliance through a structured internal audit.", duration: "Week 17" },

]

const personas = [
 
   {
    title: "Startups",
    subtitle: "Building from scratch",
    description:
      "Get your quality foundation right from the beginning. No over-engineering, just what you need to grow.",
    features: ["Essential QMS framework", "Scalable processes", "Regulatory readiness", "Cost-effective approach"],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Scaling Mid-size",
    subtitle: "Growing pains solutions",
    description: "Transform your existing systems into a professional QMS that scales with your ambitions.",
    features: ["System optimization", "Process standardization", "Team training", "Efficiency improvements"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Preparing for Certification",
    subtitle: "Audit-ready excellence",
    description: "Final preparations for regulatory inspections and certifications. Leave nothing to chance.",
    features: ["Audit preparation", "Gap analysis", "Documentation review", "Mock inspections"],
    color: "from-purple-500 to-violet-600",
  },
]

export default function QualityPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/undraw_throw-away_k2t5.png?height=600&width=1200')] bg-contain  bg-center opacity-30" />

        <motion.div
          className="container mx-auto px-4 text-center z-10 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           Done with Template-Dumping consultants?
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             No more Excel chaos, half-baked SOPs, or one-size-fits-none templates.
          </motion.p>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </section>
      
      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Scalable QMS for Fast-Moving innovators</h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto">
              Whether you’re building a traditional medical device or an AI/ML algorithm, setting up a Quality Management System (QMS) doesn’t have to be overwhelming or overly rigid. 
Your QMS should reflect your product, your people, and your stage of growth.
             </p>
             <p className="text-xl text-gray-600 max-w-6xl mx-auto mt-4">
At LucidMind consulting, We design clean, smart and scalable QMS that are actually usable. We closely work with each team of your organization to understand the gaps and build processes that are tailored to your unique needs and compliant with the relevant QS regulations: ISO 13485, FDA QSR (21 CFR Part 820), and EU MDR
             </p>
          </motion.div>
        </div>
        </section>
      {/* Problem-Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Problem: Quality Chaos</h2>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Solution: Strategic Quality</h2>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Global Compliance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality systems that are designed to meet the most stringent international standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coverage.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="h-8 w-8 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.standard}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From Zero to Audit-Ready</h2>
            <p className="text-xl text-left text-gray-600 max-w-3xl mx-auto">
              Whether you’re a startup just stepping into regulatory waters or a mid-size company, scaling up with a growing product line,
              
                we help you go from zero to audit-ready minus the jargon and stress!
            </p>
            
          </motion.div>
         <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <div className="grid lg:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className={`h-2 bg-gradient-to-r ${persona.color}`} />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{persona.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{persona.subtitle}</p>
                    <p className="text-gray-600 mb-6">{persona.description}</p>
                    <div className="space-y-3">
                      {persona.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
            </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Roadmap to a compliant, scalable QMS</h2>
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-blue-200 hidden md:block" />

              <div className="space-y-8">
                {timeline.map((phase, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                      <p className="text-gray-600 mb-2">{phase.description}</p>
                      <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
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
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Build Quality That Scales?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can transform your quality systems and prepare you for success.
            </p>

            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
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
                Talk to Our Quality Experts
              
              <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Contact Our Quality Experts</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Company" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Phone" type="tel" />
                  <Textarea placeholder="Tell us about your quality challenges..." />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
