import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/shared/header"
import Providers from "@/components/shared/theme-provider"

const geistSans = localFont({
	src: "../public/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "../public/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: {
		template: "cedric | %s",
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
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<Header />
					<main
						role="main"
						className="mx-auto max-w-4xl p-4"
					>
						{children}
					</main>
				</Providers>
			</body>
		</html>
	)
}
