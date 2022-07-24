
# Desafio - XP

Projeto desenvolvido para o processo seletivo da XP.


# Acesse minha aplicação em funcionamento


http://desafio-xp.surge.sh


## Rodando localmente

Clone o projeto:

```bash
  git clone git@github.com:Caiopadilha2/desafio-xp.git
```

Entre no diretório do projeto:

```bash
  cd desafio-xp
  cd desafio-xp
```

Instale as dependências:

```bash
  npm install
```

Inicie o servidor:

```bash
  npm start
```


## Rodando os testes

Para rodar os testes, faça o seguinte comando:

```bash
  npm test
```


## Ferramentas

| Bibliotecas | Documentação |
| ------ | ------ |
| React | https://pt-br.reactjs.org/ |
| PropTypes| https://www.npmjs.com/package/prop-types |
| ESLint| https://eslint.org/ |
| React Router| https://v5.reactrouter.com/web/guides/quick-start |
| React Testing Library | https://testing-library.com/docs/react-testing-library/intro/ |
| Tailwind CSS | https://tailwindcss.com/ |
| SweetAlert2 | https://sweetalert2.github.io/recipe-gallery/sweetalert2-react.html|


## Funcionalidades

- Login de usuário (com validação de email e senha).
- Email e data de último acesso do usuário salvos no LocalStorage.
- Controle as ações que você possui na sua carteira e veja ações disponíveis no mercado.
- Compre ações disponíveis no mercado ou venda suas ações.
- Deposite e/ou saque seu dinheiro, com atualização do saldo.
- Filtre as ações por nome.
- Acesse o site da XP para dicas de investimento.
- Canal para entrar em contato com a CVM (Comissão de Valores Mobiliários).
- Abra sua conta na XP investimentos.
- Faça logout do aplicativo.


## Decisões de desenvolvimento

Utilizei diversas ferramentas/bibliotecas para o desenvolvimento deste aplicativo e irei detalhar ao máximo o porquê. Inicialmente, escolhi por utilizar a biblioteca React por ser a plataforma que trabalha com a componentes, os quais são utilizados para reaproveitamento de código e padronização de interface. Além disso, utilizando o Context, vi como sendo a melhor maneira de manipular os estados que eu precisaria para a aplicação.
Ainda me aproveitando do React, utilizei sua ferramenta de testes, a React Testing Library, RTL, para escrever os testes da minha aplicação.

Sobre a parte visual/gráfica, optei por utilizar o Tailwind CSS por ter recomendação de professores durante as aulas em que comentaram sobre o aprendizado que eles tiveram sobre o CSS a partir da dinâmica de como o Tailwind funciona. Também, como tenho vários componentes, eu possivelmente teria problemas em colocar diversos nomes de classes para eles, enquanto no Tailwind isso não é necessário, pois fazemos direto inline.
Outra biblioteca que utilizei na parte gráfica foi a SweetAlert2, que disponibiliza diversos tipos de alertas personalizados. Com ela, pude utilizar casos de sucesso ou falha para minhas operações financeiras.

Sobre guardar os dados, os estados são salvos com o context, utilizando o context/provider, e as informações do usuário, como login e data de acesso, ficam salvas no LocalStorage. Isso porque essa informação é interessante tê-la em todas as páginas que o usuário navegar, e eu posso apagá-la quando a pessoa usuária fizer Logout.

Já sobre detalhes mais abstratos, tive que adotar algumas premissas sobre as compras/vendas das ações. Diante da dinâmica do mercado financeiro, adotei a premissa que **todas as ordens de compra e venda foram aprovadas**, tendo com isso o saldo atualizado de acordo com o valor dessas ordens feitas pelo usuário.



## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você os superou?


 ## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor exemplo       |`#27272a`|
| Cor exemplo       |`#facc15`|
| Cor exemplo       |`#000000`|
| Cor exemplo       |`#FFFFFF`|


