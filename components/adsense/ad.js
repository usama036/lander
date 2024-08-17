// components/AdSense.js
'use client'
import { useEffect } from 'react';

const AdSense = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1834910157384315';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);

        script.onload = () => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-1834910157384315"
            data-ad-slot="3289367805"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default AdSense;
