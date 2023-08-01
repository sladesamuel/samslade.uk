import { memo } from "react"
import Image from "next/image"
import profile from "@/images/profile.png"
import styles from "@/styles/ProfilePhoto.module.css"

const ProfilePhoto = () => (
  <div className={styles.container}>
    <Image
      className={styles.profile}
      src={profile}
      alt="Samuel Slade"
      layout="fill"
      objectFit="cover"
      placeholder="blur"
    />
  </div>
)

export default memo(ProfilePhoto)
