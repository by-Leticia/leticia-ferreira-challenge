<h1>Dia 1 (13 de Dezembro)</h1>
    <ul>
        <li>instalei todas as dependências e configurei tudo o que precisava (webpack, EsLint, babel e sass). preferi fazer alguns testes antes em outras pastas para mapear se realmente entendi as tecnologias citadas e suas respctivas instalações e configurações. por fim deu tudo certo</li>
        <li>comecei o html e css me baseando na tela inicial do g1, adicionei a barra nova e pretendo futuramente torna-la mais próximo da original (atualmente os itens estão alinhados mas sem cor estão todos com a fonte de cor preta), adicionei o icone/input de busca e estilizei para que ficasse mais parecido com a home do g1, também adicionei a logo do g1 no meio da barra e clicando nela você é direcionado ao site original</li>
        <li>percebi que o projeto estava com problema de FOUC (Flash of Unstyled Content), depois de debugar percebi que o problema era no webpack.config.js no plugin new MiniCssExtractPlugin() eu havia adicionado dentro dos parenteses um "parametro" que estava causando o FOUC </li>
        <li>futuramente pretendo adicionar um footer com meu nome, o ano que realizei o projeto e algum icon fofo</li>
    </ul>
<h1>Dia 2 (14 de Dezembro)</h1>
    <ul>
        <li>avancei com a estilização, adicionei as respectivas cores na barra nova e adicionei um efeito quando o mouse está por cima, todos eles são clicaveis e dirigem o usuário ao respectivo site(menos o g1 porque a logo central já tem essa função)</li>
        <li>adicionei um efeito no input/icone de busca que toda vez que o usuário clica ele expande e troca de cor suavemente e quando você clica na barra de cima o efeito sai</li>
        <li>comecei a fazer alguns testes de como ficaria aquela caixa de pesquisa que aparece embaixo toda vez que o usuário digita, mas não deixei nada salvo por ser somente testes/"mapeamento".</li>
        <li>percebi que o erro de FOUC (Flash of Unstyled Content) tinha voltado e voltei a analisar a configuração, até perceber que o erro se dá quando após lançar o npm run dev no console e dar um ctrl c quando coloco npm run dev novamente no console ele começa a dar o problema de FOUC mas quando eu paro o projeto a partir do ctrl z e rodo o npm run dev novamente o erro FOUC não acontece.</li>
    </ul>