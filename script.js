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
const listButton = document.querySelector('.learn')

const quiz = [
 
]


const allVocabulary = [
        { "τὸ δίδαγμα τὸ πρώτον": [ 
            
            {
                image: "/Assets/μέγας.png",
                a: "μέγας",
                b: "μεγάλη",
                c: "μικρός",
                d: "μικρά",
                answer: "μέγας",
                gloss: "big/large/great (masculine singular)"
            },
            {
                image: "/Assets/μεγάλη.png",
                a: "μέγας",
                b: "μεγάλη",
                c: "μικρός",
                d: "μικρά",
                answer: "μεγάλη",
                gloss: "big/large/great (feminine singular)"
            },
            {
                image: "/Assets/μικρός.png",
                a: "μέγας",
                b: "μεγάλη",
                c: "μικρός",
                d: "μικρά",
                answer: "μικρός",
                gloss: "small/little (masculine singular)"
            },
            {
                image: "/Assets/μικρά.png",
                a: "μέγας",
                b: "μεγάλη",
                c: "μικρός",
                d: "μικρά",
                answer: "μικρά",
                gloss: "small/little (feminine singular)"
            },
            {
                image: "/Assets/σφόδρα.png",
                a: "μέγας",
                b: "σφόδρα",
                c: "μικρός",
                d: "μικρά",
                answer: "σφόδρα",
                gloss: "exceedingly (small or large)"
            },
            {
                image: "/Assets/οὔ.png",
                a: "ναί",
                b: "οὔ",
                c: "σύ",
                d: "ἐγώ",
                answer: "αὐτός",
                gloss: "No"
            },
            {
                image: "/Assets/ναί.png",
                a: "Ἆρα",
                b: "ναί",
                c: "σύ",
                d: "ἐγώ",
                answer: "ναί",
                gloss: "Yes"
            },
            {
                image: "/Assets/ἐγώ.png",
                a: "αὐτός",
                b: "αὐτή",
                c: "σύ",
                d: "ἐγώ",
                answer: "ἐγώ",
                gloss: "I"
            },
            {
                image: "/Assets/σύ.png",
                a: "αὐτός",
                b: "αὐτή",
                c: "σύ",
                d: "ἐγώ",
                answer: "σύ",
                gloss: "you (singular)"
            },
            {
                image: "/Assets/ἡ γυνή.png",
                a: "ἡ ὄρνις",
                b: "ἡ γυνή",
                c: "ὁ ἀλέκτωρ",
                d: "ὁ ἀνήρ",
                answer: "ἡ γυνή",
                gloss: "female/woman/wife"
            },
            {
                image: "/Assets/ὁ ἀνήρ.png",
                a: "ὁ ἀνήρ",
                b: "ἡ ὄρνις",
                c: "ἡ γυνή",
                d: "ὁ ἀλέκτωρ",
                answer: "ὁ ἀνήρ",
                gloss: "male"
            },
            {
                image: "/Assets/ἡ ὄρνις.png",
                a: "ὁ ἀνήρ",
                b: "ἡ ὄρνις",
                c: "ὁ ἀλέκτωρ",
                d: "ἡ γυνή",
                answer: "ἡ ὄρνις",
                gloss: "hen"
            },
            {
                image: "/Assets/ὁ ἀλέκτωρ.png",
                a: "ὁ ἀνήρ",
                b: "ἡ οἰκία",
                c: "ἡ γυνή",
                d: "ὁ ἀλέκτωρ",
                answer: "ὁ ἀλέκτωρ",
                gloss: "rooster"
            },
            {
                image: "/Assets/ἡ ὑδρία.png",
                a: "ὁ ἄνθρωπος",
                b: "ὁ ἵππος",
                c: "ἡ ὑδρία",
                d: "ὁ ἀλέκτωρ",
                answer: "ἡ ὑδρία",
                gloss: "waterpot"
            },
            {
                image: "/Assets/ἡ οἰκία.png",
                a: "ὁ ἀνήρ",
                b: "ἡ οἰκία",
                c: "ὁ ἄνθρωπος",
                d: "ὁ ἀλέκτωρ",
                answer: "ἡ οἰκία",
                gloss: "house"
            },
            {
                image: "/Assets/ὁ ἄνθρωπος.png",
                a: "ὁ ἄνθρωπος",
                b: "ἡ οἰκία",
                c: "ὁ κύων",
                d: "ὁ ἀλέκτωρ",
                answer: "ὁ ἄνθρωπος",
                gloss: "man"
            },
            {
                image: "/Assets/ὁ ἵππος.png",
                a: "ὁ ἀνήρ",
                b: "ἡ οἰκία",
                c: "ὁ βοῦς",
                d: "ὁ ἵππος",
                answer: "ὁ ἵππος",
                gloss: "horse"
            },
            {
                image: "/Assets/ὁ βοῦς.png",
                a: "ὁ ἄνθρωπος",
                b: "ὁ βοῦς",
                c: "ὁ ἵππος",
                d: "ὁ κύων",
                answer: "ὁ βοῦς",
                gloss: "ox"
            },
            {
                image: "/Assets/ὁ κύων.png",
                a: "ὁ κύων",
                b: "ἡ οἰκία",
                c: "ἡ γυνή",
                d: "ὁ ἵππος",
                answer: "ὁ κύων",
                gloss: "dog"
            },
            {
                image: "/Assets/ὁ κάμηλος.png",
                a: "ὁ κάμηλος",
                b: "ὁ χοῖρος",
                c: "ὁ ἵππος",
                d: "τὸ παιδίον",
                answer: "ὁ κάμηλος",
                gloss: "camel"
            },
            {
                image: "/Assets/ὁ λύκος.png",
                a: "ὁ χοῖρος",
                b: "ὁ λύκος",
                c: "ὁ ἵππος",
                d: "τὸ παιδίον",
                answer: "ὁ λύκος",
                gloss: "wolf"
            },
            {
                image: "/Assets/ὁ χοῖρος.png",
                a: "ὁ χοῖρος",
                b: "τὸ πετεινόν",
                c: "ὁ ἵππος",
                d: "τὸ παιδίον",
                answer: "ὁ χοῖρος",
                gloss: "pig"
            }, 
            {
                image: "/Assets/χαῖρε.png",
                a: "χαῖρε",
                b: "χαίρετε",
                c: "ἔρρωσο",
                d: "ἔρρωσθε",
                answer: "χαῖρε",
                gloss: "Hi (singular)"
            }, 
            {
                image: "/Assets/ἔρρωσο.png",
                a: "χαῖρε",
                b: "χαίρετε",
                c: "ἔρρωσο",
                d: "ἔρρωσθε",
                answer: "ἔρρωσο",
                gloss: "Bye (singular)"
            },
            {
                image: "/Assets/χαίρετε.png",
                a: "χαῖρε",
                b: "χαίρετε",
                c: "ἔρρωσο",
                d: "ἔρρωσθε",
                answer: "χαίρετε",
                gloss: "Hi (plural)"
            },
            {
                image: "/Assets/ἔρρωσθε.png",
                a: "χαῖρε",
                b: "χαίρετε",
                c: "ἔρρωσο",
                d: "ἔρρωσθε",
                answer: "ἔρρωσθε",
                gloss: "Bye (plural)"
            },
            {
                image: "/Assets/ἄνθρωποι.png",
                a: "ἄνθρωπος",
                b: "ἄνθρωποι",
                c: "ἄνθρωπη",
                d: "ἄνθρωπαι",
                answer: "ἄνθρωποι",
                gloss: "Men (brothers and sisters)"
            }     
         ]
        },
        { "τὸ δίδαγμα τὸ δεύτερον": [ 
            {
                image: "/Assets/μικρόν.png",
                a: "μέγας",
                b: "μικρόν",
                c: "μικρός",
                d: "μικρά",
                answer: "μικρός",
                gloss: "small/little (neuter singular)"
            },
            {
                image: "/Assets/μέγα.png",
                a: "μέγας",
                b: "μεγάλη",
                c: "μέγα",
                d: "μικρά",
                answer: "μέγας",
                gloss: "big/large/great (neuter singular)"
            },
            {
                image: "/Assets/τὸ παιδίον.png",
                a: "ὁ ἄρτος",
                b: "ὁ χοῖρος",
                c: "ὁ ἵππος",
                d: "τὸ παιδίον",
                answer: "τὸ παιδίον",
                gloss: "child"
            },
            {
                image: "/Assets/τὸ ζῷον.png",
                a: "ὁ ἄρτος",
                b: "ὁ χοῖρος",
                c: "ὁ ἵππος",
                d: "τὸ ζῷον",
                answer: "τὸ ζῷον",
                gloss: "animal (singular"
            },
            {
                image: "/Assets/ὁ ἄρτος.png",
                a: "ὁ ἵππος",
                b: "ὁ κάμηλος",
                c: "ὁ ἄρτος",
                d: "τὸ παιδίον",
                answer: "ὁ ἄρτος",
                gloss: "bread"
            },
            {
                image: "/Assets/ποῦ;.png",
                a: "ποῦ;",
                b: "ἐκεῖ",
                c: "νῦν",
                d: "πότε",
                answer: "ποῦ;",
                gloss: "where"
            },
            {
                image: "/Assets/τὸ πρόβατον.png",
                a: "τὸ πετεινόν",
                b: "τὸ ποτήριον",
                c: "τὸ πρόβατον",
                d: "τὸ παιδίον",
                answer: "τὸ πρόβατον",
                gloss: "sheep"
            },
            {
                image: "/Assets/τὸ ποτήριον.png",
                a: "τὸ πρόβατον",
                b: "τὸ ποτήριον",
                c: "τὸ πετεινόν",
                d: "τὸ παιδίον",
                answer: "τὸ ποτήριον",
                gloss: "glass"
            },
            {
                image: "/Assets/τὸ πετεινόν.png",
                a: "τὸ πρόβατον",
                b: "τὸ ποτήριον",
                c: "τὸ πετεινόν",
                d: "τὸ παιδίον",
                answer: "τὸ πετεινόν",
                gloss: "bird"
            },
            {
                image: "/Assets/ὁ ὄνος.png",
                a: "τὸ πρόβατον",
                b: "τὸ ποτήριον",
                c: "ὁ ὄνος",
                d: "τὸ παιδίον",
                answer: "ὁ ὄνος",
                gloss: "donkey"
            },
            {
                image: "/Assets/τὸ βιβλίον.png",
                a: "τὸ βιβλίον",
                b: "τὸ ποτήριον",
                c: "ὁ ὄνος",
                d: "τὸ παιδίον",
                answer: "τὸ βιβλίον",
                gloss: "book"
            },
            {
                image: "/Assets/τὸ δένδρον.png",
                a: "τὸ πρόβατον",
                b: "τὸ ποτήριον",
                c: "τὸ δένδρον",
                d: "τὸ παιδίον",
                answer: "τὸ δένδρον",
                gloss: "tree"
            },
            {
                image: "/Assets/τὸ σκεῦος.png",
                a: "τὸ σκεῦος",
                b: "τὸ ποτήριον",
                c: "τὸ δένδρον",
                d: "τὸ παιδίον",
                answer: "τὸ σκεῦος",
                gloss: "vessel"
            },
            {
                image: "/Assets/τὸ θηλυκόν ἄρθρον.png",
                a: "τὸ οὐδέτερον ἄρθρον",
                b: "τὸ θηλυκόν ἄρθρον",
                c: "τὸ ἀρσενικόν ἄρθρον",
                d: "τὸ παιδίον",
                answer: "τὸ θηλυκόν ἄρθρον",
                gloss: "feminine article"
            },
            {
                image: "/Assets/τὸ ἀρσενικόν ἄρθρον.png",
                a: "τὸ οὐδέτερον ἄρθρον",
                b: "τὸ ἀρσενικόν ἄρθρον",
                c: "τὸ δένδρον",
                d: "τὸ θηλυκόν ἄρθρον",
                answer: "τὸ ἀρσενικόν ἄρθρον",
                gloss: "masculine article"
            },
            {
                image: "/Assets/τὸ οὐδέτερον ἄρθρον.png",
                a: "τὸ ἀρσενικόν ἄρθρον",
                b: "τὸ ποτήριον",
                c: "τὸ δένδρον ἄρθρον",
                d: "τὸ οὐδέτερον ἄρθρον",
                answer: "τὸ οὐδέτερον ἄρθρον",
                gloss: "neuter article"
            }
            
        ]
        },
        { "τὸ δίδαγμα τὸ τρίτον": [ 
            {
                image: "/Assets/ἵπποι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "ὄνοι (οἱ)",
                c: "λίθοι (οἱ)",
                d: "ἄρτοι (οἱ)",
                answer: "ἵπποι (οἱ)",
                gloss: "horses"
            },
            {
                image: "/Assets/ὄνοι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "ὄνοι (οἱ)",
                c: "λίθοι (οἱ)",
                d: "ἄρτοι (οἱ)",
                answer: "ὄνοι (οἱ)",
                gloss: "donkies"
            },
            {
                image: "/Assets/λίθοι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "ὄνοι (οἱ)",
                c: "λίθοι (οἱ)",
                d: "ἄρτοι (οἱ)",
                answer: "λίθοι (οἱ)",
                gloss: "stones"
            },
            {
                image: "/Assets/ἄρτοι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "ὄνοι (οἱ)",
                c: "λίθοι (οἱ)",
                d: "ἄρτοι (οἱ)",
                answer: "ἄρτοι (οἱ)",
                gloss: "breads"
            },
            {
                image: "/Assets/κάλαμοι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "κάμηλοι (οἱ)",
                c: "κάλαμοι (οἱ)",
                d: "ἄρτοι (οἱ)",
                answer: "κάλαμοι (οἱ)",
                gloss: "camels"
            },
            {
                image: "/Assets/κάμηλοι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "κάμηλοι (οἱ)",
                c: "κάλαμοι (οἱ)",
                d: "ἄρτοι (οἱ)",
                answer: "κάμηλοι (οἱ)",
                gloss: "reeds"
            },
            {
                image: "/Assets/λύκοι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "κάμηλοι (οἱ)",
                c: "κάλαμοι (οἱ)",
                d: "λύκοι (οἱ)",
                answer: "λύκοι (οἱ)",
                gloss: "wolves"
            },
            {
                image: "/Assets/χοῖροι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "κάμηλοι (οἱ)",
                c: "χοῖροι (οἱ)",
                d: "λύκοι (οἱ)",
                answer: "χοῖροι (οἱ)",
                gloss: "pigs"
            },
            {
                image: "/Assets/ἄνθρωποι (οἱ).png",
                a: "ἵπποι (οἱ)",
                b: "ἄνθρωποι (οἱ)",
                c: "χοῖροι (οἱ)",
                d: "λύκοι (οἱ)",
                answer: "ἄνθρωποι (οἱ)",
                gloss: "men"
            },
            {
                image: "/Assets/πετεινά (τά).png",
                a: "ποτήρια (τά)",
                b: "πετεινά (τά)",
                c: "κάλαμοι (οἱ)",
                d: "λύκοι (οἱ)",
                answer: "πετεινά (τά)",
                gloss: "birds"
            },
            {
                image: "/Assets/ποτήρια (τά).png",
                a: "ποτήρια (τά)",
                b: "πετεινά (τά)",
                c: "κάλαμοι (οἱ)",
                d: "λύκοι (οἱ)",
                answer: "ποτήρια (τά)",
                gloss: "glasses"
            },
            {
                image: "/Assets/στέγη (ἡ).png",
                a: "στέγη (ἡ)",
                b: "θύρα (ἡ)",
                c: "τράπεζα (ἡ)",
                d: "στέγαι (αἱ)",
                answer: "στέγη (ἡ)",
                gloss: "roof"
            },
            {
                image: "/Assets/θύρα (ἡ).png",
                a: "στέγη (ἡ)",
                b: "θύρα (ἡ)",
                c: "τράπεζα (ἡ)",
                d: "θύραι (αἱ)",
                answer: "θύρα (ἡ)",
                gloss: "door"
            },
            {
                image: "/Assets/τράπεζα (ἡ).png",
                a: "στέγη (ἡ)",
                b: "θύρα (ἡ)",
                c: "τράπεζα (ἡ)",
                d: "τράπεζαι (αἱ)",
                answer: "τράπεζα (ἡ)",
                gloss: "Table"
            },
            {
                image: "/Assets/οἰκίαι (αἱ).png",
                a: "οἰκίαι (αἱ)",
                b: "θύρα (ἡ)",
                c: "τράπεζα (ἡ)",
                d: "τράπεζαι (αἱ)",
                answer: "οἰκίαι (αἱ)",
                gloss: "houses"
            },
            {
                image: "/Assets/ὑδρίαι (αἱ).png",
                a: "οἰκίαι (αἱ)",
                b: "ὑδρίαι (αἱ)",
                c: "τράπεζα (ἡ)",
                d: "τράπεζαι (αἱ)",
                answer: "ὑδρίαι (αἱ)",
                gloss: "jars"
            },
            {
                image: "/Assets/δένδρα (τά).png",
                a: "ποτήρια (τά)",
                b: "πετεινά (τά)",
                c: "δένδρα (τά)",
                d: "πρόβατα (τά)",
                answer: "δένδρα (τά)",
                gloss: "trees"
            },
            {
                image: "/Assets/πρόβατα (τά).png",
                a: "ζῷα (τά)",
                b: "πετεινά (τά)",
                c: "δένδρα (τά)",
                d: "πρόβατα (τά)",
                answer: "πρόβατα (τά)",
                gloss: "sheeps"
            },
            {
                image: "/Assets/παιδία (τά).png",
                a: "ποτήρια (τά)",
                b: "ζῷα (τά)",
                c: "δένδρα (τά)",
                d: "παιδία (τά)",
                answer: "παιδία (τά)",
                gloss: "children"
            },
            {
                image: "/Assets/ζῷα (τά).png",
                a: "ποτήρια (τά)",
                b: "πετεινά (τά)",
                c: "δένδρα (τά)",
                d: "ζῷα (τά)",
                answer: "ζῷα (τά)",
                gloss: "aninals"
            },
            {
                image: "/Assets/οὗτοι.png",
                a: "αὗται",
                b: "ταῦτα",
                c: "οὗτοι",
                d: "Οὗτός",
                answer: "οὗτοι",
                gloss: "These (masculine)"
            },
            {
                image: "/Assets/αὗται.png",
                a: "αὗται",
                b: "ταῦτα",
                c: "οὗτοι",
                d: "Οὗτός",
                answer: "αὗται",
                gloss: "These (feminine)"
            },
            {
                image: "/Assets/ταῦτα.png",
                a: "αὗται",
                b: "ταῦτα",
                c: "οὗτοι",
                d: "Οὗτός",
                answer: "ταῦτα",
                gloss: "These (neuter)"
            },
            {
                image: "/Assets/κακός.png",
                a: "κακός",
                b: "κακοί",
                c: "κακή",
                d: "κακαί",
                answer: "κακός",
                gloss: "Ἐπίθετον bad (masculine singular)"
            },
            {
                image: "/Assets/κακοί.png",
                a: "κακός",
                b: "κακοί",
                c: "κακή",
                d: "κακαί",
                answer: "κακοί",
                gloss: "Ἐπίθετον bad (masculine plural)"
            },
            {
                image: "/Assets/κακή.png",
                a: "κακός",
                b: "κακοί",
                c: "κακή",
                d: "κακαί",
                answer: "κακή",
                gloss: "Ἐπίθετον bad (feminine singular)"
            },
            {
                image: "/Assets/κακαί.png",
                a: "κακόν",
                b: "κακά",
                c: "κακή",
                d: "κακαί",
                answer: "κακαί",
                gloss: "Ἐπίθετον bad (feminine plural)"
            },
            {
                image: "/Assets/κακόν.png",
                a: "κακόν",
                b: "κακά",
                c: "κακή",
                d: "κακαί",
                answer: "κακόν",
                gloss: "Ἐπίθετον bad (neuter singular)"
            },
            {
                image: "/Assets/κακά.png",
                a: "κακόν",
                b: "κακά",
                c: "κακή",
                d: "κακαί",
                answer: "κακά",
                gloss: "Ἐπίθετον bad (neuter plural)"
            }
        ]
        },
        { "τὸ δίδαγμα τὸ τέταρτον": [ 
            {
                image: "/Assets/ὕδωρ (τό).png",
                a: "ᾠόν (τό)",
                b: "ὕδωρ (τό)",
                c: "οὖς (τό)",
                d: "ὦτα (τά)",
                answer: "ὕδωρ (τό)",
                gloss: "water"
            },
            {
                image: "/Assets/ᾠόν (τό).png",
                a: "ᾠόν (τό)",
                b: "ᾠά (τά)",
                c: "οὖς (τό)",
                d: "ὦτα (τά)",
                answer: "ᾠόν (τό)",
                gloss: "egg"
            },
            {
                image: "/Assets/ᾠά (τά).png",
                a: "ᾠόν (τό)",
                b: "ᾠά (τά)",
                c: "οὖς (τό)",
                d: "ὦτα (τά)",
                answer: "ᾠά (τά)",
                gloss: "eggs"
            },
            {
                image: "/Assets/οὖς (τό).png",
                a: "ᾠόν (τό)",
                b: "ᾠά (τά)",
                c: "οὖς (τό)",
                d: "ὦτα (τά)",
                answer: "οὖς (τό)",
                gloss: "ear"
            },
            {
                image: "/Assets/ὦτα (τά).png",
                a: "ᾠόν (τό)",
                b: "ᾠά (τά)",
                c: "οὖς (τό)",
                d: "ὦτα (τά)",
                answer: "ὦτα (τά)",
                gloss: "ears"
            },
            {
                image: "/Assets/βιβλίον (τό).png",
                a: "ᾠόν (τό)",
                b: "βιβλίον (τό)",
                c: "βιβλία (τά)",
                d: "ὦτα (τά)",
                answer: "βιβλίον (τό)",
                gloss: "book"
            },
            {
                image: "/Assets/βιβλία (τά).png",
                a: "ᾠόν (τό)",
                b: "ᾠά (τά)",
                c: "βιβλία (τά)",
                d: "ὦτα (τά)",
                answer: "βιβλία (τά)",
                gloss: "books"
            },
            {
                image: "/Assets/δάκτυλος (ὁ).png",
                a: "δάκτυλος (ὁ)",
                b: "δάκτυλοι (οἱ)",
                c: "ὀφθαλμός (ὁ)",
                d: "ὀφθαλμοί (οἱ)",
                answer: "δάκτυλος (ὁ)",
                gloss: "finger"
            },
            {
                image: "/Assets/δάκτυλοι (οἱ).png",
                a: "δάκτυλος (ὁ)",
                b: "δάκτυλοι (οἱ)",
                c: "ὀφθαλμός (ὁ)",
                d: "ὀφθαλμοί (οἱ)",
                answer: "δάκτυλοι (οἱ)",
                gloss: "fingers"
            },
            {
                image: "/Assets/ὀφθαλμοί (οἱ).png",
                a: "δάκτυλος (ὁ)",
                b: "δάκτυλοι (οἱ)",
                c: "ὀφθαλμός (ὁ)",
                d: "ὀφθαλμοί (οἱ)",
                answer: "ὀφθαλμοί (οἱ)",
                gloss: "eyes"
            },
            {
                image: "/Assets/ὀφθαλμός (ὁ).png",
                a: "δάκτυλος (ὁ)",
                b: "δάκτυλοι (οἱ)",
                c: "ὀφθαλμός (ὁ)",
                d: "ὀφθαλμοί (οἱ)",
                answer: "ὀφθαλμός (ὁ)",
                gloss: "eye"
            },
            {
                image: "/Assets/κεφαλή (ἡ).png",
                a: "κεφαλή (ἡ)",
                b: "θύρα (ἡ)",
                c: "τράπεζα (ἡ)",
                d: "κεφαλαί (αἱ)",
                answer: "κεφαλή (ἡ)",
                gloss: "head"
            },
            {
                image: "/Assets/κεφαλαί (αἱ).png",
                a: "κεφαλή (ἡ)",
                b: "θύρα (ἡ)",
                c: "τράπεζα (ἡ)",
                d: "κεφαλαί (αἱ)",
                answer: "κεφαλαί (αἱ)",
                gloss: "heads"
            },
            {
                image: "/Assets/κόμη (ἡ).png",
                a: "κόμη (ἡ)",
                b: "κόμαι (αἱ)",
                c: "γλῶσσα (ἡ)",
                d: "γλῶσσαι (αἱ)",
                answer: "κόμη (ἡ)",
                gloss: "hair"
            },
            {
                image: "/Assets/κόμαι (αἱ).png",
                a: "κόμη (ἡ)",
                b: "κόμαι (αἱ)",
                c: "γλῶσσα (ἡ)",
                d: "γλῶσσαι (αἱ)",
                answer: "κόμαι (αἱ)",
                gloss: "hairs"
            },
            {
                image: "/Assets/γλῶσσα (ἡ).png",
                a: "κόμη (ἡ)",
                b: "κόμαι (αἱ)",
                c: "γλῶσσα (ἡ)",
                d: "γλῶσσαι (αἱ)",
                answer: "γλῶσσα (ἡ)",
                gloss: "tongue"
            },
            {
                image: "/Assets/γλῶσσαι (αἱ).png",
                a: "κόμη (ἡ)",
                b: "κόμαι (αἱ)",
                c: "γλῶσσα (ἡ)",
                d: "γλῶσσαι (αἱ)",
                answer: "γλῶσσαι (αἱ)",
                gloss: "tongues"
            },
            {
                image: "/Assets/πρόσωπον (τό).png",
                a: "πρόσωπον (τό)",
                b: "πρόσωπα (τά)",
                c: "γλῶσσα (ἡ)",
                d: "γλῶσσαι (αἱ)",
                answer: "πρόσωπον (τό)",
                gloss: "face"
            },
            {
                image: "/Assets/πρόσωπα (τά).png",
                a: "πρόσωπον (τό)",
                b: "πρόσωπα (τά)",
                c: "γλῶσσα (ἡ)",
                d: "γλῶσσαι (αἱ)",
                answer: "πρόσωπα (τά)",
                gloss: "faces"
            },
            {
                image: "/Assets/ὀστέον (τό).png",
                a: "πρόσωπον (τό)",
                b: "πρόσωπα (τά)",
                c: "ὀστέον (τό)",
                d: "ὀστέα (τά)",
                answer: "ὀστέον (τό)",
                gloss: "bone"
            },
            {
                image: "/Assets/ὀστέα (τά).png",
                a: "πρόσωπον (τό)",
                b: "πρόσωπα (τά)",
                c: "ὀστέον (τό)",
                d: "ὀστέα (τά)",
                answer: "ὀστέα (τά)",
                gloss: "bones"
            },
            {
                image: "/Assets/ῥίς (ἡ).png",
                a: "ῥίς (ἡ)",
                b: "ὀδούς (ὁ)",
                c: "στόμα (τό)",
                d: "ῥῖνες (αἱ)",
                answer: "ῥίς (ἡ)",
                gloss: "nose"
            },
            {
                image: "/Assets/ῥῖνες (αἱ).png",
                a: "ῥίς (ἡ)",
                b: "ὀδούς (ὁ)",
                c: "στόμα (τό)",
                d: "ῥῖνες (αἱ)",
                answer: "ῥῖνες (αἱ)",
                gloss: "noses"
            },
            {
                image: "/Assets/ὀδούς (ὁ).png",
                a: "ῥίς (ἡ)",
                b: "ὀδούς (ὁ)",
                c: "ὀδόντες (οἱ)",
                d: "χεῖρες (αἱ)",
                answer: "ὀδούς (ὁ)",
                gloss: "tooth"
            },
            {
                image: "/Assets/ὀδόντες (οἱ).png",
                a: "ῥίς (ἡ)",
                b: "ὀδούς (ὁ)",
                c: "ὀδόντες (οἱ)",
                d: "χεῖρες (αἱ)",
                answer: "ὀδόντες (οἱ)",
                gloss: "teeth"
            },
            {
                image: "/Assets/στόμα (τό).png",
                a: "ῥίς (ἡ)",
                b: "ὀδούς (ὁ)",
                c: "στόμα (τό)",
                d: "ῥῖνες (αἱ)",
                answer: "στόμα (τό)",
                gloss: "tongues"
            },
            {
                image: "/Assets/χεῖρες (αἱ).png",
                a: "ῥίς (ἡ)",
                b: "χεῖρες (αἱ)",
                c: "στόμα (τό)",
                d: "ῥῖνες (αἱ)",
                answer: "χεῖρες (αἱ)",
                gloss: "tongues"
            },
            {
                image: "/Assets/ἄνδρες (οἱ).png",
                a: "ἄνδρες (οἱ)",
                b: "χεῖρες (αἱ)",
                c: "γυναῖκες (αἱ)",
                d: "ῥῖνες (αἱ)",
                answer: "ἄνδρες (οἱ)",
                gloss: "men/husbands"
            },
            {
                image: "/Assets/γυναῖκες (αἱ).png",
                a: "ἄνδρες (οἱ)",
                b: "χεῖρες (αἱ)",
                c: "γυναῖκες (αἱ)",
                d: "ῥῖνες (αἱ)",
                answer: "γυναῖκες (αἱ)",
                gloss: "women/wives"
            },
            {
                image: "/Assets/κύνες (οἱ).png",
                a: "ἄνδρες (οἱ)",
                b: "βόες (οἱ/αἱ)",
                c: "κύνες (οἱ)",
                d: "ἀλέκτορες (οἱ)",
                answer: "κύνες (οἱ)",
                gloss: "dogs"
            },
            {
                image: "/Assets/ἀλέκτορες (οἱ).png",
                a: "ἄνδρες (οἱ)",
                b: "χεῖρες (αἱ)",
                c: "κύνες (οἱ)",
                d: "ἀλέκτορες (οἱ)",
                answer: "ἀλέκτορες (οἱ)",
                gloss: "roosters"
            },
            {
                image: "/Assets/βόες (αἱ).png",
                a: "ἄνδρες (οἱ)",
                b: "βόες (αἱ)",
                c: "κύνες (οἱ)",
                d: "ἀλέκτορες (οἱ)",
                answer: "βόες (αἱ)",
                gloss: "cows"
            },
            {
                image: "/Assets/ὄρνιθες (αἱ).png",
                a: "ὄρνιθες (αἱ)",
                b: "βόες (αἱ)",
                c: "στόματα (τά)",
                d: "ἀλέκτορες (οἱ)",
                answer: "ὄρνιθες (αἱ)",
                gloss: "hens"
            },
            {
                image: "/Assets/στόματα (τά).png",
                a: "ὄρνιθες (αἱ)",
                b: "βόες (αἱ)",
                c: "στόματα (τά)",
                d: "ἀλέκτορες (οἱ)",
                answer: "στόματα (τά)",
                gloss: "hens"
            },
            {
                image: "/Assets/σκέλος (τό).png",
                a: "σκέλος (τό)",
                b: "σκέλη (τά)",
                c: "στόματα (τά)",
                d: "ἀλέκτορες (οἱ)",
                answer: "σκέλος (τό)",
                gloss: "leg"
            },
            {
                image: "/Assets/σκέλη (τά).png",
                a: "σκέλος (τό)",
                b: "σκέλη (τά)",
                c: "στόματα (τά)",
                d: "ἀλέκτορες (οἱ)",
                answer: "σκέλη (τά)",
                gloss: "legs"
            }
        ]
        },
        { "τὸ δίδαγμα τὸ πέμπτον": [ 
            {
                image: "/Assets/ἡμεῖς.png",
                a: "ἡμεῖς",
                b: "ἐσμέν",
                c: "ὑμεῖς",
                d: "ἐστέ",
                answer: "ἡμεῖς",
                gloss: "We (Personal Pronoun)"
            },
            {
                image: "/Assets/ἐσμέν.png",
                a: "ἡμεῖς",
                b: "ἐσμέν",
                c: "ὑμεῖς",
                d: "ἐστέ",
                answer: "ἐσμέν",
                gloss: "We ARE (be verb)"
            },
            {
                image: "/Assets/ὑμεῖς.png",
                a: "ἡμεῖς",
                b: "ἐσμέν",
                c: "ὑμεῖς",
                d: "ἐστέ",
                answer: "ὑμεῖς",
                gloss: "You (Personal Pronoun)"
            },
            {
                image: "/Assets/ἐστέ.png",
                a: "ἡμεῖς",
                b: "ἐσμέν",
                c: "ὑμεῖς",
                d: "ἐστέ",
                answer: "ἐστέ",
                gloss: "You ARE (be verb)"
            },
            {
                image: "/Assets/πρεσβῦτις (ἡ).png",
                a: "πρεσβῦτις (ἡ)",
                b: "πρεσβύτης (ὁ)",
                c: "πρεσβύτερος (ὁ)",
                d: "κοράσιον (τό)",
                answer: "πρεσβῦτις (ἡ)",
                gloss: "elder lady / older woman"
            },
            {
                image: "/Assets/πρεσβύτης (ὁ).png",
                a: "πρεσβῦτις (ἡ)",
                b: "πρεσβύτης (ὁ)",
                c: "πρεσβύτερος (ὁ)",
                d: "κοράσιον (τό)",
                answer: "πρεσβύτης (ὁ)",
                gloss: "old man"
            },
            {
                image: "/Assets/πρεσβύτερος (ὁ).png",
                a: "πρεσβῦτις (ἡ)",
                b: "πρεσβύτης (ὁ)",
                c: "πρεσβύτερος (ὁ)",
                d: "κοράσιον (τό)",
                answer: "πρεσβύτερος (ὁ)",
                gloss: "elder /  older man"
            },
            {
                image: "/Assets/βρέφος (τό).png",
                a: "πρεσβῦτις (ἡ)",
                b: "πρεσβύτης (ὁ)",
                c: "βρέφος (τό)",
                d: "κοράσιον (τό)",
                answer: "βρέφος (τό)",
                gloss: "baby"
            },
            {
                image: "/Assets/κοράσιον (τό).png",
                a: "πρεσβῦτις (ἡ)",
                b: "νεανίσκος (ὁ)",
                c: "βρέφος (τό)",
                d: "κοράσιον (τό)",
                answer: "κοράσιον (τό)",
                gloss: "little girl"
            },
            {
                image: "/Assets/νεανίσκος (ὁ).png",
                a: "πρεσβῦτις (ἡ)",
                b: "νεανίσκος (ὁ)",
                c: "βρέφος (τό)",
                d: "κοράσιον (τό)",
                answer: "νεανίσκος (ὁ)",
                gloss: "little boy"
            },
            {
                image: "/Assets/κοράσια (τά).png",
                a: "νεανίσκοι (οἱ)",
                b: "νεανίσκος (ὁ)",
                c: "κοράσια (τά)",
                d: "κοράσιον (τό)",
                answer: "κοράσια (τά)",
                gloss: "little girls"
            },
            {
                image: "/Assets/νεανίσκοι (οἱ).png",
                a: "νεανίσκοι (οἱ)",
                b: "νεανίσκος (ὁ)",
                c: "κοράσια (τά)",
                d: "κοράσιον (τό)",
                answer: "νεανίσκοι (οἱ)",
                gloss: "little boys"
            },
            {
                image: "/Assets/πρεσβύτεροι (οἱ).png",
                a: "πρεσβῦτις (ἡ)",
                b: "πρεσβύτης (ὁ)",
                c: "βρέφος (τό)",
                d: "νεανίσκοι (οἱ)",
                answer: "πρεσβύτεροι (οἱ)",
                gloss: "elders"
            },
            {
                image: "/Assets/βρέφη (τά).png",
                a: "πρεσβῦτις (ἡ)",
                b: "πρεσβύτης (ὁ)",
                c: "βρέφος (τό)",
                d: "βρέφη (τά)",
                answer: "βρέφη (τά)",
                gloss: "babies"
            }
        ]
        },
        { "τὸ δίδαγμα τὸ ἕκτον": [
            {
                image: "/Assets/υἱός (ὁ).png",
                a: "υἱός (ὁ)",
                b: "πρεσβύτης (ὁ)",
                c: "βρέφος (τό)",
                d: "πατήρ (ὁ)",
                answer: "υἱός (ὁ)",
                gloss: "babies"
            },
            {
                image: "/Assets/πατήρ (ὁ).png",
                a: "υἱός (ὁ)",
                b: "πρεσβύτης (ὁ)",
                c: "βρέφος (τό)",
                d: "πατήρ (ὁ)",
                answer: "πατήρ (ὁ)",
                gloss: "babies"
            },
            {
                image: "/Assets/μήτηρ (ἡ).png",
                a: "βασιλεύς (ὁ)",
                b: "γονεῖς (οἱ)",
                c: "μήτηρ (ἡ)",
                d: "πατήρ (ὁ)",
                answer: "μήτηρ (ἡ)",
                gloss: "babies"
            },
            {
                image: "/Assets/βασιλεύς (ὁ).png",
                a: "βασιλεύς (ὁ)",
                b: "γονεῖς (οἱ)",
                c: "μήτηρ (ἡ)",
                d: "πατήρ (ὁ)",
                answer: "βασιλεύς (ὁ)",
                gloss: "babies"
            },
            {
                image: "/Assets/γονεῖς (οἱ).png",
                a: "γονεύς (ὁ)",
                b: "γονεῖς (οἱ)",
                c: "μήτηρ (ἡ)",
                d: "πατήρ (ὁ)",
                answer: "γονεῖς (οἱ)",
                gloss: "babies"
            },
            {
                image: "/Assets/γονεύς (ὁ).png",
                a: "γονεύς (ὁ)",
                b: "γονεῖς (οἱ)",
                c: "μήτηρ (ἡ)",
                d: "πατήρ (ὁ)",
                answer: "γονεύς (ὁ)",
                gloss: "babies"
            },
            {
                image: "/Assets/θυγάτηρ (ἡ).png",
                a: "θυγάτηρ (ἡ)",
                b: "θυγατέρες (αἱ)",
                c: "υἱός (ὁ)",
                d: "υἱοί (οἱ)",
                answer: "θυγάτηρ (ἡ)",
                gloss: "babies"
            },
            {
                image: "/Assets/θυγατέρες (αἱ).png",
                a: "θυγάτηρ (ἡ)",
                b: "θυγατέρες (αἱ)",
                c: "υἱός (ὁ)",
                d: "υἱοί (οἱ)",
                answer: "θυγατέρες (αἱ)",
                gloss: "babies"
            },
            {
                image: "/Assets/υἱοί (οἱ).png",
                a: "θυγάτηρ (ἡ)",
                b: "θυγατέρες (αἱ)",
                c: "υἱός (ὁ)",
                d: "υἱοί (οἱ)",
                answer: "υἱοί (οἱ)",
                gloss: "babies"
            },
            {
                image: "/Assets/ἀδελφός (ὁ).png",
                a: "θυγάτηρ (ἡ)",
                b: "ἀδελφή (ἡ)",
                c: "ἀδελφοί (οἱ)",
                d: "ἀδελφός (ὁ)",
                answer: "ἀδελφός (ὁ)",
                gloss: "babies"
            },
            {
                image: "/Assets/ἀδελφή (ἡ).png",
                a: "θυγάτηρ (ἡ)",
                b: "ἀδελφή (ἡ)",
                c: "ἀδελφοί (οἱ)",
                d: "ἀδελφός (ὁ)",
                answer: "ἀδελφή (ἡ)",
                gloss: "babies"
            },
            {
                image: "/Assets/ἀδελφοί (οἱ).png",
                a: "θυγάτηρ (ἡ)",
                b: "ἀδελφή (ἡ)",
                c: "ἀδελφοί (οἱ)",
                d: "υἱοί (οἱ)",
                answer: "ἀδελφοί (οἱ)",
                gloss: "babies"
            },
            {
                image: "/Assets/ὥρα (ἡ).png",
                a: "ὥρα (ἡ)",
                b: "ὧραι (αἱ)",
                c: "γῆ (ἡ)",
                d: "ἥλιος (ὁ)",
                answer: "ὥρα (ἡ)",
                gloss: "babies"
            },
            {
                image: "/Assets/ὧραι (αἱ).png",
                a: "ὥρα (ἡ)",
                b: "ὧραι (αἱ)",
                c: "γῆ (ἡ)",
                d: "ἥλιος (ὁ)",
                answer: "ἀδελφοί (οἱ)",
                gloss: "babies"
            },
            {
                image: "/Assets/γῆ (ἡ).png",
                a: "ὥρα (ἡ)",
                b: "ὧραι (αἱ)",
                c: "γῆ (ἡ)",
                d: "ἥλιος (ὁ)",
                answer: "γῆ (ἡ)",
                gloss: "babies"
            },
            {
                image: "/Assets/ἥλιος (ὁ).png",
                a: "ὥρα (ἡ)",
                b: "οὐρανός (ὁ)",
                c: "γῆ (ἡ)",
                d: "ἥλιος (ὁ)",
                answer: "ἥλιος (ὁ)",
                gloss: "babies"
            },
            {
                image: "/Assets/οὐρανός (ὁ).png",
                a: "ὥρα (ἡ)",
                b: "οὐρανός (ὁ)",
                c: "γῆ (ἡ)",
                d: "ἥλιος (ὁ)",
                answer: "οὐρανός (ὁ)",
                gloss: "babies"
            }
        ]
        },
        { "τὸ δίδαγμα τὸ ἕβδομον": [ 
            {
                image: "/Assets/αὐτή.png",
                a: "αὐτός",
                b: "αὐτή",
                c: "σύ",
                d: "ἐγώ",
                answer: "αὐτή",
                gloss: "she"
            },
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
                image: "/Assets/πόδες (οἱ).png",
                a: "πόδες (οἱ)",
                b: "πούς (ὁ)",
                c: "φύλαξ (ὁ)",
                d: "φύλακες (οἱ)",
                answer: "πόδες (οἱ)",
                gloss: "He"
            },
            {
                image: "/Assets/πούς (ὁ).png",
                a: "πόδες (οἱ)",
                b: "πούς (ὁ)",
                c: "φύλαξ (ὁ)",
                d: "φύλακες (οἱ)",
                answer: "πούς (ὁ)",
                gloss: "He"
            },
            {
                image: "/Assets/φύλαξ (ὁ).png",
                a: "πόδες (οἱ)",
                b: "πούς (ὁ)",
                c: "φύλαξ (ὁ)",
                d: "φύλακες (οἱ)",
                answer: "φύλαξ (ὁ)",
                gloss: "Guard"
            },
            {
                image: "/Assets/φύλακες (οἱ).png",
                a: "πόδες (οἱ)",
                b: "πούς (ὁ)",
                c: "φύλαξ (ὁ)",
                d: "φύλακες (οἱ)",
                answer: "φύλακες (οἱ)",
                gloss: "Guards"
            },
            {
                image: "/Assets/φῶς (τό).png",
                a: "φῶς (τό)",
                b: "σκότος (ὁ)",
                c: "ἡμέρα (ἡ)",
                d: "νύξ (ἡ)",
                answer: "φῶς (τό)",
                gloss: "Light"
            }
        ]
        },
        { "τὸ δίδαγμα τὸ ὄγδοον": [ 
        ]
        },
        { "ένατος": [ 
        ]
        },
        { "δέκατος": [ 
            
          
         ]
        },

        { "ενδέκατος": [ 
            
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
        { "δωδέκατος": [ 
            
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
                a: "Ἔλθετε ὧδε.",
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
        { "δέκατος τρίτος": [ 
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
        { "δέκατος τέταρτος": [ 
            {
                image: "/Assets/αἱ νεφέλαι.png",
                a: "αἱ νεφέλαι",
                b: "ἡ σελήνη",
                c: "τὸ ὄρος",
                d: "ἡ σάλπιγξ",
                answer: "αἱ νεφέλαι",
                gloss: "clouds"
            },
            {
                image: "/Assets/τὸ ὄρος.png",
                a: "αἱ νεφέλαι",
                b: "ἡ σελήνη",
                c: "τὸ ὄρος",
                d: "ἡ σάλπιγξ",
                answer: "τὸ ὄρος",
                gloss: "mountain"
            },
            {
                image: "/Assets/ἀκούω.png",
                a: "ἄκουε",
                b: "ἀκούω",
                c: "Πορεύθητι",
                d: "Καθίσατε",
                answer: "ἀκούω",
                gloss: "I hear"
            },
            {
                image: "/Assets/ἄκουε.png",
                a: "ἄκουε",
                b: "ἀκούω",
                c: "Πορεύθητι",
                d: "Καθίσατε",
                answer: "ἄκουε",
                gloss: "Hear!"
            },
            {
                image: "/Assets/Ὁ ἀνὴρ ἀκούει..png",
                a: "Αἱ γυναῖκες ἀκούουσιν.",
                b: "Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου.",
                c: "ἡ γυνή ἀκούει.",
                d: "Ὁ ἀνὴρ ἀκούει.",
                answer: "Ὁ ἀνὴρ ἀκούει.",
                gloss: "The man hears"
            },
            {
                image: "/Assets/Αἱ γυναῖκες ἀκούουσιν..png",
                a: "Αἱ γυναῖκες ἀκούουσιν.",
                b: "Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου.",
                c: "ἡ γυνή ἀκούει.",
                d: "Ὁ ἀνὴρ ἀκούει.",
                answer: "Αἱ γυναῖκες ἀκούουσιν.",
                gloss: "The women hear"
            },
            {
                image: "/Assets/Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου..png",
                a: "Αἱ γυναῖκες ἀκούουσιν.",
                b: "Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου.",
                c: "ἡ γυνή ἀκούει.",
                d: "Ὁ ἀνὴρ ἀκούει.",
                answer: "Οἱ μαθηταὶ ἀκούουσιν τοῦ διδασκάλου.",
                gloss: "The students hear the teacher"
            },
            {
                image: "/Assets/κελεύω.png",
                a: "κελεύει",
                b: "ὑπακούει",
                c: "καθίζω",
                d: "κελεύω",
                answer: "κελεύω",
                gloss: "I command"
            },
            {
                image: "/Assets/oὐχ ὑπακούει.png",
                a: "oὐχ ὑπακούει",
                b: "ὑπακούει",
                c: "oὐ ακούει",
                d: "oὐ κελεύω",
                answer: "oὐχ ὑπακούει",
                gloss: "she/he does not obey"
            },
            {
                image: "/Assets/ὑπακούει.png",
                a: "κελεύει",
                b: "ὑπακούει",
                c: "καθίζω",
                d: "κελεύω",
                answer: "ὑπακούει",
                gloss: "she/he obeys"
            },
            {
                image: "/Assets/κελεύει.png",
                a: "κελεύει",
                b: "ὑπακούει",
                c: "καθίζω",
                d: "κελεύω",
                answer: "κελεύει",
                gloss: "she/he commands"
            },
            {
                image: "/Assets/εἶπεν.png",
                a: "εἰπέ",
                b: "ὑπακούει",
                c: "καθίζω",
                d: "εἶπεν",
                answer: "εἶπεν",
                gloss: "He said"
            }
        
             ]
        },
        
        { "δέκατος πέμπτος": [ 
            {
                image: "/Assets/καλός.png",
                a: "καλός",
                b: "κακός",
                c: "Ποῖος",
                d: "Ποία",
                answer: "καλός",
                gloss: "good"
            },
            {
                image: "/Assets/κακός.png",
                a: "καλός",
                b: "κακός",
                c: "Ποῖος",
                d: "Ποία",
                answer: "κακός",
                gloss: "bad"
            },
            {
                image: "/Assets/Ποῖος.png",
                a: "καλός",
                b: "Ποῖον",
                c: "Ποῖος",
                d: "Ποία",
                answer: "Ποῖος",
                gloss: "what sort of/kind of? (masculine)"
            },
            {
                image: "/Assets/Ποία.png",
                a: "καλός",
                b: "Ποῖον",
                c: "Ποῖος",
                d: "Ποία",
                answer: "Ποία",
                gloss: "what sort of/kind of? (feminine)"
            },
            {
                image: "/Assets/Ποῖον.png",
                a: "καλός",
                b: "Ποῖον",
                c: "Ποῖος",
                d: "Ποία",
                answer: "Ποῖον",
                gloss: "what sort of/kind of? (neuter)"
            },
            {
                image: "/Assets/μικρόν.png",
                a: "μικρόν",
                b: "μεγάλη",
                c: "Ποῖος",
                d: "Ποία",
                answer: "μικρόν",
                gloss: "small"
            },
            {
                image: "/Assets/μεγάλη.png",
                a: "μικρόν",
                b: "μεγάλη",
                c: "Ποῖος",
                d: "Ποία",
                answer: "μεγάλη",
                gloss: "big"
            },
            {
                image: "/Assets/ψηφίζε.png",
                a: "ψηφίζε",
                b: "μεγάλη",
                c: "Ποῖος",
                d: "Ποία",
                answer: "ψηφίζε",
                gloss: "count"
            },
            {
                image: "/Assets/Πόσοι.png",
                a: "Πόσοι",
                b: "Πόσαι",
                c: "Ποῖος",
                d: "Ποία",
                answer: "Πόσοι",
                gloss: "How many? (masculine)"
            },
            {
                image: "/Assets/Δύο.png",
                a: "τρεῖς",
                b: "Εἷς",
                c: "τέσσαρες",
                d: "Δύο",
                answer: "Δύο",
                gloss: "two"
            },
            {
                image: "/Assets/Πόσαι.png",
                a: "Πόσοι",
                b: "Πόσαι",
                c: "Ποῖος",
                d: "Ποία",
                answer: "Πόσαι",
                gloss: "How many? (feminine)"
            },
            {
                image: "/Assets/Πέντε.png",
                a: "τρεῖς",
                b: "Πέντε",
                c: "τέσσαρες",
                d: "Δύο",
                answer: "Πέντε",
                gloss: "five"
            },
            {
                image: "/Assets/Πόσα.png",
                a: "Πόσοι",
                b: "Πόσαι",
                c: "Πόσα",
                d: "Ποία",
                answer: "Πόσα",
                gloss: "How many? (neuter)"
            },
            {
                image: "/Assets/Τρία.png",
                a: "τρεῖς",
                b: "Τρία",
                c: "τέσσαρες",
                d: "τέσσαρα",
                answer: "Τρία",
                gloss: "Three (neuter)"
            },
            {
                image: "/Assets/Στῆθι.png",
                a: "Στῆτε",
                b: "Στῆθι",
                c: "Περιπάτει",
                d: "Περιπατεῖτε",
                answer: "Στῆθι",
                gloss: "Stop (Imperative - singular)"
            },
            {
                image: "/Assets/Περιπάτει.png",
                a: "Στῆθι",
                b: "Περιπάτει",
                c: "Περιπατεῖτε",
                d: "Στῆτε",
                answer: "Περιπάτει",
                gloss: "Walk (Imperative - singular)"
            },
            {
                image: "/Assets/Περιπατεῖτε.png",
                a: "Στῆτε",
                b: "Στῆθι",
                c: "Περιπάτει",
                d: "Περιπατεῖτε",
                answer: "Περιπατεῖτε",
                gloss: "Stop (Imperative - plural)"
            },
            {
                image: "/Assets/Στῆτε.png",
                a: "Στῆθι",
                b: "Περιπάτει",
                c: "Περιπατεῖτε",
                d: "Στῆτε",
                answer: "Στῆτε",
                gloss: "Walk (Imperative - plural)"
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

        if (Object.keys(vocab).length > 0) {

            listButton.classList.add('hide')
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

{/* <input>Search</input> */}
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

listButton.addEventListener('click', () => {
    listButton.classList.add('hide')
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


