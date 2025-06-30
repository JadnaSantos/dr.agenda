## Doutor Agenda 🏥


### 📋 Sobre o Projeto

Doutor agenda é um sistema para clínicas realizarem agendamento, controle de pacientes, cadastros de médicos e gerenciamento de horários.


### 🛠️ Tecnologias

- ⚛️ Next.js 15 com App Router
- 🎨 TailwindCSS 4 + tailwind-merge + tw-animate-css
- 🧩 Drizzle ORM + PostgreSQL
- 🔐 Better Auth para autenticação moderna
- 🧾 React Hook Form + Zod para validações
- 📦 React Query (TanStack Query)
- 💳 Stripe para pagamentos (frontend e backend)
- 📅 React Day Picker e DayJS para controle de datas
- 🧠 Lucide para ícones, Radix UI para componentes acessíveis
- 🧪 Cypress para testes E2E


### 🚀 Funcionalidades

- 📆 Agendamento de consultas por data e hora
- 👤 Cadastro e gerenciamento de pacientes
- 👩🏾‍⚕️ Cadastro e gerenciamento de pacientes
- 📊 Painel administrativo com estatísticas e gráficos (Recharts)
- 💳 Pagamento via Stripe
- ⚙️ Validações dinâmicas com Zod


### 💳 Integração com Stripe

🚫 Não realizar testes com cartão de crédito real

Use o cartão teste 4242 4242 4242 4242 com qualquer data futura e CVC válido.


### 🗂️ Arquitetura utilizada

Model-View-ViewModel (MVVM) é um padrão arquitetônico projetado para separar a lógica de dados da visualização, aumentando a manutenção e a testabilidade. No MVVM, existem três componentes principais:

Modelo: Gerencia o acesso a dados e a lógica de negócios, o que inclui a recuperação de dados de APIs ou bancos de dados e processá-los.

Visualização: A camada responsável pela exibição de dados. No React, esses são normalmente seus componentes focados em apresentar dados passados por adereços e fornecer interface do usuário para interação do usuário.

ViewModel: O núcleo do padrão MVVM, que conecta o modelo e as camadas de visualização. O ViewModel gerencia o estado e a lógica de negócios, transformando os dados do modelo em um formato pronto para a visualização.


### 📦 Como rodar o projeto localmente

```bash

# Entre na pasta front end
$ git clone: path do projeto

# Execute o comando e o projeto sera aberto no Visual Studio Code
$ code .

# Instale as dependências
$ npm i

# Após isso você precisa gerar as tables no DB.

# Inicialize o servidor em modo desenvolvimento
$ npm run dev

# O servidor irá iniciar em http://localhost:3333

```


