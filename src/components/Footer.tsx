import { Rocket, Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold font-heading text-foreground dark:bg-gradient-to-r dark:from-purple-600 dark:to-indigo-500 dark:bg-clip-text dark:text-transparent">Grow</span>
            </Link>
            <p className="text-sm text-muted-foreground text-left max-w-xs">
              Transforming businesses through innovative digital marketing strategies and data-driven results.
            </p>
          </div>
          
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-bold text-foreground">Quick Links</h4>
            <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground dark:hover:text-purple-400">Home</Link>
            <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground dark:hover:text-purple-400">About Us</Link>
            <Link href="/#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground dark:hover:text-purple-400">Services</Link>
            <Link href="/#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground dark:hover:text-purple-400">Contact</Link>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h4 className="font-bold text-foreground">Services</h4>
            <p className="text-sm text-muted-foreground">SEO Optimization</p>
            <p className="text-sm text-muted-foreground">Paid Advertising</p>
            <p className="text-sm text-muted-foreground">Social Media</p>
            <p className="text-sm text-muted-foreground">Branding</p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h4 className="font-bold text-foreground">Connect</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-foreground dark:text-purple-400" />
              <span>hello@grow.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-foreground dark:text-purple-400" />
              <span>9846546646</span>
            </div>
            <div className="flex gap-3 mt-2">
              <Link href="#" className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-purple-900/30 flex items-center justify-center text-foreground dark:text-purple-400 hover:bg-gray-200 dark:hover:bg-purple-900/50 transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-purple-900/30 flex items-center justify-center text-foreground dark:text-purple-400 hover:bg-gray-200 dark:hover:bg-purple-900/50 transition-colors">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-purple-900/30 flex items-center justify-center text-foreground dark:text-purple-400 hover:bg-gray-200 dark:hover:bg-purple-900/50 transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-6 text-sm md:px-6">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Grow. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground dark:hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground dark:hover:text-purple-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;