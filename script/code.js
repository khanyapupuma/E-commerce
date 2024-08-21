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
                        {
                          id: 7,
                          productName : "Horimiya",
                          category : "Romance,Slice of Life,High school,Shonen",
                          description : "Two very different people- an academically smart schoolgirl and a quite loser schoolboy- meet and develop a friendship.So follow their journey into the complex and uncertain terrains of adolescence and High school life.",
                          amount : 214.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/horimiya.jpg"
                        },
                        {
                          id: 8,
                          productName : "Tokyo Revengers",
                          category : "Action,Crime,Violence,Thriller,Shonen",
                          description : "Hanagaki Takemichi lives an unsatisfactory life up until his death. Waking up 12 years in the past, he reckons with with the eventual fate of his friends and tries to prevent an unfortunate future. <br><br> -manga by Ken Wakul ",
                          amount : 490.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/Tokyo Revengers.jpg"
                        },{
                          id: 9,
                          productName : "Wind Breaker",
                          category : "Shonen",
                          description : "Haruka Sakura wants nothing to do with weaklings—he's only interested in the strongest of the strong. He's just started at Furin High School, a school of degenerates known only for their brawling strength—strength they use to protect their town from anyone who wishes it ill. <br><br> -Yongseok Jo",
                          amount : 306.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/Wind breaker.jpg"
                        },
                        {
                          id: 10,
                          productName : "The Devil Is a Part-timer",
                          category : "Comedy,Supernatural",
                          description : "Hilarity and fun ensues when Satan ends up in modern day Japan without any magic to return, and starts working part time in a fast food joint. Hilarity and fun ensues when Satan ends up in modern day Japan without any magic to return, and starts working part time in a fast food joint. <br><br> -Satoshi Wagahara",
                          amount : 200.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/the devil is a part-timer.jpg"
                        },
                        {
                          id: 11,
                          productName : "The Dangers In My Heart",
                          category : "Romance,Cost,Slice of Life",
                          description : "Kyotaro Ichikawa, a boy barely clinging to the bottom rung of his school's social ladder, secretly believes he's the tortured lead in some psychological thriller. He spends his days dreaming up ways to disrupt his classmates' peaceful lives and pining after Anna Yamada, the class idol. <br><br> -Norio Sakurai.",
                          amount : 269.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/The dangers in my heart.jpg"
                        },
                        {
                          id: 12,
                          productName : "Monster",
                          category : "Crime,Psychological Thriller,Mystery",
                          description : "The story revolves around Kenzo Tenma, a Japanese surgeon living in Düsseldorf, Germany whose life enters turmoil after he gets himself involved with Johan Liebert, one of his former patients, who is revealed to be a psychopathic serial killer. <br><br> -Naoki Urasawa.",
                          amount : 305.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/Monster.jpg"
                        },
                        {
                          id: 13,
                          productName : "Haikyuu",
                          category : "Shonen,Sport",
                          description : "Junior high school student, Shoyo Hinata, becomes obsessed with volleyball after catching a glimpse of Karasuno High School playing in the Nationals on TV. Of short stature himself, Hinata is inspired by a player the commentators nickname 'The Little Giant', Karasuno's short but talented wing spiker. <br><br> -Haruichi Furudate.",
                          amount : 175.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/haikyuu.jpg"
                        },
                        {
                          id: 14,
                          productName : "Kuroku's Basketball",
                          category : "Shonen,Sport",
                          description : "Kuroko no Basuke tells the story of a high school basketball team trying to make it to the top of Japan. The basketball team of Teikō Middle School became known as the 'Generation of Miracles' as they were unbeatable on their way to the top of Japan. <br><br> -Tadatoshi Fujimaki.",
                          amount : 239.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/Kuroko's basketball.jpg"
                        },
                        {
                          id: 15,
                          productName : "Tomodachi Game",
                          category : "	Psychological thriller",
                          description : " Yūichi Katagiri was taught the value of friendship when he was young, and it is thanks to his group of four friends that he is able to enjoy high school life today. When their class's school trip funds are stolen, the five are dragged into the mysterious Tomodachi Game as a result of someone's debt. <br><br>-Mikoto Yamaguchi Yuki Sato.",
                          amount : 220,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/Komodachi game.jpg"
                        },
                        {
                          id: 16,
                          productName : "Classroom of the Elite",
                          category : "	Psychological thriller",
                          description : "Students of the prestigious Tokyo Metropolitan Advanced Nurturing High School are given remarkable freedom—if they can win, barter, or save enough points to work their way up the ranks! The school's special exam is still taking place on an uninhabited island, and Class D is making the most of their limited resources. <br><br>-Syougo Kinugasa",
                          amount : 365.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/classroom of the elite.jpg"
                        },
                        {
                          id: 17,
                          productName : "Death Note",
                          category : "Crime,Psychological thriller",
                          description : "The story follows Light Yagami, a genius high school student who discovers a mysterious notebook: the Death Note, which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. <br><br>-Tsugumi Ohba",
                          amount : 420.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/death note.jpg"
                        },
                        {
                          id: 18,
                          productName : "Death Parade",
                          category : "Psychological thriller",
                          description : "The series revolves around Decim, the bartender and arbiter of the Quindecim, and his assistant the black-haired woman. If two people die at the same time, they are sent to various bars to play a game, with their lives on the line. Arbiters receive their 'customers' with varying parts of the customers' memories erased. <br><br>-Yuzuru Tachikawa ",
                          amount : 279.00,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/death-parade.jpg"
                        },
                        {
                          id: 19,
                          productName : "Gintama",
                          category : "Comedy,Parody",
                          description : ". The story is set in an alternate-history late-Edo period, where humanity is attacked by aliens called 'Amanto' (天人, 'Sky People'). Edo Japan's samurai fight to defend Earth, but the shogun cowardly surrenders when he realizes the aliens' power. <br><br>-Hideaki Sorachi",
                          amount : 106.00 ,
                          img_url : "https://khanyapupuma.github.io/all-images/all-images/Images/gintama.jpg"
                        }
      
    ]))

