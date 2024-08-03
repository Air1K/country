import {useRef, useCallback, useEffect, RefObject} from 'react';

const useScaleOnScroll = (ref: RefObject<HTMLElement>) => {
    const currentScale = useRef(1);
    const targetScale = useRef(1);
    const ticking = useRef(false);

    const lerp = (start: number, end: number, amount: number): number => {
        return (1 - amount) * start + amount * end;
    };

    const updateScale = useCallback(() => {
        currentScale.current = lerp(currentScale.current, targetScale.current, 0.1);
        ref.current!.style.transform = `scale(${currentScale.current})`;
        console.log('update')
        if (Math.abs(currentScale.current - targetScale.current) > 0.01) {
            window.requestAnimationFrame(updateScale);
        } else {
            ticking.current = false;
        }
    }, []);

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        if(window.scrollY > 300) {
            return;
        }
        const newScale = 1 + scrollY / 800;
        targetScale.current = newScale;

        if (!ticking.current) {
            window.requestAnimationFrame(updateScale);
            ticking.current = true;
        }
    }, [updateScale]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
};

export default useScaleOnScroll;
