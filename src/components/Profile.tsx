import { memo } from "react"
import ProfilePhoto from "./ProfilePhoto"
import styles from "@/styles/Profile.module.css"
import Bucketscan from "@/components/Bucketscan"

const Profile = () => (
  <div className={styles.container}>
    <div className={styles.businesses}>
      <ProfilePhoto />

      <div className={styles.topLeft}>
        <Bucketscan />
      </div>

      <div className={styles.topRight}>
        {/* TODO: Darkerzard Image */}
      </div>
    </div>

    <h1 className={styles.name}>
      Samuel Slade
    </h1>

    <p className={styles.title}>
      Aspiring CTO | Cloud Architect | Platform Engineer | Software Developer
    </p>
  </div>
)

export default memo(Profile)
