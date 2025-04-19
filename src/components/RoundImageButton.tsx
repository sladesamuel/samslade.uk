import { memo } from "react"
import { StaticImageData } from "next/image"
import RoundImage from "@/components/RoundImage"

type Props = {
  image: StaticImageData
  size: "small" | "medium"
  alt: string
}

const RoundImageButton = (props: Props) => (
  <a
    href="https://bucketscan.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <RoundImage {...props} />
  </a>
)

export default memo(RoundImageButton)
