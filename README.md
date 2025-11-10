This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


# 1.	Descubrir	productos	financieros:	crea	una	página	/products	con	listado,	filtros	con	 debounce	y	SSR/ISR.

La página `/products` se renderizo usando ISR  ya que es una página estática y se actualiza cada cierto tiempo

# 2.	Simular	la	rentabilidad:	formulario	en	/simulator	con	validaciones	y	cálculo	de	interés.
El formulario tiene validadores en todos los campos, donde solo se puede registar numeros en los campso de monto y meses. Y el calculo se interes se hace con la formula que usa los bancpos y la tasa varia segun el tipo del cuenta de ahorro que viene del archivo de productos

# 3.	Registrar	intención	de	apertura:	formulario	en	/onboarding	con	campo	recaptcha	(Puede	se simulado)

Para validar el recaptcha se hace clic en insepeccionar, en "elementos" el valor del input se debe colpocar value="OK" o en el codigo simplemente es cambiar "hidden" por "text"

# PARA ESTE PROYECTO NO USE NINGUNA LIBRERIA DE ESTILOS COMO TAILWIND, TODO FUE CON CSS PLANTILLAS QUE YA TEANIA PREDISEÑADAS