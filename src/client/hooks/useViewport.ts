import { useEffect, useState } from "react"

type Viewport = {
    w:number,
    h:number,
    is568: boolean,
    is840: boolean,
    is1024: boolean,
    is1170: boolean
    is1440: boolean
}

export const useViewport = (): Viewport => {
    const [useViewport, setUseViewport] = useState({} as Viewport);
    useEffect(() => {
        const handleResize = () => typeof window !== "undefined" && setUseViewport({
            w: window.innerWidth,
            h: window.innerHeight,
            is568: window.innerWidth <= 568,
            is840: window.innerWidth <= 840,
            is1024: window.innerWidth <= 1024,
            is1170: window.innerWidth <= 1170,
            is1440: window.innerWidth <= 1440
        });
        if(typeof window !== "undefined") {
            setUseViewport({
                w: window.innerWidth,
                h: window.innerHeight,
                is568: window.innerWidth <= 568,
                is840: window.innerWidth <= 840,
                is1024: window.innerWidth <= 1024,
                is1170: window.innerWidth <= 1170,
                is1440: window.innerWidth <= 1440
            })
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return useViewport;
}