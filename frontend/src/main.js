async function fetchShoes() {
    const response = await fetch('http://localhost:5000/api/shoes');
    const shoes = await response.json();
    const shoeList = document.getElementById('shoe-list');

    shoeList.innerHTML = shoes.map(shoe => `
        <div>
            <h2>${shoe.name}</h2>
            <p>Brand: ${shoe.brand}</p>
            <p>Price: $${shoe.price}</p>
            <img src="${shoe.image}" alt="${shoe.name}" width="100"/>
        </div>
    `).join('');
}

fetchShoes();
