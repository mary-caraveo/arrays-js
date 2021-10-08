const products = [
    { title: "Pizza", price: 12, id: '🍕' },
    { title: "Burger", price: 23, id: '🍔' },
    { title: "Hot dog", price: 34, id: '🌭' },
    { title: "Hot cakes", price: 55, id: '🥞' },
  ];

  const myProducts = [];
  console.log('Products', products);
  console.log('MyProducts', myProducts);
  console.log('-'.repeat(10));

  /// Encontrar producto
  const product = products.find(item => item.id === '🍔');
  if (product) {
    myProducts.push(product);
  }

  console.log('Products', products);
  console.log('MyProducts', myProducts);
  console.log('-'.repeat(10));

  //Eliminar producto
  const productIndex = products.findIndex(item => item.id === '🍔');
  if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
  }

  console.log('Products', products);
  console.log('My Products', myProducts);
  console.log('-'.repeat(10));

//Reto eliminar
const products2 = products.filter(item => item.id !="🍔");
console.log('Original', products);
console.log('Nuevo', products2);
console.log('-'.repeat(10));

//Update
const productsV2 = [
    { title: "Pizza", price: 12, id: '🍕' },
    { title: "Burger", price: 23, id: '🍔' },
    { title: "Hot dog", price: 34, id: '🌭' },
    { title: "Hot cakes", price: 55, id: '🥞' },
  ];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const productIndex2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndex2] = {
    ...productsV2[productIndex2],
    ...update.changes,
}

console.log('productsV2', productsV2);
console.log('-'.repeat(10));

//Reto 2
const productsV3 = [
    { title: "Pizza", price: 12, id: '🍕' },
    { title: "Burger", price: 23, id: '🍔' },
    { title: "Hot dog", price: 34, id: '🌭' },
    { title: "Hot cakes", price: 55, id: '🥞' },
  ];

const update2 = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const newArray2 = productsV3.map(item => {
    if(item.id === update2.id){
        return {
            ...item,
            ...update2.changes
        }
    }else{
        return {
            ...item
        }
    }
});

console.log('Original', productsV3);
console.log('newArray2', newArray2);
console.log('-'.repeat(10));

//Metodos mutables, van a modificar el array original
// y utilizar algunos inmutables para busquedas.
//push, splice son mutables.
//findIndex, es inmutable.