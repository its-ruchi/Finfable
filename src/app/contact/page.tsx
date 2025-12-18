import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-semibold text-foreground text-center tracking-tight">Contact Us</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-3">Have questions or need support? We&apos;re here to help — send us a message and we&apos;ll respond within 1-2 business days.</p>

      <div className="mt-8">
        <Card className="bg-card rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="text-foreground">Get in Touch</CardTitle>
            <p className="text-sm text-muted-foreground">Share details and we&apos;ll reach back with guidance.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-muted-foreground">Name</label>
                <Input id="name" placeholder="Your name" className="border border-border bg-white" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-muted-foreground">Email</label>
                <Input id="email" type="email" placeholder="your@domain.com" className="border border-border bg-white" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-muted-foreground">Message</label>
                <Textarea id="message" placeholder="Tell us what's on your mind" rows={6} className="border border-border bg-white" />
              </div>

              <div className="flex items-center justify-end">
                <Button type="submit" className="px-6 py-3">Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