## Referências

 - [Aula 10.2 - Componentes React](https://app.betrybe.com/course/live-lectures/sd-cohort-xp-b#dia-102-componentes-react)
 - [Salvar no LocalStorage](https://josiaspereira.com.br/como-usar-localstorage-no-reactjs/#:~:text=Para%20salvar%20alguma%20informa%C3%A7%C3%A3o%20no,uma%20chave%20e%20um%20valor.)
 - [Impedir input menor que 0](https://stackoverflow.com/questions/7372067/is-there-any-way-to-prevent-input-type-number-getting-negative-values)
 - [Funções de data JavaScript](https://blog.betrybe.com/javascript/javascript-date/)
 - [Aula 5.4 - JavaScript: DOM, Eventos e Web Storage](https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/o-que-vamos-aprender/5e21e26a-2138-44a4-861e-a319e33bbcf1?use_case=calendar)
 - [Why magic number is bad](https://stackoverflow.com/questions/47882/what-is-a-magic-number-and-why-is-it-bad)
 - [Remover primeiro e último caractere de uma string](https://www.delftstack.com/pt/howto/javascript/remove-last-character-from-javascript/#use-o-m%C3%A9todo-slice-para-remover-o-%C3%BAltimo-caractere-de-uma-string-javascript)
 - [Install proptypes](https://www.npmjs.com/package/prop-types)
 - [Aula 17.1 - Criar context e Provider ](https://app.betrybe.com/course/front-end/context-api-e-react-hooks/context-api-do-react/0cb0f74b-7d53-429d-8fb3-84edb046136f/o-que-vamos-aprender/a90de5e6-2e15-4025-ad28-55bd82dcc194?use_case=calendar)
 - [Aula dia 12.1 - ciclo de vida de componentes(Mostrar/Esconder saldo)](https://app.betrybe.com/course/live-lectures/sd-cohort-xp-b#dia-121-ciclo-de-vida-de-componentes)
 - [Permitir apenas números em campos de input](http://sooho.com.br/dicas-e-truques/javascript/permitir-apenas-numeros-em-campos-input-text/)
 - [Testes RTL - Botão está desabilitado?](https://testing-library.com/docs/react-testing-library/example-intro)
 - [Filtrar nomes com input controlado - Monitoria dia 29/03/2022](https://trybecourse.slack.com/archives/C02HY0NGPK4/p1648580022479779?thread_ts=1646670674.750429&cid=C02HY0NGPK4)
 - [Alertas/avisos personalizáveis](https://sweetalert2.github.io/recipe-gallery/sweetalert2-react.html)
 - [Tailwind CSS - Workshop CSS](https://app.betrybe.com/course/live-lectures/sd-cohort-xp-b#dia-165-workshop-css)
 - [Redirecionar para outra aba](https://www.freecodecamp.org/portuguese/news/como-usar-o-html-para-abrir-um-link-em-uma-nova-aba/)
 - [Abra uma conta na XP investimentos](https://cadastro.xpi.com.br/desktop/step/1?assessor=A69103)
 - [Aprenda a investir com a XP investimentos](https://blog.xpeducacao.com.br/categoria/como-investir/?gclid=Cj0KCQjwuO6WBhDLARIsAIdeyDL_7R5dGtBXIW7jfJXfwhnMybj19couN9DRLo5lPC2kekEQML1pPwoaAtPwEALw_wcB)
 - [Trocar o Favicon](https://www.youtube.com/watch?v=7pJmM-XdPm8&ab_channel=ProgrammerError)
 - [Sobre a CVM](https://jusdecisum.com.br/cvm-anuncia-instituicao-do-servico-de-ouvidoria/)
 - [Trocar o Favicon](https://www.youtube.com/watch?v=7pJmM-XdPm8&ab_channel=ProgrammerError)
 
 
## Aspectos legais

Este aplicativo conta com acesso ao canal da ouvidoria da CVM (Comissão de Valores Mobiliários), orgão da Administração direta, uma autarquia vinculada ao Ministério da Economia que tem, dentre suas principais funções, disciplinar, normalizar e fiscalizar a atuação dos diversos integrantes do mercado. **Uma das suas responsabilidades é a de disciplinar sobre a Negociação e Intermediação no mercado de valores mobiliários.**
 
*De acordo com a RESOLUÇÃO CVM Nº 43, DE 17 DE AGOSTO DE 2021, que dispõe sobre a instituição da Ouvidoria no âmbito do mercado de valores mobiliários e revoga a Instrução CVM nº 529, de 1º de novembro de 2012.*
 
 *CAPÍTULO I – ÂMBITO E FINALIDADE*
 
 *Art. 2º **Devem instituir Ouvidoria**:*

*I – as instituições habilitadas a atuar como integrante do sistema de distribuição;*

*II – os prestadores de serviços de custódia de valores mobiliários;*

*III – os agentes emissores de certificados; e*

*IV – os prestadores de serviços de ações escriturais.*

*§ 1º O disposto no caput não se aplica:*

*I – às entidades administradoras de mercados organizados; e*

*II – às entidades de compensação e liquidação.*

*§ 2º As Ouvidorias das instituições de que trata o inciso I do caput devem atender às demandas relacionadas aos agentes autônomos de investimento contratados por tais instituições.*

*§ 3º As instituições a que se referem os incisos I ao IV do caput devem dar ampla divulgação sobre a existência da Ouvidoria e seus canais de atendimento, bem como fornecer informações completas acerca da sua finalidade e forma de utilização.*

*§ 4º A divulgação acerca da existência da Ouvidoria e seus canais de atendimento de que trata o § 3º deve se dar:*

*I – em local e formato visível ao público nas dependências das instituições;*

**II – nos respectivos endereços eletrônicos na rede mundial de computadores;** e

*III – nos extratos, comprovantes, inclusive eletrônicos, contratos formalizados com os clientes, materiais de propaganda e de publicidade e demais documentos que se destinem aos clientes e usuários dos produtos e serviços da instituição.*
 
 Dito isso, esse aplicativo busca seguir as normais legais oferecendo acesso à ouvidoria da CVM aos seus usuários. 
 
 
## Melhorias futuras

 - Implementar o Design System SOMA, que trouxe diversas melhorias para as marcas do grupo XP. O SOMA DS (design system) é a forma de construir produtos digitais na XP Inc., a partir de uma arquitetura inteligente e flexível para atender todas as marcas da companhia.
https://soma.xpi.com.br/

- Implementar a lógica de edição de um componente, no caso em específico, para atualizar a quantidade de ações que o usuário tem disponível ou que tenha para venda.

- Aplicar um desing responsivo, para diversos tamanhos de tela.



        







