// PRODUCT DATA
const products = [
    {
        id: 1,
        name: "Blazer Premium Clásico",
        category: "Hombres",
        price: 299.99,
        originalPrice: 399.99,
        image: "/img/blazers/blazers_foto_principal.webp",
        images: [
            "/img/blazers/blazers_img1.webp",
            "/img/blazers/blazers_img2.webp",
            "/img/blazers/blazers_img3.webp"
        ],
        description: "Blazer clásico en tela premium 100% algodón. Diseño elegante y versátil para cualquier ocasión. Disponible en múltiples colores.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "Negro", code: "#000000" },
            { name: "Azul Marino", code: "#001F3F" },
            { name: "Gris", code: "#808080" },
            { name: "Marrón", code: "#8B4513" }
        ],
        inStock: true,
        rating: 4.8,
        reviews: 240
    },
    {
        id: 2,
        name: "Vestido Elegante",
        category: "mujeres",
        price: 189.99,
        originalPrice: 249.99,
        image: "/img/vestidos/D_NQ_NP_921800-MLA86515968881_062025-O.webp",
        images: [
            "/img/vestidos/vestido_img2.webp",
            "/img/vestidos/vestido_img1.webp",
            "/img/vestidos/vestido_img3.jpg"
        ],
        description: "Vestido elegante en seda natural. Perfecto para eventos especiales. Disponible en diferentes talles y colores.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Negro", code: "#000000" },
            { name: "Rojo", code: "#FF0000" },
            { name: "Oro", code: "#FFD700" }
        ],
        inStock: true,
        rating: 4.9,
        reviews: 156
    },
    {
        id: 3,
        name: "Reloj Lujo Premium",
        category: "accesorios",
        price: 449.99,
        originalPrice: 599.99,
        image: "/img/reloj/reloj_principal.webp",
        images: [
            "/img/reloj/reloj_img1.jpg",
            "/img/reloj/reloj_img2.avif",
            "/img/reloj/reloj_img3.jpg"
        ],
        description: "Reloj de lujo con movimiento suizo. Resistente al agua hasta 100m. Garantía internacional de 5 años.",
        sizes: ["Único"],
        colors: [
            { name: "Oro", code: "#FFD700" },
            { name: "Plata", code: "#C0C0C0" },
            { name: "Acero", code: "#A9A9A9" }
        ],
        inStock: true,
        rating: 5,
        reviews: 89
    },
    {
        id: 4,
        name: "Zapatos Oxford",
        category: "calzado",
        price: 159.99,
        originalPrice: 199.99,
        image: "/img/zapatos_oxford/zapatos_principal.jfif",
        images: [
            "/img/zapatos_oxford/zapatos_img1.jpg",
            "/img/zapatos_oxford/zapatos_img2.jpg",
            "/img/zapatos_oxford/zapatos_img3.jpg"
        ],
        description: "Zapatos Oxford clásicos en cuero genuino. Cómodos y duraderos. Ideales para ocasiones formales.",
        sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
        colors: [
            { name: "Negro", code: "#000000" },
            { name: "Marrón", code: "#8B4513" },
            { name: "Cognac", code: "#A0522D" }
        ],
        inStock: true,
        rating: 4.7,
        reviews: 203
    },
    {
        id: 5,
        name: "Bufanda Luxury",
        category: "accesorios",
        price: 79.99,
        originalPrice: 99.99,
        image: "/img/bufanda/bufanda_principal.jfif",
        images: [
            "/img/bufanda/bufanda_img1.jfif",
            "/img/bufanda/bufanda_img2.jpg",
            "/img/bufanda/bufanda_img3.jpg"
        ],
        description: "Bufanda en lana merino pura. Suave y cálida. Disponible en múltiples diseños y colores.",
        sizes: ["Único"],
        colors: [
            { name: "Beige", code: "#F5F5DC" },
            { name: "Borgoña", code: "#800020" },
            { name: "Gris", code: "#808080" },
            { name: "Azul", code: "#0000FF" }
        ],
        inStock: false,
        rating: 4.6,
        reviews: 112
    },
    {
        id: 6,
        name: "Cartera Ejecutiva",
        category: "accesorios",
        price: 199.99,
        originalPrice: 279.99,
        image: "/img/cartera/images.jfif",
        images: [
            "/img/cartera/cartera_img2.jfif",
            "/img/cartera/cartera_img1.jfif",
            "/img/cartera/cartera_img3.jfif"
        ],
        description: "Cartera ejecutiva en cuero genuino. Múltiples compartimentos. Ideal para profesionales.",
        sizes: ["Único"],
        colors: [
            { name: "Negro", code: "#000000" },
            { name: "Marrón", code: "#8B4513" }
        ],
        inStock: true,
        rating: 4.8,
        reviews: 198
    },
    {
        id: 7,
        name: "Pantalón Chino",
        category: "Hombres",
        price: 89.99,
        originalPrice: 119.99,
        image: "/img/pantalones/pantalon_chino.jpg",
        images: [
            "/img/pantalones/pantalon_chinoimg2.jpg",
            "/img/pantalones/pantalon_chinoimg1.jpg",
            "/img/pantalones/pantalon_chinoimg3.jpg"
        ],
        description: "Pantalón chino cómodo en algodón de alta calidad. Perfecto para uso casual y profesional.",
        sizes: ["28", "30", "32", "34", "36", "38", "40"],
        colors: [
            { name: "Beige", code: "#F5DEB3" },
            { name: "Azul Marino", code: "#001F3F" },
            { name: "Gris", code: "#808080" }
        ],
        inStock: true,
        rating: 4.5,
        reviews: 145
    },
    {
        id: 8,
        name: "Blusa Elegante",
        category: "mujeres",
        price: 119.99,
        originalPrice: 159.99,
        image: "/img/blusa/blusa_principal.jpg",
        images: [
            "/img/blusa/blusa_img1.jfif",
            "/img/blusa/blusa_img2.jfif",
            "/img/blusa/blusa_img3.jfif"
        ],
        description: "Blusa elegante en seda. Diseño sofisticado. Disponible en varios colores.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Blanco", code: "#FFFFFF" },
            { name: "Negro", code: "#000000" },
            { name: "Azul Cielo", code: "#87CEEB" }
        ],
        inStock: true,
        rating: 4.7,
        reviews: 167
    }
];

