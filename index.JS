const perguntas = [
    {
    pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    resposta: [
    "A. var myVar;",
    "B. variable myVar;",
    "C. let myVar;",
    ],
    correta: 0,
    },
    {
    pergunta: "Qual é o operador utilizado para concatenar strings em JavaScript?",
    resposta: [
    "A. +",
    "B. -",
    "C. ",
    ],
    correta: 0,
    },
    {
    pergunta: "Como se chama a função utilizada para exibir mensagens no console do navegador?",
    resposta: [
    "A. alert()",
    "B. console.log()",
    "C. prompt()",
    ],
    correta: 1,
    },
    {
    pergunta: "Qual é a maneira correta de comentar uma linha de código em JavaScript?",
    resposta: [
    "A. <!-- Comentário -->",
    "B. // Comentário",
    "C. / Comentário */",
    ],
    correta: 1,
    },
    {
    pergunta: "Qual é a função utilizada para converter um valor para o tipo de dado inteiro em JavaScript?",
    resposta: [
    "A. parseInt()",
    "B. parseFloat()",
    "C. toString()",
    ],
    correta: 0,
    },
    {
    pergunta: "Qual é o método utilizado para obter o comprimento (número de caracteres) de uma string em JavaScript?",
    resposta: [
    "A. length()",
    "B. size()",
    "C. count()",
    ],
    correta: 0,
    },
    {
    pergunta: "Qual é o operador lógico utilizado para negar uma expressão booleana em JavaScript?",
    resposta: [
    "A. ||",
    "B. !",
    "C. &&",
    ],
    correta: 1,
    },
    {
    pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
    resposta: [
    "A. push()",
    "B. pop()",
    "C. shift()",
    ],
    correta: 0,
    },
    {
    pergunta: "Qual é a função utilizada para arredondar um número para o inteiro mais próximo em JavaScript?",
    resposta: [
    "A. round()",
    "B. ceil()",
    "C. floor()",
    ],
    correta: 0,
    },
    {
    pergunta: "Qual é o operador de atribuição utilizado para atribuir um valor a uma variável em JavaScript?",
    resposta: [
    "A. =",
    "B. :",
    "C. <-",
    ],
    correta: 0,
    },
    ];
    
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const correta = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = correta.size + 'de' + totalDePerguntas
    
    //laço de repetição
    for( const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.resposta){
       const dt = quizItem.querySelector( 'dl dt').cloneNode(true)
       dt.querySelector ('spam').textContent = resposta
       dt.querySelector ('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
       dt.querySelector ('input').value = item.resposta.indexOf(resposta)
       dt.querySelector ('input').onchange = (event) => {
          const estaCorreta = event.target.value ==item.correta
          correta.delete(item)
          if(estaCorreta){
             correta.add(item)
    
          }
        mostrarTotal.textcontent = correta.size + ' de ' + totalDePerguntas
       }
       
       quizItem.querySelector('dl').appendChild(dt)
    
    }
    
    
    quizItem.querySelector('dl dt').remove()
    
    
    //colocar a pergunta na tela
     quiz.appendChild(quizItem)
    }
    
    
    
    
    
    
    
    
    