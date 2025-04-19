import { memo } from "react"
import image from "@/images/bucketscan.png"
import RoundImage from "./RoundImage"

const Bucketscan = () => (
  <a href="https://bucketscan.com" target="_blank" rel="noopener noreferrer">
    <RoundImage
      image={image}
      alt="Bucketscan"
      size="small"
    />
  </a>
)

export default memo(Bucketscan)
