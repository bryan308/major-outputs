import React from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export const Header = () => {
	return (
		<header className="container mx-auto max-w-4xl p-4">
			<div className="flex items-center gap-2 font-mono font-medium">
				<Link
					className="flex items-center gap-2"
					href="/"
				>
					cedric
				</Link>{" "}
				/
				<Link
					href="https://github.com/bryan308"
					target="_blank"
					rel="noreferrer"
				>
					github
				</Link>
				/{" "}
				<Link
					href="https://cdrcangulo.vercel.app"
					target="_blank"
					rel="noreferrer"
				>
					portfolio
				</Link>
				/{" "}
				<ModeToggle />
			</div>
		</header>
	)
}
