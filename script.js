const vocabs = document.querySelector('.vocabulary')
const choices = document.querySelector('.choices')

const quiz = [
    {
        image: "Dog",
        a: "/Assets/αὐτός.png",
        b: "/Assets/αὐτή.png",
        c: "",
        d: "",
        answer: ""
    },
    {
        image: "Man",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: ""
    },
    {
        image: "Woman",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: ""
    },
    {
        image: "Stone",
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
        vocabs.appendChild(div)
    })
    
}

setVocabulary()

const setChoices = () => {
    const allchoices = quiz.map((choice) => {
        const img = document.createElement('img')
        img.src = choice
        choices.appendChild(img)
    })
}

setChoices()

const chooseAnswer = () => {
    
}

