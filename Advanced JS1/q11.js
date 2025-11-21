function processProducts(products) {
    const names = products.map(p => p.name);
    products.forEach((p) => {
        const status = p.price > 50 ? 'above $50' : 'below $50';
        console.log(`${p.name} is ${status}`);
    });
    return names;
}
console.log(processProducts([{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]));