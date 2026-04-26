import './style.css'

interface Vela {
  id: number
  nombre: string
  aroma: string
  precio: number
  taille: string
  descripcion: string
  color: string
  imagen: string
}

const velas: Vela[] = [
  { id: 1, nombre: "Luna Miel", aroma: "Miel y Lavanda", precio: 2500, taille: "Grande", descripcion: "Vela de soja con esencia de miel orgánica y lavanda francesa", color: "#F5DEB3", imagen: "/velas-aromaticas/imagenes/imagen-1.jpg" },
  { id: 2, nombre: "Bosque Encantado", aroma: "Pino y Eucalipto", precio: 2200, taille: "Mediana", descripcion: "Aromas frescos del bosque patagónico", color: "#228B22", imagen: "/velas-aromaticas/imagenes/imagen-2.jpg" },
  { id: 3, nombre: "Noche de Verano", aroma: "Jazmín y Gardenia", precio: 2800, taille: "Grande", descripcion: "Fragancia floral intensa para noches memorables", color: "#FFB6C1", imagen: "/velas-aromaticas/imagenes/imagen-3.jpg" },
  { id: 4, nombre: "Café Vainilla", aroma: "Café y Vainilla", precio: 2100, taille: "Chica", descripcion: "Combinación acogedora de café recién molido", color: "#8B4513", imagen: "/velas-aromaticas/imagenes/imagen-4.jpg" },
  { id: 5, nombre: "Cítricos Frescos", aroma: "Limón y Naranja", precio: 1800, taille: "Chica", descripcion: "Refrescante mezcla cítrica revitalizante", color: "#FFD700", imagen: "/velas-aromaticas/imagenes/imagen-5.jpg" },
  { id: 6, nombre: "Veladora Calmada", aroma: "Sándalo y Mirra", precio: 3500, taille: "XL", descripcion: "Vela premium para meditación y relajación", color: "#D2691E", imagen: "/velas-aromaticas/imagenes/imagen-6.jpg" },
]

const preciosPorCantidad = [
  { cantidad: "10-24", descuento: "10%" },
  { cantidad: "25-49", descuento: "15%" },
  { cantidad: "50+", descuento: "20%" },
]

const appHTML = `
  <header class="header">
    <div class="logo">🕯️ Velas Essencias</div>
    <nav class="nav">
      <a href="#productos">Productos</a>
      <a href="#catalogo">Catálogo</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h1>Velas Aromáticas<br>Handmade</h1>
      <p class="subtitle">Creamos experiencias olfativas únicas para tu hogar</p>
      <a href="#catalogo" class="btn-primary">Ver Catálogo</a>
    </div>
    <div class="hero-visual">
      <div class="flame">🔥</div>
    </div>
  </section>

  <section id="productos" class="section">
    <h2>¿Por qué elegirnos?</h2>
    <div class="features">
      <div class="feature-card">
        <div class="feature-icon">🌿</div>
        <h3>100% Natural</h3>
        <p>Fabricadas con cera de soja orgánica y aceites esenciales puros</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⏱️</div>
        <h3>Larga Duración</h3>
        <p>Hasta 50 horas de aroma continuo</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎁</div>
        <h3> Packaging Premium</h3>
        <p>Presentaciones perfectas para regalos</p>
      </div>
    </div>
  </section>

  <section id="catalogo" class="section alt">
    <h2>Nuestro Catálogo</h2>
    <div class="catalogo-grid">
      ${velas.map(vela => `
        <div class="product-card" style="--color: ${vela.color}">
          <div class="product-image">
            <img src="${vela.imagen}" alt="${vela.nombre}" />
          </div>
          <h3>${vela.nombre}</h3>
          <p class="aroma">${vela.aroma}</p>
          <p class="descripcion">${vela.descripcion}</p>
          <div class="product-meta">
            <span class="taille">${vela.taille}</span>
            <span class="precio">$${vela.precio.toLocaleString()}</span>
          </div>
          <button class="btn-secondary" onclick="window.open('https://wa.me/5491112345678?text=Hola!%20Quiero%20comprar%20${encodeURIComponent(vela.nombre)}', '_blank')">
            Comprar 💬
          </button>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="section">
    <h2>Descuentos por Cantidad</h2>
    <div class="discounts">
      ${preciosPorCantidad.map(item => `
        <div class="discount-card">
          <div class="discount-amount">${item.descuento}</div>
          <div class="discount-range">${item.cantidad} unidades</div>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="contacto" class="section alt">
    <h2>¡Hace tu pedido!</h2>
    <p class="contact-text">Escríbenos por WhatsApp para realizar tu pedido o consultar</p>
    <a href="https://wa.me/5491112345678?text=Hola!%20Quiero%20información%20sobre%20las%20velas" class="btn-whatsapp">
      💬 Escribinos por WhatsApp
    </a>
  </section>

  <footer class="footer">
    <p>© 2026 Velas Essencias - Handmade con ❤</p>
  </footer>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appHTML