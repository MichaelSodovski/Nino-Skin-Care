"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactSection() {
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-[hsl(var(--brown-text))]">צור קשר</h2>
        <p className="mb-12 text-center">נשמח לענות על כל שאלה</p>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-right text-xl font-semibold text-[hsl(var(--brown-text))]">השאירו פרטים</h3>

              <div>
                <label htmlFor="name" className="mb-2 block text-right text-sm">
                  שם מלא
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-right"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-right text-sm">
                  טלפון
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="text-right"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-right text-sm">
                  אימייל
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-right"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-right text-sm">
                  הודעה
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="text-right"
                />
              </div>

              <Button type="submit" className="w-full bg-[hsl(var(--brown-text))] hover:bg-[hsl(var(--brown-text))]">
                שלחי
              </Button>
            </form>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg bg-[hsl(var(--pink-background))] p-6">
              <h3 className="mb-6 text-right text-xl font-semibold text-[hsl(var(--brown-text))]">פרטי התקשרות</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="font-medium">טלפון</p>
                    <p dir="ltr" className="text-right">
                      054-1234567
                    </p>
                  </div>
                  <Phone className="h-5 w-5 text-[hsl(var(--brown-text))]" />
                </div>

                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="font-medium">כתובת</p>
                    <p>רחוב הרצל 1, תל אביב</p>
                  </div>
                  <MapPin className="h-5 w-5 text-[hsl(var(--brown-text))]" />
                </div>

                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="font-medium">אימייל</p>
                    <p>info@ninoskincare.com</p>
                  </div>
                  <Mail className="h-5 w-5 text-[hsl(var(--brown-text))]" />
                </div>

                <div className="flex items-center justify-end gap-3">
                  <div className="text-right">
                    <p className="font-medium">שעות פעילות</p>
                    <p>ראשון-חמישי: 9:00-20:00</p>
                    <p>שישי: 9:00-14:00</p>
                  </div>
                  <Clock className="h-5 w-5 text-[hsl(var(--brown-text))]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

