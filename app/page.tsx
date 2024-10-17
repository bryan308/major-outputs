import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function Home() {
	return (
		<>
			<h2 className="text-lg tracking-tighter font-semibold">ITWST-01 / AY 2023-2024</h2>
			<p className="mb-4">
				<span className="font-semibold">Teacher</span>: Rose Anne G. Cochanco
			</p>
			<p className="mb-4">
				<span className="font-semibold">Section</span>: 1E
			</p>
			<Tabs defaultValue="laboratories">
				<TabsList>
					<TabsTrigger value="laboratories">laboratories</TabsTrigger>
					<TabsTrigger value="case-study">case study</TabsTrigger>
				</TabsList>
				<TabsContent value="laboratories">
					<div className="my-6">
						<Link href="/itwst01">yr 1, sem 2</Link>
						<p>
							A collection of projects and assignments from my 1st year, 2nd semester, applying and
							building upon my foundational web development skills.
						</p>
					</div>
				</TabsContent>
				<TabsContent value="case-study">
					<div className="my-6">
						<Link
							href="https://webwisee.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							WebWise
						</Link>
						<p>Educational Website where you can start learning basic Web Development.</p>
					</div>
				</TabsContent>
			</Tabs>
			<hr className="my-10" />
			<h2 className="text-lg tracking-tighter font-semibold">ITWST-02 / AY 2024-2025</h2>
			<p className="mb-4">
				<span className="font-semibold">Teacher</span>: Rose Anne G. Cochanco
			</p>
			<p className="mb-4">
				<span className="font-semibold">Section</span>: 2A
			</p>
			<Tabs defaultValue="laboratories">
				<TabsList>
					<TabsTrigger value="laboratories">laboratories</TabsTrigger>
					<TabsTrigger value="case-study">case study</TabsTrigger>
				</TabsList>
				<TabsContent value="laboratories">
					<div className="my-6">
						<Link href="/itwst02">yr 2, sem 1</Link>
						<p>
							A series of laboratories from my 2nd year, 1st semester, highlighting the continued
							development of my web expertise and new challenges tackled.
						</p>
					</div>
				</TabsContent>
				<TabsContent
					value="case-study"
					className="my-6"
				>
					🚧 coming soon... 🚧
				</TabsContent>
			</Tabs>
		</>
	)
}
