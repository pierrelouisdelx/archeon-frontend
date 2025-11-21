import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Specializations } from '@/components/Specializations';
import { Credentials } from '@/components/Credentials';
import { Contact } from '@/components/Contact';
import { Header } from '@/components/Header';

export default function Home() {
    return (
        <div className='min-h-screen bg-slate-950 text-white'>
            <Header />
            <Hero />
            <Services />
            <Specializations />
            <Credentials />
            <Contact />
        </div>
    );
}
