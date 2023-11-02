const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET']
}));

app.use(express.json());

const products = [
    { id: 1, name: 'Lavender Honey', description: 'A fragrant honey with a delicate floral note, renowned for its soothing and relaxing qualities.', image: 'https://ashevillebeecharmer.com/wp-content/uploads/lavender-infused-honey.jpg', price: '24.99' },
    { id: 2, name: 'Manuka Honey', description: 'A unique honey with potent antibacterial properties, sourced from New Zealands native Manuka tree.', image: 'https://melitahoneyfarm.com.au/cdn/shop/products/manuka-propolis-500_1445x.jpg?v=1685844573', price: '19.99' },
    { id: 3, name: 'Buckwheat Honey', description: 'A robust, dark-hued honey with a molasses-like flavor, known for its antioxidants and immune-boosting properties.', image: 'https://ashevillebeecharmer.com/wp-content/uploads/buckwheat-honey-16oz.jpg', price: '14.99' },
];

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send({ error: 'Bad JSON' });
    }
    next();
});

app.get('/api/products', (req, res) => {
    console.log('GET /api/products endpoint hit');
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send({ error: 'The product with the given ID was not found.' });
    }
    res.json(product);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
