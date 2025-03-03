import Link from "next/link"
import Image from "next/image"
import { Twitter, Facebook, Instagram } from "lucide-react"

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram }
]

export function Footer() {
  return (
    <footer className="relative bg-white/50 backdrop-blur-sm border-t border-purple-100">
      <div className="container px-4 mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Image
              src="/logo.svg"
              alt="MindTrack"
              width={140}
              height={40}
              className="mb-6 hover:opacity-80 transition-opacity"
            />
            <p className="text-gray-600 mb-8">
              Your companion for mental wellness tracking and personal growth
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href} 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 col-span-3 gap-8">
            <div>
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-100">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-gray-600">
              © 2024 MindTrack. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 