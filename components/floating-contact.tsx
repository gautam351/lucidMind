"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Mail, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: Phone,
      label: "Call Us",
      action: "tel:+1234567890",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Mail,
      label: "Email Us",
      action: `mailto:rajzaveri10@gmail.com?subject=${encodeURIComponent(
                "Inquiry to LucidMind Consulting"
              )}&body=${encodeURIComponent(
                "Hi LucidMind Team,\n I'am interested in learning more about your regulatory consulting services. Please contact me with more information.\n Thank you!"
              )}`,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    // {
    //   icon: Calendar,
    //   label: "Schedule Call",
    //   action: "#",
    //   color: "bg-purple-500 hover:bg-purple-600",
    // },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Card className="w-64 shadow-xl border-0">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Get in Touch</h3>
                <div className="space-y-2">
                  {contactOptions.map((option, index) => (
                    <motion.a
                      key={index}
                      href={option.action}
                      className={`flex items-center space-x-3 p-3 rounded-lg text-white transition-colors duration-200 ${option.color}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <option.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{option.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
          isOpen ? "bg-gray-600 hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}

