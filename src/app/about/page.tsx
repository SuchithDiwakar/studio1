import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">About Suchethan Infotech</h1>
          <p className="mt-2 text-lg text-muted-foreground">Your Trusted Technology Partner Since 2010</p>
        </header>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline">Our Story</h2>
            <p className="text-muted-foreground">
              Founded with a passion for technology and a commitment to customer service, Suchethan Infotech has grown from a small local shop to a leading provider of IT solutions. We specialize in offering a curated selection of high-quality laptops, desktops, and accessories from world-renowned brands like Dell, HP, and Lenovo.
            </p>
            <p className="text-muted-foreground">
              Our journey is built on a foundation of expertise, reliability, and trust. We believe in not just selling products, but in providing comprehensive solutions that empower our customers, whether they are students, professionals, or large enterprises.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              data-ai-hint="team working"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-headline">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To provide reliable, high-performance technology solutions with exceptional customer service, ensuring our clients achieve their goals with the best tools available.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Eye className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-headline">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be the most trusted and sought-after IT partner, recognized for our expertise, integrity, and commitment to innovation and customer success.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="mx-auto h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-headline">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Customer-Centricity, Quality, Integrity, and a Passion for Technology drive everything we do. We build lasting relationships based on these core principles.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="text-center bg-secondary py-16 rounded-lg">
           <h2 className="text-3xl font-bold font-headline">Why Choose Us?</h2>
           <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
             With over a decade of experience, we offer unparalleled expertise, authorized products, and dedicated after-sales support.
           </p>
        </section>

      </div>
    </div>
  );
}
