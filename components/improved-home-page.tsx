'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Shield, Lock, Users, BarChart3, Globe, Zap, Brain, Scan, FileText, Palette, Sun, Moon, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"

const securityData = [
  { name: 'Jan', threats: 400, mitigations: 380 },
  { name: 'Feb', threats: 300, mitigations: 290 },
  { name: 'Mar', threats: 200, mitigations: 200 },
  { name: 'Apr', threats: 278, mitigations: 275 },
  { name: 'May', threats: 189, mitigations: 189 },
  { name: 'Jun', threats: 239, mitigations: 237 },
]



const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-card text-card-foreground rounded-lg shadow-lg p-6"
  >
    <Icon className="w-12 h-12 mb-4 text-primary" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
)

const ProductCard = ({ icon: Icon, title, description, features }) => (
  <Card className="w-full h-full">
    <CardHeader>
      <Icon className="w-12 h-12 mb-4 text-primary" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
)


export function ImprovedHomePageComponent() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Inside your component
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    // Show the navbar only when scroll position is at the top
    if (window.scrollY === 0) {
      setIsVisible(true); // show navbar
    } else {
      setIsVisible(false); // hide navbar
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', darkMode);
    }
  }, [darkMode, mounted]);

  const particlesInit = async (main) => {
    await loadFull(main);
  }

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  }

  if (!mounted) return null;

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300 relative">

        {/* Particle.js Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: darkMode ? "#ffffff" : "#000000",
              },
              links: {
                color: darkMode ? "#ffffff" : "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          className="fixed top-0 left-0 w-full h-full z-[-1]"
        />

        {/* Navigation */}
        <nav className={`sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center mb-4 lg:mb-0">
              <Brain className="w-8 h-8 mr-2 text-primary" />
              OxSecure Intelligence
            </Link>
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <Link href="#products" className="text-sm hover:text-primary transition-colors">Products</Link>
              <Link href="#how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</Link>
              <Link href="#gallery" className="text-sm hover:text-primary transition-colors">Gallery</Link>
              <Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
              <div className="flex items-center">
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  className="ml-4"
                  icon={darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                />
              </div>
            </div>
          </div>
        </nav>


        {/* Hero Section */}
        <motion.section
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 bg-transparent">
          
          {/* Background Logo */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image
              src="https://i.ibb.co/FsQV5fn/generated-image-3-1.png"
              alt="OxSuite Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Hero Content - Without container */}
          {/* Animated Shield Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8 z-10"
          >
            <Shield className="w-24 h-24 mx-auto text-primary" />
          </motion.div>

          {/* Animated Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            className="text-5xl font-bold mb-4 z-10 text-white drop-shadow-lg" // Added drop shadow for legibility
          >
            OxSuite 🛡️
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl mb-8 max-w-2xl mx-auto z-10 text-white drop-shadow-lg" // Added drop shadow
          >
            Revolutionizing Cybersecurity with AI-driven Tools
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex justify-center space-x-4 z-10"
            animate={{ y: [0, -5, 0] }} // Infinite animation
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </motion.div>

          {/* Testing Information */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8 text-sm bg-muted p-2 rounded-md inline-block z-10"
          >
            <p>🔑 For Testing: 👤 User: test, 🛡️ Pass: test@1234</p>
          </motion.div>

          {/* Floating Chevron */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 z-10"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.section>


        {/* Products Section */}
        <section id="products" className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our AI-Powered Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ProductCard
                icon={Brain}
                title="OxInteLL 🧠"
                description="Cybersecurity Intelligence 🔐"
                features={[
                  "Secure Code Analysis",
                  "Vulnerability Detection",
                  "AI-driven Knowledge Base",
                  "Security Scans",
                  "Gemini LLM Integration"
                ]}
              />
              <ProductCard
                icon={FileText}
                title="OxRAG 🤿"
                description="AI File Analyzer 🐂"
                features={[
                  "Multi-file Analysis",
                  "AI-Powered Insights",
                  "Voice Integration",
                  "High-speed Processing",
                  "Interactive Q/A Feature"
                ]}
              />
              <ProductCard
                icon={Palette}
                title="OxImaGen 🎨"
                description="AI Creativity & Image Generation 🖼️"
                features={[
                  "AI Image Generation",
                  "AI Story Generation from Images",
                  "Text-to-Speech Integration",
                  "Regional Language Conversion"
                ]}
              />
              <ProductCard
                icon={Scan}  // Replace with the relevant icon for OxScanner
                title="OxScanner 🚀"
                description="NetSec & Troubleshooting Tool 🔍"
                features={[
                  "Network Scanning",
                  "ARP Spoofing & MitM",
                  "Advanced Traceroute",
                  "Simulate Classic Attacks"
                ]}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-muted/50 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works 🔍</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  At the core of the OxSecure Suite lies a robust architecture powered by leading-edge technologies. Our tools harness the capabilities of Gemini LLM, Streamlit, Python, and FAISS to deliver seamless performance and exceptional user experiences. 🌟
                </p>
                <p className="text-lg mb-4">
                  Each application within the suite operates on a solid framework that integrates Python SDKs, the Gemini API, Hugging Face API, and the VirusTotal API. This enables them to run efficient AI models, ensuring optimal performance for all your cybersecurity needs. 🚀
                </p>
                <p className="text-lg">
                  What sets us apart is our commitment to sustainability. Our tools operate in an eco-friendly serverless environment, reducing computational exhaustion and minimizing carbon emissions. Join us on this journey to redefine cybersecurity while protecting our planet. 🌱🌍
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="https://i.ibb.co/4SptTGK/Arch.png"
                  alt="OxSecure Suite Architecture"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Dashboard Preview */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Interactive Security Dashboard</h2>
            <Card className="w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-primary" />
                  Security Overview
                </CardTitle>
                <CardDescription>Real-time insights into your security posture</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="threats">Threats</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <div className="mt-4 h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-bold mb-2">90/100</p>
                        <p className="text-lg font-medium">Overall Security Score</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="threats">
                    <div className="mt-4 h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-bold mb-2">3 Active | 20 Mitigated</p>
                        <p className="text-lg font-medium">Threat Status</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="users">
                    <div className="mt-4 h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-bold mb-2">140 Active | 5 Suspicious</p>
                        <p className="text-lg font-medium">User Activity</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Animated Security Graph */}
        <section className="py-16 bg-muted/50 relative z-10">
          <div  className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Security Performance</h2>
            <Card className="w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-primary" />
                  Threat Detection and Mitigation
                </CardTitle>
                <CardDescription>6-month overview of security incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={securityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="threats" stroke="hsl(var(--destructive))" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="mitigations" stroke="hsl(var(--primary))" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">OxSecure Suite Gallery 🖼️</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "https://i.ibb.co/5XZpjv0/Screenshot-2024-10-01-162209.png",
                "https://i.ibb.co/Lxwt1pd/Screenshot-2024-10-01-162237.png",
                "https://i.ibb.co/sFyqVSV/Screenshot-2024-10-01-151930.png",
                "https://i.ibb.co/nfZ3KB6/Screenshot-2024-10-01-152112.png",
                "https://i.ibb.co/VVVKQ2F/Screenshot-2024-10-01-152136.png",
                "https://i.ibb.co/vsjP2QP/Screenshot-2024-10-01-152202.png",
                "https://i.ibb.co/8dtGL3p/Screenshot-2024-10-01-162306.png",
                "https://i.ibb.co/RY8ZTpb/Screenshot-2024-10-01-150658.png",
                "https://i.ibb.co/bby0bkf/Screenshot-2024-10-01-151220.png",
                "https://i.ibb.co/Qv160cv/Screenshot-2024-10-01-151259.png",
                "https://i.ibb.co/VDFVcMm/Screenshot-2024-10-01-151513.png",
                "https://i.ibb.co/19k8W3L/Screenshot-2024-10-01-151544.png",
                "https://i.ibb.co/HHF5kFq/Screenshot-2024-10-01-151612.png",
                "https://i.ibb.co/bWmzczw/Screenshot-2024-10-01-151707.png"
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="contact" className="py-16 bg-muted/50  relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Feedback & Contact Us 📝</h2>
            <Card className="w-full max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                    <Input id="name" placeholder="Enter your name..." />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                    <Input id="email" type="email" placeholder="Enter your email..." />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                    <Textarea id="message" placeholder="Your feedback here..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full">Submit Feedback</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted py-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:underline">Features</Link></li>
                  <li><Link href="#" className="hover:underline">Pricing</Link></li>
                  <li><Link href="#" className="hover:underline">Case Studies</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:underline">About Us</Link></li>
                  <li><Link href="#" className="hover:underline">Careers</Link></li>
                  <li><Link href="#" className="hover:underline">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:underline">Blog</Link></li>
                  <li><Link href="#" className="hover:underline">Documentation</Link></li>
                  <li><Link href="#" className="hover:underline">Support</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center">
              <p>© 2024 OxSecure Suite. All Rights Reserved. Built with ❤️ by Aadi 🤠</p>
              <p className="mt-2">
                <Link href="https://www.linkedin.com/in/aditya-pandey" className="hover:underline">
                  Connect with me on LinkedIn: Aditya Pandey
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
