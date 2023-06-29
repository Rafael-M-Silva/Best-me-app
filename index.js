const questoes = [
    "O que você aprendeu hoje?",
    "Foi tudo bem nos estudos?",
    "Fez a revisâo?",
    "Quantas pessoas você ajudou?",
]

/* passo numero 2 > imprimir na tela uma pergunta */
const perguntas = ( index = 0 ) => {
    process.stdout.write("\n" + questoes[index] + " > ")
}

/* passo numero 1 > chamar a funcao */
perguntas()

/* passo numero 4 > salvar a resposta */
const respostas = []

/* passo numero 3 > pegar a resposta */
    process.stdin.on("data", data => {
        respostas.push(data.toString().trim())
        if(respostas.length < questoes.length){
            perguntas(respostas.length)
        }else {
            process.exit()
        }
    })

    /* passo numero 5 > imprimir o resultado do seu dia de estudo */
    process.on("exit", ()=> {
        console.log(`
            Bacana Rafael

            O que você aprendeu hoje foi:
            ${respostas[0]}

            Os estudos foi tudo bem?
            ${respostas[1]}

            Revisão foi feita?
            ${respostas[2]}

            Você ajudou ${respostas[3]} pessoas hoje!!

            Volte amanhã para fazer novas reflexões!!
        `)
    })