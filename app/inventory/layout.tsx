import styles from './products/style.module.css';

export default function InventoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>ヘッダー</header>
      <div className={styles.container}>
        <aside className={styles.navbar}>サイドバー</aside>
        <main className={styles.content}>
          <section>{children}</section>
        </main>
      </div>
      <footer className={styles.footer}>フッター</footer>
    </div>
  );
}
