import { memo } from "react"
import ProfilePhoto from "./ProfilePhoto"
import styles from "@/styles/Profile.module.css"

const Profile = () => (
  <div className={styles.container}>
    <ProfilePhoto />

    <h1 className={styles.name}>
      Samuel Slade
    </h1>

    <h3 className={styles.title}>
      Aspiring CTO | Cloud Architect | Software Developer
    </h3>
  </div>
)

export default memo(Profile)
