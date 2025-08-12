import { withContentCollections } from "@content-collections/next"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "11j9kbjs2p.ufs.sh",
        pathname: "/f/*",
      },
      {
        protocol: "https",
        hostname: "media4.giphy.com",
        pathname: "/media/**",
      }
    ],
  },
}

export default withContentCollections(nextConfig)
