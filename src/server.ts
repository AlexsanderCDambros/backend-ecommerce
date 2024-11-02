import express from 'express';

const server = express();

server.get('/health', (_, res) => {
    res.status(200).send('API Funcionando!');
})

server.listen(3333, () => console.log('server is running'));
