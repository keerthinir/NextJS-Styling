import styles from '@/app/index.module.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={styles.header}>
        Next JS
        <span className={styles.hi}>hii</span>
      </h1>
    </main>
  )
}
