
'use client';
import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import productsData from "../products.json";

export default function Simulator() {
  const router = useRouter();
  const [initial, setInitial] = useState("");
  const [monthly, setMonthly] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(productsData[0].id);

  function getTasa(id: number) {
    const prod = productsData.find((p: any) => p.id === id);
    if (!prod) return 0.002083;

    const match = prod.tasa.match(/([\d.]+)%/);
    const anual = match ? parseFloat(match[1]) : 2.5;
    return anual / 100 / 12;
  }

  function formatCurrency(value: number) {
    return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);
    const ini = parseFloat(initial);
    const mon = parseFloat(monthly);
    const m = parseInt(months);
    const tasa = getTasa(selected);
    if (isNaN(ini) || ini < 0) {
      setError("El monto inicial debe ser un número positivo");
      return;
    }
    if (isNaN(mon) || mon < 0) {
      setError("El aporte mensual debe ser un número positivo");
      return;
    }
    if (isNaN(m) || m <= 0) {
      setError("Los meses deben ser un número mayor a cero");
      return;
    }
    // Cálculo
    const total = ini * Math.pow(1 + tasa, m) + (mon * ((Math.pow(1 + tasa, m) - 1) / tasa));
    setResult(formatCurrency(total));
  }

  return (
    <div className={styles.page}>
      <main className={styles.simulatorMain}>
        <button className={styles.primary} style={{ marginBottom: 16 }} onClick={() => router.push('/home')}>Atrás</button>
        <h1 className={styles.title}>Simulador de Ahorro</h1>
        <form className={styles.simForm} onSubmit={handleSubmit}>
          <label>
            Tipo de cuenta:
            <select
              className={styles.simInput}
              value={selected}
              onChange={e => setSelected(Number(e.target.value))}
            >
              {productsData.map((p: any) => (
                <option key={p.id} value={p.id}>
                  {p.nombre} ({p.tasa})
                </option>
              ))}
            </select>
          </label>
          <label>
            Monto inicial:
            <input
              type="number"
              min="0"
              step="0.01"
              value={initial}
              onChange={e => setInitial(e.target.value)}
              className={styles.simInput}
              placeholder="$"
            />
          </label>
          <label>
            Aporte mensual:
            <input
              type="number"
              min="0"
              step="0.01"
              value={monthly}
              onChange={e => setMonthly(e.target.value)}
              className={styles.simInput}
              placeholder="$"
            />
          </label>
          <label>
            Meses:
            <input
              type="number"
              min="1"
              step="1"
              value={months}
              onChange={e => setMonths(e.target.value)}
              className={styles.simInput}
              placeholder="Ej: 12"
            />
          </label>
          <button className={styles.primary} type="submit">Calcular</button>
        </form>
        {error && <p className={styles.simError}>{error}</p>}
        {result && (
          <div className={styles.simResult}>
            <h2>Resultado estimado</h2>
            <p>El monto final estimado es <b>{result}</b></p>
            <small>
              Tasa de interes usada: {
                productsData.find((p: any) => p.id === selected)?.tasa
              }
            </small>
          </div>
        )}
        <div className={styles.simInfo}>
          <h3>Logica del calculo:</h3>
          <p>
            Se utiliza la fórmula de interés compuesto mensual:<br />
            <code>
              total = monto_inicial * (1 + tasa) ^ meses + aporte_mensual * [((1 + tasa) ^ meses - 1) / tasa]
            </code><br />
            La tasa depende del tipo de cuenta de ahorro que elijas
          </p>
        </div>
      </main>
    </div>
  );
}
