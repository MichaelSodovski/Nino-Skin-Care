import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#ffd6d6] py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Link href="/contact" className="text-sm font-medium">
            צור קשר
          </Link>
          <Link href="/clients" className="text-sm font-medium">
            לקוחות
          </Link>
          <Link href="/about" className="text-sm font-medium">
            אודות
          </Link>
        </div>
        <Link href="/">
          <div className="h-12 w-12">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="NINO Skin Care Clinic Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
    </header>
  )
}

