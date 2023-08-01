import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Profile from '@/components/Profile'
import SocialLinks from '@/components/SocialLinks'
import { Roboto } from "next/font/google"

const font = Roboto({
  weight: ["100", "300"],
  style: "normal",
  subsets: ["latin"]
})

const Home = () => (
  <>
    <Head>
      <title>Samuel Slade</title>
      <meta name="description" content="Samuel Slade | Aspiring CTO, Cloud Architect, Software Developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={`${font.className} ${styles.main}`}>
      <div className={styles.center}>
        <div className={styles.content}>
          <Profile />
          <SocialLinks />
        </div>
      </div>
    </main>

    <footer className={styles.footer}>
      <p>info@samslade.uk</p>
    </footer>
  </>
)

export default Home
