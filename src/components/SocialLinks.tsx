import { memo } from "react"
import styles from "@/styles/SocialLinks.module.css"
import Link from "@/types/Link"
import SocialLink from "./SocialLink"

const links: Link[] = [
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/samuelslade/"
  },
  {
    text: "GitHub",
    link: "https://github.com/sladesamuel/"
  },
  {
    text: "StackOverflow",
    link: "https://stackoverflow.com/users/308012/samuel-slade"
  }
]

const SocialLinks = () => (
  <div className={styles.container}>
    {links.map((link) => (
      <SocialLink
        key={link.text}
        {...link}
      />
    ))}
  </div>
)

export default memo(SocialLinks)
