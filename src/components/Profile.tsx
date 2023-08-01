import { memo } from "react"
import ProfilePhoto from "./ProfilePhoto"
import styles from "@/styles/Profile.module.css"

const Profile = () => (
  <div className={styles.container}>
    <ProfilePhoto />

    <div>Samuel Slade</div>
  </div>
)

export default memo(Profile)
