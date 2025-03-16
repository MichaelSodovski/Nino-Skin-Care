import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Hero Section */}
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
              הכשרה יסודית, ליווי מקצועי וטכניקות עיצוב שיעניקו לך יתרון מול מתחרים.
            </p>

            <div className="mt-10 flex flex-col space-y-4 md:flex-row md:justify-end md:space-x-4 md:space-x-reverse md:space-y-0">
              <Link
                href="/contact"
                className="rounded-full bg-[#856c4d] px-8 py-3 text-white transition-colors hover:bg-[#6e593f]"
              >
                להרשמה
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-gray-300 bg-transparent px-8 py-3 text-gray-700 transition-colors hover:bg-gray-50"
              >
                מה מחכה לך בסדנה
              </Link>
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
      </div>

      {/* About Section - Simple */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="NINO Skin Care Specialist"
                width={300}
                height={400}
                className="mx-auto rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3 md:pr-12">
              <h2 className="mb-6 text-3xl font-bold text-[#856c4d]">קצת על עצמי</h2>
              <p className="mb-4 text-gray-600">
                NINO Skin Care Clinic נוסדה מתוך אהבה לטיפוח העור ומחויבות למצוינות. אנו מתמחים במגוון רחב של טיפולי
                פנים ועור, תוך שימוש בטכנולוגיות מתקדמות ומוצרים איכותיים.
              </p>
              <p className="mb-4 text-gray-600">
                הצוות שלנו מורכב ממטפלים מוסמכים ומנוסים, המתמחים בהתאמת טיפולים אישיים לכל לקוח ולקוחה. אנו מאמינים שכל
                אחד ראוי לקבל את הטיפול המושלם עבורו.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Simple */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">© NINO Skin Care Clinic 2025. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

