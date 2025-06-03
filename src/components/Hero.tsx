// src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Github, Linkedin, Gitlab, Download, MapPin, Trophy, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeroProps {
    data: {
        name: string;
        title: string;
        description: string;
        cta: string;
        profileImage: string;
        socialLinks: {
            github: string;
            linkedin: string;
            gitlab: string;
        };
    };
}

export function Hero({ data }: HeroProps) {
    const { name, description, cta, socialLinks, profileImage } = data;

    // Consolidated skills with more specific and varied expertise
    const skills = [
        "Full-Stack Developer",
        "React Specialist",
        "Django Expert",
        "Database Architect",
        "API Designer",
        "Problem Solver",
        "UI/UX Developer"
    ];

    // Tech stack specializations
    const techStack = [
        { name: "Python", color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", color: "from-green-500 to-emerald-500" },
        { name: "TypeScript", color: "from-blue-600 to-indigo-600" },
        { name: "React", color: "from-green-600 to-green-500" }
    ];

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [skills.length]);

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
            className="relative min-h-screen flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 -z-10"></div>

            {/* Professional Badges - Floating Elements */}
            <>
                {/* Years of Experience Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute top-4 sm:top-6 md:top-10 left-2 sm:left-4 lg:left-20 z-10"
                >
                    <motion.div
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border border-white/20"
                    >
                        <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                            5+ Years Experience
                        </span>
                    </motion.div>
                </motion.div>

                {/* Current Status Badge */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute top-4 sm:top-6 md:top-10 right-2 sm:right-4 lg:right-20 z-10"
                >
                    <motion.div
                        animate={{ y: [5, -5, 5] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border border-white/20"
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                            Available for opportunities
                        </span>
                    </motion.div>
                </motion.div>

                {/* Location Badge - Using viewport-relative positioning */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-[20vh] left-4 lg:left-20 hidden lg:block z-10"
                >
                    <motion.div
                        animate={{ x: [-3, 3, -3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20"
                    >
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Based in Chemnitz, Germany</span>
                    </motion.div>
                </motion.div>
            </>

            {/* Main Content Container - Using viewport-relative spacing */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full pt-4 sm:pt-6 md:pt-8 pb-[15vh] space-y-4 md:space-y-6">

                {/* Professional Avatar with Gradient Effects */}
                <motion.div
                    className="relative"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* Animated gradient rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75"
                    />

                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 rounded-full opacity-90"
                    />

                    {/* Avatar container */}
                    <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-1">
                        <img
                            src={profileImage}
                            alt={`${name} Profile Picture`}
                            className="w-full h-full object-cover object-top rounded-full scale-110"
                            style={{ objectPosition: '45% 20%' }}
                        />
                    </div>

                    {/* Floating elements */}
                    <>
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-80 blur-sm"
                        />
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 blur-sm"
                        />
                    </>
                </motion.div>

                {/* Name and Title */}
                <motion.h1
                    className="font-bold text-center leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    variants={itemVariants}
                >
                    Hi, I&apos;m{' '}
                    <motion.span
                        animate={{
                            backgroundPosition: ["0%", "100%", "0%"]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-[length:300%_auto] transition-all duration-300"
                    >
                        {name}
                    </motion.span>
                </motion.h1>

                {/* Dynamic Skills Display */}
                <motion.div
                    className="flex items-center justify-center h-10 sm:h-12 md:h-14"
                    variants={itemVariants}
                >
                    <motion.div
                        key={currentSkillIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    >
                        <motion.span
                            animate={{
                                backgroundPosition: ["0%", "100%", "0%"]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                        >
                            {skills[currentSkillIndex]}
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Description */}
                <motion.p
                    className="max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300 text-center text-sm sm:text-base md:text-lg px-4"
                    variants={itemVariants}
                >
                    {description}
                </motion.p>

                {/* Tech Stack Tags */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 sm:gap-3"
                    variants={itemVariants}
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`rounded-full bg-gradient-to-r ${tech.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm`}
                        >
                            {tech.name}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div className="flex flex-col sm:flex-row gap-3" variants={itemVariants}>
                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg"
                        >
                            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            {cta}
                        </Button>
                    </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="flex justify-center gap-4 sm:gap-6"
                    variants={itemVariants}
                >
                    {socialLinks.github && (
                        <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-gradient-to-r hover:from-indigo-100 hover:via-purple-100 hover:to-pink-100 dark:hover:from-indigo-900/20 dark:hover:via-purple-900/20 dark:hover:to-pink-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110"
                            >
                                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                            </Button>
                        </Link>
                    )}
                    {socialLinks.linkedin && (
                        <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-gradient-to-r hover:from-purple-100 hover:via-pink-100 hover:to-indigo-100 dark:hover:from-purple-900/20 dark:hover:via-pink-900/20 dark:hover:to-indigo-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                            </Button>
                        </Link>
                    )}
                    {socialLinks.gitlab && (
                        <Link href={socialLinks.gitlab} target="_blank" rel="noopener noreferrer" aria-label="GitLab">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-gradient-to-r hover:from-pink-100 hover:via-indigo-100 hover:to-purple-100 dark:hover:from-pink-900/20 dark:hover:via-indigo-900/20 dark:hover:to-purple-900/20 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 hover:scale-110"
                            >
                                <Gitlab className="h-5 w-5 sm:h-6 sm:w-6" />
                            </Button>
                        </Link>
                    )}
                </motion.div>
            </div>

            {/* Enhanced Scroll Indicator - Using viewport-relative positioning */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => {
                        const nextSection = document.querySelector('main > section:nth-child(2)');
                        nextSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 mb-2 font-medium">
                        Scroll to explore
                    </span>
                    <div className="relative">
                        {/* Enhanced glowing background */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-sm"
                        />

                        {/* Mouse scroll container with enhanced styling */}
                        <div className="relative w-6 h-10 sm:w-8 sm:h-12 border-2 border-slate-400 dark:border-slate-500 group-hover:border-indigo-500 dark:group-hover:border-indigo-400 rounded-full flex justify-center transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg">
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1.5 h-2 sm:w-2 sm:h-3 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-2 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Enhanced chevron with more prominent styling */}
                    <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="mt-2"
                    >
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 drop-shadow-sm" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}