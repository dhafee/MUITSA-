import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center font-bold text-lg">
                MUG
              </div>
              <div className="flex flex-col">
                <span className="font-bold leading-tight">Methodist University</span>
                <span className="text-sm opacity-90">Ghana</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Committed to academic excellence, spiritual growth, and community service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://mug.edu.gh/about-us/" className="opacity-90 hover:opacity-100 hover:underline">
                  About MUG
                </Link>
              </li>
              <li>
                <Link href="https://mug.edu.gh/academic-affairs-directorate/" className="opacity-90 hover:opacity-100 hover:underline">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 hover:underline">
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 hover:underline">
                  Alumni Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://osissip.osis.online/" className="opacity-90 hover:opacity-100 hover:underline">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="https://library.mug.edu.gh/" className="opacity-90 hover:opacity-100 hover:underline">
                  MUG Library
                </Link>
              </li>
              <li>
                <Link href="https://mug.edu.gh/wp-content/uploads/2025/08/ACADEMIC-CALENDAR-FOR-STUDENTS-AUGUST-COHORT-2025-2026-ACADE.pdf" className="opacity-90 hover:opacity-100 hover:underline">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="https://mug.edu.gh/how-to-apply-online/" className="opacity-90 hover:opacity-100 hover:underline">
                  How to Apply Online to MUG
                </Link>
              </li>
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 hover:underline">
                  Graduate Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">P.O. Box 5-6, Dansoman, Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">+233 30 815 2025</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">info@mug.edu.gh</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-6">
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Methodist University Ghana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
