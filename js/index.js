const basket = document.querySelector(".productCartBox")
let db
function getAllProducts() {
    axios.get("https://dummyjson.com/products").then(res => {
        db = res.data.products;
        db.forEach(element => {
            let box = document.createElement("div");
            box.className = "productCart";
            box.innerHTML = ` < img
            src = "${item.thumbnail}"
            alt = "product" >
                <div class="cartBox">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    <button class="btn"onclick "addToCard(${element.id})">Sebete ekle</button>

            `;
            product.appendChild(box);
        });
    })
    
 }
 getAllProducts()