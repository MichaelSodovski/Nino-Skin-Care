import { Check, Clock, Heart, Star } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      title: "מקצועיות",
      description: "מחויבות למצוינות ולמתן שירות ברמה הגבוהה ביותר",
      icon: Star,
    },
    {
      title: "אמינות",
      description: "יושרה מקצועית והתאמת הטיפול המושלם ללקוח",
      icon: Heart,
    },
    {
      title: "חדשנות",
      description: "שימוש בטכנולוגיות ושיטות טיפול מתקדמות",
      icon: Check,
    },
    {
      title: "אכפתיות",
      description: "יחס אישי חם לכל לקוח ולקוחה",
      icon: Clock,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[hsl(var(--brown-text))]">הערכים שלנו</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <value.icon className="mb-4 h-10 w-10 text-[hsl(var(--brown-text))]" />
              <h3 className="mb-2 text-xl font-semibold text-[hsl(var(--brown-text))]">{value.title}</h3>
              <p className="text-center text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

