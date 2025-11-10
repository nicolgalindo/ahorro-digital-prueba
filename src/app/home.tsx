'use client';
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.homeMain}>
        <h1 className={styles.title}>Bienvenido al Simulador del Ahorro Digital</h1>
        <div className={styles.buttonGroup}>
           <button className={styles.homeBtn} onClick={() => router.push('/products')}>Ver productos</button>
          <button className={styles.homeBtn}  onClick={() => router.push('/simulator')} >Simular ahorro</button>
          <button className={styles.homeBtn} onClick={() => router.push('/onboarding')}>Registrar apertura</button>
              </div>
      </main>
    </div>
  );
}
