"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" })
    alert("ההודעה נשלחה בהצלחה!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-center text-4xl font-bold text-[#856c4d]">צור קשר</h1>
      <p className="mb-12 text-center">נשמח לענות על כל שאלה</p>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-right text-xl font-semibold text-[#856c4d]">השאירו פרטים</h3>

            <div>
              <label htmlFor="name" className="mb-2 block text-right text-sm">
                שם מלא
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 p-2 text-right"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-right text-sm">
                טלפון
              </label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 p-2 text-right"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-right text-sm">
                אימייל
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 p-2 text-right"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-right text-sm">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-md border border-gray-300 p-2 text-right"
              />
            </div>

            <button type="submit" className="w-full rounded-md bg-[#856c4d] px-4 py-2 text-white hover:bg-[#6e593f]">
              שלחי
            </button>
          </form>
        </div>

        <div className="md:w-1/2">
          <div className="rounded-lg bg-[#ffd6d6] p-6">
            <h3 className="mb-6 text-right text-xl font-semibold text-[#856c4d]">פרטי התקשרות</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="font-medium">טלפון</p>
                  <p dir="ltr" className="text-right">
                    054-1234567
                  </p>
                </div>
                <Phone className="h-5 w-5 text-[#856c4d]" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="font-medium">כתובת</p>
                  <p>רחוב הרצל 1, תל אביב</p>
                </div>
                <MapPin className="h-5 w-5 text-[#856c4d]" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="font-medium">אימייל</p>
                  <p>info@ninoskincare.com</p>
                </div>
                <Mail className="h-5 w-5 text-[#856c4d]" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <p className="font-medium">שעות פעילות</p>
                  <p>ראשון-חמישי: 9:00-20:00</p>
                  <p>שישי: 9:00-14:00</p>
                </div>
                <Clock className="h-5 w-5 text-[#856c4d]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

