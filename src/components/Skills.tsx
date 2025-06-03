// src/components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Code, Database, Server, Settings, Palette, Globe, Smartphone, Zap } from 'lucide-react';

interface SkillCategory {
    name: string;
    technologies: string[];
}

interface SkillsProps {
    data: {
        title: string;
        categories: SkillCategory[];
    };
}

export function Skills({ data }: SkillsProps) {
    const { title, categories } = data;

    // Icon mapping for different categories
    const getCategoryIcon = (categoryName: string) => {
        const iconMap: { [key: string]: React.ComponentType } = {
            'Frontend': Code,
            'Backend': Server,
            'Database': Database,
            'DevOps': Settings,
            'Design': Palette,
            'Web': Globe,
            'Mobile': Smartphone,
            'Tools': Zap,
        };

        // Find matching icon or default to Code
        const IconComponent = Object.keys(iconMap).find(key =>
            categoryName.toLowerCase().includes(key.toLowerCase())
        ) ? iconMap[Object.keys(iconMap).find(key =>
            categoryName.toLowerCase().includes(key.toLowerCase())
        )!] : Code;

        return IconComponent;
    };

    // Color gradients for each category
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
                    y: [-30, 30, -30],
                    rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 right-20 w-10 h-10 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{
                    y: [30, -30, 30],
                    x: [-15, 15, -15]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-60 left-16 w-14 h-14 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-sm"
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {categories.map((category, index) => {
                        const IconComponent = getCategoryIcon(category.name);
                        const gradientColor = getGradientColor(index);

                        return (
                            <motion.div
                                key={category.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group h-full"
                            >
                                <Card className="h-full flex flex-col shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                    {/* Hover gradient effect */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileHover={{ opacity: 0.1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`absolute inset-0 bg-gradient-to-r ${gradientColor} rounded-lg`}
                                    />

                                    <CardHeader className="relative z-10 pb-4">
                                        <div className="flex items-center justify-center mb-4">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                                className={`p-3 rounded-xl bg-gradient-to-r ${gradientColor} shadow-lg`}
                                            >
                                                <IconComponent className="h-6 w-6 text-white" />
                                            </motion.div>
                                        </div>
                                        <CardTitle className="text-xl font-bold text-center text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {category.name}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex-grow relative z-10 pt-0">
                                        <div className="grid grid-cols-1 gap-3">
                                            {category.technologies.map((tech, techIndex) => (
                                                <motion.div
                                                    key={tech}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: techIndex * 0.1 + index * 0.05
                                                    }}
                                                    whileHover={{
                                                        x: 4,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-50/80 dark:bg-slate-700/50 hover:bg-slate-100/80 dark:hover:bg-slate-600/50 transition-colors cursor-pointer group/tech"
                                                >
                                                    <motion.div
                                                        animate={{
                                                            scale: [1, 1.2, 1],
                                                            rotate: [0, 180, 360]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: techIndex * 0.2
                                                        }}
                                                        className={`w-2 h-2 bg-gradient-to-r ${gradientColor} rounded-full`}
                                                    />
                                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover/tech:text-slate-800 dark:group-hover/tech:text-slate-100 transition-colors">
                                                        {tech}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}