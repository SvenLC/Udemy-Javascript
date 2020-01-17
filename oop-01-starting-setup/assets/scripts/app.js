const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl:
        'https://www.serta.com/sites/ssb/serta.com/uploads/2018/accessories/pillows/Cool%20Comfy%20Queen/CoolComfy1.jpg',
      price: 19.99,
      description: 'A soft pillow!'
    },
    {
      title: 'A Carpet',
      imageUrl:
        'https://www.cdiscount.com/pdt2/9/0/0/1/550x550/sto7042421098900/rw/tapis-peluche-chambre-salon-carpet-moquette-d-enfa.jpg',
      price: 89.99,
      description: 'A carpet which you might like - or not.'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${prod.imageUrl}" alt="${prod.title}"/>
            <div class="product-item__content">
              <h2>${prod.title}</h2>
              <h3>\$${prod.price}</h3>
              <p>${prod.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
          `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();
