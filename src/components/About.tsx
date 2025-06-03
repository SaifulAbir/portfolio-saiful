// src/components/About.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Code, Database, Palette, Zap, ArrowRight } from 'lucide-react';

interface AboutProps {
    data: {
        title: string;
        bio: string;
        profileImage: string;
    };
}

export function About({ data }: AboutProps) {
    const { title, bio } = data;

    // Key strengths/highlights
    const highlights = [
        {
            icon: Code,
            title: "Clean Code",
            description: "Writing maintainable, scalable solutions",
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: Database,
            title: "System Design",
            description: "Architecting robust backend systems",
            color: "from-purple-500 to-indigo-500"
        },
        {
            icon: Palette,
            title: "UI/UX Focus",
            description: "Creating intuitive user experiences",
            color: "from-pink-500 to-purple-500"
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimizing for speed and efficiency",
            color: "from-amber-500 to-orange-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            },
        },
    };

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background with consistent gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 -z-10"></div>

            {/* Floating decorative elements */}
            <motion.div
                animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-10 w-8 h-8 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{
                    y: [20, -20, 20],
                    x: [-10, 10, -10]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-40 left-10 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm"
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
                            {title}
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Bio Content - Enhanced */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <Card className="p-6 md:p-8 shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative overflow-hidden">
                            {/* Card background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />

                            <CardContent className="relative z-10 p-0">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 space-y-4"
                                >
                                    {bio.split('\n').map((paragraph, index) => (
                                        <motion.p
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </motion.div>

                                {/* Call to action */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="mt-8 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold cursor-pointer group"
                                >
                                    <span>Let&apos;s build something amazing together</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </motion.div>
                            </CardContent>
                        </Card>

                        {/* 3D Floating Cards (Interests/Hobbies) */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { emoji: '☕', title: 'Coffee Lover', desc: 'Fueled by caffeine' },
                                { emoji: '🎵', title: 'Music', desc: 'Coding with beats' },
                                { emoji: '📚', title: 'Learning', desc: 'Always curious' },
                                { emoji: '🎮', title: 'Gaming', desc: 'Pixel adventures' }
                            ].map((interest, index) => (
                                <motion.div
                                    key={interest.title}
                                    initial={{ opacity: 0, rotateY: -90 }}
                                    whileInView={{ opacity: 1, rotateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                                    whileHover={{
                                        rotateY: 15,
                                        rotateX: 10,
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20 cursor-pointer"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <motion.div
                                        animate={{
                                            rotateZ: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.5
                                        }}
                                        className="text-3xl mb-2"
                                    >
                                        {interest.emoji}
                                    </motion.div>
                                    <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">{interest.title}</h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">{interest.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Highlights Grid */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="grid gap-6">
                            {highlights.map((highlight) => (
                                <motion.div
                                    key={highlight.title}
                                    variants={cardVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        y: -4,
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }}
                                    className="group"
                                >
                                    <Card className="p-6 shadow-lg border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                        {/* Hover gradient effect */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileHover={{ opacity: 0.1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-lg`}
                                        />

                                        <CardContent className="relative z-10 p-0 flex items-start gap-4">
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className={`p-3 rounded-lg bg-gradient-to-r ${highlight.color} shadow-lg`}
                                            >
                                                <highlight.icon className="h-6 w-6 text-white" />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                    {highlight.title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                                                    {highlight.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}