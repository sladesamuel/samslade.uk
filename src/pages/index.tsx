import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Samuel Slade | Aspiring CTO, Cloud Architect, Software Developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <div className={styles.center}>
        TODO
      </div>
    </main>
  </>
)

export default Home