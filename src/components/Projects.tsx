// src/components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Github, Globe } from 'lucide-react';
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
}

interface ProjectsProps {
    data: Project[];
}

export function Projects({ data }: ProjectsProps) {
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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Projects</h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {data.map((project) => (
                    <motion.div key={project.id} variants={itemVariants}>
                        <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            {project.image && (
                                <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-800">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            )}
                            <CardHeader className="flex-grow">
                                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                                <CardDescription className="text-sm text-muted-foreground">
                                    {project.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardFooter className="flex gap-3 pt-4 border-t">
                                {project.githubLink && (
                                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="flex items-center gap-2">
                                            <Github className="h-4 w-4" /> GitHub
                                        </Button>
                                    </Link>
                                )}
                                {project.liveLink && (
                                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <Button className="flex items-center gap-2">
                                            <Globe className="h-4 w-4" /> Live Demo
                                        </Button>
                                    </Link>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}