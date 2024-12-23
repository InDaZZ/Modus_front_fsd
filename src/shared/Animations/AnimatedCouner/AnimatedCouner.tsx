import { KeyframeOptions, animate } from 'framer-motion';
import React, { useLayoutEffect } from 'react';
import { useRef } from 'react';

type AnimatedCounterProps = {
    from: number;
    to: number;
    options?: KeyframeOptions;
};

export const AnimatedCounter: React.FC<AnimatedCounterProps> = (props) => {
    const { from, to, options } = props;
    const ref = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;
        element.textContent = String(from);
        const controls = animate(from, to, {
            duration: 1,
            ease: 'easeIn',
            ...options,
            onUpdate(value) {
                element.textContent = value.toFixed(0);
            },
        });

        // Cancel on unmount
        return () => {
            controls.stop();
        };
    }, [ref, from, to]);

    return <span ref={ref} />;
};

export default AnimatedCounter;
