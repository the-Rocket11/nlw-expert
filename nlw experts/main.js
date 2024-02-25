const perguntas = [
    {
      pergunta: "Qual tag é usada para criar um link em HTML?",
      respostas: [
        "<a>",
        "<link>",
        "<href>"
      ],
      correta: 0
    },
    {
      pergunta: "Qual propriedade de CSS é usada para definir a cor do texto?",
      respostas: [
        "color",
        "text-color",
        "font-color"
      ],
      correta: 0
    },
    {
      pergunta: "Qual declaração é usada para criar uma função em JavaScript?",
      respostas: [
        "function()",
        "create.function()",
        "function myFunction()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual elemento HTML é usado para definir títulos?",
      respostas: [
        "<h1>",
        "<heading>",
        "<title>"
      ],
      correta: 0
    },
    {
      pergunta: "Qual propriedade de CSS é usada para definir o espaçamento entre as letras de um texto?",
      respostas: [
        "letter-spacing",
        "spacing",
        "text-spacing"
      ],
      correta: 0
    },
    {
      pergunta: "Como se refere a um elemento específico em CSS usando sua classe?",
      respostas: [
        ".elemento",
        "#elemento",
        "*elemento"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função de JavaScript usada para imprimir algo no console?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual atributo HTML é usado para definir o texto alternativo para uma imagem?",
      respostas: [
        "alt",
        "src",
        "title"
      ],
      correta: 0
    },
    {
      pergunta: "Qual propriedade de CSS é usada para definir a altura de um elemento?",
      respostas: [
        "height",
        "width",
        "size"
      ],
      correta: 0
    }
  ]
  
  //querySelector('#quiz') serve para pesquisar e selecionar uma tag no html
  const quiz = document.querySelector('#quiz');
  
  //Seleciona o template e todo o seu conteúdo
  const template = document.querySelector('template');
  
  //new - serve para criar coisas novas; Set() - conjunto de um tipo de dados específico e apenas
  //Ou seja, esta declaração serve para criar, sempre que chamarmos ela um conjunto de dados
  const corretas = new Set();
  
  //Define o valor desta com o tamanho de dados da var perguntas
  const totalAsks = perguntas.length;
  
  //Seleciona no html o id #rights 
  const showAll = document.querySelector('#rights span');
  
  for (const item of perguntas) {
  
    //template.content.cloneNode(true) - copia as tags e o conteúdo delas
    const quizItem = template.content.cloneNode(true);
  
    //Modifica o conteúdo do h3 para o valor da var item.pergunta
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for (let resposta of item.respostas) {
      //Seleciona o contéudo da tag filha dt e copia o seu contéudo
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
  
      //Seleciona a tag span e adiciona contéudo de texto da var respostas
      dt.querySelector('span').textContent = resposta;
  
      //Seleciona a tag input e adiciona o atributo 'name' a cada uma das perguntas e as suas opções
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      
      //Seleciona o 'value' de input e atribui o valor do indíce da resposta que for selecionada
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
  
      //Cria uma função que é acionada quando acontece um evento (neste caso, clicar nas opções)
      dt.querySelector('input').onchange = (event) => {
        //Cria uma var e o valor será a comparacão entre a escolha do usuário e o valor da var correta
        const itsRight = event.target.value == item.correta;
        //Deleta o item que já estiver na variável
        corretas.delete(item)
        if(itsRight) {
          //Adiciona o item sempre que o usuário acertar
          corretas.add(item)
        }
  
        showAll.textContent = corretas.size + ' de ' + totalAsks;
      };
  
      //Seleciona na var quizItem a tag 'dl' e adiciona o contéudo da var dt
      quizItem.querySelector('dl').appendChild(dt);
    };
  
    //Remove o contéudo original da tag 'dl dt'
    quizItem.querySelector('dl dt').remove();
  
    //appendChild - colocar o conteúdo selecionado de outra tag nesta
    quiz.appendChild(quizItem);
  };