import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/shared/header"
import Providers from "@/components/shared/theme-provider"
import LenisWrapper from "@/components/shared/lenis-wrapper"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: {
		template: "%s | cedric",
		default: "cedric",
	},
	description: "This is where I store my outputs from my major subjects.",
	openGraph: {
		title: "cedric",
		description: "This is where I store my outputs from my major subjects.",
		url: "https://cedricc.vercel.app",
		siteName: "cedric",
		images: [
			{
				url: "https://cedricc.vercel.app/og-image.png",
				width: 1600,
				height: 800,
				alt: "cedric",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "cedricc",
		description: "This is where I store my outputs from my major subjects.",
		images: ["https://cedricc.vercel.app/og-image.png"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<LenisWrapper>
					<Providers>
						<Header />
						<main
							role="main"
							className="mx-auto max-w-4xl p-4"
						>
							{children}
						</main>
					</Providers>
				</LenisWrapper>
			</body>
		</html>
	)
}
