// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Gitlab, Heart, ArrowUp, Mail, Code } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
    data: {
        github: string;
        linkedin: string;
        gitlab: string;
        email?: string;
    };
}

export function Footer({ data }: FooterProps) {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: data.github,
            color: 'from-gray-600 to-gray-800',
            hoverColor: 'hover:from-gray-700 hover:to-gray-900'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: data.linkedin,
            color: 'from-blue-600 to-blue-700',
            hoverColor: 'hover:from-blue-700 hover:to-blue-800'
        },
        {
            name: 'GitLab',
            icon: Gitlab,
            href: data.gitlab,
            color: 'from-orange-500 to-red-500',
            hoverColor: 'hover:from-orange-600 hover:to-red-600'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.footer
            className="relative overflow-hidden bg-background border-t border-slate-200/50 dark:border-slate-800/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated background elements */}
            <motion.div
                animate={{
                    y: [-30, 30, -30],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-20 w-20 h-20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"
            />
            <motion.div
                animate={{
                    y: [20, -20, 20],
                    x: [-15, 15, -15],
                    rotate: [180, 360, 180]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute bottom-16 left-16 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
            />

            {/* Subtle background gradient - light theme friendly */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-pink-50/30 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 pointer-events-none" />

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Main content */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-12"
                >
                    {/* Logo/Brand */}
                    <motion.div
                        className="mb-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="inline-flex items-center gap-2 text-2xl font-bold">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                <Code className="h-6 w-6 text-white" />
                            </div>
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Saiful Islam
                            </span>
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md mx-auto"
                    >
                        Crafting digital experiences with passion and precision
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex justify-center gap-4 mb-8"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.div
                                key={social.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${social.color} ${social.hoverColor} shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                                        <social.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Email link if provided */}
                        {data.email && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <Link
                                    href={`mailto:${data.email}`}
                                    aria-label="Email"
                                >
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                        <Mail className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-8"
                />

                {/* Bottom section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <span>&copy; {currentYear} Saiful Islam. Made with</span>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 3
                            }}
                        >
                            <Heart className="h-4 w-4 text-red-500 fill-current" />
                        </motion.div>
                        <span>and lots of coffee</span>
                    </div>

                    {/* Back to top */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            onClick={scrollToTop}
                            variant="ghost"
                            size="sm"
                            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300"
                        >
                            <ArrowUp className="h-4 w-4 mr-2" />
                            Back to top
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
}