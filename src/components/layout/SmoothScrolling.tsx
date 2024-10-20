'use client'

import Lenis from 'lenis'
import { createContext, useContext, useEffect, useState } from 'react'

interface ISmoothScrolling {
	children: React.ReactNode
}

export function SmoothScrolling({ children }: ISmoothScrolling) {
	const [lenis, setLenis] = useState<Lenis | null>(null)

	useEffect(() => {
		const lenisInstance = new Lenis({
			duration: 1
		})
		setLenis(lenisInstance)

		function raf(time: any) {
			lenisInstance.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

		return () => {
			lenisInstance.destroy()
		}
	}, [])

	return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)
