import { Building2, Award, CheckCircle2, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Credentials() {
    const credentials = [
        {
            company: 'NVIDIA',
            role: 'AI & GPU Computing',
            description:
                'Deep learning optimization, CUDA programming, and accelerated computing solutions',
            achievements: [
                'LLM inference optimization',
                'GPU acceleration pipelines',
                'Performance tuning',
            ],
        },
        {
            company: 'Siemens Healthineers',
            role: 'Healthcare Technology',
            description:
                'Medical imaging, clinical workflows, and healthcare-specific AI solutions',
            achievements: [
                'Medical AI systems',
                'HIPAA-compliant solutions',
                'Clinical integration',
            ],
        },
    ];

    return (
        <section
            id='credentials'
            className='py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative'
        >
            {/* Background Effects */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
            </div>

            <div className='container mx-auto relative z-10'>
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6'>
                        <Sparkles className='w-4 h-4 text-cyan-400' />
                        <span className='text-sm text-cyan-300'>
                            Our Background
                        </span>
                    </div>
                    <h2 className='mb-4'>
                        <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            Enterprise-Proven Expertise
                        </span>
                    </h2>
                    <p className='text-slate-400 max-w-2xl mx-auto'>
                        Our team's experience at industry-leading companies
                        ensures world-class solutions for your business.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
                    {credentials.map((cred, index) => (
                        <div
                            key={index}
                            className='bg-slate-900/50 border border-cyan-500/20 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300'
                        >
                            <div className='flex items-start gap-4 mb-6'>
                                <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0'>
                                    <Building2 className='w-6 h-6 text-white' />
                                </div>
                                <div>
                                    <h3 className='text-white mb-1'>
                                        {cred.company}
                                    </h3>
                                    <p className='text-sm text-cyan-400'>
                                        {cred.role}
                                    </p>
                                </div>
                            </div>

                            <p className='text-slate-300 mb-6'>
                                {cred.description}
                            </p>

                            <div className='space-y-3'>
                                {cred.achievements.map((achievement, idx) => (
                                    <div
                                        key={idx}
                                        className='flex items-center gap-3'
                                    >
                                        <CheckCircle2 className='w-5 h-5 text-cyan-400 flex-shrink-0' />
                                        <span className='text-sm text-slate-300'>
                                            {achievement}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className='relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto'>
                    <Image
                        src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjM3MTgzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        alt='Software Development Team'
                        className='w-full h-96 object-cover'
                        width={1000}
                        height={1000}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent'></div>

                    {/* Overlay Content */}
                    <div className='absolute bottom-0 left-0 right-0 p-8'>
                        <div className='flex items-center gap-2 mb-4'>
                            <Award className='w-6 h-6 text-cyan-400' />
                            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                                Enterprise Excellence
                            </span>
                        </div>
                        <p className='text-slate-300 max-w-2xl'>
                            Leveraging Fortune 500 experience to deliver
                            transformative solutions for businesses of all
                            sizes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
