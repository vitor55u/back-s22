const express = require('express');
const axios = require('axios'); // Use 'axios' ou 'node-fetch' para requisições HTTP
const app = express();
const PORT = 3000;
const API_KEY = '34ccbb897dc635a28d01dd3d'; // Substitua pela sua chave de uma API de câmbio

// 1. Simulação de um SDK (Abstração de um serviço de terceiros)
function validarPaisSDK(codigoPais) {
    // Um SDK real faria uma chamada complexa, mas aqui, simulamos a lógica
    if (codigoPais === 'BR') {
        return { status: 'Válido', nome: 'Brasil' };
    } else if (codigoPais === 'US') {
        return { status: 'Válido', nome: 'Estados Unidos' };
    } else {
        return { status: 'Inválido', nome: 'País Desconhecido' };
    }
}

// Endpoint para simular a validação com SDK
app.get('/validar-pais/:codigo', (req, res) => {
    const resultado = validarPaisSDK(req.params.codigo.toUpperCase());
    res.json(resultado);
});

// 2. Endpoint para Integração com API Externa de Câmbio
app.get('/cotacao/:base/:target', async (req, res) => {
    const { base, target } = req.params;
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base}`;
    
    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.result === 'error') {
            return res.status(400).json({ error: 'Erro na API de Câmbio: ' + data['error-type'] });
        }
        
        // Extração e tratamento da resposta
        const taxa = data.conversion_rates[target.toUpperCase()];
        
        if (taxa) {
            res.json({
                moeda_base: base.toUpperCase(),
                moeda_target: target.toUpperCase(),
                taxa_de_cambio: taxa,
                fonte: 'Exchangerate-api'
            });
        } else {
            res.status(404).json({ error: `Taxa de câmbio para ${target.toUpperCase()} não encontrada.` });
        }
        
    } catch (error) {
        // Tratamento de erros de rede
        res.status(500).json({ error: 'Falha ao comunicar com a API externa.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});