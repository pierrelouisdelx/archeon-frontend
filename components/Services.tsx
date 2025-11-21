import { Code, Layers, Brain, Sparkles } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export function Services() {
    const services = [
        {
            icon: Brain,
            title: 'AI & Machine Learning',
            description:
                'Custom AI solutions, LLM optimization, and neural network development powered by enterprise-grade expertise.',
            features: [
                'LLM Fine-tuning',
                'Model Optimization',
                'AI Integration',
                'Predictive Analytics',
            ],
            gradient: 'from-cyan-500 to-blue-600',
        },
        {
            icon: Layers,
            title: 'Fullstack Development',
            description:
                'End-to-end software solutions with modern architectures, scalable infrastructure, and seamless deployment.',
            features: [
                'React & Node.js',
                'Cloud Architecture',
                'API Development',
                'Database Design',
            ],
            gradient: 'from-blue-500 to-purple-600',
        },
        {
            icon: Code,
            title: 'Software Development',
            description:
                'Enterprise-grade software engineering with best practices, clean code, and maintainable architectures.',
            features: [
                'Custom Software',
                'System Integration',
                'Code Audits',
                'Technical Consulting',
            ],
            gradient: 'from-purple-500 to-pink-600',
        },
    ];

    return (
        <section
            id='services'
            className='py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative'
        >
            {/* Background Effects */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl'></div>
                <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl'></div>
            </div>

            <div className='container mx-auto relative z-10'>
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6'>
                        <Sparkles className='w-4 h-4 text-cyan-400' />
                        <span className='text-sm text-cyan-300'>
                            Our Services
                        </span>
                    </div>
                    <h2 className='mb-4'>
                        <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            Comprehensive Technology Solutions
                        </span>
                    </h2>
                    <p className='text-slate-400 max-w-2xl mx-auto'>
                        From concept to deployment, we provide end-to-end
                        technology services tailored to your business needs.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className='bg-slate-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group'
                        >
                            <CardHeader>
                                <div
                                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                >
                                    <service.icon className='w-6 h-6 text-white' />
                                </div>
                                <CardTitle className='text-white'>
                                    {service.title}
                                </CardTitle>
                                <CardDescription className='text-slate-400'>
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className='space-y-2'>
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className='flex items-center gap-2 text-sm text-slate-300'
                                        >
                                            <div className='w-1.5 h-1.5 rounded-full bg-cyan-400'></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
