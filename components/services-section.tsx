import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      title: "טיפול בבעיות עור",
      description: "מומחיות בטיפול בבעיות עור מורכבות",
    },
    {
      title: "טיפולי פנים מתקדמים",
      description: "התמחות בטיפולי פנים ואנטי אייג׳ינג",
    },
    {
      title: "CHIROMASSAGE IQ",
      description: "הסמכה בטיפולי עיסוי מתקדמים",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[hsl(var(--brown-text))]">ההסמכות שלנו</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-xl font-bold text-[hsl(var(--brown-text))]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

