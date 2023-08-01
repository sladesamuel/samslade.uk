import { memo } from "react"
import ProfilePhoto from "./ProfilePhoto"
import styles from "@/styles/Profile.module.css"

const Profile = () => (
  <div className={styles.container}>
    <ProfilePhoto />

    <h1 className={styles.name}>
      Samuel Slade
    </h1>

    <p className={styles.title}>
      Aspiring CTO | Cloud Architect | Platform Engineer | Software Developer
    </p>
  </div>
)

export default memo(Profile)
