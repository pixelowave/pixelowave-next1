'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';



import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { 
  MoonIcon, SunIcon,Info, FileText, Mail, Menu, X, User,Gauge , LogOut, ChevronDown, Home, Briefcase, Code, Smartphone, Search, Book, Users, HelpCircle
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';


const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

const services = [
  { title: 'Custom Software Development', href: '/services/software-development', icon: <Code className="h-4 w-4 text-blue-500" /> },
  { title: 'Mobile App Development', href: '/services/mobile-development', icon: <Smartphone className="h-4 w-4 text-green-500" /> },
  { title: 'Digital Marketing', href: '/services/digital-marketing', icon: <Briefcase className="h-4 w-4 text-orange-500" /> },
  { title: 'SEO Services', href: '/services/seo', icon: <Search className="h-4 w-4 text-purple-500" /> },
  { title: 'Website Speed Optimization', href: '/services/website-speed-optimization', icon: <Gauge className="h-4 w-4 text-pink-500" /> },
  // { title: 'FAQ', href: '/services/faq', icon: <HelpCircle className="h-4 w-4 text-yellow-500" /> },
];

export function Navigation() {
  const { setTheme, theme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const pathname = usePathname();
  
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter(Boolean);
    return pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      return (
        <React.Fragment key={href}>
          <li className="mx-2">/</li>
          <li>
            <Link href={href} className="text-primary capitalize">{decodeURIComponent(segment.replace(/-/g, ' '))}</Link>
          </li>
        </React.Fragment>
      );
    });
  };
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <Head>
        <title>Pixelowave - Your Digital Solution</title>
        <meta name="description" content="Explore our cutting-edge digital solutions including software development, mobile apps, SEO, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pixelowave - Your Digital Solution" />
        <meta property="og:description" content="Providing top-notch digital solutions for your business." />
        <meta property="og:type" content="website" />
      </Head>
      
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Logo size={40} />
          <div className="flex flex-col items-center leading-none">
  {/* Logo */}
  <span className="ml-2 text-2xl text-left font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    Pixelowave
  </span>

  {/* Slogan */}
  <span className="text-[9px] font-medium text-left text-orange-500">
    Elevating Digital Experiences
  </span>
</div>





        </div>
        <div className="flex items-center space-x-4 lg:absolute lg:right-4">
          <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> 
            {theme === 'dark' ? <SunIcon className="h-5 w-5 text-purple-500" /> : <MoonIcon className="h-5 w-5 text-gray-700" />} 
          </Button>
          <button className="lg:hidden p-2 text-blue-600 hover:text-purple-600 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} flex items-center space-x-2 ${
                        pathname === "/" ? "text-primary" : "text-muted-foreground"
                      } hover:text-primary/80`}
                    >
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} flex items-center space-x-2 ${
                        pathname === "/about" ? "text-primary" : "text-muted-foreground"
                      } hover:text-primary/80`}
                    >
                      <Info className="h-4 w-4" />
                      <span>About Us</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center space-x-2 text-muted-foreground hover:text-primary/80">
                    <Briefcase className="h-4 w-4" />
                    <span>Services</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {services.map((service) => (
                        <li key={service.title}>
                          <Link href={service.href} className="flex items-center space-x-2 p-3 rounded-md hover:bg-accent">
                            {service.icon}
                            <span>{service.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} flex items-center space-x-2 ${
                        pathname === "/blog" ? "text-primary" : "text-muted-foreground"
                      } hover:text-primary/80`}
                    >
                      <FileText className="h-4 w-4" />
                      <span>Blog</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/faq" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} flex items-center space-x-2 ${
                        pathname === "/faq" ? "text-primary" : "text-muted-foreground"
                      } hover:text-primary/80`}
                    >
                      <HelpCircle className="h-4 w-4" />
                      <span>FAQ</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} flex items-center space-x-2 ${
                        pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                      } hover:text-primary/80`}
                    >
                      <Mail className="h-4 w-4" />
                      <span>Contact</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 h-full z-50 bg-white border-b shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700" onClick={closeMobileMenu}><Home className="h-4 w-4" /><span>Home</span></Link></li>
              <li><Link href="/about" className="text-blue-600 hover:text-blue-700" onClick={closeMobileMenu}>About Us</Link></li>
              <li className="space-y-2"><span className="text-blue-600 font-medium">Services</span>
                <ul className="pl-4 space-y-2">{services.map(service => (<li key={service.title}><Link href={service.href} className="flex items-center space-x-2 text-blue-600 hover:text-blue-700" onClick={closeMobileMenu}>{service.icon}<span>{service.title}</span></Link></li>))}</ul>
              </li>
              <li><Link href="/blog" className="text-blue-600 hover:text-blue-700" onClick={closeMobileMenu}>Blog</Link></li>
              <li><Link href="/contact" className="text-blue-600 hover:text-blue-700" onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      )}
      {/* Breadcrumbs (Hidden on Home Page) */}
      {pathname !== '/' && (
        <nav aria-label="breadcrumb" className="container mt-3">
          <ol className="flex items-center text-sm text-muted-foreground">
            <li>
              <Link href="/" className="flex items-center space-x-1">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </li>
            {generateBreadcrumbs()}
          </ol>
          
        </nav>
      )}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
