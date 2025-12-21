import { useEffect, useState } from 'react'

//@media query do CSS
export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() =>
        window.matchMedia(query).matches
    )

    useEffect(() => {
        const media = window.matchMedia(query)

        const listener = () => setMatches(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [query])

    return matches
}
