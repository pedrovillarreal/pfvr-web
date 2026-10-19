/* PFVR — comportamiento del sitio. El contenido vive en js/contenido.js */
(function () {
  "use strict";
  var D = window.PFVR || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]; }); };
  var reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  function fecha(iso) { var p = String(iso || "").split("-"); return p.length === 3 ? (+p[2]) + " de " + MESES[+p[1] - 1] + " de " + p[0] : esc(iso); }
  function icono(id) { return '<svg aria-hidden="true"><use href="#i-' + id + '"/></svg>'; }
  function configurada(url) { return url && url.indexOf("[") === -1; }
  var NOMBRE_RED = { instagram: "Instagram", facebook: "Facebook", linkedin: "LinkedIn", whatsapp: "WhatsApp" };

  /* 1 · Hero: fotografías de Monterrey en transición */
  var FOTOS = [
    { id: "1783614221259-107cb8c396be", autor: "Jesus Herrera", pag: "https://unsplash.com/photos/NNALse8o_uY" },
    { id: "1644115019513-8ff6d81c29ea", autor: "Gabriel Tovar", pag: "https://unsplash.com/photos/GsikuTlvUCU" },
    { id: "1590204481159-960a860ba421", autor: "Jorge Orozco", pag: "https://unsplash.com/photos/ffy8GyD73q4" },
    { id: "1642321215251-bd9999b0b408", autor: "Steven Fernandez", pag: "https://unsplash.com/photos/ovmCoJVf0yg" },
    { id: "1703220355597-68c1d4c0d1b2", autor: "Jimmy Hu", pag: "https://unsplash.com/photos/DaMQIGYdoGU" },
    { id: "1738031331362-17b064c9e0b2", autor: "Jesus Herrera", pag: "https://unsplash.com/photos/bxCAGIkEZXY" }
  ];
  var cont = $("#heroFotos"), credito = $("#heroCredito");
  if (cont) {
    var ancho = Math.min(2400, Math.round(window.innerWidth * (window.devicePixelRatio || 1)));
    var capas = FOTOS.map(function (f) {
      var d = document.createElement("div");
      d.className = "hero-foto";
      d.dataset.src = "https://images.unsplash.com/photo-" + f.id + "?w=" + ancho + "&q=72&auto=format&fit=crop";
      cont.appendChild(d);
      return d;
    });
    var cargar = function (i) { var c = capas[i]; if (!c.style.backgroundImage) c.style.backgroundImage = 'url("' + c.dataset.src + '")'; };
    var actual = 0;
    var mostrar = function (i) {
      cargar(i); cargar((i + 1) % capas.length);
      capas.forEach(function (c, k) { c.classList.toggle("visible", k === i); });
      credito.innerHTML = 'Monterrey, N.L. Foto: <a href="' + FOTOS[i].pag + '" target="_blank" rel="noopener">' + esc(FOTOS[i].autor) + "</a> / Unsplash";
    };
    mostrar(0);
    if (!reducido) setInterval(function () { if (!document.hidden) { actual = (actual + 1) % capas.length; mostrar(actual); } }, 7000);
  }

  /* Navegación */
  var nav = $("#nav"), boton = $("#navBoton"), menu = $("#navMenu");
  var alDesplazar = function () { nav.classList.toggle("solida", window.scrollY > window.innerHeight * 0.75 - 72); };
  window.addEventListener("scroll", alDesplazar, { passive: true }); alDesplazar();
  var cerrarMenu = function () { menu.classList.remove("abierto"); nav.classList.remove("menu-abierto"); boton.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; };
  boton.addEventListener("click", function () {
    var abrir = boton.getAttribute("aria-expanded") !== "true";
    menu.classList.toggle("abierto", abrir); nav.classList.toggle("menu-abierto", abrir);
    boton.setAttribute("aria-expanded", String(abrir)); document.body.style.overflow = abrir ? "hidden" : "";
  });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) cerrarMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrarMenu(); });
  if ("IntersectionObserver" in window) {
    var ligas = {}; menu.querySelectorAll("a").forEach(function (a) { ligas[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting && ligas[en.target.id]) { Object.values(ligas).forEach(function (a) { a.classList.remove("activo"); }); ligas[en.target.id].classList.add("activo"); } });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { obs.observe(s); });
  }

  /* Despacho: fondo con desplazamiento lento */
  var fondo = $(".despacho-fondo"), secD = $("#despacho");
  if (fondo && !reducido) {
    var mover = function () { var r = secD.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) fondo.style.transform = "translateY(" + (r.top * -0.12).toFixed(1) + "px)"; };
    window.addEventListener("scroll", mover, { passive: true }); mover();
  }

  /* Imágenes con respaldo si aún no subes el archivo */
  document.querySelectorAll("img[data-respaldo]").forEach(function (img) {
    var poner = function () {
      var tipo = img.dataset.respaldo, div = document.createElement("div");
      if (tipo === "monograma") { div.className = "monograma"; div.setAttribute("role", "img"); div.setAttribute("aria-label", img.alt); div.textContent = "PFVR"; }
      else { div.className = "eva-marca"; div.setAttribute("role", "img"); div.setAttribute("aria-label", img.alt); div.innerHTML = "<b>EV<i>&amp;</i>A</b><span>Escalante Villarreal<br>&amp; Asociados, S.C.</span>"; }
      img.replaceWith(div);
    };
    if (img.complete && img.naturalWidth === 0) poner(); else img.addEventListener("error", poner);
  });

  /* Redes: pie y botones de "Seguir" */
  var R = D.REDES || {};
  var redes = $("#redes"), seguir = $("#seguir");
  [["instagram", R.instagram], ["facebook", R.facebook], ["linkedin", R.linkedin], ["whatsapp", R.whatsapp], ["mail", R.correo ? "mailto:" + R.correo : ""]].forEach(function (r) {
    if (!configurada(r[1])) return;
    var nombre = NOMBRE_RED[r[0]] || "Correo";
    redes.insertAdjacentHTML("beforeend", '<li><a href="' + esc(r[1]) + '" target="_blank" rel="noopener" aria-label="' + nombre + '">' + icono(r[0]) + "</a></li>");
  });
  ["instagram", "facebook"].forEach(function (r) {
    if (configurada(R[r])) seguir.insertAdjacentHTML("beforeend", '<a href="' + esc(R[r]) + '" target="_blank" rel="noopener">' + icono(r) + "Seguir en " + NOMBRE_RED[r] + "</a>");
  });

  /* 6 · Medios */
  var pubs = $("#publicaciones");
  (D.PUBLICACIONES || []).slice().sort(function (a, b) { return a.fecha < b.fecha ? 1 : -1; }).forEach(function (p) {
    var red = NOMBRE_RED[p.red] || "Ver";
    pubs.insertAdjacentHTML("beforeend",
      '<a class="pub" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
        '<div class="pub-img"><img src="' + esc(p.imagen) + '" alt="" loading="lazy"><span class="pub-red">' + icono(p.red) + red + "</span></div>" +
        '<div class="pub-cuerpo"><time datetime="' + esc(p.fecha) + '">' + fecha(p.fecha) + "</time><h3>" + esc(p.titulo) + "</h3><p>" + esc(p.resumen) + '</p><span class="pub-ver">Ver en ' + red + "</span></div></a>");
  });

  /* 7 · Notas */
  var lista = $("#listaNotas"), modal = $("#modalNota"), notaActual = null;
  var NOTAS = D.NOTAS || [];
  NOTAS.forEach(function (n, i) {
    lista.insertAdjacentHTML("beforeend",
      '<li><button data-nota="' + i + '"><span class="meta"><b>' + esc(n.tema) + "</b>" + fecha(n.fecha) + "</span><h3>" + esc(n.titulo) + '</h3><span class="leer">Leer nota</span></button></li>');
  });
  var abrirNota = function (i) {
    var n = NOTAS[i]; if (!n) return; notaActual = i;
    $("#notaMeta").textContent = n.tema + ", " + fecha(n.fecha);
    $("#notaTitulo").textContent = n.titulo;
    $("#notaCuerpo").innerHTML = String(n.cuerpo || "").split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    $("#notaFuente").textContent = n.fuente ? "Fundamento: " + n.fuente : "";
    modal.showModal(); history.replaceState(null, "", "#nota-" + (i + 1));
  };
  lista.addEventListener("click", function (e) { var b = e.target.closest("[data-nota]"); if (b) abrirNota(+b.dataset.nota); });
  modal.addEventListener("close", function () { if (location.hash.indexOf("#nota-") === 0) history.replaceState(null, "", "#notas"); });
  var m = location.hash.match(/^#nota-(\d+)$/); if (m) abrirNota(+m[1] - 1);
  $("#notaCompartir").addEventListener("click", function () {
    var n = NOTAS[notaActual], url = location.origin + location.pathname + "#nota-" + (notaActual + 1);
    if (navigator.share) { navigator.share({ title: n.titulo, url: url }).catch(function () {}); }
    else { window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank", "noopener,width=640,height=520"); }
  });

  /* 5 · Galería con visor */
  var gal = $("#galeria"), visor = $("#visor"), FOTOS_G = D.GALERIA_CHINA || [], gi = 0;
  FOTOS_G.forEach(function (f, i) {
    var b = document.createElement("button");
    b.type = "button"; b.setAttribute("aria-label", "Ampliar: " + f.pie);
    var img = new Image(); img.src = f.archivo; img.alt = f.pie;
    img.onerror = function () { b.innerHTML = '<span class="marco-vacio"><span><b>Foto ' + (i + 1) + "</b>" + esc(f.archivo.split("/").pop()) + "</span></span>"; b.disabled = true; b.style.cursor = "default"; };
    b.appendChild(img);
    b.addEventListener("click", function () { gi = i; verFoto(); visor.showModal(); });
    gal.appendChild(b);
  });
  var verFoto = function () { $("#visorImg").src = FOTOS_G[gi].archivo; $("#visorImg").alt = FOTOS_G[gi].pie; $("#visorPie").textContent = FOTOS_G[gi].pie; };
  var paso = function (d) { gi = (gi + d + FOTOS_G.length) % FOTOS_G.length; verFoto(); };
  $("#visorAnt").addEventListener("click", function () { paso(-1); });
  $("#visorSig").addEventListener("click", function () { paso(1); });
  visor.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") paso(-1); if (e.key === "ArrowRight") paso(1); });

  /* Cerrar modales: botón o clic fuera */
  [modal, visor].forEach(function (dlg) {
    dlg.addEventListener("click", function (e) { if (e.target === dlg || e.target.closest("[data-cerrar]")) dlg.close(); });
  });

  /* 8 · Accesos directos */
  var acc = $("#accesos");
  (D.ACCESOS || []).forEach(function (a) {
    var activo = a.estado === "activo" && configurada(a.url);
    var interior = icono(a.icono || "calc") + "<strong>" + esc(a.nombre) + "</strong><span>" + esc(activo ? a.desc : "Próximamente") + "</span>";
    acc.insertAdjacentHTML("beforeend", activo
      ? '<li><a class="acceso" href="' + esc(a.url) + '" target="_blank" rel="noopener">' + interior + "</a></li>"
      : '<li><div class="acceso pronto">' + interior + "</div></li>");
  });

  $("#anio").textContent = new Date().getFullYear();
})();
