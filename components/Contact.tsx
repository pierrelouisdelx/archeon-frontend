'use client';

import { Mail, MessageSquare, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, this would send the data to a backend
        toast.success("Message sent! We'll get back to you soon.");
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <section
            id='contact'
            className='py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative'
        >
            {/* Background Effects */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl'></div>
            </div>

            <div className='container mx-auto max-w-4xl relative z-10'>
                <div className='text-center mb-12'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6'>
                        <Sparkles className='w-4 h-4 text-cyan-400' />
                        <span className='text-sm text-cyan-300'>
                            Get In Touch
                        </span>
                    </div>
                    <h2 className='mb-4'>
                        <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            Let's Build Something Extraordinary
                        </span>
                    </h2>
                    <p className='text-slate-400 max-w-2xl mx-auto'>
                        Ready to transform your vision into reality? Reach out
                        to discuss your project requirements.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                    <div className='bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 text-center backdrop-blur-sm'>
                        <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4'>
                            <Mail className='w-6 h-6 text-white' />
                        </div>
                        <h3 className='text-white mb-2'>Email</h3>
                        <p className='text-sm text-slate-400'>
                            hello@aiconsulting.com
                        </p>
                    </div>

                    <div className='bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 text-center backdrop-blur-sm'>
                        <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4'>
                            <MessageSquare className='w-6 h-6 text-white' />
                        </div>
                        <h3 className='text-white mb-2'>Response Time</h3>
                        <p className='text-sm text-slate-400'>
                            Within 24 hours
                        </p>
                    </div>

                    <div className='bg-slate-900/50 border border-cyan-500/20 rounded-lg p-6 text-center backdrop-blur-sm'>
                        <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4'>
                            <Send className='w-6 h-6 text-white' />
                        </div>
                        <h3 className='text-white mb-2'>Free Consultation</h3>
                        <p className='text-sm text-slate-400'>
                            Initial call included
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className='bg-slate-900/50 border border-cyan-500/20 rounded-xl p-8 backdrop-blur-sm'
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                        <div>
                            <label
                                htmlFor='name'
                                className='block text-sm text-slate-300 mb-2'
                            >
                                Name *
                            </label>
                            <Input
                                id='name'
                                type='text'
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className='bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500'
                                placeholder='John Doe'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='email'
                                className='block text-sm text-slate-300 mb-2'
                            >
                                Email *
                            </label>
                            <Input
                                id='email'
                                type='email'
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className='bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500'
                                placeholder='john@company.com'
                            />
                        </div>
                    </div>

                    <div className='mb-6'>
                        <label
                            htmlFor='company'
                            className='block text-sm text-slate-300 mb-2'
                        >
                            Company
                        </label>
                        <Input
                            id='company'
                            type='text'
                            value={formData.company}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    company: e.target.value,
                                })
                            }
                            className='bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500'
                            placeholder='Your Company'
                        />
                    </div>

                    <div className='mb-6'>
                        <label
                            htmlFor='message'
                            className='block text-sm text-slate-300 mb-2'
                        >
                            Project Details *
                        </label>
                        <Textarea
                            id='message'
                            required
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            className='bg-slate-800/50 border-slate-700 text-white focus:border-cyan-500 min-h-[150px]'
                            placeholder='Tell us about your project requirements...'
                        />
                    </div>

                    <Button
                        type='submit'
                        size='lg'
                        className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group'
                    >
                        Send Message
                        <Send className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </Button>
                </form>

                {/* Footer */}
                <div className='mt-12 text-center'>
                    <p className='text-slate-500 text-sm'>
                        © 2025 AI Consulting. Powered by enterprise expertise
                        from NVIDIA and Siemens Healthineers.
                    </p>
                </div>
            </div>
        </section>
    );
}
