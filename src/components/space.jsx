import {  useEffect, useRef } from 'react'
import { generateSpace } from '~/utils/generate-space'

export default function Space() {
    const canvasRef = useRef()

    useEffect(() => {
        const { current: canvas } = canvasRef
        if (canvas) {
            const spaceUnmount = generateSpace(canvas)
            return spaceUnmount
        }
    }, [canvasRef.current])

    return (
     <canvas ref={canvasRef} class="fixed -inset-px z-[-1] w-full h-full" />
    )
}
