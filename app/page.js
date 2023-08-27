import Link from 'next/link'
import styles from './Home.module.css'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Ctrl Alt Elite</h1>
          <p className={styles.heroDescription}>
            {/* Making Bugs Feel Valued, One Line at a Time. */}
          </p>
        </div>

        <Link href="/blog" className={styles.exploreButton}>
          Explore &#8594;
        </Link>
      </div>
    </div>
  )
}


