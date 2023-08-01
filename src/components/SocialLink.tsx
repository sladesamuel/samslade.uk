import { memo } from "react"
import styles from "@/styles/SocialLinks.module.css"

type Props = {
  text: string
  link: string
}

const SocialLink = ({ text, link }: Props) => (
  <a
    className={styles.link}
    href={link}
  >
    {text}
  </a>
)

export default memo(SocialLink)
