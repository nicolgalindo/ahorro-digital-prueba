"use client";
import { useState, useMemo } from "react";
import styles from "../page.module.css";
import productsData from "../products.json";

function debounce(fn: Function, delay: number) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export default function ProductsPage() {
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
                  <img src="/img/billetera-icon.png" alt="icon billetera" style={{width:24, height:24, verticalAlign:'middle', marginRight:8}} />
                  {p.nombre}
                </h2>
                <p>
                  <img src="/img/tarjeta-icon.png" alt="icon tarjeta" style={{width:20, height:20, verticalAlign:'middle', marginRight:6}} />
                  <b>Tipo:</b> {p.tipo}
                </p>
                <p>
                  <img src="/img/cash-icon.png" alt="icon cash" style={{width:20, height:20, verticalAlign:'middle', marginRight:6}} />
                  {p.descripcion}
                </p>
                <p>
                  <img src="/img/tasa-icon.png" alt="icon tasa" style={{width:20, height:20, verticalAlign:'middle', marginRight:6}} />
                  <b>Tasa:</b> {p.tasa}
                </p>
              </div>
            ))}
          </div>
        )}
        {query.trim() && filtered.length === 0 && (
          <p style={{color: '#1976d2', marginTop: '32px'}}>No se encontraron productos.</p>
        )}
      </main>
    </div>
  );
}
