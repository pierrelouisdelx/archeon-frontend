'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
            {/* Background Image with Overlay */}
            <div className='absolute inset-0 z-0'>
                <Image
                    src='https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMEFJfGVufDF8fHx8MTc2MzY1NDczOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                    alt='Futuristic AI Technology'
                    className='w-full h-full object-cover'
                    width={1000}
                    height={1000}
                />
                <div className='absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950'></div>
            </div>

            {/* Animated Grid Overlay */}
            <div className='absolute inset-0 z-0 opacity-20'>
                <div
                    className='absolute inset-0'
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8'>
                    <Sparkles className='w-4 h-4 text-cyan-400' />
                    <span className='text-sm text-cyan-300'>
                        Enterprise AI & Software Solutions
                    </span>
                </div>

                <h1 className='mb-6 max-w-4xl mx-auto'>
                    <span className='block'>Transforming Vision into</span>
                    <span className='block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                        Intelligent Solutions
                    </span>
                </h1>

                <p className='mb-8 max-w-2xl mx-auto text-slate-300'>
                    Elite AI & software consulting powered by NVIDIA and Siemens
                    Healthineers expertise. We deliver cutting-edge fullstack
                    development, LLM optimization, and healthcare technology
                    solutions.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <Button
                        onClick={scrollToContact}
                        size='lg'
                        className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group'
                    >
                        Start Your Project
                        <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </Button>
                    <Button
                        onClick={() => {
                            const element = document.getElementById('services');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        size='lg'
                        variant='outline'
                        className='border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
                    >
                        Explore Services
                    </Button>
                </div>

                {/* Stats */}
                <div className='mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto'>
                    <div className='p-6 rounded-lg bg-slate-900/50 border border-cyan-500/20 backdrop-blur-sm'>
                        <div className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            Fortune 500
                        </div>
                        <p className='text-sm text-slate-400 mt-2'>
                            Enterprise Experience
                        </p>
                    </div>
                    <div className='p-6 rounded-lg bg-slate-900/50 border border-cyan-500/20 backdrop-blur-sm'>
                        <div className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            Healthcare AI
                        </div>
                        <p className='text-sm text-slate-400 mt-2'>
                            Deep Specialization
                        </p>
                    </div>
                    <div className='p-6 rounded-lg bg-slate-900/50 border border-cyan-500/20 backdrop-blur-sm'>
                        <div className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            LLM Experts
                        </div>
                        <p className='text-sm text-slate-400 mt-2'>
                            Optimization Specialists
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
