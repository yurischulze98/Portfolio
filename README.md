# Portfólio de Yuri Schulze — 2026

Portfólio moderno, responsivo e estático. Projeto **sem dependências de build**, sem chaves de API, sem banco de dados e gratuito para hospedar no plano gratuito da Vercel (dentro dos limites do serviço).

## Arquivos

- `index.html`: estrutura e metadados do site.
- `css/style.css`: design, cores e responsividade.
- `js/content.js`: **principal arquivo a editar**. Reúne experiência, projetos, links e conhecimentos.
- `js/main.js`: navegação, filtros de projetos, modal de detalhes, tema e animações.
- `assets/favicon.svg`: ícone do site.
- `curriculo-yuri-schulze.pdf`: currículo público, sem endereço residencial, telefone ou dados de nascimento.

## Ver no computador

Basta abrir `index.html` no navegador. Para simular um ambiente de produção, também é possível executar na pasta:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Publicar na Vercel

1. Extraia o ZIP e envie **o conteúdo da pasta** para um repositório seu no GitHub.
2. Acesse a Vercel, importe o repositório e selecione **Framework Preset: Other**.
3. Não defina comando de build; deixe a pasta de saída vazia (site estático).
4. Faça o deploy. Atualizações no repositório poderão gerar novas publicações.

Também funciona no GitHub Pages ou Netlify.

## Atualizar conteúdo

Em `js/content.js`:

- `nome`, `email`, `foto` e `redes`: seus dados e links.
- `experiencias`: adicione ou modifique empresas, cargos e períodos.
- `projetos`: adicione casos ou altere o `status`. Use categorias **Automação**, **Inteligência artificial**, **Pesquisa & produto** ou **Web** para os filtros funcionarem. Para inserir um projeto novo, copie um objeto existente e atribua outro `id` único.
- `conhecimentos`: altere as competências quando evoluir.

**Foto:** o site está configurado para aproveitar a foto já publicada no seu portfólio antigo (`assets/eu.jpeg` do domínio anterior). Ela requer que o site antigo permaneça online. Para torná-lo totalmente independente, copie sua foto original para `assets/foto.jpg` e, em `js/content.js`, altere `foto` para `assets/foto.jpg`.

**Currículo PDF:** edite/substitua o PDF sempre que seu histórico mudar. Não reutilize a versão antiga com endereço completo, telefone ou data de nascimento sem decidir conscientemente o que quer expor.

## Sobre veracidade e privacidade

- Projetos estão identificados conforme o estágio informado (conceito, pesquisa, protótipo, evolução, publicado).
- Não foram adicionados links inexistentes para repositórios de projetos privados.
- O portfólio não contém protocolos de chamados, dados de clientes, e-mails corporativos, nomes de ambientes, credenciais nem regras internas detalhadas.
- Não inclui informações médicas, endereço residencial, nascimento nem telefone.
- A foto e os dados pessoais publicados devem ser revisados pelo proprietário antes da publicação.

## Créditos

Criado para Yuri Schulze. Ícones internos em SVG simples; fontes Google Fonts (Space Grotesk, DM Sans e DM Mono). Nenhuma biblioteca JavaScript externa é necessária.
