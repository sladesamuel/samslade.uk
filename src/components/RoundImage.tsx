import { memo } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "@/styles/RoundImage.module.css"

const convertSizeToStyle = (size: "small" | "medium"): string => {

  if (size === "medium") {
    return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  }

  return "48px"
}

type Props = {
  image: StaticImageData
  size: "small" | "medium"
  alt: string
}

const RoundImage = ({ image, size, alt }: Props) => (
  <div className={size === "medium" ? styles.mediumContainer : styles.smallContainer}>
    <Image
      className={styles.image}
      src={image}
      alt={alt}
      placeholder="blur"
      sizes={convertSizeToStyle(size)}
      height={size === "small" ? 48 : undefined}
      width={size === "small" ? 48 : undefined}
      fill={size === "medium"}
    />
  </div>
)

export default memo(RoundImage)
