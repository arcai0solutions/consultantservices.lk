'use client';

import React, { useState, useEffect } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const fullText = 'Welcome to Your Corporate Compliance Partner';

    useEffect(() => {
        let currentIndex = 0;
        // 45 characters in 2.3s = ~51ms per character
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setIsComplete(true);
                setIsFading(true);
                // Fade out and call onComplete
                setTimeout(() => {
                    onComplete();
                }, 500);
            }
        }, 51);

        return () => clearInterval(typingInterval);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100] bg-[#0B1B32] flex items-center justify-center transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="text-center px-6">
                <h1
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                    {displayedText}
                    <span
                        className={`inline-block w-[3px] h-[1em] bg-white ml-1 align-middle ${isComplete ? 'opacity-0' : 'animate-pulse'}`}
                    />
                </h1>
            </div>
        </div>
    );
};

export default Preloader;
