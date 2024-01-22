const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    setTimeout(() => {
        res.json([
            {
                mensagem: 'Oi...',
                visualizado: true,
                remetente: false,
            },
            {
                mensagem: 'Tu não me ama mais?',
                visualizado: true,
                remetente: false,
            },
            {
                mensagem: 'Oi, boa tarde.',
                visualizado: true,
                remetente: true,
            },
            {
                mensagem: 'Quem é você mesmo?',
                visualizado: true,
                remetente: true,
            },
        ]);
    }, 3000);
});

app.listen(8080, () => {
    console.log('Servidor rodando');
});
