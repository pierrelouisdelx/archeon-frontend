import Image from 'next/image';
import { Heart, Cpu, Zap, Database, Sparkles } from 'lucide-react';

export function Specializations() {
    const specializations = [
        {
            icon: Heart,
            title: 'Healthcare Technology',
            description:
                'Deep expertise in medical imaging, clinical workflows, and healthcare compliance with Siemens Healthineers background.',
            color: 'text-red-400',
        },
        {
            icon: Cpu,
            title: 'LLM Optimization',
            description:
                'Advanced techniques for model compression, inference optimization, and fine-tuning for production environments.',
            color: 'text-cyan-400',
        },
        {
            icon: Zap,
            title: 'GPU Acceleration',
            description:
                'NVIDIA-powered solutions for high-performance computing, parallel processing, and accelerated AI workloads.',
            color: 'text-green-400',
        },
        {
            icon: Database,
            title: 'Enterprise Architecture',
            description:
                'Scalable system design, microservices architecture, and cloud-native solutions for enterprise deployments.',
            color: 'text-purple-400',
        },
    ];

    return (
        <section
            id='specializations'
            className='py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden'
        >
            <div className='container mx-auto relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Content */}
                    <div>
                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6'>
                            <Sparkles className='w-4 h-4 text-cyan-400' />
                            <span className='text-sm text-cyan-300'>
                                Core Expertise
                            </span>
                        </div>

                        <h2 className='mb-6'>
                            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                                Specialized Domain Knowledge
                            </span>
                        </h2>

                        <p className='text-slate-300 mb-8'>
                            Our team brings battle-tested expertise from leading
                            technology companies, combining deep technical
                            knowledge with real-world enterprise experience.
                        </p>

                        <div className='space-y-6'>
                            {specializations.map((spec, index) => (
                                <div
                                    key={index}
                                    className='flex gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300'
                                >
                                    <div className='flex-shrink-0'>
                                        <div className='w-10 h-10 rounded-lg bg-slate-900/50 flex items-center justify-center'>
                                            <spec.icon
                                                className={`w-5 h-5 ${spec.color}`}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='text-white mb-1'>
                                            {spec.title}
                                        </h3>
                                        <p className='text-sm text-slate-400'>
                                            {spec.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='relative'>
                        <div className='relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10'>
                            <Image
                                src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM3MTY0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                                alt='Healthcare Technology'
                                className='w-full h-full object-cover'
                                width={1000}
                                height={1000}
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent'></div>
                        </div>

                        {/* Floating Card */}
                        <div className='absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 shadow-xl'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='w-3 h-3 rounded-full bg-green-400 animate-pulse'></div>
                                <span className='text-sm text-slate-300'>
                                    Enterprise Ready
                                </span>
                            </div>
                            <p className='text-xs text-slate-400'>
                                Production-grade solutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
