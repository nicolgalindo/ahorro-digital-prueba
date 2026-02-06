
'use client';
import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import productsData from "../products.json";

export default function Onboarding() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [cuenta, setCuenta] = useState(productsData[0].id);
  const [recaptcha, setRecaptcha] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (!nombre.trim()) {
      setError("El nombre es obligatorio");
      return;
    }
    if (!documento.trim()) {
      setError("El documento es obligatorio");
      return;
    }
    if (!correo.trim() || !correo.includes("@")) {
      setError("El correo es obligatorio y debe ser valido");
      return;
    }
    if (!cuenta) {
      setError("Debes seleccionar una cuenta de ahorro");
      return;
    }
    if (recaptcha !== "OK") {
      setError("Confirma que no eres un robot");
      return;
    }
    setSuccess(true);
  }

  return (
    <div className={styles.page}>
    <main className={styles.simulatorMain}>
  <button className={`${styles.primary} buttonBack`} onClick={() => router.push('/home')}>Atrás</button>
    

        <h1 className={styles.title}>Registrar  apertura cuenta de ahorro</h1>
        <form className={styles.simForm} onSubmit={handleSubmit}>
          <label>
            Cuenta de ahorro interesada:
            <select
              className={styles.simInput}
              value={cuenta}
              onChange={e => setCuenta(Number(e.target.value))}
            >
              {productsData.map((p: any) => (
                <option key={p.id} value={p.id}>
                  {p.nombre} ({p.tasa})
                </option>
              ))}
            </select>
          </label>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className={styles.simInput}
              placeholder="Nombre completo"
            />
          </label>
          <label>
            Documento:
            <input
              type="text"
              value={documento}
              onChange={e => setDocumento(e.target.value)}
              className={styles.simInput}
              placeholder="Número de documento"
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={correo}
              onChange={e => setCorreo(e.target.value)}
              className={styles.simInput}
              placeholder="correo@ejemplo.com"
            />
          </label>
          <label className={styles.recaptcha}>
            <input
              type="checkbox"
              checked={recaptcha === "OK"}
              onChange={e => setRecaptcha(e.target.checked ? "OK" : "")}
            />
            Confirmo que no soy un robot
          </label>
          <button className={styles.primary} type="submit">Registrar</button>
        </form>
        {error && <p className={styles.simError}>{error}</p>}
        {success && (
          <div className={styles.simResult}>
            <h2>¡Registro exitoso!</h2>
            <p>Tu pertura ha sido registrada correctamente.</p>
          </div>
        )}
      </main>
    </div>
  );
}
