import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Profile from '@/components/Profile'
import SocialLinks from '@/components/SocialLinks'

const Home = () => (
  <>
    <Head>
      <title>Samuel Slade</title>
      <meta name="description" content="Samuel Slade | Aspiring CTO, Cloud Architect, Software Developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.content}>
          <Profile />
          <SocialLinks />
        </div>
      </div>
    </main>
  </>
)

export default Home
