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
import { Shield, Lock, Users, BarChart3, Globe, Zap, Brain, Scan, FileText, Palette, Sun, Moon, ChevronDown, Globe2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


  if (!mounted) return null;

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300 relative">


        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center mb-4 lg:mb-0">
              <Globe2 className="w-8 h-8 mr-2 text-primary" />
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

          <div className="container mx-auto px-4 text-center z-10">
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
              className="text-5xl font-bold mb-4 z-10 text-white drop-shadow-lg"
            >
              <span className="text-primary">OxSuite</span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto z-10 text-white drop-shadow-lg"
            >
              AI-Powered Cybersecurity Tools for the Modern Enterprise
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex justify-center space-x-4 z-10"
              animate={{ y: [0, -5, 0] }} // Infinite animation
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90" 
                onClick={() => window.open("https://oxsuite.streamlit.app", "_blank")}
              >
                Get Started
              </Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-12 text-md text-muted-foreground"
            >
              <p>Trusted by over 70+ individulas worldwide</p>
              
            </motion.div>

          </div>

          {/* Floating Chevron */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.section>


        {/* Products Section */}
        <section id="products" className="py-24 bg-muted/30 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our AI-Powered Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: "OxInteLL 🧠",
                  description: "Advanced Cybersecurity Intelligence",
                  features: [
                    "AI-driven Threat Detection",
                    "Real-time Vulnerability Analysis",
                    "Secure Code Inspection",
                    "Automated Security Scans",
                    "Gemini LLM Integration"
                  ]
                },
                {
                  icon: FileText,
                  title: "OxRAG 🤿",
                  description: "Intelligent File Analysis",
                  features: [
                    "Multi-format Document Analysis",
                    "AI-Powered Data Extraction",
                    "Voice-Activated Queries",
                    "High-speed Processing",
                    "Interactive Q&A Capability"
                  ]
                },
                {
                  icon: Palette,
                  title: "OxImaGen 🎨",
                  description: "AI-Powered Visual Security",
                  features: [
                    "Secure Image Generation",
                    "Visual Threat Detection",
                    "Image-based Story Analysis",
                    "Multi-lingual Image Processing",
                    "Visual Data Protection"
                  ]
                },
                {
                  icon: Scan,
                  title: "OxScanner 🚀",
                  description: "Comprehensive Network Security",
                  features: [
                    "Advanced Network Scanning",
                    "Threat Simulation & Testing",
                    "Intelligent Traceroute Analysis",
                    "Real-time Attack Prevention",
                    "Network Vulnerability Assessment"
                  ]
                }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                    features={product.features}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-background relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  position: "CTO, TechCorp",
                  content: "OxSuite has revolutionized our approach to cybersecurity. The AI-driven insights have been invaluable.",
                  avatar: "https://i.ibb.co/VW0Tfdq/Ox-Ima-Gen-3-1.png"
                },
                {
                  name: "Jane Smith",
                  position: "CISO, SecureNet",
                  content: "The level of protection and intelligence provided by OxSuite is unmatched. It's a game-changer for our organization.",
                  avatar: "https://i.ibb.co/XFTFq83/Ox-Ima-Gen-2-1.png"
                },
                {
                  name: "Alex Johnson",
                  position: "IT Director, GlobalTech",
                  content: "OxSuite's intuitive interface and powerful features have significantly enhanced our security posture.",
                  avatar: "https://i.ibb.co/bQY5dP6/Ox-Ima-Gen-1-5.png"
                }
                
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <blockquote className="text-lg mb-4 flex-grow">{testimonial.content}</blockquote>
                      <div className="flex items-center">
                        <Image src={testimonial.avatar} width={60} height={60} alt={testimonial.name} className="rounded-full mr-4" />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
              <div className="relative h-96 group">
                <Image
                  src="https://i.ibb.co/4SptTGK/Arch.png"
                  alt="OxSecure Suite Architecture"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg shadow-lg group-hover:scale-110  transition-transform duration-300 ease-in-out"
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
          <div className="container mx-auto px-2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              OxSuite Gallery 🖼️
            </h2>
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              arrows={false}
              appendDots={(dots) => (
                <div>
                  <ul className="custom-dots">{dots}</ul>
                </div>
              )}
              customPaging={() => (
                <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-white dark:bg-gray-500 dark:hover:bg-white"></button>
              )}
            >
              {Array.from({ length: 20 }, (_, i) => `/${i + 1}.png`).map((src, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center group"
                >
                  <div className="relative  w-full overflow-hidden rounded-3xl shadow-lg border-4 border-transparent">
                    <img
                      src={src}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-[300px] sm:h-[400px] lg:h-[calc(80vw/2.1)] object-contain rounded-3xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/50 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Digital Assets?</h2>
              <p className="text-xl mb-8">Get in touch with our team of experts for a personalized demo and security assessment.</p>
            </div>
            <Card className="w-full max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea id="message" placeholder="How can we help you?" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">Request Demo</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted py-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4 mb-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </Link>
            </div>
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

