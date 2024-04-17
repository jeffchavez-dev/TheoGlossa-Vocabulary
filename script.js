const vocabs = document.querySelector('.vocab-section')
const reload = document.querySelector('.header img')
reload.addEventListener('click', () => {
    location.reload();
})


const chooseLessons = document.querySelectorAll('.lessons')
const choices = document.querySelector('.choices')
const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
// const nextImg = document.querySelector('.next')
const showCheck = document.querySelector('.check')
const showCross = document.querySelector('.cross')

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
    },
    {
        image: "/Assets/μέγας.png",
        a: "μικρός",
        b: "μέγας",
        c: "κακός",
        d: "καλός",
        answer: "μέγας"
    },
    {
        image: "/Assets/μικρός.png",
        a: "κακός",
        b: "καλός",
        c: "μέγας",
        d: "μικρός",
        answer: "μικρός"
    },
    {
        image: "/Assets/ἡ γυνή.png",
        a: "ἡ ὄρνις",
        b: "ἡ γυνή",
        c: "ὁ ἀλέκτωρ",
        d: "ὁ ἀνήρ",
        answer: "ἡ γυνή"
    },
    {
        image: "/Assets/ὁ ἀνήρ.png",
        a: "ὁ ἀνήρ",
        b: "ἡ ὄρνις",
        c: "ἡ γυνή",
        d: "ὁ ἀλέκτωρ",
        answer: "ὁ ἀνήρ"
    },
    {
        image: "/Assets/ἡ ὄρνις.png",
        a: "ὁ ἀνήρ",
        b: "ἡ ὄρνις",
        c: "ὁ ἀλέκτωρ",
        d: "ἡ γυνή",
        answer: "ἡ ὄρνις"
    },
    {
        image: "/Assets/ὁ ἀλέκτωρ.png",
        a: "ὁ ἀνήρ",
        b: "ἡ οἰκία",
        c: "ἡ γυνή",
        d: "ὁ ἀλέκτωρ",
        answer: "ὁ ἀλέκτωρ"
    },
    {
        image: "/Assets/ἡ ὑδρία.png",
        a: "ὁ ἄνθρωπος",
        b: "ὁ ἵππος",
        c: "ἡ ὑδρία",
        d: "ὁ ἀλέκτωρ",
        answer: "ἡ ὑδρία"
    },
    {
        image: "/Assets/ἡ οἰκία.png",
        a: "ὁ ἀνήρ",
        b: "ἡ οἰκία",
        c: "ὁ ἄνθρωπος",
        d: "ὁ ἀλέκτωρ",
        answer: "ἡ οἰκία"
    },
    {
        image: "/Assets/ὁ ἄνθρωπος.png",
        a: "ὁ ἄνθρωπος",
        b: "ἡ οἰκία",
        c: "ὁ κύων",
        d: "ὁ ἀλέκτωρ",
        answer: "ὁ ἄνθρωπος"
    },
    {
        image: "/Assets/ὁ ἵππος.png",
        a: "ὁ ἀνήρ",
        b: "ἡ οἰκία",
        c: "ὁ βοῦς",
        d: "ὁ ἵππος",
        answer: "ὁ ἵππος"
    },
    {
        image: "/Assets/ὁ βοῦς.png",
        a: "ὁ ἄνθρωπος",
        b: "ὁ βοῦς",
        c: "ὁ ἵππος",
        d: "ὁ κύων",
        answer: "ὁ βοῦς"
    },
    {
        image: "/Assets/ὁ κύων.png",
        a: "ὁ κύων",
        b: "ἡ οἰκία",
        c: "ἡ γυνή",
        d: "ὁ ἵππος",
        answer: "ὁ κύων"
    }       
]
 // {
    //     image: "",
    //     a: "",
    //     b: "",
    //     c: "",
    //     d: "",
    //     answer: ""
    // }


// chooseLessons.addEventListener('click', () => {
//     const quizSection = document.querySelector('.quiz-section')
//     quizSection.style.display = block
// })


let i = 0; 
const currentQuiz = []


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
const shuffledArray = shuffleArray(quiz)

const setVocabulary = () => {
        currentQuiz.push(shuffledArray[i])
        console.log(currentQuiz)
        const vocab = `
            <div class="vocabulary">
                <img src="${shuffledArray[i].image}">
                </div>
                <div class="number"><span>${currentQuiz.length}</span>/<span>${shuffledArray.length}</span></div>
            <div class="choices">
                <div class="a choice">${shuffledArray[i].a}</div>
                <div class="b choice">${shuffledArray[i].b}</div>
                <div class="c choice">${shuffledArray[i].c}</div>
                <div class="d choice">${shuffledArray[i].d}</div>
            </div>        
        `
        
        vocabs.innerHTML = vocab     
        document.querySelectorAll('.choice').forEach(choice => {
            choice.addEventListener('click', () => {
                if(choice.innerText == quiz[i].answer) {
                    // showState.innerText = 'Ναί'
                    showCheck.innerText = '✔'
                    setTimeout(function() {
                        showCheck.innerText = ''
                        setNext()
                    }, 500)   
                   
                } else {
                    const vocabImg = document.querySelector('.vocabulary')
                    vocabImg.classList.add('shake-element')
                    setTimeout(function() {
                    vocabImg.classList.remove('shake-element')
                   }, 200)   
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

// nextImg.addEventListener('click', () => {
//     setNext()
    
// })

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


