/* =====================================================================
   CONTENIDO EDITABLE DEL SITIO — PFVR
   ---------------------------------------------------------------------
   Este es el único archivo que necesitas tocar para publicar novedades:
   - REDES: tus ligas a Instagram, Facebook, LinkedIn, WhatsApp.
   - PUBLICACIONES: tarjetas de "Medios" que abren tu post en IG / FB.
   - NOTAS: notas informativas que se leen dentro de la página.
   - GALERIA_CHINA: fotos de la sección de distintivos.
   - ACCESOS: herramientas y páginas propias (calculadora, etc.).
   Guarda, haz commit en GitHub y Vercel publica en ~30 segundos.
   ===================================================================== */

window.PFVR = {

  REDES: {
    // Sustituye [usuario] por tu usuario real; si dejas "" el ícono se oculta.
    instagram: "https://www.instagram.com/[usuario]",
    facebook:  "https://www.facebook.com/[usuario]",
    linkedin:  "https://www.linkedin.com/in/pedrofernandovillarrealrodriguez",
    whatsapp:  "https://wa.me/528116305471",
    correo:    "pedrovillarreal@outlook.com",
    telefono:  "+52 81 1630 7250"
  },

  /* ---------- MEDIOS ----------
     red: "instagram" | "facebook" | "linkedin"
     url: liga directa a la publicación (copia "Copiar enlace" en la app)
     imagen: archivo en assets/img/medios/ o URL de imagen libre        */
  PUBLICACIONES: [
    {
      red: "instagram",
      fecha: "2026-10-15",
      titulo: "Finiquito o liquidación: qué te corresponde al terminar la relación laboral",
      resumen: "Las diferencias entre renuncia, despido justificado e injustificado, y qué conceptos integran cada pago conforme a la Ley Federal del Trabajo.",
      imagen: "https://images.unsplash.com/photo-1644115019513-8ff6d81c29ea?w=900&q=70&auto=format&fit=crop",
      url: "https://www.instagram.com/[usuario]"
    },
    {
      red: "facebook",
      fecha: "2026-10-02",
      titulo: "Gobierno corporativo para empresas familiares en Nuevo León",
      resumen: "Actas, protocolos familiares y poderes: tres documentos que evitan conflictos entre socios y herederos.",
      imagen: "https://images.unsplash.com/photo-1642321215251-bd9999b0b408?w=900&q=70&auto=format&fit=crop",
      url: "https://www.facebook.com/[usuario]"
    },
    {
      red: "instagram",
      fecha: "2026-09-20",
      titulo: "Cómo prepararte para tu primera audiencia oral",
      resumen: "Documentos, puntualidad y lo que conviene decir (y callar) frente al juzgador.",
      imagen: "https://images.unsplash.com/photo-1738031331362-17b064c9e0b2?w=900&q=70&auto=format&fit=crop",
      url: "https://www.instagram.com/[usuario]"
    }
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
     Coloca tus fotos en assets/img/china/ con estos nombres
     (o cambia los nombres aquí). Si una foto falta, se muestra un marco. */
  GALERIA_CHINA: [
    { archivo: "assets/img/china/china-01.jpg", pie: "[Evento o institución, ciudad, año]" },
    { archivo: "assets/img/china/china-02.jpg", pie: "[Evento o institución, ciudad, año]" },
    { archivo: "assets/img/china/china-03.jpg", pie: "[Evento o institución, ciudad, año]" },
    { archivo: "assets/img/china/china-04.jpg", pie: "[Evento o institución, ciudad, año]" },
    { archivo: "assets/img/china/china-05.jpg", pie: "[Evento o institución, ciudad, año]" }
  ],

  /* ---------- ACCESOS DIRECTOS ----------
     estado: "activo" muestra la liga; "pronto" la marca como próxima.   */
  ACCESOS: [
    { nombre: "Calculadora de finiquito", desc: "Finiquito y liquidación conforme a la LFT", url: "https://pedrovillarreal.github.io/calculadora-finiquito/", icono: "calc", estado: "activo" },
    { nombre: "Agenda una consulta", desc: "Escríbeme por WhatsApp", url: "https://wa.me/528116305471", icono: "chat", estado: "activo" },
    { nombre: "Calculadora de pensión alimenticia", desc: "Herramienta en desarrollo", url: "", icono: "calc", estado: "pronto" },
    { nombre: "Términos y plazos procesales", desc: "Herramienta en desarrollo", url: "", icono: "cal", estado: "pronto" }
  ]
};
