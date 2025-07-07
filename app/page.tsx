"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, FileText, Award, Zap, ArrowBigDown, ArrowDown, ArrowDownCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "Finally, regulatory consulting that speaks our language - clear, actionable, results-driven.",
    author: "Rajeev Nohria",
    title: "CEO",
    company: "Better Diagnostics",
  },
  {
    quote: "LucidMind transformed our regulatory approach. What seemed impossible became achievable.",
    author: "Sarah Chen",
    title: "CEO, MedTech Innovations",
    company: "Series B Startup",
  },
  // {
  //   quote: "Their quality system implementation saved us 6 months and countless headaches.",
  //   author: "Dr. Michael Rodriguez",
  //   title: "VP of Quality",
  //   company: "Global Medical Devices",
  // },
  
]

const highlights = [
  {
    icon: FileText,
    title: "Regulatory Strategy",
    description: "Our tested regulatory strategies help you navigate complex pathways with confidence and clarity",
  },
  {
    icon: CheckCircle,
    title: "Gap Analysis",
    description: "Identify and bridge compliance gaps before they become roadblocks",
  },
  {
    icon: Award,
    title: "Submission & Approvals",
    description: "Simplified and efficient submissions Accelerated approvals",
  },
  {
    icon: Zap,
    title: "Liaising with regulators",
    description: "Navigating approval talks with regulators around the globe",
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[url('/undraw_legal-counsel_kdnh.png?height=500&width=1200')] bg-cover bg-center opacity-10" />

        <motion.div
          className="container mx-auto px-4 text-center z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Compliance meets <span className="text-blue-600">Clarity</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             Smart Compliance. Global Access.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We help you expedite medical device approvals across the US, EU, APAC & more.

          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
You innovate — we handle the regulatory grind
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.a
              href="#section2"
              className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center bg-blue-600 text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
          scale: [1, 1.15, 1],
              }}
              transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
              }}
            >
              <ArrowDownCircle className="h-20 w-20" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-60"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </section>

      {/* Pain Point Section */}
      <section className="py-20 bg-gray-50" id="section2">
        <div className="container mx-auto px-4 mb-16 mt-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              You’ve invested time, energy, and innovation
            </h2>
            <p className="text-xl text-gray-700 mb-12">in developing your medical device. You’re ready to market, but regulatory clearances, documentation, and vague expectations make it feel like you’ve hit another wall. Your launch now feels stalled or at risk.</p>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-4">
                Regulatory pathways often feel like a maze of global rules and paperwork.
              </p>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                At <span className="text-black">LucidMind</span>, we believe true genius lies in simplicity.
              </h3>
              <p className="text-lg text-gray-600">
                We simplify compliance with clear, actionable regulatory and quality solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How We Help You Succeed
          </motion.h2>
         

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {highlights.map((highlight, index) => (
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
                      <highlight.icon className="h-8 w-8 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>


         
             
              <h3 className="text-2xl font-bold  mb-4 text-center">
                End-to-end support to fast-track your device to market.
             
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                We take regulatory complexity off your plate so you can focus on building great products.
              </p>
           
         
             
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
                <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</p>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
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
            <h2 className="text-4xl font-bold text-white mb-8">Ready to simplify your  device's path to market?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let’s simplify your regulatory journey and accelerate your device’s market entry.
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
              Drop a Mail
              <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

