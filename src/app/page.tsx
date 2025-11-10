

'use client';
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.mainRow}>
        <section className={styles.leftContent}>
          <h1 className={styles.title}>Bienvenidos a la aventura del Simulador del Ahorro Digital</h1>
          <button className={styles.primary} onClick={() => router.push('/home')}>Entrar</button>
        </section>
        <section className={styles.rightContent}>
          <img src="/img/home-img.jpeg" alt="Simulador del Ahorro Digital" className={styles.homeImg} />
        </section>
      </main>
    </div>
  );
}
