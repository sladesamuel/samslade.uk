import { memo } from "react"
import ProfilePhoto from "./ProfilePhoto"
import styles from "@/styles/Profile.module.css"
import AmberFalconGames from "@/components/AmberFalconGames"
import Bucketscan from "@/components/Bucketscan"
import Darkerzard from "@/components/Darkerzard"

const Profile = () => (
  <div className={styles.container}>
    <div className={styles.businesses}>
      <ProfilePhoto />

      <div className={styles.topLeft}>
        <Bucketscan />
      </div>

      <div className={styles.topRight}>
        <AmberFalconGames />
      </div>

      <div className={styles.bottomLeft}>
        <Darkerzard />
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
