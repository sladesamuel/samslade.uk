import { memo } from "react"
import image from "@/images/amber-falcon-games.png"
import RoundImage from "./RoundImage"

const AmberFalconGames = () => (
  <a href="https://instagram.com/amberfalcongames" target="_blank" rel="noopener noreferrer">
    <RoundImage
      image={image}
      alt="Amber Falcon Games"
      size="small"
    />
  </a>
)

export default memo(AmberFalconGames)
