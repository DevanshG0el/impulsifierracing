"use client";

import { useEffect } from "react";

export default function DelayedScroll() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");

            if (link && link.hash) {
                const href = link.getAttribute("href");

                // Check if it's an anchor link (starts with #)
                if (href?.startsWith("#")) {
                    e.preventDefault();

                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        // Add delay before scrolling (300ms)
                        setTimeout(() => {
                            targetElement.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }, 300);
                    }
                }
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return null;
}
