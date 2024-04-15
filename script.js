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
       
    },
    {
        image: "/Assets/σύ.png",
        a: "αὐτός",
        b: "αὐτή",
        c: "σύ",
        d: "ἐγώ",
        answer: "σύ"
       
    },
    {
        image: "/Assets/αὐτή.png",
        a: "αὐτός",
        b: "αὐτή",
        c: "σύ",
        d: "ἐγώ",
        answer: "αὐτή"
       
    }

]


const randomQuiz = [...quiz]
console.log(randomQuiz)

let i = 0;
const setVocabulary = () => {
       
        const vocab = `
            <div class="vocabulary">
                <img src="${quiz[i].image}">
                </div>
            <div class="choices">
                <div class="a choice">${quiz[i].a}</div>
                <div class="b choice">${quiz[i].b}</div>
                <div class="c choice">${quiz[i].c}</div>
                <div class="d choice">${quiz[i].d}</div>
            </div>        
        `
        vocabs.innerHTML = vocab     
        document.querySelectorAll('.choice').forEach(choice => {
            choice.addEventListener('click', () => {
                if(choice.innerText == quiz[i].answer) {
                    alert('Ναί')
                    console.log(choice.innerText)
                    setNext()
                } else {
                    alert('οὐκ')
                    console.log(choice.innerText)
                }

            })
        })
}

const setNext = () => {
    i++
    if (i < quiz.length) {
        console.log(`i is less than quiz length ${i}`)
        setVocabulary();
    } else {
        // Optionally, reset index or handle end of quiz
        console.log(i)
        vocabs.innerHTML = "τέλος!"
        vocabs.classList.add('end')
    }
}

nextImg.addEventListener('click', () => {
    console.log('Clicked')
    setNext()
    
})

setVocabulary()

// const setChoices = () => {
//     const allchoices = quiz.map((choice) => {
//         a.innerHTML = choice.a
//         b.innerHTML = choice.b
//         c.innerHTML = choice.c
//         d.innerHTML = choice.d
//     })
// }

// setChoices()

const chooseAnswer = () => {
    
}


