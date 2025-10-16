Integração com API

Foi empregada a Exchangerate-API, acessada através do método HTTP GET utilizando axios. A resposta em JSON é processada para obter a taxa de câmbio entre duas moedas:

const taxa = data.conversion_rates[target.toUpperCase()];

O sistema fornece informações estruturadas (moeda base, moeda alvo, taxa de câmbio e origem), além de lidar com problemas de rede ou moedas que não são válidas.

Uso de SDK (Conceitual)

A função validarPaisSDK emula um SDK, que torna operações de integração complexas mais simples. Ela devolve o status e o nome do país com base no código fornecido. Os SDKs beneficiam os desenvolvedores de várias maneiras, como:

Facilitando a utilização de serviços externos;

Permitindo o reaproveitamento de código já testado;

Minimizando falhas e tornando a integração mais segura.

 Configuração na Nuvem (Conceitual)

Para a hospedagem do sistema em um ambiente de produção, as seguintes opções podem ser consideradas:

AWS EC2: oferece total controle e escalabilidade.

Azure App Service: facilita a implantação de aplicações Node.js.

Google Cloud Run: permite execução sem servidor e pagamento baseado no consumo.
