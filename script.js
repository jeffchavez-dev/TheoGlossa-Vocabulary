const vocabs = document.querySelector('.vocabulary')
const choices = document.querySelector('.choices')

const quiz = [
    {
        image: "Grace",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: ""
    },
    {
        image: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: ""
    },
    {
        image: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: ""
    },
    {
        image: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: ""
    }

]


const setVocabulary = () => {

    const vocabularies = quiz.map((vocabulary) => {
        const div = document.createElement('div')
        div.innerText = vocabulary.image
    })
    
}

setVocabulary()

const setChoices = () => {
    
}

const chooseAnswer = () => {
    
}

