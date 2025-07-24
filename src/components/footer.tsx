import Link from 'next/link';
import { Laptop, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Laptop className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Suchethan Infotech</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for Dell, Lenovo, and HP products and services.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold font-headline tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/products?category=Laptops" className="text-sm text-muted-foreground hover:text-primary">Laptops</Link></li>
              <li><Link href="/products?category=Desktops" className="text-sm text-muted-foreground hover:text-primary">Desktops</Link></li>
              <li><Link href="/products?category=Workstations" className="text-sm text-muted-foreground hover:text-primary">Workstations</Link></li>
              <li><Link href="/products?category=Accessories" className="text-sm text-muted-foreground hover:text-primary">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>info@suchethaninfotech.com</li>
              <li>+91 12345 67890</li>
              <li>123 Tech Street, Bangalore, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Suchethan Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
