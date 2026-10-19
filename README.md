# PFVR Soluciones Legales — sitio web

Sitio de una sola página de Pedro Fernando Villarreal Rodríguez. HTML, CSS y JavaScript puros: no requiere instalación ni compilación.

## Estructura

```
index.html              Página principal (8 secciones)
aviso-privacidad.html   Aviso de privacidad integral
css/estilos.css         Diseño (colores PFVR, Montserrat)
js/contenido.js         ← EL ARCHIVO QUE EDITAS: redes, publicaciones, notas, galería, accesos
js/app.js               Funcionamiento (no es necesario tocarlo)
assets/fonts/           Montserrat (alojada en el sitio, sin depender de Google)
assets/img/             Imágenes propias (ver lista abajo)
vercel.json             Configuración de Vercel
```

## Imágenes que debes subir

| Archivo | Uso | Medida sugerida |
|---|---|---|
| `assets/img/pedro.jpg` | Tu fotografía en "Perfil" | 1200 × 1500 px, vertical |
| `assets/img/logo-eva.png` | Logotipo de Escalante Villarreal & Asociados | PNG con fondo transparente, 1000 px |
| `assets/img/china/china-01.jpg` … `china-05.jpg` | Galería de distintivos | 1600 px del lado largo |
| `assets/img/medios/…` | Portadas de tus publicaciones (opcional) | 1200 × 900 px |

Mientras no existan, el sitio muestra un monograma o un marco en su lugar; no se ve roto.

## Publicar una novedad (Medios o Notas)

1. En GitHub abre `js/contenido.js` y pulsa el lápiz (Edit).
2. Copia un bloque de `PUBLICACIONES` o `NOTAS`, pégalo arriba y cambia los textos.
   En publicaciones, `url` es la liga de tu post ("Copiar enlace" en Instagram o Facebook).
3. Pulsa **Commit changes**. Vercel publica en menos de un minuto.

## Subir a GitHub

1. En github.com → **New repository** → nombre `pfvr-web` → Public → **Create repository**.
2. Pulsa **uploading an existing file**, arrastra el contenido de esta carpeta (no la carpeta) y **Commit changes**.

## Conectar con Vercel

1. En vercel.com → **Add New… → Project** → **Import** el repositorio `pfvr-web`.
2. Framework Preset: **Other**. Build Command y Output Directory: vacíos.
3. **Deploy**. Obtendrás una dirección `pfvr-web.vercel.app`.
4. Dominio propio (opcional): Project → Settings → Domains → agrega tu dominio y sigue las instrucciones DNS.

Cada commit en la rama `main` se publica automáticamente.

## Créditos de fotografía

Fotografías de Monterrey bajo la Licencia Unsplash (uso comercial libre, sin atribución obligatoria): Jesus Herrera, Gabriel Tovar, Steven Fernandez, Jimmy Hu y Jorge Orozco.
