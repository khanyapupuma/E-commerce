let products = JSON.parse(localStorage.getItem('products'))
             ? JSON.parse(localStorage.getItem('products'))
             : localStorage.setItem('products',
             JSON.stringify(
                [
                    {
                        id: 1,
                         productName: "Boruto:Two Blue Vortex",
                         category: "Adventure,Fantasy",
                          description: "With everyone's memories having been rewritten,Boruto finds himself hunted by his own Village.After escaping with Sasuke what awaits him now?...-Manga by Masaki Kishimoto",
                         amount: 220.00,
                         img_url: "https://khanyapupuma.github.io/all-images/all-images/Images/Boruto.jpg"
                       },
                       {
                        id: 2,
                        productName : "Jujutsu Kaisen",
                         category : "Adventure,Dark fantasy,Supernatural",
                          description  : "This story follows Yuji Itadori, a High school student with incredible physical abilities. Having consumed a powerful cursed object, as such he attracts malevolent entities known as cursed spirits. He joins Tokyo Metrapolitan Curse Technical College to train in order to be a Jujutsu Sorcerer.-Manga by Gege Akutami",
                        amount : 240.00,
                       img_url  : "https://khanyapupuma.github.io/all-images/all-images/Images/Jujutsu Kaisen.jpg"
                       },
                       {
                        id: 3,
                        productName : "Seraph of the End: Vampire Reign",
                        category : "Dark fantasy, Post-apocalyptic,Vampire",
                        description : "One day, a virus emerged and killed all infected humans over the age of 13.At that same time vampires emerged from darkness and enslaved Mankind. Enter Yuuichiro Hyakuya, a young boy who, along with the children of is orphanage are treated as livestock by the vampires...-Manga by Yamamoto Yamato",
                         amount : 225.00 ,
                       img_url  : "https://khanyapupuma.github.io/all-images/all-images/Images/Yuu.jpg"
                       },
                       {
                        id: 4,
                       productName  : "The Case Study Of Vanitas",
                        category : "Dark fantasy,Steampunk,Supernatural,Vampire",
                        description : "There once lived a vampire known as Vanitas, hated by his own kind for having been born under a full  Blue Moon where most are born on a red one. Afraid and alone he created the 'Book of Vanitas' a cursed grimoire that would one day take his vengeance on all vampires... that's how the story goes at least.-Manga by Jun Mochizuki",
                        amount : 285.00,
                        img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/Vanitas.jpg"
                       },
                       {
                        id: 5,
                        productName : "Attack On Titan",
                        category : "Action,Dark fantasy,Post-apocalyptic",
                       description  : "Teenage boy Eren and his foster sister witness in horror as a ”Super giant” destroys the walls of his city and it'’'s flooded by smaller  giants they watch in despair as one of the giants consumes his mother alive. Then and there he swears to destroy all giants and save the what'’'s left of humanity.-Manga by Isayama Hajime ",
                        amount : 340.00,
                        img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/Eren.jpg"
                       },
                       {
                        id: 6,
                         productName : "Tokyo Ghoul",
                         category : "Dark fantasy,Horror,Gothic,Action",
                        description  : "College student Ken Kaneki is asked out on a date by his crush however it ends tragic when he is attacked by a flesh-eating ghoul, he arrives at the hospital  where they transplant his deceased offender'’'s organs onto him.Awakening he is horrified as his body is starting to transform into that of a ghoul.Having become the hybrid of both species follow Kaneki as he tries to find his path as either human, ghoul or maybe both, stakes are high as his desire for human flesh increasing making him doubt his morality. <br><br> -Manga by Sui Ishida",
                         amount : 205.00,
                         img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/Kaneki.jpg"
                        },
      
    ]))

