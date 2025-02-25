import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(() => window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    useEffect(() => {
        const handleVideoSrcSet = () => {
            setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
        };

        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        };
    }, []);

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2.5,
        });
        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 2.5,
        });
    }, []);

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex justify-center items-center flex-col">
                <p id='hero' className="hero-title">iPhone 15 Pro</p>
                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline key={videoSrc}>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <button href="#highlights" className='button'>Buy</button>
                <p className='text-xl'>From $199/month or $999</p>
            </div>
        </section>
    );
};

export default Hero;
