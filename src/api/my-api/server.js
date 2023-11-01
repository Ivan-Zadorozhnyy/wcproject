const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET']
}));

app.use(express.json());

const products = [
    { id: 1, name: 'Lavender Honey', description: 'A sweet and fragrant honey.', image: 'path_to_your_image/honey-sample.jpg', price: 9.99 },
    { id: 2, name: 'Manuka Honey', description: 'A honey with healing properties.', image: 'path_to_your_image/honey-sample.jpg', price: 19.99 },
];

app.get('/api/products', (req, res) => {
    console.log('GET /api/products endpoint hit');
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('The product with the given ID was not found.');
    }
    res.json(product);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
