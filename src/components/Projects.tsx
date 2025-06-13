// src/components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { ExpandableDescription } from './ui/ExpandableDescription';
import { Github, Globe, Star, Calendar, Code2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubLink?: string;
    liveLink?: string;
    image?: string;
    featured?: boolean;
    status?: 'completed' | 'in-progress' | 'planning';
    year?: string;
}

interface ProjectsProps {
    data: Project[];
}

export function Projects({ data }: ProjectsProps) {
    // Color gradients for different projects
    const getGradientColor = (index: number) => {
        const gradients = [
            "from-indigo-500 to-blue-500",
            "from-purple-500 to-indigo-500",
            "from-pink-500 to-purple-500",
            "from-amber-500 to-orange-500",
            "from-green-500 to-emerald-500",
            "from-cyan-500 to-blue-500",
            "from-red-500 to-pink-500",
            "from-teal-500 to-cyan-500"
        ];
        return gradients[index % gradients.length];
    };

    const getStatusColor = (status?: string) => {
        switch (status) {
            case 'completed': return 'from-green-500 to-emerald-500';
            case 'in-progress': return 'from-amber-500 to-orange-500';
            case 'planning': return 'from-blue-500 to-cyan-500';
            default: return 'from-gray-500 to-slate-500';
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.7,
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
                    y: [-40, 40, -40],
                    rotate: [0, 180, 360]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-16 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{
                    y: [40, -40, 40],
                    x: [-20, 20, -20]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-96 left-12 w-16 h-16 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{
                    y: [-25, 25, -25],
                    rotate: [360, 180, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 right-32 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-sm"
            />

            <div className="container mx-auto px-4 max-w-7xl">
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
                            My Projects
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
                        Explore my latest work and creative solutions
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {data.map((project, index) => {
                        const gradientColor = getGradientColor(index);
                        const statusColor = getStatusColor(project.status);

                        return (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    y: -12,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group h-full"
                            >
                                <Card className="flex flex-col h-full overflow-hidden shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative">
                                    {/* Featured badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <motion.div
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg"
                                            >
                                                <Star className="h-3 w-3" />
                                                Featured
                                            </motion.div>
                                        </div>
                                    )}

                                    {/* Hover gradient effect */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileHover={{ opacity: 0.1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`absolute inset-0 bg-gradient-to-r ${gradientColor} rounded-lg`}
                                    />

                                    {/* Project Image */}
                                    {/* Project Image */}
                                    <div className="relative w-full h-48 overflow-hidden">
                                        {project.image ? (
                                            <>
                                                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800" />
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    className="transition-all duration-500 group-hover:scale-110"
                                                />
                                            </>
                                        ) : (
                                            // Beautiful fallback for projects without images
                                            <div className={`relative w-full h-full bg-gradient-to-br ${gradientColor} flex items-center justify-center`}>
                                                {/* Animated background pattern */}
                                                <div className="absolute inset-0 opacity-10">
                                                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full animate-pulse" />
                                                    <div className="absolute top-8 right-6 w-4 h-4 border border-white rounded-full animate-ping" />
                                                    <div className="absolute bottom-6 left-8 w-6 h-6 border-2 border-white rounded-full animate-bounce" />
                                                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse" />
                                                    {/* Code-like pattern */}
                                                    <div className="absolute top-1/3 left-1/4 w-16 h-0.5 bg-white/30 rounded" />
                                                    <div className="absolute top-1/3 left-1/4 mt-2 w-12 h-0.5 bg-white/20 rounded" />
                                                    <div className="absolute top-1/3 left-1/4 mt-4 w-20 h-0.5 bg-white/25 rounded" />
                                                </div>

                                                {/* Main icon */}
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                        rotate: [0, 5, -5, 0]
                                                    }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="relative z-10 p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30"
                                                >
                                                    <Code2 className="h-12 w-12 text-white drop-shadow-lg" />
                                                </motion.div>

                                                {/* Floating elements */}
                                                <motion.div
                                                    animate={{
                                                        y: [-10, 10, -10],
                                                        x: [-5, 5, -5]
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                    className="absolute top-6 right-6 p-2 bg-white/15 backdrop-blur-sm rounded-lg"
                                                >
                                                    <Github className="h-4 w-4 text-white" />
                                                </motion.div>

                                                <motion.div
                                                    animate={{
                                                        y: [10, -10, 10],
                                                        x: [5, -5, 5]
                                                    }}
                                                    transition={{
                                                        duration: 2.5,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: 1
                                                    }}
                                                    className="absolute bottom-6 left-6 p-2 bg-white/15 backdrop-blur-sm rounded-lg"
                                                >
                                                    <Globe className="h-4 w-4 text-white" />
                                                </motion.div>
                                            </div>
                                        )}

                                        {/* Overlay on hover - now works for both image and fallback */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-4"
                                        >
                                            <div className="flex gap-2">
                                                {project.githubLink && (
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                                                                <Github className="h-4 w-4 text-white" />
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                )}
                                                {project.liveLink && (
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                                                                <ExternalLink className="h-4 w-4 text-white" />
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>

                                    <CardHeader className="flex-grow relative z-10 pb-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {project.title}
                                            </CardTitle>
                                            {project.year && (
                                                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                                    <Calendar className="h-3 w-3" />
                                                    {project.year}
                                                </div>
                                            )}
                                        </div>

                                        {/* Status indicator */}
                                        {project.status && (
                                            <div className="mb-3">
                                                <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gradient-to-r ${statusColor} text-white rounded-full shadow-sm`}>
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="w-1.5 h-1.5 bg-white rounded-full"
                                                    />
                                                    {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                                                </span>
                                            </div>
                                        )}

                                        {/* <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                                            {project.description}
                                        </CardDescription> */}
                                        <ExpandableDescription
                                            description={project.description}
                                            maxLength={90}
                                        />

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: techIndex * 0.05
                                                    }}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-slate-100/80 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200/80 dark:hover:bg-slate-600/50 transition-colors cursor-pointer"
                                                >
                                                    <Code2 className="h-3 w-3" />
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </CardHeader>

                                    {/* Footer with buttons */}
                                    <CardFooter className="flex gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-700/50 relative z-10">
                                        {project.githubLink && (
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1"
                                            >
                                                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="block">
                                                    <Button variant="outline" className="w-full flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                                        <Github className="h-4 w-4" />
                                                        Code
                                                    </Button>
                                                </Link>
                                            </motion.div>
                                        )}
                                        {project.liveLink && (
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1"
                                            >
                                                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block">
                                                    <Button className={`w-full flex items-center gap-2 bg-gradient-to-r ${gradientColor} hover:shadow-lg transition-all`}>
                                                        <Globe className="h-4 w-4" />
                                                        Live Demo
                                                    </Button>
                                                </Link>
                                            </motion.div>
                                        )}
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}