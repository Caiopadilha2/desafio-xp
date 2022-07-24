
# Desafio - XP

Projeto desenvolvido para o processo seletivo da XP.


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:Caiopadilha2/desafio-xp.git
```

Entre no diretório do projeto

```bash
  cd desafio-xp
  cd desafio-xp
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```


## Rodando os testes

Para rodar os testes, rode o seguinte comando

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

## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor exemplo       | ![#27272a](https://via.placeholder.com/10/27272a?text=+) |
| Cor exemplo       | ![#facc15](https://via.placeholder.com/10/facc15?text=+) |
| Cor exemplo       | ![#000000](https://via.placeholder.com/10/000000?text=+) |
| Cor exemplo       | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) |


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


## Stacks utilizadas

**Front-end:** React, Context, TailwindCSS. Motivos para utilizar Tailwind: utility first (nomes das classes), se comporta bem com ferramentas que componentizam, mobile first...




## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você os superou?


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
 
 
## Melhorias futuras

 - Implementar o Design System SOMA, que trouxe diversas melhorias para as marcas do grupo XP. O SOMA DS (design system) é a forma de construir produtos digitais na XP Inc., a partir de uma arquitetura inteligente e flexível para atender todas as marcas da companhia.
https://soma.xpi.com.br/

        







