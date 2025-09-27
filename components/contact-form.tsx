"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="glass-effect glow-accent">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            We've received your message and will get back to you within 24 hours. Our security experts are reviewing
            your requirements.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="glass-effect bg-transparent">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="glass-effect hover:glow-accent transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl">Get Your Free Security Assessment</CardTitle>
        <CardDescription className="text-base">
          Fill out the form below and our security experts will contact you to discuss your cybersecurity needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="John" required className="glass-effect bg-transparent" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Doe" required className="glass-effect bg-transparent" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              required
              className="glass-effect bg-transparent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input id="company" placeholder="Your Company" required className="glass-effect bg-transparent" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="glass-effect bg-transparent" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companySize">Company Size</Label>
            <Select>
              <SelectTrigger className="glass-effect bg-transparent">
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-1000">201-1000 employees</SelectItem>
                <SelectItem value="1000+">1000+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="services">Services Interested In</Label>
            <Select>
              <SelectTrigger className="glass-effect bg-transparent">
                <SelectValue placeholder="Select services" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="threat-hunting">Threat Hunting</SelectItem>
                <SelectItem value="incident-response">Incident Response</SelectItem>
                <SelectItem value="security-consulting">Security Consulting</SelectItem>
                <SelectItem value="security-training">Security Training</SelectItem>
                <SelectItem value="all-services">All Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your cybersecurity needs and challenges..."
              required
              rows={4}
              className="glass-effect bg-transparent"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
              Subscribe to our security newsletter and threat intelligence updates
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="privacy" required />
            <Label htmlFor="privacy" className="text-sm text-muted-foreground">
              I agree to the{" "}
              <a href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </a>{" "}
              and
              <a href="/terms" className="text-accent hover:underline ml-1">
                Terms of Service
              </a>{" "}
              *
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full glow-accent group" disabled={isLoading}>
            {isLoading ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
