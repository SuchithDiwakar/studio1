'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, ShieldCheck, ArrowUpCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  service: z.string({ required_error: 'Please select a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ServicesPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Request Submitted!',
      description: "Thank you for your inquiry. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">Our Expert Services</h1>
        <p className="mt-2 text-lg text-muted-foreground">Keeping your technology in peak condition.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center">
          <CardHeader>
            <Wrench className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline">Repairs & Upgrades</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">From screen replacements to performance boosts with SSDs and RAM, our certified technicians handle it all with precision and care.</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline">Annual Maintenance (AMC)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Ensure your systems run smoothly with our comprehensive AMC plans, including regular check-ups, cleaning, and priority support.</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <ArrowUpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline">After-Sales Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Our commitment doesn't end at purchase. We provide dedicated support to help you get the most out of your new device.</p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold font-headline text-center mb-8">Request a Service</h2>
        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 12345 67890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="repair">Laptop/Desktop Repair</SelectItem>
                          <SelectItem value="upgrade">Hardware Upgrade</SelectItem>
                          <SelectItem value="amc">Annual Maintenance Contract (AMC)</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Describe Your Issue</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe the issue with your device or the service you need..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Submit Request</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
