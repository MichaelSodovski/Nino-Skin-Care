import Image from "next/image"

export default function ClientsPage() {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-[#856c4d]">הלקוחות שלנו</h1>
      <h2 className="mb-4 text-center text-xl">מה אומרים עלינו</h2>

      <section className="mb-16">
        <h3 className="mb-8 text-center text-2xl font-semibold text-[#856c4d]">לפני ואחרי</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {beforeAfterItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-white p-4">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="h-64 w-full object-cover"
              />
              <h4 className="mt-4 text-center text-lg font-medium text-[#856c4d]">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="mb-8 text-center text-2xl font-semibold text-[#856c4d]">המלצות</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg bg-[#ffd6d6] p-6">
              <div className="mb-4 flex justify-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
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
              <p className="text-center">{testimonial.text}</p>
              <p className="mt-4 text-center font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

