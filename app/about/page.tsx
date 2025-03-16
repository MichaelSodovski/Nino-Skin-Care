import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <h1 className="text-center text-4xl font-bold text-[#856c4d] md:text-right">אודות NINO Skin Care Clinic</h1>
            <h2 className="text-center text-xl md:text-right">המומחים שלנו לטיפוח העור</h2>
            <div className="mt-8">
              <h3 className="mb-4 text-center text-2xl font-semibold text-[#856c4d] md:text-right">הסיפור שלנו</h3>
              <p className="text-right leading-relaxed">
                NINO Skin Care Clinic נוסדה מתוך אהבה לטיפוח העור ומחויבות למצוינות. אנו מתמחים במגוון רחב של טיפולי
                פנים ועור, תוך שימוש בטכנולוגיות מתקדמות ומוצרים איכותיים.
              </p>
              <p className="mt-4 text-right leading-relaxed">
                הצוות שלנו מורכב ממטפלים מוסמכים ומנוסים, המתמחים בהתאמת טיפולים אישיים לכל לקוח ולקוחה. אנו מאמינים שכל
                אחד ראוי לקבל את הטיפול המושלם עבורו.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7B953521FE-3079-4A2D-B1EE-63FDD98794AC%7D-hD8y9qiDrlmxne1GXa52xUs487Au6h.png"
              alt="NINO Skin Care Clinic"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16 bg-white p-8 rounded-lg">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#856c4d]">ההסמכות שלנו</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6 text-center">
            <h3 className="mb-2 text-xl font-bold text-[#856c4d]">טיפול בבעיות עור</h3>
            <p className="text-sm">מומחיות בטיפול בבעיות עור מורכבות</p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <h3 className="mb-2 text-xl font-bold text-[#856c4d]">טיפולי פנים מתקדמים</h3>
            <p className="text-sm">התמחות בטיפולי פנים ואנטי אייג׳ינג</p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <h3 className="mb-2 text-xl font-bold text-[#856c4d]">CHIROMASSAGE IQ</h3>
            <p className="text-sm">הסמכה בטיפולי עיסוי מתקדמים</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#856c4d]">הערכים שלנו</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold text-[#856c4d]">מקצועיות</h3>
            <p className="text-sm">מחויבות למצוינות ולמתן שירות ברמה הגבוהה ביותר</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold text-[#856c4d]">אמינות</h3>
            <p className="text-sm">יושרה מקצועית והתאמת הטיפול המושלם ללקוח</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold text-[#856c4d]">חדשנות</h3>
            <p className="text-sm">שימוש בטכנולוגיות ושיטות טיפול מתקדמות</p>
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-xl font-semibold text-[#856c4d]">אכפתיות</h3>
            <p className="text-sm">יחס אישי חם לכל לקוח ולקוחה</p>
          </div>
        </div>
      </section>
    </div>
  )
}

