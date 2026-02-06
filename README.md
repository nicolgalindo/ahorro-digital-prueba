
# 1.	Descubrir	productos	financieros:	crea	una	página	/products	con	listado,	filtros	con	 debounce	y	SSR/ISR.

La página `/products` se renderizo usando ISR  ya que es una página estática y se actualiza cada cierto tiempo

# 2.	Simular	la	rentabilidad:	formulario	en	/simulator	con	validaciones	y	cálculo	de	interés.
El formulario tiene validadores en todos los campos, donde solo se puede registar numeros en los campso de monto y meses. Y el calculo de interes se hace con la formula que usa los bancos y la tasa varia segun el tipo del cuenta de ahorro que viene del archivo de productos

# 3.	Registrar	intención	de	apertura:	formulario	en	/onboarding	con	campo	recaptcha	(Puede	se simulado)

Para validar el recaptcha se hace clic en el el checkbox,  el valor del input quedara con value="OK"

# PARA ESTE PROYECTO NO USE NINGUNA LIBRERIA DE ESTILOS COMO TAILWIND, TODO FUE CON CSS PLANTILLAS QUE YA TEANIA PREDISEÑADAS