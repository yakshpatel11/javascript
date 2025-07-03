const Products = [
    {
        "name": "Car Phone Mount",
        "description": "Universal dashboard and windshield phone holder with adjustable arm.",
        "price": 14.99,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFM9szBXSVxw9bo-I1GLlVbfryTSMgz5ZTGg&s"
    },
    {
        "name": "Car Vacuum Cleaner",
        "description": "Portable handheld vacuum with powerful suction and HEPA filter.",
        "price": 39.95,
        "image": "https://5.imimg.com/data5/EG/TU/MY-2384500/industrial-vacuum-car-cleaner-500x500.png"
    },
    {
        "name": "Windshield Sun Shade",
        "description": "Foldable reflective sunshade to protect your car interior from heat.",
        "price": 18.50,
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/6/424633916/JU/FR/IA/223006845/71lpn1fsyql-sy450-1000-500x500.png"
    },
    {
        "name": "Bluetooth FM Transmitter",
        "description": "Wireless audio adapter with dual USB charger and hands-free calling.",
        "price": 21.99,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYDoy1-2P4Y9mund61MkCSjnC0jja_zZXzA&s"
    },
    {
        "name": "Car Seat Organizer",
        "description": "Multi-pocket storage solution for back seat organization.",
        "price": 22.00,
        "image": "https://m.media-amazon.com/images/I/61-gxIpKryL._UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Tire Pressure Gauge",
        "description": "Digital tire pressure monitor for accurate readings.",
        "price": 11.99,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZiLbmh2pQk5UE-X-nXvwFBOnRaQuXANGs5Q&s"
    },
    {
        "name": "LED Headlight Bulbs",
        "description": "Super bright white LED bulbs compatible with most car models.",
        "price": 49.99,
        "image": "https://png.pngtree.com/png-clipart/20231016/original/pngtree-car-bulb-on-a-white-background-light-photo-png-image_13315606.png"
    },
    {
        "name": "Jump Starter",
        "description": "Compact power bank and car battery jump starter combo.",
        "price": 89.99,
        "image": "https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-battery-jumper-cables-black-png-image_10495628.png"
    },
    {
        "name": "Car Cover",
        "description": "Waterproof all-weather protection cover for sedans.",
        "price": 45.00,
        "image": "https://t3.ftcdn.net/jpg/03/50/68/64/360_F_350686478_w7eAA8oeSdkiLIukeIb2p7RJCCHdPTrC.jpg"
    },
    {
        "name": "Steering Wheel Lock",
        "description": "Anti-theft device to secure your vehicle's steering wheel.",
        "price": 32.99,
        "image": "https://www.rocwood.co.uk/wp-content/uploads/2022/12/RWSWL6-PROMO-c.png"
    },
    {
        "name": "Trunk Organizer",
        "description": "Collapsible storage container for car trunk or SUV cargo.",
        "price": 29.95,
        "image": "https://static.vecteezy.com/system/resources/previews/048/676/833/non_2x/car-trunk-with-luggage-png.png"
    },
    {
        "name": "Backup Camera",
        "description": "Waterproof rearview camera with night vision.",
        "price": 55.49,
        "image": "https://i.ebayimg.com/images/g/GHEAAOSwJTVlojqt/s-l400.png"
    },
    {
        "name": "Windshield Wiper Blades",
        "description": "All-season wiper blades for clear visibility.",
        "price": 24.99,
        "image": "https://static.vecteezy.com/system/resources/previews/060/423/148/non_2x/windshield-wipers-for-car-windscreen-black-rubber-blades-for-efficient-water-removal-and-safe-driving-free-png.png"
    },
    {
        "name": "Car Wash Kit",
        "description": "Complete exterior car cleaning set with soap, mitt, and towel.",
        "price": 34.95,
        "image": "https://i.pinimg.com/originals/75/cb/96/75cb96712e9f4ef61e6afce4abd1dd41.png"
    },
    {
        "name": "Seat Covers",
        "description": "Universal fit, waterproof seat protectors for front and rear seats.",
        "price": 59.99,
        "image": "https://5.imimg.com/data5/SELLER/Default/2022/2/EY/WS/XX/112870002/car-seat-covers.png"
    },
    {
        "name": "OBD2 Scanner",
        "description": "Diagnostic tool for reading and clearing car engine codes.",
        "price": 44.99,
        "image": "https://atlas-content-cdn.pixelsquid.com/stock-images/autel-obd2-code-reader-scan-tool-d78KDND-600.jpg"
    },
    {
        "name": "License Plate Frame",
        "description": "Sleek stainless steel frame with anti-rust protection.",
        "price": 13.50,
        "image": "https://png.pngtree.com/png-clipart/20250104/original/pngtree-colorful-chrome-license-plate-frame-with-a-shiny-png-image_19836308.png"
    },
    {
        "name": "Car Air Freshener",
        "description": "Clip-on vent air freshener with long-lasting scent.",
        "price": 9.99,
        "image": "https://5.imimg.com/data5/SELLER/Default/2022/11/MR/ZH/RS/114542219/red-solar-rotating-car-perfume-500x500.png"
    },
    {
        "name": "Dash Cam",
        "description": "Full HD front and rear dashboard camera with loop recording.",
        "price": 69.99,
        "image": "https://atlas-content-cdn.pixelsquid.com/assets_v2/240/2408890032615068739/jpeg-600/G03.jpg?modifiedAt=1"
    },
    {
        "name": "Portable Air Compressor",
        "description": "12V tire inflator with digital display and LED light.",
        "price": 47.95,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3RdMgun5FKlE7ZDkfhyJSt61NeiVSElAxw&s"
    }
];


