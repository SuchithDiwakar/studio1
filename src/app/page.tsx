'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Laptop,
  Server,
  Wrench,
  Star,
  Quote,
} from 'lucide-react';
import { products, testimonials } from '@/lib/placeholder-data';
import { ProductCard } from '@/components/product-card';
import Autoplay from "embla-carousel-autoplay"

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/10">
        <div className="container px-4 md:px-6">
          <Carousel
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full"
            opts={{ loop: true }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                      Unbeatable Deals on Dell Laptops
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Power, performance, and reliability. Find the perfect Dell laptop for work, play, and everything in between.
                    </p>
                    <Button asChild className="w-fit">
                      <Link href="/products?brand=Dell">Shop Dell Deals</Link>
                    </Button>
                  </div>
                  <Image
                    src="https://placehold.co/600x400.png"
                    data-ai-hint="Dell laptop"
                    alt="Dell Laptop Promotion"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                   <div className="flex flex-col justify-center space-y-4">
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                      HP & Lenovo: Innovation for Everyone
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Explore a wide range of cutting-edge laptops and desktops from HP and Lenovo, built for your success.
                    </p>
                    <div className="flex gap-4">
                        <Button asChild>
                            <Link href="/products?brand=HP">Explore HP</Link>
                        </Button>
                        <Button asChild variant="secondary">
                            <Link href="/products?brand=Lenovo">Discover Lenovo</Link>
                        </Button>
                    </div>
                  </div>
                  <Image
                    src="https://placehold.co/600x400.png"
                    data-ai-hint="HP Lenovo laptops"
                    alt="HP and Lenovo Promotion"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4" />
            <CarouselNext className="absolute right-4" />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our top-selling laptops and desktops, curated for performance and value.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Expert Services for Your Devices
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From sales to service, we're your trusted tech partner. We keep your systems running smoothly.
            </p>
          </div>
          <div className="mx-auto w-full max-w-5xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Card>
                <CardHeader className="items-center">
                  <Laptop className="h-10 w-10 text-primary" />
                  <CardTitle className="font-headline">Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">The latest models from top brands like Dell, HP, and Lenovo.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="items-center">
                  <Wrench className="h-10 w-10 text-primary" />
                  <CardTitle className="font-headline">Repairs & AMC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Fast, reliable repairs and Annual Maintenance Contracts.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="items-center">
                  <Server className="h-10 w-10 text-primary" />
                  <CardTitle className="font-headline">Upgrades</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Boost your performance with RAM, SSD, and other upgrades.</p>
                </CardContent>
              </Card>
            </div>
          </div>
           <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/services">Request a Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col">
                <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-4 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <p className="font-semibold mt-4">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
