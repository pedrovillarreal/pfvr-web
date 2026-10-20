/* =====================================================================
   CONTENIDO EDITABLE DEL SITIO — PFVR
   ---------------------------------------------------------------------
   Este es el único archivo que necesitas tocar para publicar novedades:
   - REDES: tus ligas a Instagram, Facebook, LinkedIn, WhatsApp.
   - PUBLICACIONES: tarjetas de "Medios" que abren tu post en IG / FB.
   - NOTAS: notas informativas que se leen dentro de la página.
   - GALERIA_CHINA: fotos de la sección de distintivos.
   - ACCESOS: herramientas y páginas propias.
   Guarda, haz commit en GitHub y Vercel publica en ~30 segundos.
   ===================================================================== */

window.PFVR = {

  /* Botones "Agenda una consulta": número de WhatsApp (con 52) y mensaje inicial */
  CONSULTA: {
    whatsapp: "528116307250",
    mensaje: "Hola, Lic. Villarreal. Me gustaría agendar una consulta."
  },

  REDES: {
    // Si dejas "" en alguna red, su ícono se oculta.
    instagram: "https://www.instagram.com/pedrovillarrealrodriguez",
    facebook:  "https://www.facebook.com/share/1CDtNkCC51/",
    linkedin:  "https://www.linkedin.com/in/pedrofernandovillarrealrodriguez",
    whatsapp:  "",
    correo:    "pedrovillarrealrodriguez@outlook.com",
    telefono:  "+52 81 1630 7250"
  },

  /* ---------- MEDIOS ----------
     Para agregar una publicación copia su liga ("Copiar enlace" en la app)
     y pega un renglón nuevo AL INICIO de la lista. Las publicaciones de
     Instagram se muestran tal cual, con la imagen y el texto originales.
     red: "instagram" | "facebook" | "linkedin"                        */
  PUBLICACIONES: [
    { red: "instagram", fecha: "2025-05-12", url: "https://www.instagram.com/p/DJjvCQegtId/" }
  ],

  /* ---------- NOTAS INFORMATIVAS ----------
     cuerpo: párrafos separados por una línea en blanco.
     fuente: fundamento legal o liga de referencia (opcional).           */
  NOTAS: [
    {
      fecha: "2026-10-10",
      tema: "Laboral",
      titulo: "El salario base para indemnizaciones: integrado, no nominal",
      cuerpo: "Para calcular la indemnización constitucional y la prima de antigüedad no basta el salario de nómina. La base es el salario integrado: cuota diaria más gratificaciones, percepciones, habitación, primas, comisiones y prestaciones en especie que se entreguen por el trabajo.\n\nLa prima de antigüedad, además, tiene un tope de dos veces el salario mínimo. Revisar la integración antes de firmar un convenio evita renunciar a cantidades que la ley reconoce.",
      fuente: "Ley Federal del Trabajo, arts. 48, 50, 84, 89, 162 y 486."
    },
    {
      fecha: "2026-09-28",
      tema: "Datos personales",
      titulo: "Nueva ley de protección de datos para particulares",
      cuerpo: "Desde el 21 de marzo de 2025 rige una nueva Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Las funciones del extinto INAI en la materia pasaron a la Secretaría Anticorrupción y Buen Gobierno.\n\nLas empresas deben revisar sus avisos de privacidad, contratos con encargados y procedimientos para atender derechos ARCO conforme al nuevo texto.",
      fuente: "LFPDPPP, publicada en el DOF el 20 de marzo de 2025."
    },
    {
      fecha: "2026-09-12",
      tema: "Amparo",
      titulo: "Suspensión en el amparo: pedirla a tiempo cambia el resultado",
      cuerpo: "La suspensión del acto reclamado conserva la materia del juicio mientras se resuelve el fondo. Su procedencia depende de que la solicite el quejoso, que no se siga perjuicio al interés social ni se contravengan disposiciones de orden público, y de la ponderación de la apariencia del buen derecho.\n\nEn materia fiscal conviene preparar desde el inicio la garantía del interés fiscal, requisito para que surta efectos la suspensión contra el cobro de contribuciones.",
      fuente: "Ley de Amparo, arts. 125, 128, 135 y 138."
    }
  ],

  /* ---------- GALERÍA DE DISTINTIVOS / CHINA ----------
     Para agregar una foto: súbela a assets/img/china/ y añade un renglón aquí. */
  GALERIA_CHINA: [
    { archivo: "assets/img/china/china-02.jpg", pie: "Conferencia sobre derecho comparado y resolución de controversias internacionales y su ejecución en México. Ningbo, China." },
    { archivo: "assets/img/china/china-01.jpg", pie: "Tribunal Popular Intermedio de Ningbo, China." }
  ],

  /* ---------- ACCESOS DIRECTOS ----------
     estado: "activo" muestra la liga; "pronto" la marca como próxima.   */
  ACCESOS: [
    { nombre: "Agenda una consulta", desc: "Escríbeme por WhatsApp", url: "https://wa.me/528116307250?text=Hola%2C%20Lic.%20Villarreal.%20Me%20gustar%C3%ADa%20agendar%20una%20consulta.", icono: "whatsapp", estado: "activo" },
    { nombre: "Calculadora de pensión alimenticia", desc: "Herramienta en desarrollo", url: "", icono: "calc", estado: "pronto" },
    { nombre: "Términos y plazos procesales", desc: "Herramienta en desarrollo", url: "", icono: "cal", estado: "pronto" }
  ]
};
