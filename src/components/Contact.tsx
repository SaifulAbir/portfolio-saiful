// src/components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface ContactProps {
    data: {
        email: string;
        socialLinks: {
            github: string;
            linkedin: string;
            twitter?: string;
        };
    };
}

export function Contact({ data }: ContactProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        alert('Thank you for your message! I\'ll get back to you soon.');
        setIsSubmitting(false);

        // Reset form
        (e.target as HTMLFormElement).reset();
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.8,
            },
        },
    };

    const socialIcons = [
        {
            name: 'Email',
            icon: Mail,
            href: `mailto:${data.email}`,
            color: 'from-red-500 to-orange-500',
            label: data.email
        },
        {
            name: 'GitHub',
            icon: Github,
            href: data.socialLinks.github,
            color: 'from-gray-600 to-gray-800',
            label: 'GitHub Profile'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: data.socialLinks.linkedin,
            color: 'from-blue-600 to-blue-700',
            label: 'LinkedIn Profile'
        },
        ...(data.socialLinks.twitter ? [{
            name: 'Twitter',
            icon: Twitter,
            href: data.socialLinks.twitter,
            color: 'from-sky-400 to-blue-500',
            label: 'Twitter Profile'
        }] : [])
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background with consistent gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 -z-10"></div>

            {/* Floating decorative elements */}
            <motion.div
                animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-16 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{
                    y: [30, -30, 30],
                    x: [-10, 10, -10],
                    rotate: [180, 360, 180]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{
                    y: [-15, 15, -15],
                    x: [8, -8, 8]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-1/2 right-8 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-sm"
            />

            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Title with gradient */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        animate={{
                            backgroundPosition: ["0%", "100%", "0%"]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]">
                            Get In Touch
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-slate-600 dark:text-slate-400 mt-6 text-lg max-w-2xl mx-auto"
                    >
                        Let&apos;s collaborate and bring your ideas to life. I&apos;m always excited to work on new projects and connect with fellow developers.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                                {/* Hover gradient effect */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 0.05, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg"
                                />

                                <CardHeader className="relative z-10">
                                    <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                        <MessageCircle className="h-6 w-6 text-indigo-600" />
                                        Send a Message
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="p-6 pt-0 relative z-10">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            className="grid w-full items-center gap-2"
                                        >
                                            <Label htmlFor="name" className="text-slate-700 dark:text-slate-300 font-medium">
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Your full name"
                                                required
                                                className="border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors bg-white/50 dark:bg-slate-900/50"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="grid w-full items-center gap-2"
                                        >
                                            <Label htmlFor="email" className="text-slate-700 dark:text-slate-300 font-medium">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your.email@example.com"
                                                required
                                                className="border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors bg-white/50 dark:bg-slate-900/50"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="grid w-full items-center gap-2"
                                        >
                                            <Label htmlFor="message" className="text-slate-700 dark:text-slate-300 font-medium">
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell me about your project or just say hello..."
                                                rows={5}
                                                required
                                                className="border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors bg-white/50 dark:bg-slate-900/50 resize-none"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                                            >
                                                {isSubmitting ? (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                                                        Sending...
                                                    </motion.div>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <Send className="h-4 w-4" />
                                                        Send Message
                                                    </div>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Info & Social Links */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Contact Info Card */}
                            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 0.05, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg"
                                />

                                <CardHeader className="relative z-10">
                                    <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                        <Mail className="h-6 w-6 text-indigo-600" />
                                        Let&apos;s Connect
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="p-6 pt-0 relative z-10">
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                        I&apos;m always interested in hearing about new opportunities, creative projects, and innovative ideas. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                                                <Mail className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-800 dark:text-slate-200">Email</p>
                                                <p className="text-sm">{data.email}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                                <MapPin className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-800 dark:text-slate-200">Location</p>
                                                <p className="text-sm">Available for remote work worldwide</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Social Links */}
                            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 0.05, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg"
                                />

                                <CardContent className="p-6 relative z-10">
                                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 text-center">
                                        Find me on social platforms
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {socialIcons.map((social, index) => (
                                            <motion.div
                                                key={social.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    y: -5,
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                <Link
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    <div className={`p-4 rounded-lg bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                                                        <div className="flex items-center gap-3">
                                                            <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                                            <div>
                                                                <p className="font-semibold">{social.name}</p>
                                                                <p className="text-xs opacity-90">{social.label}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}