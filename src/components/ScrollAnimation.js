import { useEffect } from 'react';

const ScrollAnimation = (refTab = null, refList = null, activeTab) => {
    useEffect(() => {
        if (refTab?.current) {
            refTab.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (refList?.current?.length) {
            refList.current.forEach((div) => {
                if (div) div.classList.add('animation');
            });

            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                refList.current.forEach((div) => {
                    if (div) {
                        const offsetTop = div.getBoundingClientRect().top + scrollPosition;
                        if (scrollPosition >= offsetTop - window.innerHeight / 1.5) {
                            div.classList.add('active');
                        } else {
                            div.classList.remove('active');
                        }
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [activeTab, refList, refTab]);
};

export default ScrollAnimation;
