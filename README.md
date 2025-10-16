Integração com API

Foi usada a Exchangerate-API, acessada via método HTTP GET usando axios.
A resposta JSON é tratada para extrair a taxa de câmbio entre duas moedas:

const taxa = data.conversion_rates[target.toUpperCase()];


O sistema retorna dados organizados (moeda base, alvo, taxa e fonte) e trata erros de rede ou moedas inválidas.

 Uso de SDK (Conceitual)

A função validarPaisSDK simula um SDK, que abstrai operações complexas de integração.
Ela retorna o status e o nome do país conforme o código informado.
SDKs facilitam o trabalho do desenvolvedor porque:

Simplificam o uso de serviços externos;

Reaproveitam código confiável;

Reduzem erros e tornam a integração mais segura.

☁️ Configuração na Nuvem (Conceitual)

Para hospedar o sistema em produção, poderiam ser usados:

AWS EC2: controle total e escalabilidade.

Azure App Service: fácil implantação de apps Node.js.

Google Cloud Run: execução serverless e cobrança por uso.

Esses serviços oferecem disponibilidade, segurança e escalabilidade para a aplicação.
