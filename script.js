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
        let i = 0;
        const img = document.createElement('img')
        img.src = quiz[0].image
        

        const vocab = `
            <div class="vocabulary">
                <img src="${quiz[0].image}">
                </div>
            <div class="choices">
                <div class="a choice">${quiz[0].a}</div>
                <div class="b choice">${quiz[0].b}</div>
                <div class="c choice">${quiz[0].c}</div>
                <div class="d choice">${quiz[0].d}</div>
            </div>        
        `

        vocabs.innerHTML = vocab

        nextImg.addEventListener('click', () => {
            i++
            alert(i)
        })
        
    
}

setVocabulary()

// const setChoices = () => {
//     const allchoices = quiz.map((choice) => {
//         a.innerHTML = choice.a
//         b.innerHTML = choice.b
//         c.innerHTML = choice.c
//         d.innerHTML = choice.d
//     })
// }

setChoices()

const chooseAnswer = () => {
    
}


