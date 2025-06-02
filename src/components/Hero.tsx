// src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Github, Linkedin, Gitlab, Download } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
    data: {
        name: string;
        title: string;
        description: string;
        cta: string;
        socialLinks: {
            github: string;
            linkedin: string;
            gitlab: string;
        };
    };
}

export function Hero({ data }: HeroProps) {
    const { name, title, description, cta, socialLinks } = data;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.section
            className="flex flex-col items-center justify-center text-center py-20 min-h-[60vh] md:min-h-[70vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary" variants={itemVariants}>
                Hi, I&apos;m {name}
            </motion.h1>
            <motion.p className="text-xl md:text-3xl text-muted-foreground mb-6" variants={itemVariants}>
                {title}
            </motion.p>
            <motion.p className="max-w-2xl text-lg md:text-xl leading-relaxed mb-8 text-secondary-foreground" variants={itemVariants}>
                {description}
            </motion.p>
            <motion.div className="flex flex-col md:flex-row gap-4 mb-8" variants={itemVariants}>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                    <Button size="lg" className="px-8 py-3 text-lg">
                        <Download className="mr-2 h-5 w-5" /> {cta}
                    </Button>
                </Link>
                {/* Optional: Add a contact button */}
                {/* <Link href="#contact">
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
            Contact Me
          </Button>
        </Link> */}
            </motion.div>
            <motion.div className="flex gap-6" variants={itemVariants}>
                {socialLinks.github && (
                    <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                            <Github className="h-7 w-7" />
                        </Button>
                    </Link>
                )}
                {socialLinks.linkedin && (
                    <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                            <Linkedin className="h-7 w-7" />
                        </Button>
                    </Link>
                )}
                {socialLinks.gitlab && (
                    <Link href={socialLinks.gitlab} target="_blank" rel="noopener noreferrer" aria-label="GitLab">
                        <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                            <Gitlab className="h-7 w-7" />
                        </Button>
                    </Link>
                )}
            </motion.div>
        </motion.section>
    );
}