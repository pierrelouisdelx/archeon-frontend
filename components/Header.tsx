'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                                AI Consulting
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <button
                                onClick={() => scrollToSection('services')}
                                className='text-slate-300 hover:text-cyan-400 px-3 py-2 transition-colors'
                            >
                                Services
                            </button>
                            <button
                                onClick={() =>
                                    scrollToSection('specializations')
                                }
                                className='text-slate-300 hover:text-cyan-400 px-3 py-2 transition-colors'
                            >
                                Expertise
                            </button>
                            <button
                                onClick={() => scrollToSection('credentials')}
                                className='text-slate-300 hover:text-cyan-400 px-3 py-2 transition-colors'
                            >
                                About
                            </button>
                            <Button
                                onClick={() => scrollToSection('contact')}
                                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                            >
                                Contact
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-slate-300'
                        >
                            {isOpen ? (
                                <X className='h-6 w-6' />
                            ) : (
                                <Menu className='h-6 w-6' />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <button
                            onClick={() => scrollToSection('services')}
                            className='text-slate-300 hover:text-cyan-400 block px-3 py-2 w-full text-left'
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('specializations')}
                            className='text-slate-300 hover:text-cyan-400 block px-3 py-2 w-full text-left'
                        >
                            Expertise
                        </button>
                        <button
                            onClick={() => scrollToSection('credentials')}
                            className='text-slate-300 hover:text-cyan-400 block px-3 py-2 w-full text-left'
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className='text-cyan-400 block px-3 py-2 w-full text-left'
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
