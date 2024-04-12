const vocabs = document.querySelector('.vocabulary')
const choices = document.querySelector('.choices')

const quiz = [
    {
        image: "/Assets/αὐτός.png",
        choices: 
        {
            a: "αὐτός",
            b: "αὐτή",
            c: "σύ",
            d: "ἐγώ",
            answer: "αὐτός"
        }
       
    }
    // {
    //     image: "/Assets/αὐτός.png",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: "",
    //     answer: ""
    // },
    // {
    //     image: "/Assets/αὐτός.png",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: "",
    //     answer: ""
    // },
    // {
    //     image: "/Assets/αὐτός.png",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: "",
    //     answer: ""
    // }

]


const setVocabulary = () => {
    const vocabularies = quiz.map((vocabulary) => {
        const img = document.createElement('img')
        img.src = vocabulary.image
        vocabs.appendChild(img)
    })
    
}

setVocabulary()

const setChoices = () => {
    const allchoices = quiz.map((choice) => {
        const div = document.createElement('div')
        div.innerHTML = choice[a]
        choices.appendChild(div)
    })
}

setChoices()

const chooseAnswer = () => {
    
}

