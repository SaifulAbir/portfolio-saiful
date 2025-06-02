'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-primary hover:text-primary-foreground transition-colors">
                    Saiful Islam
                </Link>
                <div className="flex items-center gap-4">
                    <ul className="hidden md:flex space-x-6">
                        <li><Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                        <li><Link href="#skills" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
                        <li><Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                        <li><Link href="#timeline" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Timeline</Link></li>
                        <li><Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        aria-label="Toggle theme"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {theme === 'dark' ? (
                                <motion.div
                                    key="moon"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="sun"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}