const ProductList = [
    {
        name: "Car Vacuum Cleaner",
        description: "Compact and powerful cleaner for your car.",
        price: 29.99,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Phone Holder",
        description: "Adjustable phone holder for dashboard or windshield.",
        price: 14.99,
        image: "https://via.placeholder.com/150"
    }
];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalDiv = document.getElementById('cart-total');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    cartItems.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>No items in cart</li>';
        totalDiv.innerHTML = '';
        return;
    }

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.width = '50px';
        img.style.marginRight = '10px';

        const name = document.createElement('span');
        name.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;

        const plusBtn = document.createElement('button');
        plusBtn.textContent = '+';
        plusBtn.style.marginLeft = '10px';
        plusBtn.addEventListener('click', () => {
            item.quantity += 1;
            saveCartToLocalStorage();
            renderCart();
        });

        const minusBtn = document.createElement('button');
        minusBtn.textContent = '-';
        minusBtn.style.marginLeft = '5px';
        minusBtn.addEventListener('click', () => {
            item.quantity -= 1;
            if (item.quantity === 0) {
                cart.splice(index, 1);
            }
            saveCartToLocalStorage();
            renderCart();
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click', () => {
            cart.splice(index, 1);
            saveCartToLocalStorage();
            renderCart();
        });

        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(plusBtn);
        li.appendChild(minusBtn);
        li.appendChild(removeBtn);

        cartItems.appendChild(li);

        subtotal += item.price * item.quantity;
    });

    const gstRate = 0.18;
    const discountRate = 0.10;
    const gst = subtotal * gstRate;
    const discount = subtotal * discountRate;
    const grandTotal = subtotal + gst - discount;

    totalDiv.innerHTML = `
        <hr>
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>GST (18%):</strong> $${gst.toFixed(2)}</p>
        <p><strong>Discount (10%):</strong> -$${discount.toFixed(2)}</p>
        <p><strong>Grand Total:</strong> $${grandTotal.toFixed(2)}</p>
    `;
}

function renderProducts() {
    Products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('h3');
        name.textContent = product.name;

        const desc = document.createElement('p');
        desc.textContent = product.description;

        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = `$${product.price.toFixed(2)}`;

        const btn = document.createElement('button');
        btn.className = 'add-btn';
        btn.textContent = 'Add to Cart';

        btn.addEventListener('click', () => {
            const existing = cart.find(item => item.name === product.name);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            saveCartToLocalStorage();
            renderCart();
        });

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(price);
        card.appendChild(btn);

        productList.appendChild(card);
    });
}


renderProducts();
renderCart();

