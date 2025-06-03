// src/components/Education.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Calendar, MapPin, Award, Star, ArrowRight } from 'lucide-react';

interface EducationProps {
    data: {
        title: string;
        institutions: Array<{
            degree: string;
            institution: string;
            location: string;
            period: string;
            description: string;
            achievements?: string[];
            gpa?: string;
        }>;
    };
}

export function Education({ data }: EducationProps) {
    const { title, institutions } = data;

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
        <section id="education" className="py-16 md:py-24 relative overflow-hidden">
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
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-slate-600 dark:text-slate-400 mt-6 text-lg max-w-2xl mx-auto"
                    >
                        My academic journey and educational background
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Education Cards */}
                    <div className="space-y-8">
                        {institutions.map((edu, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.02,
                                    y: -4,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group"
                            >
                                <Card className="p-6 md:p-8 shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm relative overflow-hidden">
                                    {/* Card background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />

                                    {/* Hover gradient effect */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileHover={{ opacity: 0.1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"
                                    />

                                    <CardContent className="relative z-10 p-0">
                                        <div className="flex items-start gap-4 mb-4">
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                                            >
                                                <GraduationCap className="h-6 w-6 text-white" />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                <p className="font-semibold text-lg text-indigo-600 dark:text-indigo-400 mb-2">
                                                    {edu.institution}
                                                </p>
                                                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{edu.period}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="h-4 w-4" />
                                                        <span>{edu.location}</span>
                                                    </div>
                                                    {edu.gpa && (
                                                        <div className="flex items-center gap-1">
                                                            <Star className="h-4 w-4" />
                                                            <span>GPA: {edu.gpa}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                            className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4"
                                        >
                                            {edu.description}
                                        </motion.p>

                                        {/* Achievements */}
                                        {edu.achievements && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                                className="space-y-2"
                                            >
                                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                                    <Award className="h-4 w-4" />
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-1">
                                                    {edu.achievements.map((achievement, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                                                            className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                                                        >
                                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                                            {achievement}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}