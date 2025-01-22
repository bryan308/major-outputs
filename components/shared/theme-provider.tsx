"use client"

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import { ReactNode } from "react"
import LenisWrapper from "@/components/shared/lenis-wrapper"

export default function Providers({ children }: { children: ReactNode }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<LenisWrapper>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
			>
				{children}
			</ThemeProvider>
		</LenisWrapper>
	)
}
