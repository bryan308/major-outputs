import Image from "next/image"
import Link from "next/link"
import React from "react"

function FileCard({
	fileName,
	image,
	filePath,
}: {
	fileName: string
	image: string
	filePath: string
}) {
	return (
		<div className="border flex max-w-72 rounded-lg">
			<div className="border-r grid place-items-center">
				<Image
					src={image}
					alt="pdf thumbnail"
					width={56}
					height={56}
				/>
			</div>
			<div className="p-2">
				<Link
					href={filePath}
					target="_blank"
					rel="noopener noreferrer"
				>
					{fileName}
				</Link>
				<p className="text-xs mt-0">PDF</p>
			</div>
		</div>
	)
}

export default FileCard
