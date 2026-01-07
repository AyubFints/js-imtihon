const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.contener_a');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
let cart = {};
const addButtons = document.querySelectorAll('button');

addButtons.forEach(btn => {
    if (btn.innerText.includes('ADD')) {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement;

            const nameEl = parent.querySelector('h2');
            const priceEl = parent.querySelector('p');

            if (!nameEl || !priceEl) return;

            const name = nameEl.innerText;
            const price = parseFloat(priceEl.innerText.replace('$', ''));

            addToCart(name, price);
        });
    }
});

function addToCart(name, price) {
    if (cart[name]) {
        cart[name].count++;
    } else {
        cart[name] = {
            price: price,
            count: 1
        };
    }
    qosgadigan_cart();
}

function changeCount(name, value) {
    cart[name].count += value;

    if (cart[name].count <= 0) {
        delete cart[name];
    }
    qosgadigan_cart();
}

function qosgadigan_cart() {
    const kirsin = document.getElementById('kirsin');
    kirsin.innerHTML = '';

    let total = 0;

    for (let name in cart) {
        const item = cart[name];
        const itemTotal = item.price * item.count;
        total += itemTotal;

        kirsin.innerHTML += `
            <div class="item">
                <h2>${name}</h2><br>
                ${item.price}$  ${item.count} = <b>${itemTotal}$</b><br>
                <button onclick="changeCount('${name}', -1)">-</button>
                ${item.count}
                <button onclick="changeCount('${name}', 1)">+</button>
            </div>
        `;
    }

    if (total > 0) {
        kirsin.innerHTML += `
            <p>Jami: ${total}$</p>
        `;
    }
}


const cartIcon = document.querySelector('.cart');
const kirsin = document.getElementById('kirsin');

cartIcon.addEventListener('click', () => {
    kirsin.style.display =
        kirsin.style.display === 'block' ? 'none' : 'block';
});
