const vocabulary = document.querySelector('.vocabulary')
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
    vocabulary.innerText = quiz[0].image
}

setVocabulary()

const setChoices = () => {
    
}

const chooseAnswer = () => {
    
}

