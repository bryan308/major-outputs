import Link from "next/link"

export default function Home() {
	return (
		<>
			<h2 className="text-lg tracking-tighter font-semibold">laboratories - ITWST-01</h2>
			<div className="my-6">
				<Link href="/itwst01">yr 1, sem 2</Link>
				<p>
					A collection of projects and assignments from my 1st year, 2nd semester, applying and
					building upon my foundational web development skills.
				</p>
			</div>
			<div className="mt-10" />
			<h2 className="text-lg tracking-tighter font-semibold">case study - ITWST-01</h2>
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
			<div className="mt-20" />
			<h2 className="text-lg tracking-tighter font-semibold">laboratories - ITWST-02</h2>
			<div className="my-6">
				<Link href="">yr 2, sem 1</Link>
				<p>
					A series of laboratories from my 2nd year, 1st semester, highlighting the
					continued development of my web expertise and new challenges tackled.
				</p>
			</div>
		</>
	)
}
