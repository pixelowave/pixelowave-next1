import Link from 'next/link';
import Head from 'next/head';
import { 
  Code, Smartphone, Briefcase, Search, Users, HelpCircle, 
  Book, Twitter, Linkedin, Mail, Home, FileText, Gauge
} from 'lucide-react';

export function Footer() {
  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Pixelowave Solutions - Software Development & Digital Marketing</title>
        <meta name="description" content="Pixelowave Solutions offers top-notch software development, mobile apps, SEO, and digital marketing services to grow your business online." />
        <meta name="keywords" content="Software Development, Mobile Apps, SEO, Digital Marketing, Web Development" />
        <meta name="author" content="Pixelowave Solutions" />
        
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Pixelowave Solutions - Software & Digital Marketing Experts" />
        <meta property="og:description" content="Transform your business with our innovative digital solutions, from custom software to SEO and marketing strategies." />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelowave.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pixelowave Solutions - Grow Your Business with Our Expertise" />
        <meta name="twitter:description" content="We provide innovative software solutions and marketing strategies to help businesses succeed online." />
        <meta name="twitter:image" content="/assets/twitter-card.png" />
      </Head>

      {/* Footer Section */}
      <footer className="border-t bg-background">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold">Pixelowave Solutions</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Transforming businesses through innovative software solutions and digital marketing strategies.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-medium">Services</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/services/software-development" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Code className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    <span>Software Development</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-development" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Smartphone className="h-4 w-4 text-green-500" aria-hidden="true" />
                    <span>Mobile Development</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Briefcase className="h-4 w-4 text-orange-500" aria-hidden="true" />
                    <span>Digital Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Search className="h-4 w-4 text-purple-500" aria-hidden="true" />
                    <span>SEO Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/website-speed-optimization" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Gauge className="h-4 w-4 text-purple-500" aria-hidden="true" />
                    <span>Website Speed Optimization</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium">Company</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Home className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <FileText className="h-4 w-4 text-green-600" aria-hidden="true" />
                    <span>Case Studies</span>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/faq" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Users className="h-4 w-4 text-pink-500" aria-hidden="true" />
                    <span>faq</span>
                  </Link>
                </li> */}
                <li>
                  <Link href="/faq" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <HelpCircle className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                    <span>FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-medium">Connect</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Book className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/Pixelowave" target="_blank" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Twitter className="h-4 w-4 text-blue-400" aria-hidden="true" />
                    <span>Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com/company/Pixelowave" target="_blank" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-4 w-4 text-blue-700" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                    <Mail className="h-4 w-4 text-red-500" aria-hidden="true" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Pixelowave Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
