import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const AnimatedArrows = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <Box
            className="arrows-container" // Use className for custom CSS
            ref={sectionRef}
            sx={{
                display: 'flex',
                justifyContent: 'center', // Center the common origin point
                width: '100%',
                maxWidth: '800px', // Matches your card container width, adjust as needed
                margin: '20px auto 0 auto', // Space below text, 0 margin bottom as arrows will grow down
                position: 'relative', // For absolute positioning of arrows
                height: '150px', // Increased height to allow arrows to grow downwards to cards
                pointerEvents: 'none',
                // Optional: Background to visualize container
                // backgroundColor: 'rgba(255,0,0,0.1)'
            }}
        >

            <Box className={`central-line ${isVisible ? 'visible' : ''}`}></Box>


            <Box className={`growing-arrow-line left-line ${isVisible ? 'visible' : ''}`}>
                <Box className="arrow-head left-head"></Box>
            </Box>


            <Box className={`growing-arrow-line right-line ${isVisible ? 'visible' : ''}`}>
                <Box className="arrow-head right-head"></Box>
            </Box>
        </Box>
    )
}

export default AnimatedArrows