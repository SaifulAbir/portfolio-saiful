'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CardDescription } from './card';

interface ExpandableDescriptionProps {
    description: string;
    maxLength?: number;
    className?: string;
}

export function ExpandableDescription({
    description,
    maxLength = 150,
    className = ""
}: ExpandableDescriptionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldTruncate = description.length > maxLength;

    const displayText = isExpanded ? description : description.slice(0, maxLength);

    return (
        <div className={`mb-4 ${className}`}>
            <CardDescription className="text-slate-600 dark:text-slate-400">
                {displayText}
                {!isExpanded && shouldTruncate && "..."}
            </CardDescription>
            {shouldTruncate && (
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 font-medium transition-colors group"
                >
                    {isExpanded ? (
                        <>
                            Show Less
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronUp className="h-3 w-3" />
                            </motion.div>
                        </>
                    ) : (
                        <>
                            Read More
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="h-3 w-3" />
                            </motion.div>
                        </>
                    )}
                </motion.button>
            )}
        </div>
    );
}