# Pulpas Coki - Sitio Web

Página web moderna para el emprendimiento de pulpas de fruta "Pulpas Coki", con diseño estilo Apple, carrito de compras y paleta de colores blanco, rojo y negro.

## Tecnologías

- **React 18** + **Vite 5**
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos

## Características

- Diseño minimalista estilo Apple (bordes redondeados, sombras suaves, tipografía limpia)
- Carrito de compras: página dedicada `/carrito` con productos comprados
- Productos: compradores al por mayor y al detal, opciones 250g y 500g
- Pedidos por WhatsApp, teléfono o correo (sin pasarela de pago)
- Catálogo de pulpas con animaciones
- Paleta: blanco (#FAFAFA), rojo (#E63946), negro (#0D0D0D)
- Responsive (móvil, tablet, escritorio)

## Configuración

1. **WhatsApp Business**: Edita `src/config.js` y pon tu número:
   - Formato: código país + número sin espacios (ej: `573001234567`)

2. **Precios**: Edita `src/data/products.js` para cambiar precios de 250g/500g
   - `wholesale`: precios al por mayor
   - `retail`: precios al detal

## Instalación

```bash
npm install
npm run dev
```

La app estará en `http://localhost:5173`

## Build para producción

```bash
npm run build
npm run preview
```
