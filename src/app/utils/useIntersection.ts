import { useState, useEffect, useRef } from "react";

const useIntersection = (element: any, rootMargin: string) => {
    const [isVisible, setState] = useState(false);
    const enterCount = useRef(0);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) enterCount.current++;
                setState(entry.isIntersecting);
            },
            { rootMargin }
        );
        element.current && observer.observe(element.current);
        return () => {
            try {
                observer.unobserve(element.current);
            } catch {}
        };
    }, []);

    return { isVisible, enterCount: enterCount.current };
};

export default useIntersection;
