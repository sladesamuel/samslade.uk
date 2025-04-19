import { memo } from "react"
import profile from "@/images/profile.png"
import RoundImage from "./RoundImage"

const ProfilePhoto = () => (
  <RoundImage
    image={profile}
    alt="Samuel Slade"
    size="medium"
  />
)

export default memo(ProfilePhoto)
