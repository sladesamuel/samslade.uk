import { memo } from "react"
import styles from "@/styles/SocialLinks.module.css"
import Link from "@/types/Link"
import { SocialIcon } from "react-social-icons"

const links: Link[] = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/samuelslade/"
  },
  {
    text: "GitHub",
    url: "https://github.com/sladesamuel/"
  },
  {
    text: "StackOverflow",
    url: "https://stackoverflow.com/users/308012/samuel-slade"
  }
]

const SocialLinks = () => (
  <div className={styles.container}>
    {links.map((link) => (
      <SocialIcon
        key={link.text}
        className={styles.link}
        url={link.url}
        title={link.text}
      />
    ))}
  </div>
)

export default memo(SocialLinks)
