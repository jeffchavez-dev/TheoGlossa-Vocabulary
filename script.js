const vocabs = document.querySelector('.vocabulary')
const choices = document.querySelector('.choices')

const quiz = [
    {
        image: "/Assets/αὐτός.png",
        a: "αὐτός",
        b: "αὐτή",
        c: "σύ",
        d: "ἐγώ",
        answer: "αὐτός"
       
    }

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
        const a = document.createElement('div')
        a.innerHTML = choice.a
        const b = document.createElement('div')
        b.innerHTML = choice.a
        const c = document.createElement('div')
        c.innerHTML = choice.a
        const d = document.createElement('div')
        d.innerHTML = choice.a
        choices.appendChild(div)
    })
}

setChoices()

const chooseAnswer = () => {
    
}

