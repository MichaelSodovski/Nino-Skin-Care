import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const beforeAfterItems = [
    {
      title: "טיפול הבהרה",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "טיפול בעיות עור",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "טיפול אנטי אייג׳ינג",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const testimonials = [
    {
      name: "רונית כהן",
      text: "הטיפולים ב-NINO שינו לי את העור. התוצאות מדהימות והיחס האישי הכי מקצועי ביותר.",
      rating: 5,
    },
    {
      name: "מיכל לוי",
      text: "אני מטופלת קבועה כבר שנה וחצי. התוצאות מדהימות והצוות מקסים ומקצועי.",
      rating: 5,
    },
    {
      name: "שירה גולן",
      text: "המקום הכי מקצועי שהייתי בו. המליצה בחום על הטיפולים שלהם.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[hsl(var(--brown-text))]">הלקוחות שלנו</h2>
        <h3 className="mb-4 text-center text-xl">מה אומרים עלינו</h3>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-[hsl(var(--brown-text))]">לפני ואחרי</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {beforeAfterItems.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover"
                />
                <h4 className="mt-2 text-center text-lg font-medium">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <h3 className="mb-8 text-center text-2xl font-semibold text-[hsl(var(--brown-text))]">המלצות</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[hsl(var(--pink-background))] border-none">
              <CardHeader className="flex justify-center pb-2">
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm">{testimonial.text}</p>
              </CardContent>
              <CardFooter className="flex justify-center pt-2">
                <p className="font-medium">{testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

