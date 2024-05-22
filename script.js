const vocabs = document.querySelector('.vocab-section')
const reload = document.querySelector('.header img')

// Reload page when the reload button is clicked
reload.addEventListener('click', () => {
    location.reload();
})
// Consolidate query selectors
const chooseLessons = document.querySelectorAll('.lessons')
const choices = document.querySelector('.choices')
const vocabularyLessons = document.querySelector('.vocabulary-lessons')


const showStatus = document.querySelector('.status')
const showCheck = document.querySelector('.check')
const showCross = document.querySelector('.cross')

const quiz = [
 
]


const allVocabulary = [
        { "πρῶτος": [ 
            {
                image: "/Assets/αὐτός.png",
                a: "αὐτός",
                b: "αὐτή",
                c: "σύ",
                d: "ἐγώ",
                answer: "αὐτός",
                gloss: "He"
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
        },
        { "δεύτερος": [ 
            
            {
                image: "/Assets/τὸ παιδίον.png",
                a: "ὁ ἄρτος",
                b: "ὁ χοῖρος",
                c: "ὁ ἵππος",
                d: "τὸ παιδίον",
                answer: "τὸ παιδίον"
            },
            {
                image: "/Assets/ὁ ἄρτος.png",
                a: "ὁ ἵππος",
                b: "ὁ κάμηλος",
                c: "ὁ ἄρτος",
                d: "τὸ παιδίον",
                answer: "ὁ ἄρτος"
            },
            {
                image: "/Assets/ὁ κάμηλος.png",
                a: "ὁ κάμηλος",
                b: "ὁ χοῖρος",
                c: "ὁ ἵππος",
                d: "τὸ παιδίον",
                answer: "ὁ κάμηλος"
            },
            {
                image: "/Assets/ὁ λύκος.png",
                a: "ὁ χοῖρος",
                b: "ὁ λύκος",
                c: "ὁ ἵππος",
                d: "τὸ παιδίον",
                answer: "ὁ λύκος"
            },
            {
                image: "/Assets/ὁ χοῖρος.png",
                a: "ὁ χοῖρος",
                b: "τὸ πετεινόν",
                c: "ὁ ἵππος",
                d: "τὸ παιδίον",
                answer: "ὁ χοῖρος"
            },
            {
                image: "/Assets/ποῦ;.png",
                a: "ποῦ;",
                b: "ἐκεῖ",
                c: "νῦν",
                d: "πότε",
                answer: "ποῦ;"
            },
            {
                image: "/Assets/τὸ πρόβατον.png",
                a: "τὸ πετεινόν",
                b: "τὸ ποτήριον",
                c: "τὸ πρόβατον",
                d: "τὸ παιδίον",
                answer: "τὸ πρόβατον"
            },
            {
                image: "/Assets/τὸ ποτήριον.png",
                a: "τὸ πρόβατον",
                b: "τὸ ποτήριον",
                c: "τὸ πετεινόν",
                d: "τὸ παιδίον",
                answer: "τὸ ποτήριον"
            },
            {
                image: "/Assets/τὸ πετεινόν.png",
                a: "τὸ πρόβατον",
                b: "τὸ ποτήριον",
                c: "τὸ πετεινόν",
                d: "τὸ παιδίον",
                answer: "τὸ πετεινόν"
            },
            {
                image: "/Assets/ὁ ὄνος.png",
                a: "τὸ πρόβατον",
                b: "τὸ ποτήριον",
                c: "ὁ ὄνος",
                d: "τὸ παιδίον",
                answer: "ὁ ὄνος"
            },
            {
                image: "/Assets/τὸ βιβλίον.png",
                a: "τὸ βιβλίον",
                b: "τὸ ποτήριον",
                c: "ὁ ὄνος",
                d: "τὸ παιδίον",
                answer: "τὸ βιβλίον"
            },
            {
                image: "/Assets/τὸ δένδρον.png",
                a: "τὸ πρόβατον",
                b: "τὸ ποτήριον",
                c: "τὸ δένδρον",
                d: "τὸ παιδίον",
                answer: "τὸ δένδρον"
            },
            {
                image: "/Assets/τὸ θηλυκόν ἄρθρον.png",
                a: "τὸ οὐδέτερον ἄρθρον",
                b: "τὸ θηλυκόν ἄρθρον",
                c: "τὸ ἀρσενικόν ἄρθρον",
                d: "τὸ παιδίον",
                answer: "τὸ θηλυκόν ἄρθρον"
            },
            {
                image: "/Assets/τὸ ἀρσενικόν ἄρθρον.png",
                a: "τὸ οὐδέτερον ἄρθρον",
                b: "τὸ ἀρσενικόν ἄρθρον",
                c: "τὸ δένδρον",
                d: "τὸ θηλυκόν ἄρθρον",
                answer: "τὸ ἀρσενικόν ἄρθρον"
            },
            {
                image: "/Assets/τὸ οὐδέτερον ἄρθρον.png",
                a: "τὸ ἀρσενικόν ἄρθρον",
                b: "τὸ ποτήριον",
                c: "τὸ δένδρον ἄρθρον",
                d: "τὸ οὐδέτερον ἄρθρον",
                answer: "τὸ οὐδέτερον ἄρθρον"
            }
            
         ]
        },

        { "τρίτος": [ 
            
            {
                image: "/Assets/ὁ βασιλεύς.png",
                a: "ὁ ἵππος",
                b: "ὁ βασιλεύς",
                c: "ἡ βασιλεία",
                d: "ὁ θρόνος",
                answer: "ὁ βασιλεύς"
            },
            {
                image: "/Assets/ὁ θρόνος.png",
                a: "ὁ βασιλεύς",
                b: "τό ἔθνος",
                c: "ὁ θρόνος",
                d: "ἡ βασιλεία",
                answer: "ὁ θρόνος"
            },
            {
                image: "/Assets/ὁ στέφανος.png",
                a: "ὁ θρόνος",
                b: "ἡ βασιλεία",
                c: "ὁ στέφανος",
                d: "ὁ βασιλεύς",
                answer: "ὁ στέφανος"
            },
            {
                image: "/Assets/ἡ βασιλεία.png",
                a: "ὁ θρόνος",
                b: "τό ἔθνος",
                c: "ὁ στέφανος",
                d: "ἡ βασιλεία",
                answer: "ἡ βασιλεία"
            },
            {
                image: "/Assets/ἡ νεφέλη.png",
                a: "ἡ γῆ",
                b: "ἡ νεφέλη",
                c: "τό πραιτώριον",
                d: "τό ἔθνος",
                answer: "ἡ νεφέλη"
            },
            {
                image: "/Assets/ἡ γῆ.png",
                a: "ὁ θρόνος",
                b: "ἡ γῆ",
                c: "ὁ στέφανος",
                d: "τό πραιτώριον",
                answer: "ἡ γῆ"
            },
            {
                image: "/Assets/τό πραιτώριον.png",
                a: "ἡ γῆ",
                b: "τό πραιτώριον",
                c: "ὁ στέφανος",
                d: "ἡ νεφέλη",
                answer: "τό πραιτώριον"
            },
            {
                image: "/Assets/τό ἔθνος.png",
                a: "ἡ γῆ",
                b: "τό πραιτώριον",
                c: "τό ἔθνος",
                d: "ἡ νεφέλη",
                answer: "τό ἔθνος"
            },
            {
                image: "/Assets/περιπατέω.png",
                a: "βασιλεύω",
                b: "ἔρχομαι",
                c: "καθίζω",
                d: "περιπατέω",
                answer: "περιπατέω"
            },
            {
                image: "/Assets/βασιλεύω.png",
                a: "περιπατέω",
                b: "ἔρχομαι",
                c: "βασιλεύω",
                d: "καθίζω",
                answer: "βασιλεύω"
            },
            {
                image: "/Assets/αὐτός περιπατεῖ.png",
                a: "αὐτοι περιπατοῦσιν",
                b: "ἐγώ πορεύομαι",
                c: "αὐτός πορεύεται",
                d: "αὐτός περιπατεῖ",
                answer: "αὐτός περιπατεῖ"
            },
            {
                image: "/Assets/αὐτοι περιπατοῦσιν.png",
                a: "ἐγώ περιπατέω",
                b: "ἐγώ πορεύομαι",
                c: "αὐτοι περιπατοῦσιν",
                d: "αὐτός περιπατεῖ",
                answer: "αὐτοι περιπατοῦσιν"
            },
            {
                image: "/Assets/Τὸ παιδίον ἔρχεται..png",
                a: "ἐγώ περιπατέω",
                b: "ἐγώ πορεύομαι",
                c: "αὐτοὶ ἔρχονται.",
                d: "Τὸ παιδίον ἔρχεται.",
                answer: "Τὸ παιδίον ἔρχεται."
            },
            {
                image: "/Assets/ὁ ἀνήρ πορεύεται..png",
                a: "ὁ ἀνήρ πορεύεται.",
                b: "ἐγώ πορεύομαι",
                c: "αὐτοὶ ἔρχονται.",
                d: "Τὸ παιδίον ἔρχεται.",
                answer: "ὁ ἀνήρ πορεύεται."
            },
            {
                image: "/Assets/ἡ γυνή πορεύεται..png",
                a: "ὁ ἀνήρ πορεύεται.",
                b: "ἡ γυνή πορεύεται.",
                c: "αὐτοὶ ἔρχονται.",
                d: "Τὸ παιδίον ἔρχεται.",
                answer: "ἡ γυνή πορεύεται."
            },
            {
                image: "/Assets/οἱ ἄνθρωποι πορεύονται..png",
                a: "ὁ ἀνήρ πορεύεται.",
                b: "ἡ γυνή πορεύεται.",
                c: "αὐτοὶ ἔρχονται.",
                d: "οἱ ἄνθρωποι πορεύονται.",
                answer: "οἱ ἄνθρωποι πορεύονται."
            },
            {
                image: "/Assets/αὐτοὶ ἔρχονται..png",
                a: "ὁ ἀνήρ πορεύεται.",
                b: "ἡ γυνή πορεύεται.",
                c: "αὐτοὶ ἔρχονται.",
                d: "οἱ ἄνθρωποι πορεύονται.",
                answer: "αὐτοὶ ἔρχονται."
            }
         ]
        },
        { "τέταρτος": [ 
            
            {
                image: "/Assets/ὧδε.png",
                a: "ὧδε",
                b: "ἐκεῖ",
                c: "νῦν",
                d: "πότε",
                answer: "ὧδε"
            },
            {
                image: "/Assets/ἐκεῖ.png",
                a: "ἐκεῖ",
                b: "ὧδε",
                c: "νῦν",
                d: "πότε",
                answer: "ἐκεῖ"
            },
            {
                image: "/Assets/Ὁ ἀνὴρ καθίζει..png",
                a: "Ὁ ἀνὴρ καθίζει.",
                b: "Ὁ ἀνὴρ ἀνίσταται.",
                c: "Ἀνάστηθι.",
                d: "Κάθισον.",
                answer: "Ὁ ἀνὴρ καθίζει."
            },
            {
                image: "/Assets/Ὁ ἀνὴρ ἀνίσταται..png",
                a: "Ὁ ἀνὴρ καθίζει.",
                b: "Ὁ ἀνὴρ ἀνίσταται.",
                c: "Ἀνάστηθι.",
                d: "Κάθισον.",
                answer: "Ὁ ἀνὴρ ἀνίσταται."
            },
            {
                image: "/Assets/Οἱ ἄνθρωποι ἀνίστανται..png",
                a: "Ὁ ἀνὴρ καθίζει.",
                b: "Ὁ ἀνὴρ ἀνίσταται.",
                c: "Οἱ ἄνθρωποι ἀνίστανται.",
                d: "Οἱ πρεσβύτεροι καθίζουσιν.",
                answer: "Οἱ ἄνθρωποι ἀνίστανται."
            },
            {
                image: "/Assets/Οἱ πρεσβύτεροι καθίζουσιν..png",
                a: "Ὁ ἀνὴρ καθίζει.",
                b: "Ὁ ἀνὴρ ἀνίσταται.",
                c: "Οἱ πρεσβύτεροι καθίζουσιν.",
                d: "Οἱ ἄνθρωποι ἀνίστανται.",
                answer: "Οἱ πρεσβύτεροι καθίζουσιν."
            },
            {
                image: "/Assets/Ἐλθὲ ὧδε..png",
                a: "Ἐλθὲ ὧδε.",
                b: "Ἔλθετε ὧδε.",
                c: "Πορεύθητι ἐκεῖ.",
                d: "Πορεύθητε ἐκεῖ.",
                answer: "Ἐλθὲ ὧδε."
            },
            {
                image: "/Assets/Κάθισον..png",
                a: "Κάθισον.",
                b: "Ἐλθὲ ὧδε.",
                c: "Πορεύθητι ἐκεῖ.",
                d: "Καθίσατε.",
                answer: "Κάθισον."
            },
            {
                image: "/Assets/Πορεύθητι ἐκεῖ..png",
                a: "Κάθισον.",
                b: "Ἐλθὲ ὧδε.",
                c: "Πορεύθητι ἐκεῖ.",
                d: "Πορεύθητε ἐκεῖ.",
                answer: "Πορεύθητι ἐκεῖ."
            },
            {
                image: "/Assets/Ἀνάστηθι..png",
                a: "Κάθισον.",
                b: "Ἐλθὲ ὧδε.",
                c: "Ἀνάστητε.",
                d: "Ἀνάστηθι.",
                answer: "Ἀνάστηθι."
            },
            {
                image: "/Assets/Ἔλθετε ὧδε..png",
                a: "Κάθισον.",
                b: "Ἐλθὲ ὧδε.",
                c: "Πορεύθητι ἐκεῖ.",
                d: "Ἀνάστητε.",
                answer: "Ἔλθετε ὧδε."
            },
            {
                image: "/Assets/Καθίσατε..png",
                a: "Κάθισον.",
                b: "Ἐλθὲ ὧδε.",
                c: "Καθίσατε.",
                d: "Οἱ ἄνθρωποι ἀνίστανται.",
                answer: "Καθίσατε."
            },
            {
                image: "/Assets/Ἀνάστητε..png",
                a: "Κάθισον.",
                b: "Ἐλθὲ ὧδε.",
                c: "Πορεύθητι ἐκεῖ.",
                d: "Ἀνάστητε.",
                answer: "Ἀνάστητε."
            },
            {
                image: "/Assets/Πορεύθητε ἐκεῖ..png",
                a: "Κάθισον.",
                b: "Ἐλθὲ ὧδε.",
                c: "Πορεύθητι ἐκεῖ.",
                d: "Πορεύθητε ἐκεῖ.",
                answer: "Πορεύθητε ἐκεῖ."
            }
            
         ]
        },
        { "πέμπτος": [ 
            {
                image: "/Assets/ὁ καιρός.png",
                a: "ὁ καιρός",
                b: "ἡ σελήνη",
                c: "ἡ νύξ",
                d: "πότε",
                answer: "ὁ καιρός"
            },
            {
                image: "/Assets/ὁ ἥλιος.png",
                a: "ἡ νύξ",
                b: "ὁ καιρός",
                c: "ἡ σελήνη",
                d: "ὁ ἥλιος",
                answer: "ὁ ἥλιος"
            },
            {
                image: "/Assets/ἡ σελήνη.png",
                a: "ἡ σελήνη",
                b: "ὁ καιρός",
                c: "ἡ νύξ",
                d: "ὁ ἥλιος",
                answer: "ἡ σελήνη"
            },
            {
                image: "/Assets/ἡ νύξ.png",
                a: "ἡ σελήνη",
                b: "ὁ καιρός",
                c: "ἡ νύξ",
                d: "ὁ ἥλιος",
                answer: "ἡ νύξ"
            },
            {
                image: "/Assets/ἡ ἡμέρα.png",
                a: "ἡ ἡμέρα",
                b: "ὁ καιρός",
                c: "ἡ νύξ",
                d: "ὁ ἥλιος",
                answer: "ἡ ἡμέρα"
            },
            {
                image: "/Assets/φεύγω.png",
                a: "φεύγω",
                b: "ἔρχομαι",
                c: "καθίζω",
                d: "περιπατέω",
                answer: "φεύγω"
            },
            {
                image: "/Assets/ὁ κλέπτης.png",
                a: "ἡ σελήνη",
                b: "ὁ καιρός",
                c: "ὁ κλέπτης",
                d: "ὁ ἥλιος",
                answer: "ὁ κλέπτης"
            },
            {
                image: "/Assets/οἱ κλέπται φεύγουσι..png",
                a: "ὁ ἀνήρ πορεύεται.",
                b: "ἡ γυνή πορεύεται.",
                c: "οἱ κλέπται φεύγουσι.",
                d: "οἱ ἄνθρωποι πορεύονται.",
                answer: "οἱ κλέπται φεύγουσι."
            },
            {
                image: "/Assets/τὸ παιδίον φεύγει ἀπὸ τοῦ κυνός..png",
                a: "ὁ κυων φεύγει ἀπὸ τοῦ παιδιοῦ.",
                b: "τὸ παιδίον φεύγει ἀπὸ τοῦ κυνός.",
                c: "οἱ κλέπται φεύγουσι.",
                d: "οἱ ἄνθρωποι πορεύονται.",
                answer: "τὸ παιδίον φεύγει ἀπὸ τοῦ κυνός."
            },
            {
                image: "/Assets/πρόσωπον.png",
                a: "πρόσωπον",
                b: "ἔμπροσθεν",
                c: "ὀπίσω",
                d: "ἔμπροσθεν",
                answer: "πρόσωπον"
            },
            {
                image: "/Assets/ὀπίσω.png",
                a: "πρόσωπον",
                b: "ἔμπροσθεν",
                c: "ὀπίσω",
                d: "ὑποκάτω",
                answer: "ὀπίσω"
            },
            {
                image: "/Assets/ἔμπροσθεν.png",
                a: "πρόσωπον",
                b: "ἔμπροσθεν",
                c: "ὀπίσω",
                d: "ὑποκάτω",
                answer: "ἔμπροσθεν"
            },
            {
                image: "/Assets/λαλεῖ.png",
                a: "λαλεῖ",
                b: "λέγει",
                c: "λαλοῦσιν",
                d: "λέγουσιν",
                answer: "λαλεῖ" 
            }
            ,
            {
                image: "/Assets/λέγει.png",
                a: "λαλεῖ",
                b: "λέγει",
                c: "λαλοῦσιν",
                d: "λέγουσιν",
                answer: "λέγει"
            },
            {
                image: "/Assets/λέγω.png",
                a: "λαλεῖ",
                b: "λέγει",
                c: "λέγω",
                d: "λαλῶ",
                answer: "λέγω"
            },
            {
                image: "/Assets/λαλῶ.png",
                a: "λαλεῖ",
                b: "λέγει",
                c: "λέγω",
                d: "λαλῶ",
                answer: "λέγω"
            },
            {
                image: "/Assets/λέγουσιν.png",
                a: "λαλοῦσιν",
                b: "λέγουσιν",
                c: "λέγω",
                d: "λαλῶ",
                answer: "λέγουσιν"
            },
            {
                image: "/Assets/λαλοῦσιν.png",
                a: "λαλοῦσιν",
                b: "λέγουσιν",
                c: "λέγω",
                d: "λαλῶ",
                answer: "λαλοῦσιν"
            }
         ]
        },
        { "δεκατέσσαρα": [ 
            {
                image: "/Assets/αἱ νεφέλαι.png",
                a: "αἱ νεφέλαι",
                b: "ἡ σελήνη",
                c: "τὸ ὄρος",
                d: "ἡ σάλπιγξ",
                answer: "αἱ νεφέλαι"
            },
            {
                image: "/Assets/τὸ ὄρος.png",
                a: "αἱ νεφέλαι",
                b: "ἡ σελήνη",
                c: "τὸ ὄρος",
                d: "ἡ σάλπιγξ",
                answer: "τὸ ὄρος"
            },
            {
                image: "/Assets/ἀκούω.png",
                a: "ἄκουε",
                b: "ἀκούω",
                c: "Πορεύθητι",
                d: "Καθίσατε",
                answer: "ἀκούω"
            },
            {
                image: "/Assets/ἄκουε.png",
                a: "ἄκουε",
                b: "ἀκούω",
                c: "Πορεύθητι",
                d: "Καθίσατε",
                answer: "ἄκουε"
            },
            {
                image: "/Assets/Ὁ ἀνὴρ ἀκούει..png",
                a: "Αἱ γυναῖκες ἀκούουσιν.",
                b: "Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου.",
                c: "ἡ γυνή ἀκούει.",
                d: "Ὁ ἀνὴρ ἀκούει.",
                answer: "Ὁ ἀνὴρ ἀκούει."
            },
            {
                image: "/Assets/Αἱ γυναῖκες ἀκούουσιν..png",
                a: "Αἱ γυναῖκες ἀκούουσιν.",
                b: "Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου.",
                c: "ἡ γυνή ἀκούει.",
                d: "Ὁ ἀνὴρ ἀκούει.",
                answer: "Αἱ γυναῖκες ἀκούουσιν."
            },
            {
                image: "/Assets/Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου..png",
                a: "Αἱ γυναῖκες ἀκούουσιν.",
                b: "Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου.",
                c: "ἡ γυνή ἀκούει.",
                d: "Ὁ ἀνὴρ ἀκούει.",
                answer: "Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου."
            },
            {
                image: "/Assets/κελεύω.png",
                a: "κελεύει",
                b: "ὑπακούει",
                c: "καθίζω",
                d: "κελεύω",
                answer: "κελεύω"
            },
            {
                image: "/Assets/oὐχ ὑπακούει.png",
                a: "oὐχ ὑπακούει",
                b: "ὑπακούει",
                c: "oὐ ακούει",
                d: "oὐ κελεύω",
                answer: "oὐχ ὑπακούει"
            },
            {
                image: "/Assets/ὑπακούει.png",
                a: "κελεύει",
                b: "ὑπακούει",
                c: "καθίζω",
                d: "κελεύω",
                answer: "ὑπακούει"
            },
            {
                image: "/Assets/κελεύει.png",
                a: "κελεύει",
                b: "ὑπακούει",
                c: "καθίζω",
                d: "κελεύω",
                answer: "κελεύει"
            },
            {
                image: "/Assets/εἶπεν.png",
                a: "εἰπέ",
                b: "ὑπακούει",
                c: "καθίζω",
                d: "εἶπεν",
                answer: "εἶπεν"
            }
        
             ]
        },
        
        { "δεκαπέντε": [ 
            {
                image: "/Assets/καλός.png",
                a: "καλός",
                b: "κακός",
                c: "Ποῖος",
                d: "Ποία",
                answer: "καλός"
            },
            {
                image: "/Assets/Ποῖος.png",
                a: "καλός",
                b: "κακός",
                c: "Ποῖος",
                d: "Ποία",
                answer: "Ποῖος"
            }
            ]
        }
]



// Generate HTML Lessons from Objects


allVocabulary.forEach((vocab) => {
    const lessonKey = Object.keys(vocab)[0];
    const button = document.createElement("button");
    button.classList.add("lessons");
    button.textContent = lessonKey;
    vocabularyLessons.appendChild(button);

    button.addEventListener("click", () => {
        const clickedLesson = button.innerText;
        const vocabularyObj = allVocabulary.find((obj) => Object.keys(obj)[0] === clickedLesson);

        vocabularyLessons.classList.add("hide");

        if (vocabularyObj) {
            const vocabArray = Object.values(vocabularyObj)[0];
            console.log(`Lessons: ${Object.values(vocabularyObj)[0]}`);
            if (myQuiz.length > 0) {
                myQuiz = [];
                shuffledIndices = [];
                myQuiz.push(...vocabArray);
                console.log(myQuiz);
                setVocabulary();
            } else {
                myQuiz.push(...vocabArray);
                console.log(myQuiz);
                setVocabulary();
            }
        } else {
            vocabs.innerHTML = "No Vocabs!";
        }
    });
});


// Function to display gloss when button is clicked
const viewGloss = (gloss) => {
    // Assuming you have an HTML element with class "gloss" to display the gloss
    alert(gloss)
    const glossElement = document.querySelector('.gloss');
    if (glossElement) {
        glossElement.textContent = gloss;
    } else {
        console.error('Element with class "gloss" not found.');
    }
};

// Generate HTML for vocabulary list
const viewList = allVocabulary.map((list) => {
    const vocabularyName = Object.keys(list)[0];
    const vocabularyItems = Object.values(list)[0];

    const itemsHTML = vocabularyItems
        .map((item) => `
            <div class="list-vocabulary-items-holder">
                <div>${item.answer}</div>
                <img class="image-list" src="${item.image}" alt="${item.answer}">
                <button class="view-gloss-button" onclick="viewGloss('${item.gloss}')">View Gloss</button>
            </div>
        `)
        .join('');

    return `
        <details>
            <summary class="list-vocabulary-headings">${vocabularyName}</summary>
            <div class="list-vocabulary-items">${itemsHTML}</div>
        </details>
    `;
})

// Event listener for list button
const listButton = document.querySelector('.learn')
listButton.addEventListener('click', () => {
    vocabularyLessons.innerHTML = viewList.join('')
})


let myQuiz = []

let i = 0; 


// Shuffle array function

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
let shuffledIndices = []

const shuffledArray = shuffleArray(myQuiz)

// Set vocabulary function
const setVocabulary = () => {

        // Shuffle the indices if all have been used
        if (shuffledIndices.length === 0) {
            shuffledIndices = shuffleArray([...Array(myQuiz.length).keys()]);
        }

        // Use the shuffled index to access elements from myQuiz
        const currentIndex = shuffledIndices.pop();
        const currentQuizItem = myQuiz[currentIndex];


        // Shuffle the choices
        const shuffledChoices = shuffleArray([currentQuizItem.a, currentQuizItem.b, currentQuizItem.c, currentQuizItem.d]);

        const vocab = `
            <div class="vocabulary">
                <img src="${currentQuizItem.image}">
                </div>
                <div class="number"><span>${i + 1}</span>/<span>${shuffledArray.length}</span></div>
            <div class="choices">
                <div class="choice">${shuffledChoices[0]}</div>
                <div class="choice">${shuffledChoices[1]}</div>
                <div class="choice">${shuffledChoices[2]}</div>
                <div class="choice">${shuffledChoices[3]}</div>
            </div>        
        `
        
        vocabs.innerHTML = vocab 
        
         // Event listeners for choices
        document.querySelectorAll('.choice').forEach(choice => {
            choice.addEventListener('click', () => {
                if(choice.innerText == currentQuizItem.answer) {
                    showStatus.innerText = '✔'
                    showStatus.classList.add("check")
                    setTimeout(function() {
                        showStatus.innerText = ''
                        showStatus.classList.remove("check")
                        setNext()
                    }, 500)   
                   
                } else {
                    const vocabImg = document.querySelector('.vocabulary')
                    
                    vocabImg.classList.add('shake-element')
                    setTimeout(function() {
                    vocabImg.classList.remove('shake-element')
                   }, 200)   
                   showStatus.innerText = 'X'
                   showStatus.classList.add("wrong")
                    setTimeout(function() {
                        showStatus.innerText = ''
                        showStatus.classList.remove("wrong")
                    }, 500)  
                    choice.classList.add('hide')
                 }

            })
        })
}


// Set next function
const setNext = () => {
    i++
    if (i < myQuiz.length) {
        setVocabulary();
    } else {
        const reset = () => location.reload();

        vocabs.innerHTML = `
            <div class="end">τέλος!</div>
            <div id="reset">🏠</div>
        `;
        
        document.getElementById('reset').addEventListener('click', () => {
            reset()
            vocabularyLessons.classList.remove("hide")
        })
        
        
    }
}


