"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.productsMain}>
        
          <button className={styles.primary} style={{marginBottom: 16}} onClick={() => router.push('/home')}>Atrás</button>
    <h1 className={styles.title}>Productos de Ahorro</h1>
        <p className={styles.subtitle}>Explora los productos de ahorro disponibles en el banco digital.</p>
      </main>
    </div>
  );
}
