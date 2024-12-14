"use client"

import React, { ReactNode, useEffect } from "react"
import Lenis from "lenis"

const LenisWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: DOMHighResTimeStamp) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})

	return <div>{children}</div>
}
LenisWrapper.displayName = "lenis wrapper"

export default LenisWrapper