let cart = [];
let currentCategory = "";
let currentSort = "relevancia";
let currentProduct = null;

// CAROUSEL LOGIC
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    carouselItems[index].classList.add('active');
    dots[index].classList.add('active');
}

document.getElementById('next-carousel').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
});

document.getElementById('prev-carousel').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentSlide);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.dataset.index);
        showSlide(currentSlide);
    });
});

// Auto-advance carousel
setInterval(() => {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
}, 5000);

// PRODUCTS GRID RENDERING
function renderProducts(filteredProducts = products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    let sorted = [...filteredProducts];

    if (currentSort === 'precio-asc') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'precio-desc') {
        sorted.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'nuevos') {
        sorted.reverse();
    }

    sorted.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.originalPrice > product.price ? `<span class="product-badge">-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>` : ''}
            </div>
            <div class="product-body">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-rating">
                    <span class="stars">★★★★★</span>
                    <span>(${product.reviews})</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openProductDetail(product));
        grid.appendChild(card);
    });
}

// FILTERS
document.getElementById('category-filter').addEventListener('change', (e) => {
    currentCategory = e.target.value;
    applyFilters();
});

document.getElementById('sort-filter').addEventListener('change', (e) => {
    currentSort = e.target.value;
    applyFilters();
});

function applyFilters() {
    let filtered = products;
    if (currentCategory) {
        filtered = products.filter(p => p.category === currentCategory);
    }
    renderProducts(filtered);
}

