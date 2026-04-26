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
  { 
    id: 1, 
    nombre: "Luna Miel", 
    aroma: "Miel y Lavanda", 
    precio: 2500, 
    taille: "Grande", 
    descripcion: "Vela de soja con esencia de miel orgánica y lavanda francesa",
    color: "#F5DEB3",
    imagen: "https://images.unsplash.com/photo-1602607203242-17c9dfa4c0f6?w=400&h=400&fit=crop"
  },
  { 
    id: 2, 
    nombre: "Bosque Encantado", 
    aroma: "Pino y Eucalipto", 
    precio: 2200, 
    taille: "Mediana", 
    descripcion: "Aromas frescos del bosque patagónico",
    color: "#228B22",
    imagen: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop"
  },
  { 
    id: 3, 
    nombre: "Noche de Verano", 
    aroma: "Jazmín y Gardenia", 
    precio: 2800, 
    taille: "Grande", 
    descripcion: "Fragancia floral intensa para noches memorables",
    color: "#FFB6C1",
    imagen: "https://images.unsplash.com/photo-1608181831718-2501c55c8e7e?w=400&h=400&fit=crop"
  },
  { 
    id: 4, 
    nombre: "Café Vainilla", 
    aroma: "Café y Vainilla", 
    precio: 2100, 
    taille: "Chica", 
    descripcion: "Combinación acogedora de café recién molido",
    color: "#8B4513",
    imagen: "https://images.unsplash.com/photo-1603006905393-c7da8488d6c8?w=400&h=400&fit=crop"
  },
  { 
    id: 5, 
    nombre: "Cítricos Frescos", 
    aroma: "Limón y Naranja", 
    precio: 1800, 
    taille: "Chica", 
    descripcion: "Refrescante mezcla cítrica revitalizante",
    color: "#FFD700",
    imagen: "https://images.unsplash.com/photo-1608581728943-9305d5e3c8c8?w=400&h=400&fit=crop"
  },
  { 
    id: 6, 
    nombre: "Veladora Calmada", 
    aroma: "Sándalo y Mirra", 
    precio: 3500, 
    taille: "XL", 
    descripcion: "Vela premium para meditación y relajación",
    color: "#D2691E",
    imagen: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop"
  },
]

const appHTML = `
  <header class="insta-header">
    <div class="insta-logo">VelaMor</div>
    <div class="insta-icons">
      <span>❤️</span>
      <span>💬</span>
    </div>
  </header>

  <div class="stories">
    <div class="story-ring">
      <div class="story-avatar">🕯️</div>
      <span>Nuevo</span>
    </div>
    ${velas.slice(0, 5).map(vela => `
      <div class="story-ring">
        <div class="story-avatar" style="background: ${vela.color}">${vela.nombre[0]}</div>
        <span>${vela.nombre.split(' ')[0]}</span>
      </div>
    `).join('')}
  </div>

  <main class="feed">
    ${velas.map(vela => `
      <article class="post">
        <div class="post-header">
          <div class="post-avatar" style="background: ${vela.color}">${vela.nombre[0]}</div>
          <div class="post-user">
            <strong>velamor_ccs</strong>
            <span>${vela.taille}</span>
          </div>
          <span class="post-more">•••</span>
        </div>
        <div class="post-image">
          <img src="${vela.imagen}" alt="${vela.nombre}" />
          <div class="post-flame">🕯️</div>
        </div>
        <div class="post-actions">
          <div class="post-actions-left">
            <span>❤️</span>
            <span>💬</span>
            <span>🚀</span>
          </div>
          <span>🔖</span>
        </div>
        <div class="post-likes">${Math.floor(Math.random() * 500) + 50} gusta</div>
        <div class="post-caption">
          <strong>velamor_ccs</strong> ${vela.nombre} - ${vela.aroma}
          <p>${vela.descripcion}</p>
          <span class="post-price">$${vela.precio.toLocaleString()}</span>
        </div>
        <button class="btn-comprar" onclick="window.open('https://wa.me/5491112345678?text=Hola!%20Quiero%20comprar%20${encodeURIComponent(vela.nombre)}', '_blank')">
          Comprar ahora 💬
        </button>
      </article>
    `).join('')}
  </main>

  <nav class="insta-nav">
    <span>🏠</span>
    <span>🔍</span>
    <span>➕</span>
    <span>🎬</span>
    <span>👤</span>
  </nav>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appHTML