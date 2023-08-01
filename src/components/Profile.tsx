import { memo } from "react"
import ProfilePhoto from "./ProfilePhoto"
import styles from "@/styles/Profile.module.css"

const Profile = () => (
  <div className={styles.container}>
    <ProfilePhoto />

    <h1>Samuel Slade</h1>
  </div>
)

export default memo(Profile)
