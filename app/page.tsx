"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <main
      className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white">
        <div className="container mx-auto min-h-screen">
          <div className="flex min-h-screen flex-col-reverse items-center md:flex-row md:justify-between">
            {/* Left Content */}
            <div className="w-full px-6 py-12 text-center md:w-1/2 md:py-0 md:text-right">
              <h2 className="font-script text-4xl font-light text-[#856c4d] md:text-5xl">NINO Skin Care</h2>

              <h1 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                הפכי את <span className="text-[#856c4d]">העור שלך</span> למושלם
                <br />
                עם טיפולים מתקדמים
              </h1>

              <p className="mx-auto mt-6 max-w-md text-base text-gray-600 md:mx-0 md:text-lg">
                טיפולי פנים מתקדמים בהתאמה אישית, המשלבים טכנולוגיה חדשנית וחומרים טבעיים לתוצאות מושלמות.
              </p>

              <div className="mt-10 flex flex-col space-y-4 md:flex-row md:justify-end md:space-x-4 md:space-x-reverse md:space-y-0">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact-section")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="rounded-full bg-[#856c4d] px-8 py-3 text-white transition-colors hover:bg-[#6e593f]"
                >
                  קביעת תור
                </button>
                <button
                  onClick={() => {
                    const aboutSection = document.getElementById("about-section")
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="rounded-full border border-gray-300 bg-transparent px-8 py-3 text-gray-700 transition-colors hover:bg-gray-50"
                >
                  למידע נוסף
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] w-full md:h-screen">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="NINO Skin Care Treatment"
                  fill
                  className="object-contain md:object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
            <ChevronDown onClick={scrollToNextSection} className="h-10 w-10 text-[#856c4d]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-section"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen bg-[#ffd6d6]/10 py-16 opacity-0"
      >
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#856c4d]">מי אנחנו</h2>

          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="NINO Skin Care Clinic"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="space-y-6 text-right">
                <p className="text-lg text-gray-700">
                  NINO Skin Care Clinic נוסדה מתוך אהבה לטיפוח העור ומחויבות למצוינות. אנו מתמחים במגוון רחב של טיפולי
                  פנים ועור, תוך שימוש בטכנולוגיות מתקדמות ומוצרים איכותיים.
                </p>
                <p className="text-lg text-gray-700">
                  הצוות שלנו מורכב ממטפלים מוסמכים ומנוסים, המתמחים בהתאמת טיפולים אישיים לכל לקוח ולקוחה. אנו מאמינים
                  שכל אחד ראוי לקבל את הטיפול המושלם עבורו.
                </p>
                <p className="text-lg text-gray-700">
                  בקליניקה שלנו תמצאו את הציוד המתקדם ביותר ואת שיטות הטיפול החדשניות ביותר, המותאמות אישית לצרכים
                  הייחודיים של העור שלכם.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services-section"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="min-h-screen bg-white py-16 opacity-0"
      >
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-4xl font-bold text-[#856c4d]">הטיפולים שלנו</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            אנו מציעים מגוון רחב של טיפולים מתקדמים, המותאמים אישית לצרכים הייחודיים של העור שלך
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 h-48 w-full overflow-hidden rounded-lg bg-[#ffd6d6]/30">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="טיפול פנים מתקדם"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#856c4d]">טיפול פנים מתקדם</h3>
              <p className="text-gray-600">טיפול עמוק המשלב טכנולוגיות חדשניות להתחדשות העור והצערתו.</p>
            </div>

            {/* Service 2 */}
            <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 h-48 w-full overflow-hidden rounded-lg bg-[#ffd6d6]/30">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="טיפול אנטי אייג׳ינג"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#856c4d]">טיפול אנטי אייג׳ינג</h3>
              <p className="text-gray-600">טיפול ממוקד לטשטוש קמטים והענקת מראה צעיר ורענן לעור הפנים.</p>
            </div>

            {/* Service 3 */}
            <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 h-48 w-full overflow-hidden rounded-lg bg-[#ffd6d6]/30">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="טיפול הבהרה"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#856c4d]">טיפול הבהרה</h3>
              <p className="text-gray-600">טיפול ייעודי להבהרת כתמי עור והענקת גוון אחיד ובריא לפנים.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact-section")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="rounded-full bg-[#856c4d] px-8 py-3 text-white transition-colors hover:bg-[#6e593f]"
            >
              לקביעת תור
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section
        id="results-section"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="min-h-screen bg-[#ffd6d6]/10 py-16 opacity-0"
      >
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-4xl font-bold text-[#856c4d]">לפני ואחרי</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">תוצאות אמיתיות של לקוחות שלנו</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Before/After 1 */}
            <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="לפני ואחרי טיפול"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-[#856c4d]">טיפול הבהרה</h3>
            </div>

            {/* Before/After 2 */}
            <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="לפני ואחרי טיפול"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-[#856c4d]">טיפול בעיות עור</h3>
            </div>

            {/* Before/After 3 */}
            <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="לפני ואחרי טיפול"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-[#856c4d]">טיפול אנטי אייג׳ינג</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials-section"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="min-h-screen bg-white py-16 opacity-0"
      >
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-4xl font-bold text-[#856c4d]">מה הלקוחות שלנו אומרים</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">חוויות אמיתיות של לקוחות מרוצים</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-[#ffd6d6]/20 p-6 shadow-md">
              <div className="mb-4 flex justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-center text-gray-600">
                "הטיפולים ב-NINO שינו לי את העור. התוצאות מדהימות והיחס האישי הכי מקצועי ביותר."
              </p>
              <p className="text-center font-medium text-[#856c4d]">רונית כהן</p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg bg-[#ffd6d6]/20 p-6 shadow-md">
              <div className="mb-4 flex justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-center text-gray-600">
                "אני מטופלת קבועה כבר שנה וחצי. התוצאות מדהימות והצוות מקסים ומקצועי."
              </p>
              <p className="text-center font-medium text-[#856c4d]">מיכל לוי</p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg bg-[#ffd6d6]/20 p-6 shadow-md">
              <div className="mb-4 flex justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-center text-gray-600">
                "המקום הכי מקצועי שהייתי בו. המליצה בחום על הטיפולים שלהם."
              </p>
              <p className="text-center font-medium text-[#856c4d]">שירה גולן</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        ref={(el) => (sectionsRef.current[4] = el)}
        className="min-h-screen bg-[#ffd6d6]/10 py-16 opacity-0"
      >
        <div className="container mx-auto px-6">
          <h2 className="mb-4 text-center text-4xl font-bold text-[#856c4d]">צרו קשר</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">השאירו פרטים ונחזור אליכם בהקדם</p>

          <div className="mx-auto max-w-2xl">
            <form className="space-y-6 rounded-lg bg-white p-8 shadow-md">
              <div>
                <label htmlFor="name" className="mb-2 block text-right text-sm font-medium text-gray-700">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 p-3 text-right shadow-sm focus:border-[#856c4d] focus:outline-none focus:ring-2 focus:ring-[#856c4d]/50"
                  placeholder="הכניסו את שמכם המלא"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-right text-sm font-medium text-gray-700">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-md border border-gray-300 p-3 text-right shadow-sm focus:border-[#856c4d] focus:outline-none focus:ring-2 focus:ring-[#856c4d]/50"
                  placeholder="הכניסו את מספר הטלפון שלכם"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-right text-sm font-medium text-gray-700">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 p-3 text-right shadow-sm focus:border-[#856c4d] focus:outline-none focus:ring-2 focus:ring-[#856c4d]/50"
                  placeholder="הכניסו את כתובת האימייל שלכם"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-right text-sm font-medium text-gray-700">
                  הודעה
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 p-3 text-right shadow-sm focus:border-[#856c4d] focus:outline-none focus:ring-2 focus:ring-[#856c4d]/50"
                  placeholder="כתבו את ההודעה שלכם כאן"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#856c4d] px-8 py-3 text-white transition-colors hover:bg-[#6e593f]"
              >
                שליחה
              </button>
            </form>

            <div className="mt-12 rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-6 text-center text-2xl font-bold text-[#856c4d]">פרטי התקשרות</h3>
              <div className="space-y-4 text-center">
                <p>
                  <strong>טלפון:</strong> 054-1234567
                </p>
                <p>
                  <strong>כתובת:</strong> רחוב הרצל 1, תל אביב
                </p>
                <p>
                  <strong>אימייל:</strong> info@ninoskincare.com
                </p>
                <p>
                  <strong>שעות פעילות:</strong> ראשון-חמישי: 9:00-20:00, שישי: 9:00-14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="mb-2 text-xl font-bold text-[#856c4d]">NINO Skin Care Clinic</h3>
            <p className="mb-6 text-sm text-gray-600">המומחים שלנו לטיפוח העור</p>
            <p className="text-sm text-gray-600">© NINO Skin Care Clinic 2025. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

