'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollWrapper() {
  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
