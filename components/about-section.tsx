import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <h1 className="text-center text-4xl font-bold text-[hsl(var(--brown-text))] md:text-right">
              אודות NINO Skin Care Clinic
            </h1>
            <h2 className="text-center text-xl md:text-right">המומחים שלנו לטיפוח העור</h2>
            <div className="mt-8">
              <h3 className="mb-4 text-center text-2xl font-semibold text-[hsl(var(--brown-text))] md:text-right">
                הסיפור שלנו
              </h3>
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
              src="/placeholder.svg?height=400&width=600"
              alt="NINO Skin Care Clinic"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

