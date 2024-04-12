const vocabs = document.querySelector('.vocabulary')
const choices = document.querySelector('.choices')
const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
const nextImg = document.querySelector('.next')

const quiz = [
    {
        image: "/Assets/αὐτός.png",
        a: "αὐτός",
        b: "αὐτή",
        c: "σύ",
        d: "ἐγώ",
        answer: "αὐτός"
       
    },
    {
        image: "/Assets/ἐγώ.png",
        a: "αὐτός",
        b: "αὐτή",
        c: "σύ",
        d: "ἐγώ",
        answer: "ἐγώ"
       
    }

]


const setVocabulary = () => {
    // const vocabularies = quiz.map((vocabulary) => {
    //     const img = document.createElement('img')
    //     img.src = vocabulary.image
    //     vocabs.appendChild(img)
    // })

        const img = document.createElement('img')
        img.src = quiz[0].image
        vocabs.appendChild(img)
    
}

setVocabulary()

const setChoices = () => {
    const allchoices = quiz.map((choice) => {
        a.innerHTML = choice.a
        b.innerHTML = choice.b
        c.innerHTML = choice.c
        d.innerHTML = choice.d
    })
}

setChoices()

const chooseAnswer = () => {
    
}

nextImg.addEventListener('click', () => {
    alert("You clicked me")
})

