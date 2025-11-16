# Plataforma de Adoção de Animais de Estimação - AdotAI

AdotAI é uma plataforma dedicada à adoção de animais de estimação, facilitando o processo para ambos os adotantes e tutores. Qualquer pessoa pode submeter um animal para adoção preenchendo um formulário simples, o qual será enviado para análise por um administrador antes de ser publicado.

<b>Funcionalidades Principais:</b>

1. <b>Vitrine de Adoção:</b> A página inicial apresenta uma listagem paginada de animais disponíveis para adoção, com um recurso de scroll infinito para uma experiência de navegação contínua.
2. <b>Detalhes do Animal:</b> Os interessados podem visualizar informações detalhadas sobre cada animal, auxiliando na decisão de adoção.
3. <b>Formulário de Contato:</b> Os usuários têm acesso a um formulário para esclarecer dúvidas, fazer sugestões, registrar reclamações ou submeter um animal para adoção.
4. <b>Área de Administrador:</b> Um sistema de login seguro permite que administradores gerenciem as submissões de adoção e as listagens de animais disponíveis.

<b>Tecnologias Utilizadas:</b>

<ul>
    <li>Front-end: Desenvolvido em Angular com Angular Material e Tailwind CSS, garantindo uma interface moderna e responsiva.</li>
    <li>Back-end: Implementado em Java utilizando Spring Boot e Liquibase, com integração ao banco de dados MySQL para garantir a segurança e eficiência do sistema.</li>
</ul>
<img src="/front-end/src/assets/homepage.png"/>

Detalhes animal com algumas informações adicionais sobre o animal de interesse.

<img src="/front-end/src/assets/detalhes.png"/>

Formulario para contato, com duvidas referentes a alguma adoção, sugestões, reclamações ou para colocar um animal para adoção.

<img src="/front-end/src/assets/contato.png"/>

Login para administradores.

<img src="/front-end/src/assets/loginadmin.png"/>

Tabela de animais para adoção.

<img src="/front-end/src/assets/tabelaadmin.png"/>

<b>Créditos:</b>

<ul>
    <li><b>Logotipo:</b> O logotipo foi inspirado em www.aspaan.org.br.</li>
</ul>

<b>Recursos:</b>

<ul>
    <li><b>Angular </b>Material: Utilizado para a construção de componentes e elementos visuais da interface.</li>
    <li><b>Flowbite:</b> Recursos adicionais de design foram obtidos em www.flowbite.com.</li>
</ul>

<b>Observação:</b> As imagens utilizadas são meramente ilustrativas e visam proporcionar uma experiência visual agradável aos usuários.

<b>Como Instalar e Iniciar o Projeto:</b>

<ul> <li><b>Pré-requisitos:</b> <ul> <li>Node.js (versão 16 ou superior)</li> <li>Angular CLI (versão 15)</li> <li>Java 17</li> <li>Maven (caso não esteja embutido no IntelliJ)</li> <li>MySQL Server</li> <li>IntelliJ IDEA (Community ou Ultimate)</li> </ul> </li> </ul>

<b>Configuração do Banco de Dados (MySQL):</b>

<ol> <li>Crie um banco de dados no MySQL: <pre><code>CREATE DATABASE adotai;</code></pre> </li> <li>Configure o arquivo <code>application.properties</code> (ou <code>application.yml</code>) no back-end: <pre><code>spring.datasource.url=jdbc:mysql://localhost:3306/adotai?useSSL=false&serverTimezone=UTC spring.datasource.username=root spring.datasource.password=senha spring.jpa.hibernate.ddl-auto=update spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.xml </code></pre> </li> <li>O Liquibase criará automaticamente as tabelas na primeira execução.</li> </ol>

<b>Back-end (Java 17 + Spring Boot):</b>

<ol> <li>Abra o projeto <b>back-end</b> no IntelliJ IDEA.</li> <li>Aguarde o IntelliJ baixar as dependências do Maven automaticamente.</li> <li>Verifique se o projeto está configurado para usar o Java 17: <ul> <li>Vá em <code>File > Project Structure > Project SDK</code> e selecione <b>Java 17</b>.</li> </ul> </li> <li>Execute o projeto: <ul> <li>Localize a classe principal <code>AdotAIApplication.java</code>.</li> <li>Clique em <b>Run ▶️</b> para iniciar a aplicação.</li> </ul> </li> <li>O servidor iniciará em: <pre><code>http://localhost:8080</code></pre> </li> </ol>

<b>Front-end (Angular 15):</b>

<ol> <li>Acesse a pasta do front-end: <pre><code>cd front-end</code></pre> </li> <li>Instale as dependências: <pre><code>npm install</code></pre> </li> <li>Inicie o servidor de desenvolvimento: <pre><code>ng serve</code></pre> </li> <li>Acesse o front-end no navegador: <pre><code>http://localhost:4200</code></pre> </li> </ol>

<b>CI/CD</b>

<img src="/front-end/src/assets/cicd.png"/>

<b>Testes automatizados: unitário, integracão e E2E</b>

Os testes foram feitos em codigo nas classes: AnimalController e trabApplicationTests

<b>Testes automatizados POSTMAN</b>

<img src="/front-end/src/assets/testAuth.png"/>

<img src="/front-end/src/assets/testFailAuth.png"/>

<img src="/front-end/src/assets/testAnimal.png"/>

<img src="/front-end/src/assets/testContacts.png"/>

<b>TDD</b> do usuário válido ou inválido

Para aplicar TDD no sistema, primeiro criamos os testes da parte de autenticação. No teste, verificamos dois cenários: autenticação com dados corretos e autenticação com dados errados. Como os métodos ainda não estavam funcionando completamente, os testes falharam inicialmente (fase RED).

Depois disso, ajustamos os métodos do serviço de autenticação (authenticate e testauthenticate) para que retornassem o usuário correto quando as credenciais fossem válidas e retornassem nulo quando fossem inválidas. Depois dessa implementação, os testes passaram (fase GREEN).

Com tudo funcionando, revisamos o código para deixar mais organizado e consistente, mas sempre garantindo que os testes continuassem passando (fase REFACTOR). Dessa forma, o ciclo TDD foi seguido: escrever o teste → ver falhar → implementar → ver passar → melhorar.

<b>USUARIO MASSA</b>

usuario: admin
senha: 123


