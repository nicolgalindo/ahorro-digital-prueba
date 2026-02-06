"use client";
import { useState, useMemo } from "react";
import styles from "../page.module.css";

import productsData from "../products.json";
import { useRouter } from "next/navigation";
import { assetPath } from "../../lib/assetPath";

function debounce(fn: Function, delay: number) {
  let time: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(time);
    time = setTimeout(() => fn(...args), delay);
    console.log("time..", time);
  };
}

export default function ProductsPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(productsData);

  const handleFilter = useMemo(() =>
    debounce((value: string) => {
      const q = value.toLowerCase();

      setFiltered(
        productsData.filter(
          (p: any) =>
            p.nombre.toLowerCase().includes(q) ||
            p.tipo.toLowerCase().includes(q)
          
        )
      );
    }, 400),
    []
  );

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    handleFilter(e.target.value);
  }

  return (
    <div className={styles.page}>
      <main className={styles.productsMain}>

          <button className={`${styles.primary} buttonBack`} onClick={() => router.push('/home')}>Atrás</button>
    
        <h1 className={styles.title}>Productos de Ahorro</h1>
        <input
          className={styles.filterInput}
          type="text"
          placeholder="Filtrar por nombre o tipo..."
          value={query}
          onChange={onChange}
        />
        {query.trim() && filtered.length > 0 && (
          <div className={styles.productsList}>
            {filtered.map((p: any) => (
              <div key={p.id} className={styles.productCard}>
                <h2>
                  <img src={assetPath('/img/billetera-icon.png')} alt="icon billetera" className="iconMedium" />
                  {p.nombre}
                </h2>
                <p>
                  <img src={assetPath('/img/tarjeta-icon.png')} alt="icon tarjeta" className="iconSmall" />
                  <b>Tipo:</b> {p.tipo}
                </p>
                <p>
                  <img src={assetPath('/img/cash-icon.png')} alt="icon cash" className="iconSmall" />
                  {p.descripcion}
                </p>
                <p>
                  <img src={assetPath('/img/tasa-icon.png')} alt="icon tasa" className="iconSmall" />
                  <b>Tasa:</b> {p.tasa}
                </p>
              </div>
            ))}
          </div>
        )}
        {query.trim() && filtered.length === 0 && (
          <p className="noResultsText">No se encontraron productos</p>
        )}
      </main>
    </div>
  );
}
