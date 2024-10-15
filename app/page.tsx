import Link from "next/link"

export default function Home() {
	return (
		<>
			<h2 className="text-lg tracking-tighter font-semibold">laboratories - ITWST-01</h2>
			<div className="my-6">
				<Link href="/itwst01">1st yr. 2nd sem</Link>
				<p>My outputs during my 1st year 2nd semester.</p>
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
				<Link href="">2st yr. 1nd sem</Link>
				<p>My outputs during my 1st year 2nd semester.</p>
			</div>
		</>
	)
}
