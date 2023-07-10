const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const products = [
  {
    id:1,
    category: 'Laptops',
    oldPrice: 1099,
    newPrice: 999,
    name: 'HP Notebook',
    available: 36,
    
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
  },
  {
    id:2,
    category: 'Electronics',
    oldPrice: 199.99,
    newPrice: 149.99,
    name: 'Wireless Headphones',
    available: 20,
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    rating: 4.5,
  
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhRE7QzBmuaxPSgx2EY8uM5e7vga3gn8QTw&usqp=CAU'
  },
  {
    id:3  ,
    category: 'Home and Garden',
    oldPrice: 99.99,
    newPrice: 69.99,
    name: 'Outdoor Patio Furniture Set',
    available: 15,
    rating: 3.8,
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIRYR4v7he98JwB0CKUVpKKfMuH3rZhSttg&usqp=CAU'
  },
  {
    id:4,
    category: 'Graphic Card',
    oldPrice: 6099,
    newPrice: 499,
    name: 'HP Notebook',
    available: 36,
    
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
  },
  {
    id:5,
    category: 'processsor',
    oldPrice: 499,
    newPrice: 599,
    name: 'HP Notebook',
    available: 36,
    
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
  },
  {
    id:6,
    category: 'Ram',
    oldPrice: 599,
    newPrice: 599,
    name: 'HP Notebook',
    available: 36,
    
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
  },
  {
    id:7,
    category: 'Laptops',
    oldPrice: 1099,
    newPrice: 999,
    name: 'HP Notebook',
    available: 36,
    
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
  },
  {
    id:8,
    category: 'Ram',
    oldPrice: 899,
    newPrice: 789,
    name: 'HP Notebook',
    available: 36,
    
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
  },
  {
    id:9,
    category: 'Laptops',
    oldPrice: 1099,
    newPrice: 999,
    name: 'HP Notebook',
    available: 36,
    
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
  },
  {
    id:10,
    category: 'processsor',
    oldPrice: 1099,
    newPrice: 999,
    name: 'HP Notebook',
    available: 36,
    
    description :"Looking for a laptop that fits your needs? Look no further. Our laptops offer the perfect blend of performance, portability, and style. Browse our selection today and upgrade your tech game!",
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp'
  },
  
];

// Routes
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});