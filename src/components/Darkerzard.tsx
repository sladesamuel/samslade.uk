import { memo } from "react"
import image from "@/images/darkerzard.png"
import RoundImage from "./RoundImage"

const Darkerzard = () => (
  <a href="https://darkerzard.com" target="_blank" rel="noopener noreferrer">
    <RoundImage
      image={image}
      alt="Darkerzard"
      size="small"
    />
  </a>
)

export default memo(Darkerzard)