// PRODUCT DETAIL MODAL
function openProductDetail(product) {
    currentProduct = product;
    const modal = document.getElementById('product-modal');

    // Set product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('current-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('original-price').textContent = `$${product.originalPrice.toFixed(2)}`;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('main-image').src = product.images[0];

    // Set thumbnails
    const thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = '';
    product.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${img}" alt="Imagen ${index + 1}">`;
        thumb.addEventListener('click', () => {
            document.getElementById('main-image').src = img;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbnails.appendChild(thumb);
    });

    // Set sizes
    const sizeOptions = document.getElementById('size-options');
    sizeOptions.innerHTML = '';
    product.sizes.forEach(size => {
        const btn = document.createElement('button');
        btn.className = 'size-btn';
        btn.textContent = size;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
        sizeOptions.appendChild(btn);
    });

    // Set colors
    const colorOptions = document.getElementById('color-options');
    colorOptions.innerHTML = '';
    product.colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-option';
        colorDiv.style.backgroundColor = color.code;
        colorDiv.title = color.name;
        colorDiv.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
            colorDiv.classList.add('active');
        });
        colorOptions.appendChild(colorDiv);
    });

    // Set stock status
    const stockStatus = document.getElementById('stock-status');
    if (product.inStock) {
        stockStatus.innerHTML = '<i class="fas fa-check-circle"></i><span>En stock</span>';
        stockStatus.classList.remove('out-of-stock');
    } else {
        stockStatus.innerHTML = '<i class="fas fa-times-circle"></i><span>Fuera de stock</span>';
        stockStatus.classList.add('out-of-stock');
    }

    // Reset quantity
    document.getElementById('quantity').value = 1;

    // Update add to cart button
    const addBtn = document.getElementById('add-to-cart-btn');
    if (product.inStock) {
        addBtn.disabled = false;
        addBtn.textContent = '🛍️ Agregar al Carrito';
    } else {
        addBtn.disabled = true;
        addBtn.textContent = 'Agotado';
    }

    modal.classList.remove('hidden');
    document.getElementById('overlay').classList.add('active');
}

document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('overlay').classList.remove('active');
});

// QUANTITY CONTROLS
document.getElementById('qty-plus').addEventListener('click', () => {
    const qty = document.getElementById('quantity');
    qty.value = parseInt(qty.value) + 1;
});

document.getElementById('qty-minus').addEventListener('click', () => {
    const qty = document.getElementById('quantity');
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
});

// ADD TO CART
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    if (!currentProduct) return;

    const quantity = parseInt(document.getElementById('quantity').value);
    const selectedSize = document.querySelector('.size-btn.active');
    const selectedColor = document.querySelector('.color-option.active');

    if (!selectedSize || !selectedColor) {
        alert('Por favor selecciona talla y color');
        return;
    }

    const cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        quantity,
        size: selectedSize.textContent,
        color: selectedColor.style.backgroundColor,
        image: currentProduct.image
    };

    cart.push(cartItem);
    updateCartCount();
    alert('Producto agregado al carrito');
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('overlay').classList.remove('active');
});

// CART SIDEBAR
function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const subtotal = document.getElementById('subtotal');
    const shipping = document.getElementById('shipping');
    const total = document.getElementById('total');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        subtotal.textContent = '$0.00';
        shipping.textContent = '$0.00';
        total.textContent = '$0.00';
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">Talla: ${item.size} | Cantidad: ${item.quantity}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const subtotalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shippingAmount = subtotalAmount > 100 ? 0 : 10;
    const totalAmount = subtotalAmount + shippingAmount;

    subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
    shipping.textContent = `$${shippingAmount.toFixed(2)}`;
    total.textContent = `$${totalAmount.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
}

document.getElementById('cart-toggle').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
});

document.getElementById('cart-close').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});

// SEARCH
document.getElementById('search-toggle').addEventListener('click', () => {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) {
        document.getElementById('search-input').focus();
    }
});

document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    renderProducts(filtered);
});

// MOBILE MENU
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.getElementById('mobile-menu').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
});

// INITIAL RENDER
renderProducts();
