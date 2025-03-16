'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { HeroHeader } from '@/components/hero5-header'
import FooterSection from '@/components/footer'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          type: 'contact',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message envoyé avec succès !', {
        duration: 5000,
        closeButton: true,
      });
      form.reset();
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'envoi du message.', {
        duration: 5000,
        closeButton: true,
      });
    }
  }

  return (
    <div className="relative">
      <div className="relative">
        <HeroHeader />
        <main className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center">
          <section className="w-full">
            <div className="relative pt-24 md:pt-36">
              {/* Fond avec dégradé orangé */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FFF8F6] via-[#FFF4F0] to-[#FFF8F6]"></div>
              
              {/* Effets de superposition */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,182,147,0.12),transparent)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_100%,rgba(255,182,147,0.08),transparent)]"></div>
              </div>

              <div className="container max-w-2xl mx-auto px-6 pb-24">
                <div className="text-center mx-auto max-w-xl">
                  <h1 className="text-4xl font-bold mb-6">Get in Touch with Us</h1>
                  <p className="text-lg text-muted-foreground mb-12">
                    Have questions or business inquiries? Contact us and we&apos;ll get back to you shortly.
                  </p>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/90">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-white/50" />
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
                          <FormLabel className="text-foreground/90">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" type="email" {...field} className="bg-white/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/90">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you?"
                              className="resize-none bg-white/50 min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full py-6 text-base">Send Message</Button>
                  </form>
                </Form>
              </div>
            </div>
          </section>
        </main>
      </div>
      <FooterSection />
    </div>
  )
} 