Dia 1 (13 de Dezembro){
    <ul>
        <li>instalei todas as dependências e configurei tudo o que precisava (webpack, EsLint, babel e sass). preferi fazer alguns testes antes em outras pastas para mapear se realmente entendi as tecnologias citadas e suas respctivas instalações e configurações. por fim deu tudo certo</li>
        <li>comecei o html e css me baseando na tela inicial do g1, adicionei a barra nova e pretendo futuramente torna-la mais próximo da original (atualmente os itens estão alinhados mas sem cor estão todos com a fonte de cor preta), adicionei o icone/input de busca e estilizei para que ficasse mais parecido com a home do g1, também adicionei a logo do g1 no meio da barra e clicando nela você é direcionado ao site original</li>
        <li>percebi que o projeto estava com problema de FOUC (Flash of Unstyled Content), depois de debugar percebi que o problema era no webpack.config.js no plugin new MiniCssExtractPlugin() eu havia adicionado dentro dos parenteses um "parametro" que estava causando o FOUC </li>
        <li>futuramente pretendo adicionar um footer com meu nome, o ano que realizei o projeto e algum icon fofo</li>
        <li>amanhã devo avançar com o css e tornar o projeto responsivo (talvez termine o css amanhã???) </li>
    </ul>
}