<h1>Dia 1 (13 de Dezembro)</h1>
    <ul>
        <li>instalei todas as dependências e configurei tudo o que precisava (webpack, EsLint, babel e sass). preferi fazer alguns testes antes em outras pastas para mapear se realmente entendi as tecnologias citadas e suas respectivas instalações e configurações. por fim deu tudo certo</li>
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
<h1>Dia 3 (15 de Dezembro)</h1>
    <ul>
        <li>enxuguei o javascript que tinha construido para que o efeito do input de busca expandisse e trocasse de cor, minha tentativa foi bem sucedida mas queria tornar o if normal em um if ternario mas o eslint não deixa estou fazendo algumas pesquisas para tentar contornar isso</li>
        <li>consultei o jeff para verificar se tinha alguma forma de colocar esse if ternario sem mexer na configuração mas não achamos, o jeito foi mexer nas configurações e dentro das rules do .eslint.js colocar "'no-unused-expressions': 'off',"</li>
        <li>Adicionei a box que fica embaixo do input quando ele é clicado e adicionei o evento que faz ele sumir quando o usuário clica fora</li>
        <li>voltei a perceber o problema de FOUC e se não achar a solução definitiva vou procurar ajuda de alguém do time</li>
        <li>queria ter avançado com mais coisas mas tivemos hoje a confraternização do g1 e não consegui pois tive que sair cedo de casa, mas pretendo compensar</li>
    </ul>
<h1>Dia 4 (18 de Dezembro)</h1>
    <ul>
        <li>estudei o problema de FOUC: percebi que o problema não aparece se você dá um build e logo em seguida o npm run dev, mas após a primeira alteração o problema aparece novamente</li>
        <li>passei quase o dia todo pesquisando sobre como implementar o live search e fazendo alguns testes que não deram o resultado esperado</li>
        <li>adicionei o arquivo exemplo.json</li>
    </ul>
<h1>Dia 5 (19 de Dezembro)</h1>
    <ul>
        <li>mais um dia avançando com os estudos sobre como implementar o live search, fiz alguns micros avanços mas ainda não cheguei ao resultado esperado.</li>
        <li>consultei o jeff sobre o problema de FOUC e ele me recomendou "no arquivo do webpack no new HtmlWebpackPlugin, adiciona abaixo de template: inject: 'body', // ou 'head'", fiz esse teste mas acabou não gerando resultado. percebi que o problema de fouc está intermitente.</li>
        <li>jeff também recomendou "deveria fazer um script de watch onde cada vez que vc salva um arquivo ele faz o build do js e scss", pretendo testar isso amanhã</li>
    </ul>
<h1>Dia 6 (20 de Dezembro)</h1>
    <ul>
    <li>dia de evento no escritório, mexi em algumas coisas no scss mas não consegui avançar tanto</li>
    </ul>
<h1>Dia 7 (21 de Dezembro)</h1>
    <ul>
        <li>avancei com alguns pontos simples da estilização</li>
        <li>me reuni com o jeff para poder ter alguma ajuda em relação ao live search, ele foi me auxiliando e juntos fomos avançando. consegui entender muito bem como fazer e por fim tive resultado positivo :partying_face: :tada: amanhã irei avançar com a parte colocar tudo no html, ajeitar a estilização e os outros pontos do desafio</li>
        <li>para melhorar o desenvolvimento instalamos o prettier e para que tudo rodasse corretamente desabilitamos algumas coisas do eslint pois estavam impedindo que tudo funcionasse</li>
    </ul>
<h1>Dia 8 (26 de Dezembro)</h1>
    <ul>
        <li>Dia 22 de Dezembro não consegui avançar em nada com o projeto por conta da reunião de QP que acabou tomando o dia todo e durante o fim de semana por conta do natal não cosegui mexer em nada no projeto, essa semana pretendo terminar o projeto por completo</li>
        <li>consegui avançar com alguns itens do projeto, agora quando digita o title ou uma das queries aparece o respectivo item com titulo e a imagem ao lado que quando aperta o enter ele direciona para a respectiva página</li>
        <li>ajeitei alguns itens do sass tornando a página mais agradável, adicionei a parte de sugestão de busca e a parte que fica embaixo (para tudo isso usei a imagem que me foi dada de referência)</li>
        <li>amanhã pretendo avançar com os outros itens do projeto (principalmente a parte de navegação pelas setas)</li>
    </ul>
<h1>Dia 9 (27 de Dezembro)</h1>
    <ul>
        <li>avançando com mais alguns itens do css, agora quando o usuário terminar de digitar o que precisa e quiser apertar a seta para baixou ou a de cima para selecionar um dos items vai ser possivel</li>
        <li>percebi que quando eu apago o que escrevi o resultado continua lá, por exemplo: se eu digitar neymar e depois apagar o rsultado neymar ainda irá aparecer. Pretendo resolver isso amanhã</li>
    </ul>
<h1>Dia 10 (28 de Dezembro)</h1>
    <ul>
        <li>acabei esquecendo de fazer o deploy no dia 28 então estou fazendo no dia 29 de manhã</li>
        <li>consegui fazer as sugestões aparecerem abaixo do title, ainda precisa de algumas melhorias</li>
        <li>melhorei a parte do código que faz o usuário ser direcionado para a respectiva url do title quando aperta o enter</li>
    </ul>
<h1>Dia 11 (29 de Dezembro)<h1>
    <ul>
        <li>acabei esquecendo de documentar :( </li>
    </ul>
<h1>Dia 12 (02 de Janeiro)<h1>
    <ul>
        <li>continuei na saga de tornar o projeto responsivo =</li>
        <li></li>
    </ul>
<h1>Dia ? (8 de Janeiro)</h1>
    <ul>
        <li>me perdi nos registros os dias e como sempre faço "deploy" a noite alguns dias eu esquecia de subir no github e de anotar aqui. Muito por conta das questões que eu precisava resolver (fazer o live search funcionar, a questão com as sugestões e etc) as vezes ficava muito focada em resolver/ pesquisar as soluções e a parte mais "burocratica" acabava sendo um pouco esquecida por mim (reconheço esse erro e pretendo melhorar)</li>
    </ul>
<h1>Considerações Gerais</h1>
<h2>Separando por partes:</h2>
    <ul>
        <li>Visualmente: a parte de css/scss não foi tão dificil de montar acabei pegando o site do g1 de inspiração, mas sinto que poderia ter um tchan a mais (realmente eu não sirvo para ux kkkkk)</li>
        <li>Javascript: Pessoalmente achei muito interessante contruir tudo isso, sinto que se eu tivesse um pouco mais de experiência poderia ter sido um projeto muito mais explorado e com outras funcionalidades.</li>
        <li>Configurações: não acho que as configurações foram um real problema, acredito que a falta de experiência com webpack, eslint e babel que acabam alterando na configuração final</li>
    </ul>
