import { useEffect } from 'react'
import { inject as analytics } from '@vercel/analytics'

export default function useAnalytics() {
    useEffect(() => {
        analytics()
    }, [])
}
