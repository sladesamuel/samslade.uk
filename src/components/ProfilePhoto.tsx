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
      placeholder="blur"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill
    />
  </div>
)

export default memo(ProfilePhoto)
