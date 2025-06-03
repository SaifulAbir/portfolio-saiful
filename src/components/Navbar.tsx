'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Moon, Sun, Menu, X, Code } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#about', label: 'About', color: 'indigo' },
        { href: '#skills', label: 'Skills', color: 'purple' },
        { href: '#education', label: 'Education', color: 'pink' },
        { href: '#projects', label: 'Projects', color: 'indigo' },
        { href: '#timeline', label: 'Timeline', color: 'purple' },
        { href: '#contact', label: 'Contact', color: 'pink' }
    ];

    const getGradientClass = (color: string) => {
        const gradients = {
            indigo: 'from-indigo-500 to-purple-500',
            purple: 'from-purple-500 to-pink-500',
            pink: 'from-pink-500 to-indigo-500'
        };
        return gradients[color as keyof typeof gradients] || gradients.indigo;
    };

    const getHoverColor = (color: string) => {
        const colors = {
            indigo: 'hover:text-indigo-600 dark:hover:text-indigo-400',
            purple: 'hover:text-purple-600 dark:hover:text-purple-400',
            pink: 'hover:text-pink-600 dark:hover:text-pink-400'
        };
        return colors[color as keyof typeof colors] || colors.indigo;
    };

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-slate-900/5'
                    : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'
                    }`}
            >
                {/* Subtle gradient overlay when scrolled */}
                {isScrolled && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"
                    />
                )}

                <div className="container mx-auto px-4 py-3 flex justify-between items-center relative z-10">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg"
                            >
                                <Code className="h-4 w-4 text-white" />
                            </motion.div>
                            <motion.h1
                                animate={{
                                    backgroundPosition: ["0%", "100%", "0%"]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] group-hover:bg-[length:300%_auto] transition-all duration-300"
                            >
                                Saiful Islam
                            </motion.h1>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="flex items-center gap-6">
                        <ul className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-sm font-medium text-slate-600 dark:text-slate-300 ${getHoverColor(item.color)} transition-all duration-300 relative group py-2`}
                                    >
                                        {item.label}
                                        <motion.span
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${getGradientClass(item.color)} rounded-full`}
                                            initial={{ width: 0 }}
                                            whileHover={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Hover glow effect */}
                                        <motion.span
                                            className={`absolute inset-0 bg-gradient-to-r ${getGradientClass(item.color)} rounded-lg opacity-0 blur-xl`}
                                            whileHover={{ opacity: 0.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Theme Toggle */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                aria-label="Toggle theme"
                                className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Hover gradient background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />

                                <AnimatePresence mode="wait" initial={false}>
                                    {theme === 'dark' ? (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative z-10"
                                        >
                                            <Moon className="h-[1.2rem] w-[1.2rem] text-slate-600 dark:text-slate-300 group-hover:text-indigo-500 transition-colors" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative z-10"
                                        >
                                            <Sun className="h-[1.2rem] w-[1.2rem] text-slate-600 dark:text-slate-300 group-hover:text-yellow-500 transition-colors" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="md:hidden"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle mobile menu"
                                className="hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                            >
                                <AnimatePresence mode="wait">
                                    {isMobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-5 w-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-5 w-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={closeMobileMenu}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed top-16 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50 z-50 md:hidden overflow-hidden"
                        >
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

                            <div className="relative z-10 p-6">
                                <ul className="space-y-4">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className={`block text-lg font-medium text-slate-700 dark:text-slate-300 ${getHoverColor(item.color)} transition-all duration-300 py-3 px-4 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-800/50 relative group`}
                                            >
                                                <motion.div
                                                    className={`absolute inset-0 bg-gradient-to-r ${getGradientClass(item.color)} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                                                />
                                                <span className="relative z-10">{item.label}</span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}