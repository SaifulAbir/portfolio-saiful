'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Calendar, MapPin, Trophy, Briefcase, GraduationCap, Star } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    company: string;
    description: string;
    type?: 'work' | 'education' | 'achievement' | 'project';
    location?: string;
    duration?: string;
    skills?: string[];
    featured?: boolean;
}

interface TimelineProps {
    data: {
        title: string;
        events: TimelineEvent[];
    };
}

const getTypeColor = (type?: string) => {
    switch (type) {
        case 'work': return 'from-blue-500 to-indigo-500';
        case 'education': return 'from-green-500 to-emerald-500';
        case 'achievement': return 'from-amber-500 to-orange-500';
        case 'project': return 'from-purple-500 to-pink-500';
        default: return 'from-indigo-500 to-purple-500';
    }
};

const getTypeIcon = (type?: string) => {
    switch (type) {
        case 'work': return Briefcase;
        case 'education': return GraduationCap;
        case 'achievement': return Trophy;
        case 'project': return Star;
        default: return Briefcase;
    }
};

function TimelineCard({
    event,
    typeColor,
    alignment,
    ui,
}: {
    event: TimelineEvent;
    typeColor: string;
    alignment: 'left' | 'right';
    ui: { featured: string; current: string };
}) {
    const isCurrent = event.date.includes('Present') || event.date.includes('Heute');
    const justifyDate = alignment === 'left' ? 'justify-end' : 'justify-start';
    const justifyCompany = alignment === 'left' ? 'justify-end' : 'justify-start';
    const badgePosition = alignment === 'left' ? 'left-4' : 'right-4';

    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            className="group"
        >
            <Card
                className={`shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${
                    isCurrent ? 'ring-2 ring-green-400/50 dark:ring-green-500/40' : ''
                }`}
            >
                {event.featured && (
                    <div className={`absolute top-4 ${badgePosition} z-20`}>
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg"
                        >
                            <Star className="h-3 w-3" />
                            {ui.featured}
                        </motion.div>
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-r ${typeColor} rounded-lg`}
                />

                <CardHeader className="p-6 pb-4 relative z-10">
                    <div className={`flex items-center ${justifyDate} gap-2 mb-2 flex-wrap`}>
                        <Calendar className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        <CardDescription className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                            {event.date}
                        </CardDescription>
                        {isCurrent && (
                            <span className="flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                {ui.current}
                            </span>
                        )}
                        {event.duration && (
                            <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                                {event.duration}
                            </span>
                        )}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                        {event.title}
                    </CardTitle>
                    <div className={`flex items-center ${justifyCompany} gap-2 text-slate-600 dark:text-slate-400 flex-wrap`}>
                        <span className="font-medium">{event.company}</span>
                        {event.location && (
                            <>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    <span className="text-sm whitespace-nowrap">{event.location}</span>
                                </div>
                            </>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="p-6 pt-0 relative z-10">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {event.description}
                    </p>

                    {event.skills && event.skills.length > 0 && (
                        <div className={`flex flex-wrap gap-2 ${alignment === 'left' ? 'md:justify-end' : ''}`}>
                            {event.skills.map((skill, skillIndex) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: skillIndex * 0.05,
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="text-xs font-medium px-2 py-1 bg-slate-100/80 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200/80 dark:hover:bg-slate-600/50 transition-colors cursor-pointer"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}

export function Timeline({ data }: TimelineProps) {
    const { title, events } = data;
    const { data: langData } = useLanguage();
    const ui = langData.ui.timeline;
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

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
        hidden: { y: 80, opacity: 0, scale: 0.9 },
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

    return (
        <section className="py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 -z-10" />

            <motion.div
                animate={{ y: [-30, 30, -30], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{ y: [40, -40, 40], x: [-15, 15, -15], rotate: [180, 360, 180] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
                className="absolute top-96 left-16 w-16 h-16 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{ y: [-20, 20, -20], x: [10, -10, 10] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-40 right-12 w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-sm"
            />

            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
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
                        {ui.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="relative max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Timeline line: left-aligned on mobile, centered on desktop */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full overflow-hidden">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                        />
                    </div>

                    {events.map((event, index) => {
                        const typeColor = getTypeColor(event.type);
                        const TypeIcon = getTypeIcon(event.type);
                        const isLeft = index % 2 === 0;
                        const isCurrent = event.date.includes('Present') || event.date.includes('Heute');

                        return (
                            <motion.div
                                key={event.id}
                                variants={itemVariants}
                                className="mb-12"
                            >
                                {/* Mobile layout: dot left, card right */}
                                <div className="flex items-start md:hidden">
                                    <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0 z-20">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
                                            className={`w-12 h-12 bg-gradient-to-r ${typeColor} rounded-full border-4 border-white dark:border-slate-800 shadow-xl flex items-center justify-center relative overflow-hidden cursor-pointer`}
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                                className={`absolute inset-0 bg-gradient-to-r ${typeColor} rounded-full`}
                                            />
                                            {isCurrent ? (
                                                <span className="w-3 h-3 bg-green-400 rounded-full z-10 animate-pulse" />
                                            ) : (
                                                <TypeIcon className="h-5 w-5 text-white z-10" />
                                            )}
                                        </motion.div>
                                    </div>
                                    <div className="flex-1 pl-4">
                                        <TimelineCard event={event} typeColor={typeColor} alignment="right" ui={ui} />
                                    </div>
                                </div>

                                {/* Desktop layout: alternating left/right */}
                                <div className="hidden md:flex items-center w-full">
                                    <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : ''}`}>
                                        {isLeft && (
                                            <TimelineCard event={event} typeColor={typeColor} alignment="left" ui={ui} />
                                        )}
                                    </div>

                                    <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0 z-20 mx-4">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.6 } }}
                                            className={`w-12 h-12 bg-gradient-to-r ${typeColor} rounded-full border-4 border-white dark:border-slate-800 shadow-xl flex items-center justify-center relative overflow-hidden group cursor-pointer`}
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                                className={`absolute inset-0 bg-gradient-to-r ${typeColor} rounded-full`}
                                            />
                                            {isCurrent ? (
                                                <span className="w-3 h-3 bg-green-400 rounded-full z-10 animate-pulse" />
                                            ) : (
                                                <TypeIcon className="h-5 w-5 text-white z-10" />
                                            )}
                                        </motion.div>
                                    </div>

                                    <div className={`w-5/12 ${!isLeft ? 'pl-8 text-left' : ''}`}>
                                        {!isLeft && (
                                            <TimelineCard event={event} typeColor={typeColor} alignment="right" ui={ui} />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
