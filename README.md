integração com API

A Exchangerate-API foi utilizada, acessada por meio do método HTTP GET através do axios. A resposta recebida em formato JSON é analisada para extrair a taxa de câmbio entre duas moedas:

const taxa = data.conversion_rates[target.toUpperCase()];

O sistema disponibiliza informações organizadas (moeda de origem, moeda de destino, taxa de câmbio e fonte de dados), além de gerenciar problemas relacionados à rede ou a moedas inválidas.

Uso de SDK (Conceitual)

A função validarPaisSDK simula um SDK, o que simplifica a execução de operações de integração que seriam complicadas. Ela retorna o status e o nome do país, levando em consideração o código que foi informado. Os SDKs trazem vantagens para os desenvolvedores de diversas formas, tais como:

Facilitando a integração com serviços externos;

Permitindo o uso de código que já foi testado;

Reduzindo falhas e melhorando a segurança da integração.

☁️ Configuração na Nuvem (Conceitual)

Para hospedar o sistema em um ambiente de produção, as seguintes alternativas podem ser consideradas:

AWS EC2: proporciona controle total e possibilidade de escalabilidade.

Azure App Service: simplifica a implementação de aplicações Node.js.

Google Cloud Run: oferece execução sem servidor e cobrança com base no uso.
