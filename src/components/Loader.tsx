// src/components/Loader.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
    isLoading: boolean;
}

export function Loader({ isLoading }: LoaderProps) {

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
                >
                    <div className="flex flex-col items-center gap-8">
                        <motion.div
                            className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg"
                            animate={{
                                borderRadius: ["25%", "50%", "25%", "50%"],
                                rotate: [0, 180, 360],
                                scale: [1, 1.1, 1, 0.9, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-center"
                        >
                            <motion.h2
                                animate={{
                                    backgroundPosition: ["0%", "100%", "0%"]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                            >
                                Saiful Islam
                            </motion.h2>
                            <p className="text-muted-foreground mt-2">Portfolio Loading...</p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}