// Global navigation functions - defined first to ensure they're available
function showLanding() {
	document.getElementById('landingPage').style.display = 'flex';
	document.getElementById('mainApp').style.display = 'none';
}

function showMainApp() {
	document.getElementById('landingPage').style.display = 'none';
	document.getElementById('mainApp').style.display = 'block';
	renderAllHymns();
}

function showCategories() {
	showMainApp();
	// Could add additional category overview here
}
// Ensure globals and alias common casing mistakes
if (typeof window !== 'undefined') {
	window.showLanding = showLanding;
	window.showMainApp = showMainApp;
	window.showCategories = showCategories;
	window.showcategories = showCategories; // alias for lowercase usage
	window.switchTab = switchTab;
	window.toggleFavorite = toggleFavorite;
	window.changeFontSize = changeFontSize;
	window.goBack = goBack;
	window.showHymn = showHymn;
}

// Enhanced hymn data with categories
const hymns = [
	{
		id: 1,
		title: "GREAT SHEPHERD OF THY PEOPLE",
		author: "Eleanor Farjeon",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "1 Great Shepherd of thy people hear,\nthy presence now display;\n As thou hast given a place for prayer, to pray\nSo give us hearts t pray."
			},
			{
				label: "Verse 2",
				text: "Show us some token of thy love\nOur fainting hope to raise,\nAnd pour thy blessing from above\nThat we may render praise."
			},
			{
				label: "Verse 3",
				text: "Within these walls let holy peace\n And love and concord dwell;\nHere give the troubled conscience ease\nThe wounded spirit heal."
			},
			{
				label: "Verse 4",
				text: "The hearing ear, the seeing eye;\nThe contrite hearts bestow;\nAnd shine upon us from on high,.\nThat in grace we may grow."
			},
			{
				label: "Verse 5",
				text: "May we in faith receive thy word,\nIn faith address our prayers;\nAnd in the presence of our lord \nUnburden all our cares.\nAMEN"
			}
		]
	},

	{
		id: 2,
		title: "AWAKE MY SOUL AND WITH THE SUN",
		author: "John Newton",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "Awake, my soul, and with the sun\nThy dai­ly stage of du­ty run;\nShake off dull sloth, and joy­ful rise,\nTo pay thy morn­ing sac­ri­fice."
			},
			{
				label: "Verse 2",
				text: "Thy pre­cious time mis­spent re­deem,\nEach pre­sent day thy last es­teem,\nImprove thy ta­lent with due care;\nFor the great day thy­self pre­pare.."
			},
			{
				label: "Verse 3",
				text: "'Let all thy converse be sincere,\nThy conscience as the nontide clear;\nThink how all seing God thy ways\nAnd all the secret thoughts surveys"
			},
			{
				label: "Verse 4",
				text: "By influence of the light Devine\nLet the own light to others shine;\nReflect all heavens propitius rays,\nIn ardent love and cheerful praise."
			},
			{
				label: "Verse 5",
				text: "Wake and lift up thyself my heart.\nAnd with the angel hear thy part;\nWho all night long unwearied sing,\n High praise to the enternal King."
			},
			{
				label: "Verse 6",
				text: "I wake, I wake ye heav*nly choir .\nMay your devotion me inspire;\nThat I like you,my age may spend ,\n Like you may on my God attend.\nAMEN."
			}
		]
	
	},
	{
		id: 3,
		title: "FORTH IN THY NAME O LORD I GO",
		author: "John Hatton",
		category: "morning ",
		verses: [
			{
				label: "Verse 1",
				text: "Forth in thy name, O Lord, I go \nMy daily labor to pursue;\nThee, only thee, resolved to know\nIn all I think or speak or do."
			},
			{
				label: "Verse 2",
				text: "The task thy wisdom hath assigned \nO let me cheerfully fulfill,\n In all my works thy presence find\nAnd prove thy ACCEPTABLE will."
			},
			{
				label: "Verse 3",
				text: "Preserve me from my calling's snare \nAnd hide my simple heart above,\nAbove the thorns of chocking cares\nThe giled baits of wordly love."
			},
			{
				label: "Verse 4",
				text: "Thee may I set at my right hand,\nWhose eyes mine in-most substance see\nAnd labor on at thy command,\nAnd offer all my works to thee."
			},
			{
				label: "Verse 5",
				text: "Dive me to bear thy easy yoke,\nAnd every moment watch and pray \nAnd still to think eternal look,\nAnd hasten to thy glorious day."
			},
			{
				label: "Verse 6",
				text: " For thee delightfully employ\nWhate'er thy bounteous grace hath given;\nand run my course with even joy,\nAm closely walk with thee to heaven.\nAMEN"
			}
		]
	},
	{
		id: 4,
		title: "COME TO THE LORD WHEN I WAKE",
		author: "Traditional",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "Come to me, Lord, when first I wake,\nAs the faint lights of morning break;\nBid purest thoughts within me rise,\nLike crystal dew-drops to the skies."
			},
			{
				label: "Verse 2",
				text: "Come to me in the sultry noon,\nOr earth's low communings will soon\nOf Thy dear face eclipse the light,\nAnd change my fairest day to night."
			},
			{
				label: "Verse 3",
				text: "Come to me in the evening shade,\nAnd, if my heart from Thee hath-strayed,\nOh bring it back, and from afar\nSmile on me like Thine evening star."
			},
			{
				label: "Verse 4",
				text: "Come to me in the midnight hour,\nWhen sleep withholds its balmy power;\nLet my lone spirit find her rest,\nLike John, upon my Saviour's breast.."
			},
			{
				label: "Verse 5",
				text: "Come to me through life’s varied way,\nAnd when its pulses cease to play,\nThen, Saviour, bid me come to Thee,\nThat where Thou art, Thy child may be.\nAMEN"
			},
		]
	
	},
	{
		id: 5,
		title: "COME TO THE MORNING PRAYER",
		author: "James Montgomery (1771–1854),",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "Come to the Morning Prayer,\nCome let us kneel and pray;\nPrayer is the Christian pilgrim's staff\nTo walk with God all day."
			},
			{
				label: "Verse 2",
				text: "At noon, beneath the Rock\nOf Ages, rest and pray;\nSweet is that shadow from the heat,\nWhen the sun smites by day."
			},
			{
				label: "Verse 3",
				text: "At eve, shut to the door,\nRound the home-altar pray,\nAnd finding there “the House of God,\nAt “heaven’s gate” close the day."
     		},
		 {
			     label: "Verse 4",
			    text: "When midnight seals our eyes,\nLet each in spirit say,\n sleep, but my heart waketh, Lord,\nWith Thee to watch and pray.AMEN"
			},
			
		]
	},
	{
		id: 6,
		title: "HOLY FATHER HEAR ME",
		author: "Fanny Crosby",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "Holy Father, hear me;Thou art my defender;Be Thou ever near me,Loving, true, and tender. Jesus, blessed Master,Lord of Life and glory,Bid the hours fly faster,Till I kneel before Thee."
			},
			{
				label: "Verse 2",
				text:"Jesus, blessed Master,Lord of Life and glory,Bid the hours fly faster,Till I kneel before Thee"
			},
			{
					label: "Verse 3",
					text: "Comforter be dignest,Who abiding in meAll my need divinest,Move me, draw me, win me."
			},
			{
						label: "Verse 4",
						text: "Holy, Holy, Holy,Come and leave me never,Thine abode most lowly,Only Thine for ever. Amen.."
					},
			
				]
			},
	{
		id: 7,
		title: "GLORY TO THE MY GOD THIS NIGHT",
		author: "Charles Wesley",
		category: "morning",
		verses: [
		{
			label: "Verse 1",
				text:"Glory to Thee, my God, this night,For all the blessings of the light;Keep me, O keep me, King of kings,Beneath Thine own almighty wings."
		},
				{
					label: "Verse 2",
					text:"Forgive me, Lord, for Thy dear Son,The ill that I this day have done;That with the world, myself, and Thee,I, ere I sleep, at peace may be."
			   	},
					{
						label: "Verse 3",
						text:"O may my soul on Thee repose,d with sweet sleep mine eyelids close;Sleep that may me more vigorous makeTo serve my God when I awake."
			},
		]
	},
	{
		id: 8,
		title: "ABIDE WITH ME; FAST FALLS THE EVENTIDE",
		author: "Henry F. Lyte",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide;\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me."
			},
			{
				label: "Verse 2",
				text: "Swift to its close ebbs out life's little day;\nEarth's joys grow dim, its glories pass away;\nChange and decay in all around I see;\nO Thou who changest not, abide with me."
			},
			{
				label: "Verse 3",
				text: "I need Thy presence every passing hour;\nWhat but Thy grace can foil the tempter's power?\nWho, like Thyself, my guide and stay can be?\nThrough cloud and sunshine, O abide with me."
			},
			{
				label: "Verse 4",
				text: "I fear no foe, with Thee at hand to bless;\nIlls have no weight, and tears no bitterness;\nWhere is death's sting? where, grave, thy victory?\nI triumph still, if Thou abide with me."
			},
			{
				label: "Verse 5",
				text: "Hold Thou Thy cross before my closing eyes;\nShine through the gloom, and point me to the skies;\nHeaven's morning breaks, and earth's vain shadows flee;\nIn life, in death, O Lord, abide with me."
			}
		]
	},
	{
		id: 9,
		title: "AT EVEN, ERE THE SUN WAS SET",
		author: "Henry Twells",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "At even, ere the sun was set,\nThe sick, O Lord, around Thee lay;\nO in what divers pains they met!\nO with what joy they went away!"
			},
			{
				label: "Verse 2",
				text: "Once more 'tis eventide, and we,\nOppress'd with various ills, draw near;\nWhat if Thy form we cannot see?\nWe know and feel that Thou art here."
			},
			{
				label: "Verse 3",
				text: "O Saviour Christ, our woes dispel;\nFor some are sick, and some are sad,\nAnd some have never loved Thee well,\nAnd some have lost the love they had."
			},
			{
				label: "Verse 4",
				text: "And none, O Lord, have perfect rest,\nFor none are wholly free from sin;\nAnd they who fain would serve Thee best\nAre conscious most of wrong within."
			},
			{
				label: "Verse 5",
				text: "O Saviour Christ, Thou too art man;\nThou hast been troubled, tempted, tried;\nThy kind but searching glance can scan\nThe very wounds that shame would hide;\nThy touch has still its ancient pow'r;\nNo word from Thee can fruitless fall:\nHear in this solemn evening hour,\nAnd in Thy mercy heal us all.\nAmen."
			}
		]
	},
	{
		id: 10,
		title: "FATHER, BREATHE AN EVENING BLESSING",
		author: "James Edmeston",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "Saviour, breathe an evening blessing\nEre repose our spirits seal;\nSin and want we come confessing;\nThou canst save, and Thou canst heal."
			},
			{
				label: "Verse 2",
				text: "Though destruction walk around us,\nThough the arrows past us fly,\nAngel-guards from Thee surround us;\nWe are safe if Thou art nigh."
			},
			{
				label: "Verse 3",
				text: "Though the night be dark and dreary,\nDarkness cannot hide from Thee;\nThou art He, who, never weary,\nWatchest where Thy people be."
			}
		]
	},
	{
		id: 11,
		title: "O SAVIOUR, BLESS US ERE WE GO",
		author: "Frederick W. Faber",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "O Saviour, bless us ere we go;\nThy Word into our minds instill;\nAnd make our lukewarm hearts to glow\nWith lowly love and fervent will."
			},
			{
				label: "Refrain",
				text: "Through life's long day and death's dark night,\nO gentle Jesus, be our Light."
			},
			{
				label: "Verse 2",
				text: "The day is gone, its hours have run;\nAnd Thou hast taken count of all,\nThe scanty triumphs grace hath won,\nThe broken vow, the frequent fall.\n" 
			},
			{
				label: "Verse 3",
				text: "Do more than pardon: give us joy,\nSweet fear and sober liberty,\nAnd loving hearts without alloy,\nThat only long to be like Thee."
			},
			{
				label: "Verse 4",
				text: "Our tasks are sweet, for Thou hast toil'd;\nAnd care is light, for Thou hast cared;\nAh, never let our work be soil'd\nWith self, or by deceit ensnared."
			},
			{
				label: "Verse 5",
				text: "For all we love, the poor, the sad,\nThe sinful, unto Thee we call;\nO let Thy mercy make us glad;\nThou art our Jesus and our All.\nAmen."
			}
		]
	},
	{
		id: 12,
		title: "THE DAY IS PAST AND OVER",
		author: "St. Anatolius, tr. J. M. Neale",
		category: "evening",
		verses: [
			{
				label: "Verse 1",
				text: "The day is past and over;\nAll thanks, O Lord, to Thee;\nI pray Thee that offenseless\nThe hours of dark may be.\nO Jesus, keep me in Thy sight,\nAnd save me through the coming night."
			},
			{
				label: "Verse 2",
				text: "The joys of day are over;\nI lift my heart to Thee,\nAnd ask Thee that offenseless\nThe hours of dark may be.\nO Jesus, keep me in Thy sight,\nAnd guard me through the coming night."
			},
			{
				label: "Verse 3",
				text: "The toils of day are over:\nI raise the hymn to Thee,\nAnd ask that free from peril\nThe hours of dark may be.\nO Jesus, keep me in Thy sight,\nAnd guard me through the coming night."
			},
			{
				label: "Verse 4",
				text: "Be Thou my soul's preserver,\nO God, for Thou dost know\nHow many are the perils\nThrough which I have to go.\nLover of men, O hear my call,\nAnd guard and save me from them all.\nAmen."
			}
		]
	},
	{
		id: 13,
		title: "WE ARE NEVER, NEVER WEARY OF THE GRAND OLD SONG",
		author: "Anonymous (Gospel Hymn)",
		category: "praise",
		verses: [
			{
				label: "Verse 1",
				text: "We are never, never weary of the grand old song,\nGlory to God, hallelujah!\nWe can sing it loud as ever, with our faith more strong,\nGlory to God, hallelujah!"
			},
			{
				label: "Chorus",
				text: "O the children of the Lord have a right to shout and sing,\nFor the way is growing bright, and our souls are on the wing;\nWe are going by and by to the palace of the King;\nGlory to God, hallelujah!"
			},
			{
				label: "Verse 2",
				text: "We are lost amid the rapture of redeeming love,\nGlory to God, hallelujah!\nWe are rising on its pinions to the hills above,\nGlory to God, hallelujah!"
			},
			{
				label: "Verse 3",
				text: "We are going to a palace that is built of gold,\nGlory to God, hallelujah!\nWhere the King in all His splendour we shall soon behold,\nGlory to God, hallelujah!"
			},
			{
				label: "Verse 4",
				text: "There we'll shout redeeming mercy in a glad new song,\nGlory to God, hallelujah!\nThere we'll sing the praise of Jesus with the blood-washed throng,\nGlory to God, hallelujah!"
			}
		]
	},
	{
		id: 14,
		title: "A DAY OF GLADNESS",
		author: "Unknown",
		category: "praise",
		verses: [
			{
				label: "Verse 1",
				text: "A day of gladness dawns at last,\nOur hearts to God are raising;\nFor all His mercies, rich and vast,\nWe render songs of praising."
			},
			{
				label: "Chorus",
				text: "Praise Him, praise Him, praise Him,\nPraise our God so dear;\nPraise Him, praise Him, praise Him,\nLet all the world hear."
			},
			{
				label: "Verse 2",
				text: "This is the Lord’s appointed day,\nThe day of sweet thanksgiving;\nWe’ll walk with Him the narrow way,\nThe way of holy living."
			}
		]
	},
	{
		id: 15,
		title: "JESUS, WE LOVE TO MEET",
		author: "Jane E. Leeson",
		category: "morning",
		verses: [
			{
				label: "Verse 1",
				text: "Jesus, we love to meet\nOn this, Thy holy day;\nWe worship round Thy seat,\nOn this, Thy holy day.\nThou gavest this day of rest,\nFrom toil and care free;\nWe bless Thy name, O Lord,\nFor giving it to me."
			},
			{
				label: "Verse 2",
				text: "We meet Thy house within,\nOn this, Thy holy day;\nTo cleanse our hearts from sin,\nOn this, Thy holy day.\nWe join to sing Thy praise,\nOn this Thy holy day;\nAnd to our God we’ll raise\nThe songs we love to say."
			}
		]
	},
	{
		id: 16,
		title: "THIS IS THE DAY THE LORD HAS MADE",
		author: "Isaac Watts",
		category: "praise",
		verses: [
			{
				label: "Verse 1",
				text: "This is the day the Lord has made;\nHe calls the hours His own;\nLet heav'n rejoice, let earth be glad,\nAnd praise surround the throne."
			},
			{
				label: "Verse 2",
				text: "Today He rose and left the dead;\nAnd Satan's empire fell;\nToday the saints His triumphs spread,\nAnd all His wonders tell."
			},
			{
				label: "Verse 3",
				text: "Hosanna to the anointed King,\nTo David’s holy Son;\nHelp us, O Lord; descend and bring\nSalvation from Thy throne."
			},
			{
				label: "Verse 4",
				text: "Blessed is He that comes in peace\nWhose Gospel we proclaim;\nLet heav’n and earth with loud applause\nResound the Saviour’s name."
			}
		]
	},
	{
		id: 17,
		title: "THIS IS THE DAY OF LIGHT",
		author: "John Ellerton",
		category: "praise",
		verses: [
			{
				label: "Verse 1",
				text: "This is the day of light:\nLet there be light today;\nO Dayspring, rise upon our night,\nAnd chase its gloom away."
			},
			{
				label: "Verse 2",
				text: "This is the day of rest:\nOur failing strength renew;\nOn weary brain and troubled breast\nShed Thou Thy freshening dew."
			},
			{
				label: "Verse 3",
				text: "This is the day of peace:\nThy peace our spirits fill;\nBid Thou the blasts of discord cease,\nThe waves of strife be still."
			},
			{
				label: "Verse 4",
				text: "This is the day of prayer:\nLet earth to heav’n draw near;\nLift up our hearts to seek Thee there,\nCome down to meet us here."
			}
		]
	},
	{
		id: 18,
		title: "HALLOWED DAY AND HOLY",
		author: "Unknown",
		category: "praise",
		verses: [
			{
				label: "Verse 1",
				text: "Hallowed day and holy,\nDay of sweet repose;\nDay that speaks of heaven,\nDay that calms our woes."
			},
			{
				label: "Verse 2",
				text: "Day of rest and gladness,\nDay of joy divine;\nO how sweet the memory\nThat this day is Thine."
			}
		]
	},
	{
		id: 19,
		title: "PRAISE HIM! PRAISE HIM! JESUS, OUR BLESSED REDEEMER",
		author: "Fanny J. Crosby",
		category: "praise",
		verses: [
			{
				label: "Verse 1",
				text: "Praise Him! Praise Him! Jesus, our blessed Redeemer;\nSing, O earth, His wonderful love proclaim!\nHail Him! Hail Him! highest archangels in glory;\nStrength and honor give to His holy name.\nLike a shepherd Jesus will guard His children,\nIn His arms He carries them all day long."
			},
			{
				label: "Chorus",
				text: "Praise Him! Praise Him!\nTell of His excellent greatness.\nPraise Him! Praise Him!\nEver in joyful song."
			},
			{
				label: "Verse 2",
				text: "Praise Him! Praise Him! Jesus, our blessed Redeemer;\nFor our sins He suffered, and bled, and died.\nHe our Rock, our hope of eternal salvation,\nHail Him! Hail Him! Jesus the Crucified.\nSound His praises! Jesus who bore our sorrows,\nLove unbounded, wonderful, deep and strong."
			},
			{
				label: "Verse 3",
				text: "Praise Him! Praise Him! Jesus, our blessed Redeemer;\nHeav’nly portals loud with hosannas ring!\nJesus, Savior, reigneth forever and ever;\nCrown Him! Crown Him! Prophet and Priest and King!\nChrist is coming, over the world victorious,\nPow’r and glory unto the Lord belong."
			}
		]
	},
	{
		id: 20,
		title: "I WILL PRAISE THE LORD FOR HIS LOVE TO ME",
		author: "William J. Kirkpatrick",
		category: "praise",
		verses: [
		  {
			label: "Verse 1",
			text: "I will praise the Lord for His love to me;\nI am washed in the blood of my Redeemer;\nIn the fount that flows at the Cross so free;\nI am washed in the blood of my Redeemer." 
		  },
		  {
			label: "Chorus",
			text: "Glory, glory, glory to the Lamb;\nI am saved from sin, and He makes me what I am;\nOh, glory, glory, glory to the Lamb;\nI am washed in the blood of my Redeemer."
		  },
		  {
			label: "Verse 2",
			text: "I am saved by grace and to Him brought near;\nI am washed in the blood of my Redeemer;\nI would sing so loud that the world might hear;\nI am washed in the blood of my Redeemer."
		  },
		  {
			label: "Verse 3",
			text: "What a constant peace in my heart I feel;\nI am washed in the blood of my Redeemer;\nThere's a holy joy I can never reveal;\nI am washed in the blood of my Redeemer."
		  },
		  {
			label: "Verse 4",
			text: "I will lift my voice while on earth I stay;\nI am washed in the blood of my Redeemer;\nThen my soul shall sing in the realms of day;\nI am washed in the blood of my Redeemer."
		  }
		]
	  },
	  {
		id: 21,
		title: "PRAISE THE KING OF GLORY, HE IS GOD ALONE",
		author: "Eliza E. Hewitt",  
		category: "praise",
		verses: [
		  {
			label: "Verse 1",
			text: "Praise the King of Glory, He is God alone;\nPraise Him for the wonders He to us hath shown;\nFor His promised presence, all the pilgrim way;\nFor the flaming pillar, and the cloud by day."
		  },
		  {
			label: "Chorus",
			text: "Praise Him, shining angels;\nStrike your harps of gold;\nAll His hosts adore Him,\nWho His face behold;\nThrough His great dominion,\nWhile the ages roll,\nAll His works shall praise Him (3×)\nBless the Lord, my soul!"
		  }
		]
	  },
	  // Below are placeholders or partial because I couldn't find verified CAC texts
	  {
		id: 22,
		title: "HOW SWEET THE NAME OF JESUS SOUNDS",
		author: "John Newton",
		category: "worship",
		verses: [
		  {
			label: "Verse 1",
			text: "How sweet the Name of Jesus sounds\nIn a believer's ear;\nIt soothes his sorrows, heals his wounds,\nAnd drives away his fear."
		  }
		  // more verses needed
		]
	  },
	  {
		id: 23,
		title: "FOR THE MERCY ENDURETH FOREVER",
		author: "Unknown",
		category: "thanksgiving",
		verses: [
		  // Need full text
		]
	  },
	  {
		id: 24,
		title: "FOR MERCIES COUNTLESS AS THE SAND",
		author: "Isaac Watts",
		category: "thanksgiving",
		verses: [
		  // Need full text
		]
	  },
	  {
		id: 25,
		title: "FOR A THOUSAND TONGUES TO SING",
		author: "Charles Wesley",
		category: "praise",
		verses: [
		  // Need full text
		]
	  },
	  {
		id: 26,
		title: "O WORSHIP THE KING",
		author: "Robert Grant",
		category: "worship",
		verses: [
		  // Need full text
		]
	  },
	  {
		id: 27,
		title: "ALL HAIL THE POWER OF JESUS' NAME",
		author: "Edward Perronet",
		category: "praise",
		verses: [
		  // Need full text
		]
	  },
	  {
		id: 28,
		title: "PRAISE MY SOUL, THE KING OF HEAVEN",
		author: "Henry Francis Lyte",
		category: "praise",
		verses: [
		  // Need full text
		]
	  },
	  {
		id: 29,
		title: "HEAD OF THE CHURCH TRIUMPHANT",
		author: "Unknown",
		category: "praise",
		verses: [
		  // Need full text
		]
	  },
	  {
		id: 30,
		title: "TO THEE, O COMFORTER, DIVINE",
		author: "Charles Wesley",
		category: "worship",
		verses: [
		  // Need full text
		]
	  },
	  {
		id: 31,
		title: "HOLY HOLY HOLY GOD ALMIGHTY",
		author: "Reginald Heber",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy! merciful and mighty!\nGod in three Persons, blessed Trinity!"
		  },
		  {
			label: "Verse 2",
			text: "Holy, holy, holy! all the saints adore Thee,\nCasting down their golden crowns around the glassy sea;\nCherubim and seraphim falling down before Thee,\nWhich wert, and art, and evermore shalt be."
		  },
		  {
			label: "Verse 3",
			text: "Holy, holy, holy! though the darkness hide Thee,\nThough the eye of sinful man Thy glory may not see;\nOnly Thou art holy; there is none beside Thee,\nPerfect in power, in love, and purity."
		  },
		  {
			label: "Verse 4",
			text: "Holy, holy, holy! Lord God Almighty!\nAll Thy works shall praise Thy name in earth and sky and sea;\nHoly, holy, holy! merciful and mighty!\nGod in three Persons, blessed Trinity!"
		  }
		]
	  },
	  {
		id: 32,
		title: "FATHER OF HEAVEN ABOVE",
		author: "Edward Henry Bickersteth",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Father of heaven above,\nDwelling in light and love,\nAncient of days,\nLight unapproachable,\nLove inexpressible,\nThee, the invisible,\nLaud we and praise."
		  },
		  {
			label: "Verse 2",
			text: "Christ the eternal Word,\nChrist the incarnate Lord,\nSaviour of all,\nHigh throned above all height,\nGod of God, Light of Light,\nIncreate, infinite,\nOn Thee we call."
		  },
		  {
			label: "Verse 3",
			text: "O God, the Holy Ghost,\nWhose fires of Pentecost\nBurn evermore,\nIn this far wilderness\nLeave us not comfortless;\nThee we love, Thee we bless,\nThee we adore."
		  },
		  {
			label: "Verse 4",
			text: "Strike your harps, heavenly powers;\nWith your glad chants shall ours\nTrembling ascend;\nAll praise, O God, to Thee,\nThree in One, One in Three,\nPraise everlastingly,\nWorld without end."
		  }
		]
	  },
	  {
		id: 33,
		title: "WE GIVE IMMORTAL PRAISE",
		author: "Isaac Watts",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "We give immortal praise\nTo God the Father’s love,\nFor all our comforts here,\nAnd better hopes above:\nHe sent His own eternal Son\nTo die for sins that man had done."
		  },
		  {
			label: "Verse 2",
			text: "To God the Son belongs\nImmortal glory too,\nWho bought us with His blood\nFrom everlasting woe:\nAnd now He lives, and now He reigns,\nAnd sees the fruit of all His pains."
		  },
		  {
			label: "Verse 3",
			text: "To God the Spirit’s name\nImmortal worship give,\nWhose new-creating power\nMakes the dead sinner live:\nHis work completes the great design,\nAnd fills the soul with joy divine."
		  },
		  {
			label: "Verse 4",
			text: "Almighty God, to Thee\nBe endless honors done,\nThe undivided Three,\nAnd the mysterious One:\nWhere reason fails, with all her powers,\nThere faith prevails, and love adores."
		  }
		]
	  },
	  {
		id: 34,
		title: "TO GOD BE THE GLORY GREAT THINGS HE HATH DONE",
		author: "Fanny J. Crosby",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "To God be the glory, great things He hath done,\nSo loved He the world that He gave us His Son,\nWho yielded His life an atonement for sin,\nAnd opened the life gate that all may go in."
		  },
		  {
			label: "Chorus",
			text: "Praise the Lord, praise the Lord,\nLet the earth hear His voice!\nPraise the Lord, praise the Lord,\nLet the people rejoice!\nO come to the Father through Jesus the Son,\nAnd give Him the glory, great things He hath done."
		  },
		  {
			label: "Verse 2",
			text: "O perfect redemption, the purchase of blood,\nTo every believer the promise of God;\nThe vilest offender who truly believes,\nThat moment from Jesus a pardon receives."
		  },
		  {
			label: "Verse 3",
			text: "Great things He hath taught us, great things He hath done,\nAnd great our rejoicing through Jesus the Son;\nBut purer, and higher, and greater will be\nOur wonder, our transport, when Jesus we see."
		  }
		]
	  },
	  {
		id: 35,
		title: "KING OF GLORY KING OF PEACE",
		author: "George Herbert",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "King of glory, King of peace,\nI will love Thee;\nAnd that love may never cease,\nI will move Thee."
		  },
		  {
			label: "Verse 2",
			text: "Thou hast granted my request,\nThou hast heard me;\nThou didst note my working breast,\nThou hast spared me."
		  },
		  {
			label: "Verse 3",
			text: "Wherefore with my utmost art\nI will sing Thee;\nAnd the cream of all my heart\nI will bring Thee."
		  },
		  {
			label: "Verse 4",
			text: "Though my sins against me cried,\nThou didst clear me;\nAnd alone, when they replied,\nThou didst hear me."
		  }
		]
	  },
	  {
		id: 36,
		title: "GREAT IS THY FAITHFULNESS",
		author: "Thomas Chisholm",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Great is Thy faithfulness, O God my Father,\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions, they fail not;\nAs Thou hast been, Thou forever wilt be."
		  },
		  {
			label: "Chorus",
			text: "Great is Thy faithfulness! Great is Thy faithfulness!\nMorning by morning new mercies I see;\nAll I have needed Thy hand hath provided—\nGreat is Thy faithfulness, Lord, unto me!"
		  },
		  {
			label: "Verse 2",
			text: "Summer and winter and springtime and harvest,\nSun, moon and stars in their courses above\nJoin with all nature in manifold witness\nTo Thy great faithfulness, mercy and love."
		  },
		  {
			label: "Verse 3",
			text: "Pardon for sin and a peace that endureth,\nThine own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine, with ten thousand beside!"
		  }
		]
	  },
	  {
		id: 37,
		title: "O LORD MY GOD WHEN I IN AWESOME WONDER",
		author: "Carl Boberg",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "O Lord my God, when I in awesome wonder\nConsider all the worlds Thy hands have made,\nI see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed."
		  },
		  {
			label: "Chorus",
			text: "Then sings my soul, my Savior God, to Thee:\nHow great Thou art! How great Thou art!\nThen sings my soul, my Savior God, to Thee:\nHow great Thou art! How great Thou art!"
		  },
		  {
			label: "Verse 2",
			text: "When through the woods and forest glades I wander\nAnd hear the birds sing sweetly in the trees,\nWhen I look down from lofty mountain grandeur\nAnd hear the brook and feel the gentle breeze."
		  }
		]
	  },
	  {
		id: 38,
		title: "LOVING SAVIOUR HEAR MY CRY",
		author: "Fanny J. Crosby",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Loving Saviour, hear my cry,\nHear my cry, hear my cry;\nTrembling to Thine arms I fly:\nO save me at the cross!"
		  },
		  {
			label: "Verse 2",
			text: "I have sinned, but Thou hast died,\nThou hast died, Thou hast died;\nIn Thy mercy let me hide:\nO save me at the cross!"
		  },
		  {
			label: "Verse 3",
			text: "Tho’ I perish I will pray,\nI will pray, I will pray;\nThou of life the Living Way:\nO save me at the cross!"
		  },
		  {
			label: "Verse 4",
			text: "Thou hast said Thy grace is free,\nGrace is free, grace is free;\nHave compassion, Lord, on me:\nO save me at the cross!"
		  },
		  {
			label: "Verse 5",
			text: "Wash me in Thy cleansing blood,\nCleansing blood, cleansing blood;\nPlunge me now beneath the flood:\nO save me at the cross!"
		  },
		  {
			label: "Verse 6",
			text: "Only faith will pardon bring,\nPardon bring, pardon bring;\nIn that faith to Thee I cling:\nO save me at the cross!"
		  },
		  {
			label: "Chorus",
			text: "Lord Jesus, receive me,\nNo more would I grieve Thee,\nNow, blessed Redeemer,\nO save me at the cross!"
		  }
		]
	  },
	  {
		id: 39,
		title: "I AM THINE OH LORD I HAVE HEARD THY VOICE",
		author: "Fanny J. Crosby",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "I am Thine, O Lord, I have heard Thy voice,\nAnd it told Thy love to me;\nBut I long to rise in the arms of faith,\nAnd be closer drawn to Thee."
		  },
		  {
			label: "Chorus",
			text: "Draw me nearer, nearer, blessed Lord,\nTo the cross where Thou hast died;\nDraw me nearer, nearer, nearer, blessed Lord,\nTo Thy precious, bleeding side."
		  },
		  {
			label: "Verse 2",
			text: "Consecrate me now to Thy service, Lord,\nBy the pow’r of grace divine;\nLet my soul look up with a steadfast hope,\nAnd my will be lost in Thine."
		  },
		  {
			label: "Verse 3",
			text: "Oh, the pure delight of a single hour\nThat before Thy throne I spend,\nWhen I kneel in prayer, and with Thee, my God,\nI commune as friend with friend!"
		  },
		  {
			label: "Verse 4",
			text: "There are depths of love that I cannot know\nTill I cross the narrow sea;\nThere are heights of joy that I may not reach\nTill I rest in peace with Thee."
		  }
		]
	  },
	  {
		id: 40,
		title: "YIELD NOT TO TEMPTATION, FOR YIELDING IS SIN",
		author: "Horatio R. Palmer",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Yield not to temptation, for yielding is sin;\nEach vict’ry will help you some other to win;\nFight manfully onward, dark passions subdue;\nLook ever to Jesus, He will carry you through."
		  },
		  {
			label: "Chorus",
			text: "Ask the Savior to help you,\nComfort, strengthen, and keep you;\nHe is willing to aid you,\nHe will carry you through."
		  },
		  {
			label: "Verse 2",
			text: "Shun evil companions, bad language disdain,\nGod’s name hold in reverence, nor take it in vain;\nBe thoughtful and earnest, kindhearted and true;\nLook ever to Jesus, He will carry you through."
		  },
		  {
			label: "Verse 3",
			text: "To him that o’ercometh God giveth a crown;\nThrough faith we will conquer, though often cast down;\nHe who is our Savior our strength will renew;\nLook ever to Jesus, He will carry you through."
		  }
		]
	  },
	  {
		id: 41,
		title: "REJOICE IN THE LORD IF GOD BE FOR US",
		author: "James McGranahan",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Rejoice in the Lord! O let His mercy cheer;\nHe sunders the bands that enthrall;\nRedeemed by His blood, why should we ever fear,\nSince Jesus is our all in all?"
		  },
		  {
			label: "Chorus",
			text: "If God be for us, if God be for us,\nIf God be for us, who can be against us?\nWho? Who? Who?\nWho can be against us, against us?"
		  },
		  {
			label: "Verse 2",
			text: "Be strong in the Lord! Rejoicing in His might,\nBe loyal and true day by day;\nWhen evils assail, be valiant for the right,\nAnd He will be our strength and stay."
		  },
		  {
			label: "Verse 3",
			text: "Confide in His Word—His promises so sure;\nIn Christ they are 'yea and amen';\nThough earth pass away, they ever shall endure,\n'Tis written o'er and o'er again."
		  },
		  {
			label: "Verse 4",
			text: "Abide in the Lord, secure in His control,\n'Tis life everlasting begun;\nTo pluck from His hand the weakest, trembling soul,\nIt never, never can be done!"
		  }
		]
	  },
	  {
		id: 42,
		title: "BLESSED ASSURANCE",
		author: "Fanny J. Crosby",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Blessed assurance, Jesus is mine!\nOh, what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of His Spirit, washed in His blood."
		  },
		  {
			label: "Chorus",
			text: "This is my story, this is my song,\nPraising my Savior all the day long;\nThis is my story, this is my song,\nPraising my Savior all the day long."
		  },
		  {
			label: "Verse 2",
			text: "Perfect submission, perfect delight,\nVisions of rapture now burst on my sight;\nAngels descending bring from above\nEchoes of mercy, whispers of love."
		  },
		  {
			label: "Verse 3",
			text: "Perfect submission, all is at rest,\nI in my Savior am happy and blest;\nWatching and waiting, looking above,\nFilled with His goodness, lost in His love."
		  }
		]
	  },
	  {
		id: 43,
		title: "CHRIST JESUS HATH THE POWER",
		author: "James M. Gray",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Christ Jesus hath the power,\nThe power to forgive,\nThe power to quicken whom He will,\nAnd make the sinner live."
		  },
		  {
			label: "Chorus",
			text: "Christ Jesus hath the power,\nThe power of God He wields!\nChrist Jesus hath the power,\nMy heart surrender yields!"
		  },
		  {
			label: "Verse 2",
			text: "Christ Jesus hath the power,\nThe power to renew,\nThe power to cleanse your heart from sin,\nAnd make you wholly true."
		  },
		  {
			label: "Verse 3",
			text: "Christ Jesus hath the power,\nThe power to console,\nThe power to carry all your care—\nOn Him your burdens roll."
		  },
		  {
			label: "Verse 4",
			text: "Christ Jesus hath the power,\nThe power to destroy,\nThe power to bruise your enemy\nWho would your soul annoy."
		  }
		]
	  },
	  {
		id: 44,
		title: "WILL YOUR ANCHOR HOLD IN THE STORM OF LIFE",
		author: "Priscilla J. Owens",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "Will your anchor hold in the storms of life,\nWhen the clouds unfold their wings of strife?\nWhen the strong tides lift, and the cables strain,\nWill your anchor drift, or firm remain?"
		  },
		  {
			label: "Chorus",
			text: "We have an anchor that keeps the soul\nSteadfast and sure while the billows roll;\nFastened to the Rock which cannot move,\nGrounded firm and deep in the Savior’s love."
		  },
		  {
			label: "Verse 2",
			text: "It is safely moored; 'twill the storm withstand,\nFor 'tis well-secured by the Savior's hand.\nThough the tempest rage and the wild winds blow,\nNot an angry wave shall our boat o'erflow."
		  },
		  {
			label: "Verse 3",
			text: "When our eyes behold through the gathering night\nThe city of gold, our harbor bright,\nWe shall anchor fast by the heavenly shore,\nWith the storms all past forevermore."
		  }
		]
	  },
	  {
		id: 45,
		title: "SIMPLY TRUSTING EVERYDAY",
		author: "Edgar P. Stites",
		category: "assurance and confidence",
		verses: [
		  {
			label: "Verse 1",
			text: "Simply trusting every day,\nTrusting through a stormy way;\nEven when my faith is small,\nTrusting Jesus, that is all."
		  },
		  {
			label: "Chorus",
			text: "Trusting as the moments fly,\nTrusting as the days go by;\nTrusting Him whate’er befall,\nTrusting Jesus, that is all."
		  },
		  {
			label: "Verse 2",
			text: "Brightly doth His Spirit shine\nInto this poor heart of mine;\nWhile He leads I cannot fall;\nTrusting Jesus, that is all."
		  },
		  {
			label: "Verse 3",
			text: "Singing if my way is clear,\nPraying if the path be drear;\nIf in danger for Him call;\nTrusting Jesus, that is all."
		  },
		  {
			label: "Verse 4",
			text: "Trusting Him while life shall last,\nTrusting Him till earth be past;\nTill within the jasper wall,\nTrusting Jesus, that is all."
		  }
		]
	  },
	  {
		id: 46,
		title: "MY FAITH HAS FOUND A RESTING PLACE",
		author: "Eliza Edmunds Hewitt",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "My faith has found a resting place,\nNot in device nor creed;\nI trust the ever-living One,\nHis wounds for me shall plead."
		  },
		  {
			label: "Chorus",
			text: "I need no other argument,\nI need no other plea,\nIt is enough that Jesus died,\nAnd that He died for me."
		  },
		  {
			label: "Verse 2",
			text: "Enough for me that Jesus saves,\nThis ends my fear and doubt;\nA sinful soul I come to Him,\nHe’ll never cast me out."
		  },
		  {
			label: "Verse 3",
			text: "My heart is leaning on the Word,\nThe written Word of God,\nSalvation by my Savior’s name,\nSalvation through His blood."
		  },
		  {
			label: "Verse 4",
			text: "My great Physician heals the sick,\nThe lost He came to save;\nFor me His precious blood He shed,\nFor me His life He gave."
		  }
		]
	  },
	  {
		id: 47,
		title: "WHEN PEACE LIKE A RIVER",
		author: "Horatio G. Spafford",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "When peace like a river attendeth my way,\nWhen sorrows like sea billows roll;\nWhatever my lot, Thou hast taught me to say,\nIt is well, it is well with my soul."
		  },
		  {
			label: "Chorus",
			text: "It is well with my soul,\nIt is well, it is well with my soul."
		  },
		  {
			label: "Verse 2",
			text: "Though Satan should buffet, though trials should come,\nLet this blest assurance control:\nThat Christ hath regarded my helpless estate,\nAnd hath shed His own blood for my soul."
		  },
		  {
			label: "Verse 3",
			text: "My sin—oh, the bliss of this glorious thought!—\nMy sin, not in part but the whole,\nIs nailed to the cross, and I bear it no more,\nPraise the Lord, praise the Lord, O my soul!"
		  },
		  {
			label: "Verse 4",
			text: "And Lord, haste the day when the faith shall be sight,\nThe clouds be rolled back as a scroll;\nThe trump shall resound, and the Lord shall descend,\nEven so, it is well with my soul."
		  }
		]
	  },
	  {
		id: 48,
		title: "I KNOW WHOM I HAVE BELIEVED",
		author: "Daniel W. Whittle",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "I know not why God’s wondrous grace\nTo me He hath made known,\nNor why, unworthy, Christ in love\nRedeemed me for His own."
		  },
		  {
			label: "Chorus",
			text: "But I know Whom I have believed,\nAnd am persuaded that He is able\nTo keep that which I’ve committed\nUnto Him against that day."
		  },
		  {
			label: "Verse 2",
			text: "I know not how this saving faith\nTo me He did impart,\nNor how believing in His Word\nWrought peace within my heart."
		  },
		  {
			label: "Verse 3",
			text: "I know not how the Spirit moves,\nConvincing men of sin,\nRevealing Jesus through the Word,\nCreating faith in Him."
		  },
		  {
			label: "Verse 4",
			text: "I know not what of good or ill\nMay be reserved for me,\nOf weary ways or golden days,\nBefore His face I see."
		  },
		  {
			label: "Verse 5",
			text: "I know not when my Lord may come,\nAt night or noonday fair,\nNor if I walk the vale with Him,\nOr meet Him in the air."
		  }
		]
	  },
	  {
		id: 49,
		title: "I DON'T KNOW ABOUT TOMORROW",
		author: "Ira F. Stanphill",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "I don't know about tomorrow,\nI just live from day to day;\nI don't borrow from its sunshine,\nFor its skies may turn to gray."
		  },
		  {
			label: "Chorus",
			text: "Many things about tomorrow\nI don't seem to understand;\nBut I know who holds tomorrow,\nAnd I know who holds my hand."
		  },
		  {
			label: "Verse 2",
			text: "Every step is getting brighter,\nAs the golden stairs I climb;\nEvery burden’s getting lighter,\nEvery cloud is silver lined."
		  },
		  {
			label: "Verse 3",
			text: "I don't know about tomorrow,\nIt may bring me poverty;\nBut the One who feeds the sparrow,\nIs the One who stands by me."
		  }
		]
	  },
	  {
		id: 50,
		title: "WHAT A WONDERFUL CHANGE IN MY LIFE",
		author: "Rufus H. McDaniel",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "What a wonderful change in my life has been wrought\nSince Jesus came into my heart!\nI have light in my soul for which long I had sought,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Chorus",
			text: "Since Jesus came into my heart,\nSince Jesus came into my heart,\nFloods of joy o’er my soul like the sea billows roll,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Verse 2",
			text: "I have ceased from my wand’ring and going astray,\nSince Jesus came into my heart!\nAnd my sins which were many are all washed away,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Verse 3",
			text: "I’m possessed of a hope that is steadfast and sure,\nSince Jesus came into my heart!\nAnd no dark clouds of doubt now my pathway obscure,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Verse 4",
			text: "There’s a light in the valley of death now for me,\nSince Jesus came into my heart!\nAnd the gates of the City beyond I can see,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Verse 5",
			text: "I shall go there to dwell in that city, I know,\nSince Jesus came into my heart!\nAnd I’m happy, so happy, as onward I go,\nSince Jesus came into my heart!"
		  }
		]
	  },
	  {
		id: 50,
		title: "WHAT A WONDERFUL CHANGE IN MY LIFE",
		author: "Rufus H. McDaniel",
		category: "morning",
		verses: [
		  {
			label: "Verse 1",
			text: "What a wonderful change in my life has been wrought\nSince Jesus came into my heart!\nI have light in my soul for which long I had sought,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Chorus",
			text: "Since Jesus came into my heart,\nSince Jesus came into my heart,\nFloods of joy o’er my soul like the sea billows roll,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Verse 2",
			text: "I have ceased from my wand’ring and going astray,\nSince Jesus came into my heart!\nAnd my sins which were many are all washed away,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Verse 3",
			text: "I’m possessed of a hope that is steadfast and sure,\nSince Jesus came into my heart!\nAnd no dark clouds of doubt now my pathway obscure,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Verse 4",
			text: "There’s a light in the valley of death now for me,\nSince Jesus came into my heart!\nAnd the gates of the City beyond I can see,\nSince Jesus came into my heart!"
		  },
		  {
			label: "Verse 5",
			text: "I shall go there to dwell in that city, I know,\nSince Jesus came into my heart!\nAnd I’m happy, so happy, as onward I go,\nSince Jesus came into my heart!"
		  }
		]
	  },
	  {
		id: 52,
		title: "THERE'S A PEACE IN MY HEART",
		author: "Anne S. Murphy",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "There's a peace in my heart that the world never gave,\nA peace it cannot take away;\nThough the trials of life may surround like a cloud,\nI've a peace that has come there to stay!"
		  },
		  {
			label: "Chorus",
			text: "Constantly abiding, Jesus is mine;\nConstantly abiding, rapture divine;\nHe never leaves me lonely, whispers oh so kind:\n'I will never leave thee,' Jesus is mine."
		  },
		  {
			label: "Verse 2",
			text: "All the world seemed to sing of a Savior and King,\nWhen peace sweetly came to my heart;\nTroubles all fled away and my night turned to day,\nBlessed Jesus, how glorious Thou art!"
		  },
		  {
			label: "Verse 3",
			text: "This treasure I have in a temple of clay,\nWhile here on His footstool I roam;\nBut He's coming to take me some glorious day,\nOver there to my heavenly home!"
		  }
		]
	  },
	  {
		id: 53,
		title: "I WAS ONCE A SINNER",
		author: "C. Austin Miles",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "I was once a sinner, but I came\nPardon to receive from my Lord;\nThis was freely given, and I found\nThat He always kept His word."
		  },
		  {
			label: "Chorus",
			text: "There's a new name written down in glory,\nAnd it's mine, oh yes, it's mine!\nAnd the white-robed angels sing the story,\n'A sinner has come home.'"
		  },
		  {
			label: "Verse 2",
			text: "I was humbly kneeling at the cross,\nFearing naught but God's angry frown,\nWhen the heavens opened and I saw\nThat my name was written down."
		  },
		  {
			label: "Verse 3",
			text: "In the Book 'tis written, 'Saved by grace.'\nOh, the joy that came to my soul!\nNow I am forgiven, and I know\nBy the blood I am made whole."
		  }
		]
	  },
	  {
		id: 54,
		title: "SHACKLED BY A HEAVY BURDEN",
		author: "William J. Gaither",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "Shackled by a heavy burden,\n'Neath a load of guilt and shame,\nThen the hand of Jesus touched me,\nAnd now I am no longer the same."
		  },
		  {
			label: "Chorus",
			text: "He touched me, oh He touched me,\nAnd oh the joy that floods my soul!\nSomething happened and now I know,\nHe touched me and made me whole."
		  },
		  {
			label: "Verse 2",
			text: "Since I met this blessed Savior,\nSince He cleansed and made me whole,\nI will never cease to praise Him,\nI'll shout it while eternity rolls."
		  }
		]
	  },
	  {
		id: 55,
		title: "WHAT CAN WASH AWAY MY SIN",
		author: "Robert Lowry",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "What can wash away my sin?\nNothing but the blood of Jesus;\nWhat can make me whole again?\nNothing but the blood of Jesus."
		  },
		  {
			label: "Chorus",
			text: "Oh! precious is the flow\nThat makes me white as snow;\nNo other fount I know,\nNothing but the blood of Jesus."
		  },
		  {
			label: "Verse 2",
			text: "For my pardon this I see:\nNothing but the blood of Jesus;\nFor my cleansing this my plea:\nNothing but the blood of Jesus."
		  },
		  {
			label: "Verse 3",
			text: "Nothing can for sin atone:\nNothing but the blood of Jesus;\nNaught of good that I have done:\nNothing but the blood of Jesus."
		  },
		  {
			label: "Verse 4",
			text: "This is all my hope and peace:\nNothing but the blood of Jesus;\nThis is all my righteousness:\nNothing but the blood of Jesus."
		  }
		]
	  },
	  {
		id: 56,
		title: "I KNOW THERE IS POWER IN JESUS' BLOOD",
		author: "Lida Shivers Leech",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "I know there is power in Jesus’ blood,\nFor He washed my sins away;\nAnd I know there is joy in serving Him,\nFor He turned my night to day."
		  },
		  {
			label: "Chorus",
			text: "There is power, power, wonder working power,\nThere is power, power, purifying power,\nThere is power in Jesus' blood!"
		  },
		  {
			label: "Verse 2",
			text: "I know there is power in Jesus’ blood,\nFrom my guilt He set me free;\nWhen I came unto Him with all my sins,\nAnd His blood availed for me."
		  },
		  {
			label: "Verse 3",
			text: "I know there is power in Jesus’ blood,\nFor all things have been made new;\nSince His own precious blood has been applied,\nAnd has cleansed me through and through."
		  }
		]
	},
	{
		id: 57,
		title: "SAVIOUR OF ALL TO THEE WE BOW",
		author: "Charles Wesley",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "Saviour of all, to Thee we bow,\nAnd own Thee faithful to Thy word;\nWe hear Thy voice, and open now\nOur hearts to entertain our Lord."
		  },
		  {
			label: "Verse 2",
			text: "Come in, come in, Thou heavenly guest,\nDelight in what Thyself hast given;\nOn Thy own gifts and graces feast,\nAnd make the contrite heart Thy heaven."
		  },
		  {
			label: "Verse 3",
			text: "Beneath Thy shadow let us sit;\nCall us Thy friends, and love, and bride;\nAnd bid us freely drink and eat\nThy dainties, and be satisfied."
		  },
		  {
			label: "Verse 4",
			text: "O let us on Thy fullness feed,\nAnd eat Thy flesh, and drink Thy blood;\nJesus, Thy blood is drink indeed,\nJesus, Thy flesh is angels’ food."
		  }
		]
	  },
	  {
		id: 58,
		title: "I LAY MY SINS ON JESUS",
		author: "Horatius Bonar",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "I lay my sins on Jesus,\nThe spotless Lamb of God;\nHe bears them all and frees me\nFrom the accursed load."
		  },
		  {
			label: "Verse 2",
			text: "I bring my guilt to Jesus,\nTo wash my crimson stains\nWhite in His blood most precious,\nTill not a spot remains."
		  },
		  {
			label: "Verse 3",
			text: "I lay my wants on Jesus,\nAll fullness dwells in Him;\nHe heals all my diseases,\nHe doth my soul redeem."
		  },
		  {
			label: "Verse 4",
			text: "I rest my soul on Jesus,\nThis weary soul of mine;\nHis right hand me embraces,\nI on His breast recline."
		  }
		]
	  },
	  {
		id: 59,
		title: "THERE IS A FOUNTAIN FILLED WITH BLOOD",
		author: "William Cowper",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "There is a fountain filled with blood\nDrawn from Immanuel's veins;\nAnd sinners plunged beneath that flood\nLose all their guilty stains."
		  },
		  {
			label: "Verse 2",
			text: "The dying thief rejoiced to see\nThat fountain in his day;\nAnd there may I, though vile as he,\nWash all my sins away."
		  },
		  {
			label: "Verse 3",
			text: "Dear dying Lamb, Thy precious blood\nShall never lose its power,\nTill all the ransomed Church of God\nBe saved to sin no more."
		  },
		  {
			label: "Verse 4",
			text: "E’er since by faith I saw the stream\nThy flowing wounds supply,\nRedeeming love has been my theme,\nAnd shall be till I die."
		  }
		]
	  },
	  {
		id: 60,
		title: "BY THE BLOOD ON THE CROSS OF CALVARY",
		author: "C. B. Widmeyer",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "On the cross of Calvary,\nJesus shed His blood for me;\nBore my guilt of sin away,\nPaid the debt I ne’er could pay."
		  },
		  {
			label: "Chorus",
			text: "On the cross of Calvary,\nThere the blood was spilled for me;\nJesus now doth make me whole,\nPraise the Lord for Calvary."
		  },
		  {
			label: "Verse 2",
			text: "See the Christ uplifted high,\nFor our sins was doomed to die;\n'It is done' we hear Him say,\nAnd the darkness filled the day."
		  },
		  {
			label: "Verse 3",
			text: "From the grave He did arise,\nAnd ascend the vaulted skies;\nNow for us He intercedes,\nBy His wounds and blood He pleads."
		  },
		  {
			label: "Verse 4",
			text: "Blood divine did make me free,\nBrought me peace and purity;\nOf the cross I now will sing,\nFor it did salvation bring."
		  }
		]
	  },
	  {
		id: 61,
		title: "CHRIST OUR REDEEMER DIED ON THE CROSS",
		author: "John G. Foote",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "Christ our Redeemer died on the cross,\nDied for the sinner, paid all his due;\nSprinkle your soul with the blood of the Lamb,\nAnd I will pass, will pass over you."
		  },
		  {
			label: "Chorus",
			text: "When I see the blood,\nWhen I see the blood,\nWhen I see the blood,\nI will pass, I will pass over you."
		  },
		  {
			label: "Verse 2",
			text: "Chiefest of sinners, Jesus will save;\nAs He has promised, so will He do;\nWash in the fountain opened for sin,\nAnd I will pass, will pass over you."
		  },
		  {
			label: "Verse 3",
			text: "Judgment is coming, all will be there,\nEach one receiving justly his due;\nHide in the saving, sin-cleansing blood,\nAnd I will pass, will pass over you."
		  },
		  {
			label: "Verse 4",
			text: "O great compassion! O boundless love!\nO lovingkindness, faithful and true!\nFind peace and shelter under the blood,\nAnd I will pass, will pass over you."
		  }
		]
	  },
	  {
		id: 62,
		title: "HAVE YOU BEEN TO JESUS FOR THE CLEANSING POWER",
		author: "Elisha A. Hoffman",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "Have you been to Jesus for the cleansing pow’r?\nAre you washed in the blood of the Lamb?\nAre you fully trusting in His grace this hour?\nAre you washed in the blood of the Lamb?"
		  },
		  {
			label: "Chorus",
			text: "Are you washed in the blood,\nIn the soul-cleansing blood of the Lamb?\nAre your garments spotless? Are they white as snow?\nAre you washed in the blood of the Lamb?"
		  },
		  {
			label: "Verse 2",
			text: "Are you walking daily by the Savior’s side?\nAre you washed in the blood of the Lamb?\nDo you rest each moment in the Crucified?\nAre you washed in the blood of the Lamb?"
		  },
		  {
			label: "Verse 3",
			text: "When the Bridegroom cometh will your robes be white?\nAre you washed in the blood of the Lamb?\nWill your soul be ready for the mansions bright,\nAnd be washed in the blood of the Lamb?"
		  },
		  {
			label: "Verse 4",
			text: "Lay aside the garments that are stained with sin,\nAnd be washed in the blood of the Lamb;\nThere’s a fountain flowing for the soul unclean,\nO be washed in the blood of the Lamb!"
		  }
		]
	  },
	  {
		id: 63,
		title: "POWER IN THE BLOOD",
		author: "Lewis E. Jones",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "Would you be free from the burden of sin?\nThere’s power in the blood, power in the blood;\nWould you o’er evil a victory win?\nThere’s wonderful power in the blood."
		  },
		  {
			label: "Chorus",
			text: "There is power, power, wonder-working power\nIn the blood of the Lamb;\nThere is power, power, wonder-working power\nIn the precious blood of the Lamb."
		  },
		  {
			label: "Verse 2",
			text: "Would you be free from your passion and pride?\nThere’s power in the blood, power in the blood;\nCome for a cleansing to Calvary’s tide;\nThere’s wonderful power in the blood."
		  },
		  {
			label: "Verse 3",
			text: "Would you be whiter, much whiter than snow?\nThere’s power in the blood, power in the blood;\nSin-stains are lost in its life-giving flow;\nThere’s wonderful power in the blood."
		  },
		  {
			label: "Verse 4",
			text: "Would you do service for Jesus your King?\nThere’s power in the blood, power in the blood;\nWould you live daily His praises to sing?\nThere’s wonderful power in the blood."
		  }
		]
	  },
	  {
		id: 64,
		title: "WASH ME OH LAMB OF GOD",
		author: "H. B. Beegle",
		category: "blood of Jesus",
		verses: [
		  {
			label: "Verse 1",
			text: "Wash me, O Lamb of God,\nWash me from sin;\nBy Thine atoning blood,\nOh, make me clean;\nPurge me from ev’ry stain,\nLet me Thine image gain,\nIn love and mercy reign\nO’er all within."
		  },
		  {
			label: "Verse 2",
			text: "Wash me, O Lamb of God,\nWash me from sin;\nI long to be like Thee,\nAll pure within;\nNow let the crimson tide,\nShed from Thy wounded side,\nBe to my heart applied,\nAnd make me clean."
		  },
		  {
			label: "Verse 3",
			text: "Wash me, O Lamb of God,\nWash me from sin;\nI will not, cannot rest\nTill pure within;\nAll human skill is vain,\nBut Thou canst cleanse each stain\nTill not a spot remain,\nMade wholly clean."
		  },
		  {
			label: "Verse 4",
			text: "Wash me, O Lamb of God,\nWash me from sin;\nBy faith Thy cleansing blood\nNow makes me clean;\nSo near Thou art to me,\nSo sweet my rest in Thee,\nOh, blessed purity!\nSaved, saved from sin."
		  },
		  {
			label: "Verse 5",
			text: "Wash me, O Lamb of God,\nWash me from sin;\nThou, while I trust in Thee,\nWilt keep me clean;\nEach day to Thee I bring\nHeart, life, yea, ev’rything;\nSaved while to Thee I cling,\nSaved from all sin."
		  }
		]
	  },
	  {
		id: 65,
		title: "GO, LABOUR ON; SPEND, AND BE SPENT",
		author: "Horatius Bonar",
		category: "service and consecration",
		verses: [
		  {
			label: "Verse 1",
			text: "Go, labour on; spend, and be spent,\nThy joy to do the Father's will;\nIt is the way the Master went;\nShould not the servant tread it still?"
		  },
		  {
			label: "Verse 2",
			text: "Go, labour on; 'tis not for naught;\nThine earthly loss is heavenly gain;\nMen heed thee, love thee, praise thee not;\nThe Master praises—what are men?"
		  },
		  {
			label: "Verse 3",
			text: "Go, labour on; enough while here\nIf He shall praise thee, if He deign\nThy willing heart to mark and cheer;\nNo toil for Him shall be in vain."
		  },
		  {
			label: "Verse 4",
			text: "Go, labour on while it is day:\nThe world's dark night is hastening on.\nSpeed, speed thy work, cast sloth away;\nIt is not thus that souls are won."
		  },
		  {
			label: "Verse 5",
			text: "Toil on, faint not, keep watch and pray;\nBe wise the erring soul to win;\nGo forth into the world's highway,\nCompel the wanderer to come in."
		  },
		  {
			label: "Verse 6",
			text: "Toil on, and in thy toil rejoice;\nFor toil comes rest, for exile home;\nSoon shalt thou hear the Bridegroom's voice,\nThe midnight peal, 'Behold, I come!'"
		  }
		]
	  },
	  {
		id: 66,
		title: "HO, MY COMRADE! SEE THE SIGNAL",
		author: "Philip P. Bliss",
		category: "service and consecration",
		verses: [
		  {
			label: "Verse 1",
			text: "Ho, my comrades! see the signal\nWaving in the sky!\nReinforcements now appearing,\nVictory is nigh."
		  },
		  {
			label: "Chorus",
			text: "Hold the fort, for I am coming,\nJesus signals still;\nWave the answer back to Heaven,\nBy Thy grace we will!"
		  },
		  {
			label: "Verse 2",
			text: "See the mighty host advancing,\nSatan leading on;\nMighty men around us falling,\nCourage almost gone."
		  },
		  {
			label: "Verse 3",
			text: "See the glorious banner waving!\nHear the trumpet blow!\nIn our Leader’s name we’ll triumph\nOver every foe."
		  },
		  {
			label: "Verse 4",
			text: "Fierce and long the battle rages,\nBut our help is near;\nOnward comes our great Commander,\nCheer, my comrades, cheer!"
		  }
		]
	  },
	  {
		id: 67,
		title: "CHRISTIAN SEEK NOT YET REPOSE",
		author: "Charlotte Elliott",
		category: "service and consecration",
		verses: [
		  {
			label: "Verse 1",
			text: "Christian, seek not yet repose,\nHear thy guardian angel say;\nThou art in the midst of foes:\nWatch and pray!"
		  },
		  {
			label: "Verse 2",
			text: "Principalities and powers,\nMustering their unseen array,\nWait for thy unguarded hours:\nWatch and pray!"
		  },
		  {
			label: "Verse 3",
			text: "Gird thy heavenly armor on,\nWear it ever night and day;\nAmbushed lies the evil one:\nWatch and pray!"
		  },
		  {
			label: "Verse 4",
			text: "Hear the victors who o’ercame;\nStill they mark each warrior’s way;\nAll with one sweet voice exclaim:\nWatch and pray!"
		  },
		  {
			label: "Verse 5",
			text: "Hear, above all, hear thy Lord,\nHim thou lovest to obey;\nHide within thy heart His word:\nWatch and pray!"
		  },
		  {
			label: "Verse 6",
			text: "Watch, as if on that alone\nHung the issue of the day;\nPray, that help may be sent down:\nWatch and pray!"
		  }
		]
	  },
	  {
		id: 68,
		title: "STAND UP, STAND UP FOR JESUS",
		author: "George Duffield",
		category: "service and consecration",
		verses: [
		  {
			label: "Verse 1",
			text: "Stand up, stand up for Jesus,\nYe soldiers of the cross;\nLift high His royal banner,\nIt must not suffer loss."
		  },
		  {
			label: "Verse 2",
			text: "Stand up, stand up for Jesus,\nThe trumpet call obey;\nForth to the mighty conflict,\nIn this His glorious day."
		  },
		  {
			label: "Verse 3",
			text: "Stand up, stand up for Jesus,\nStand in His strength alone;\nThe arm of flesh will fail you,\nYe dare not trust your own."
		  },
		  {
			label: "Verse 4",
			text: "Stand up, stand up for Jesus,\nThe strife will not be long;\nThis day the noise of battle,\nThe next the victor’s song."
		  }
		]
	  },
	  {
		id: 69,
		title: "JESUS, I MY CROSS HAVE TAKEN",
		author: "Henry Francis Lyte",
		category: "service and consecration",
		verses: [
		  {
			label: "Verse 1",
			text: "Jesus, I my cross have taken,\nAll to leave and follow Thee;\nDestitute, despised, forsaken,\nThou from hence my all shalt be."
		  },
		  {
			label: "Verse 2",
			text: "Let the world despise and leave me,\nThey have left my Savior too;\nHuman hearts and looks deceive me,\nThou art not, like them, untrue."
		  },
		  {
			label: "Verse 3",
			text: "Go then, earthly fame and treasure,\nCome disaster, scorn and pain;\nIn Thy service, pain is pleasure,\nWith Thy favor, loss is gain."
		  },
		  {
			label: "Verse 4",
			text: "Haste then on from grace to glory,\nArmed by faith and winged by prayer;\nHeaven’s eternal day before thee,\nGod’s own hand shall guide thee there."
		  }
		]
	  },
	  {
		id: 70,
		title: "TAKE MY LIFE AND LET IT BE",
		author: "Frances Ridley Havergal",
		category: "service and consecration",
		verses: [
		  {
			label: "Verse 1",
			text: "Take my life and let it be\nConsecrated, Lord, to Thee;\nTake my moments and my days,\nLet them flow in ceaseless praise."
		  },
		  {
			label: "Verse 2",
			text: "Take my hands and let them move\nAt the impulse of Thy love;\nTake my feet and let them be\nSwift and beautiful for Thee."
		  },
		  {
			label: "Verse 3",
			text: "Take my voice and let me sing\nAlways, only, for my King;\nTake my lips and let them be\nFilled with messages from Thee."
		  },
		  {
			label: "Verse 4",
			text: "Take my silver and my gold,\nNot a mite would I withhold;\nTake my intellect and use\nEvery power as Thou shalt choose."
		  },
		  {
			label: "Verse 5",
			text: "Take my will and make it Thine,\nIt shall be no longer mine;\nTake my heart, it is Thine own,\nIt shall be Thy royal throne."
		  },
		  {
			label: "Verse 6",
			text: "Take my love, my Lord, I pour\nAt Thy feet its treasure store;\nTake myself, and I will be\nEver, only, all for Thee."
		  }
		]
	  },
	  {
		id: 71,
		title: "TRUSTING IN THE LORD THY GOD",
		author: "E. B.",
		category: "pilgrimage and commitment",
		verses: [
		  {
			label: "Verse 1",
			text: "Trusting in the Lord thy God,\nOnward go! onward go!\nHolding fast His promised word,\nOnward go!\nNe’er deny His worthy name,\nTho’ it bring reproach and shame;\nSpreading still His wondrous fame,\nOnward go!"
		  },
		  {
			label: "Verse 2",
			text: "Has He called thee to the plough?\nOnward go! onward go!\nNight is coming, serve Him now;\nOnward go!\nFaith and love in service blend;\nOn His mighty arm depend;\nStanding fast until the end,\nOnward go!"
		  },
		  {
			label: "Verse 3",
			text: "Has He giv’n thee golden grain?\nOnward go! onward go!\nSow, and thou shalt reap again;\nOnward go!\nTo thy master’s gate repair,\nWatching be and waiting there;\nHe will hear and answer prayer:\nOnward go!"
		  },
		  {
			label: "Verse 4",
			text: "Has He said the end is near?\nOnward go! onward go!\nServing Him with holy fear,\nOnward go!\nChrist thy portion, Christ thy stay,\nHeav’nly bread upon the way,\nLeading on to glorious day:\nOnward go!"
		  },
		  {
			label: "Verse 5",
			text: "In this little moment, then,\nOnward go! onward go!\nIn thy ways acknowledge Him;\nOnward go!\nLet His mind be found in thee;\nLet His will thy pleasure be;\nThus in life and liberty,\nOnward go!"
		  }
		]
	  },
	  {
		id: 72,
		title: "ALL TO JESUS I SURRENDER",
		author: "Judson W. Van DeVenter",
		category: "pilgrimage and commitment",
		verses: [
		  {
			label: "Verse 1",
			text: "All to Jesus I surrender,\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live."
		  },
		  {
			label: "Chorus",
			text: "I surrender all, I surrender all;\nAll to Thee, my blessed Savior,\nI surrender all."
		  },
		  {
			label: "Verse 2",
			text: "All to Jesus I surrender,\nMake me, Savior, wholly Thine;\nLet me feel Thy Holy Spirit,\nTruly know that Thou art mine."
		  },
		  {
			label: "Verse 3",
			text: "All to Jesus I surrender,\nLord, I give myself to Thee;\nFill me with Thy love and power,\nLet Thy blessing fall on me."
		  },
		  {
			label: "Verse 4",
			text: "All to Jesus I surrender,\nNow I feel the sacred flame;\nOh, the joy of full salvation!\nGlory, glory to His name!"
		  }
		]
	  },
	  {
		id: 73,
		title: "WHEN WE ALL GET TO HEAVEN",
		author: "Eliza E. Hewitt",
		category: "pilgrimage and commitment",
		verses: [
		  {
			label: "Verse 1",
			text: "Sing the wondrous love of Jesus,\nSing His mercy and His grace;\nIn the mansions bright and blessed\nHe'll prepare for us a place."
		  },
		  {
			label: "Chorus",
			text: "When we all get to heaven,\nWhat a day of rejoicing that will be!\nWhen we all see Jesus,\nWe'll sing and shout the victory!"
		  },
		  {
			label: "Verse 2",
			text: "While we walk the pilgrim pathway,\nClouds will overspread the sky;\nBut when trav'ling days are over,\nNot a shadow, not a sigh."
		  },
		  {
			label: "Verse 3",
			text: "Let us then be true and faithful,\nTrusting, serving every day;\nJust one glimpse of Him in glory\nWill the toils of life repay."
		  },
		  {
			label: "Verse 4",
			text: "Onward to the prize before us!\nSoon His beauty we'll behold;\nSoon the pearly gates will open—\nWe shall tread the streets of gold."
		  }
		]
	  },
	  {
		id: 74,
		title: "WHERE HE MAY LEAD ME I WILL GO",
		author: "W. C. Martin",
		category: "pilgrimage and commitment",
		verses: [
		  {
			label: "Verse 1",
			text: "Where He may lead me I will go,\nFor I have learned to trust Him so,\nAnd I remember 'twas for me,\nThat He was slain on Calvary."
		  },
		  {
			label: "Chorus",
			text: "Jesus shall lead me night and day,\nJesus shall lead me all the way,\nHe is the truest Friend to me,\nFor I remember Calvary."
		  },
		  {
			label: "Verse 2",
			text: "O I delight in His command,\nLove to be led by His dear hand;\nHis divine will is sweet to me,\nHallowed by blood-stained Calvary."
		  },
		  {
			label: "Verse 3",
			text: "Onward I go, nor doubt, nor fear,\nHappy with Christ, my Savior near,\nTrusting that I some day shall see\nJesus my Friend, of Calvary."
		  }
		]
	  },
	  {
		id: 75,
		title: "I MUST NEEDS GO HOME BY THE WAY OF THE CROSS",
		author: "Jessie Brown Pounds",
		category: "pilgrimage and commitment",
		verses: [
		  {
			label: "Verse 1",
			text: "I must needs go home by the way of the cross;\nThere's no other way but this.\nI shall ne'er get sight of the Gates of Light\nIf the way of the cross I miss."
		  },
		  {
			label: "Chorus",
			text: "The way of the cross leads home,\nThe way of the cross leads home;\nIt is sweet to know, as I onward go,\nThe way of the cross leads home."
		  },
		  {
			label: "Verse 2",
			text: "I must needs go on in the blood-sprinkled way,\nThe path that the Savior trod,\nIf I ever climb to the heights sublime,\nWhere the soul is at home with God."
		  },
		  {
			label: "Verse 3",
			text: "Then I bid farewell to the way of the world,\nTo walk in it nevermore;\nFor the Lord says, 'Come,' and I seek my home\nWhere He waits at the open door."
		  }
		]
	  },
	  {
		id: 76,
		title: "JESUS CALLS US OVER THE TUMULT",
		author: "Cecil Frances Alexander",
		category: "pilgrimage and commitment",
		verses: [
		  {
			label: "Verse 1",
			text: "Jesus calls us o'er the tumult\nOf our life's wild, restless sea;\nDay by day His sweet voice soundeth,\nSaying, 'Christian, follow Me.'"
		  },
		  {
			label: "Verse 2",
			text: "Jesus calls us from the worship\nOf the vain world's golden store,\nFrom each idol that would keep us,\nSaying, 'Christian, love Me more.'"
		  },
		  {
			label: "Verse 3",
			text: "In our joys and in our sorrows,\nDays of toil and hours of ease,\nStill He calls, in cares and pleasures,\n'Christian, love Me more than these.'"
		  },
		  {
			label: "Verse 4",
			text: "Jesus calls us—by Thy mercies,\nSavior, may we hear Thy call,\nGive our hearts to Thine obedience,\nServe and love Thee best of all."
		  }
		]
	  },
	  {
		id: 77,
		title: "O WEARY HEART, THERE IS A HOME",
		author: "Unknown",
		category: "pilgrimage and commitment",
		verses: [
		  {
			label: "Verse 1",
			text: "O weary heart, there is a home,\nBeyond the reach of toil and care;\nA home where changes never come:\nWho would not fain be resting there?"
		  },
		  {
			label: "Chorus",
			text: "Oh wait, meekly wait, and murmur not!\nOh wait, meekly wait, and murmur not!"
		  },
		  {
			label: "Verse 2",
			text: "Yet when bowed down beneath the load\nBy Heaven allowed, thine earthly lot;\nLook up! thou’lt reach that blest abode:\nWait, meekly wait, and murmur not!"
		  },
		  {
			label: "Verse 3",
			text: "If in thy path some thorns are found,\nOh, think who bore them on His brow;\nIf grief thy sorrowing heart has found,\nIt reached a holier than thou."
		  },
		  {
			label: "Verse 4",
			text: "Toil on! nor deem, though sore it be,\nOne sigh unheard, one prayer forgot;\nThe day of rest will dawn for thee:\nWait, meekly wait, and murmur not!"
		  }
		]
	  },
		
	];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let fontSize = parseInt(localStorage.getItem('fontSize') || '16');
let currentCategory = 'all';

// More global functions that are called from HTML
function goBack() {
	document.getElementById('mainView').style.display = 'block';
	document.getElementById('hymnDetail').classList.remove('active');
	document.getElementById('fontControls').style.display = 'none';
}

function switchTab(tab, evt) {
	// Remove active from all tabs and sections
	document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
	document.querySelectorAll('.category-section, .favorites').forEach(s => s.classList.remove('active'));
	
	// Add active to clicked tab
	if (evt && evt.target) {
		evt.target.classList.add('active');
	}
	
	// Show corresponding content
	if (tab === 'favorites') {
		document.getElementById('favoritesTab').classList.add('active');
		renderFavorites();
	} else {
		document.getElementById(`${tab}Tab`).classList.add('active');
		currentCategory = tab;
	}
}

function toggleFavorite(id, event) {
	event.stopPropagation();
	const index = favorites.indexOf(id);
	
	if (index > -1) {
		favorites.splice(index, 1);
	} else {
		favorites.push(id);
	}
	
	localStorage.setItem('favorites', JSON.stringify(favorites));
	renderAllHymns();
	
	// Update favorites tab if it's currently active
	if (currentCategory === 'favorites') {
		renderFavorites();
	}
}

function changeFontSize(delta) {
	fontSize = Math.max(12, Math.min(24, fontSize + delta));
	localStorage.setItem('fontSize', fontSize.toString());
	applyFontSize();
}

function showHymn(id) {
	const hymn = hymns.find(h => h.id === id);
	if (!hymn) return;

	const content = document.getElementById('hymnContent');
	content.innerHTML = `
		<div class="hymn-header">
			<h2>#${hymn.id} - ${hymn.title}</h2>
			<div class="hymn-meta">By ${hymn.author} • ${getCategoryName(hymn.category)}</div>
		</div>
		${hymn.verses.map(verse => `
			<div class="verse">
				<div class="verse-label">${verse.label}</div>
				<div class="verse-text">${verse.text.replace(/\n/g, '<br>')}</div>
			</div>
		`).join('')}
	`;

	document.getElementById('mainView').style.display = 'none';
	document.getElementById('hymnDetail').classList.add('active');
	document.getElementById('fontControls').style.display = 'flex';
}

// PWA Installation
let deferredPrompt;
const installBanner = document.getElementById('installBanner');

window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
	deferredPrompt = e;
	installBanner.classList.add('show');
});

installBanner.addEventListener('click', async () => {
	if (deferredPrompt) {
		deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;
		deferredPrompt = null;
		installBanner.classList.remove('show');
	}
});

// Navigation functions

function handleSearch() {
	const query = document.getElementById('searchInput').value.toLowerCase();
	const filtered = hymns.filter(hymn => 
		hymn.title.toLowerCase().includes(query) || 
		hymn.id.toString().includes(query) ||
		hymn.author.toLowerCase().includes(query) ||
		getCategoryName(hymn.category).toLowerCase().includes(query)
	);
	
	// Update the current active tab with filtered results
	const activeTab = document.querySelector('.tab.active').textContent;
	if (activeTab === 'All' || query) {
		renderHymnsByCategory('all', filtered);
	}
}

// Initialize app
function init() {
	applyFontSize();
	const searchInput = document.getElementById('searchInput');
	if (searchInput) {
		searchInput.addEventListener('input', handleSearch);
	}
}

function renderAllHymns() {
	renderHymnsByCategory('all', hymns);
	renderHymnsByCategory('morning', hymns.filter(h => h.category === 'morning'));
	renderHymnsByCategory('evening', hymns.filter(h => h.category === 'evening'));
	renderHymnsByCategory('lords-day', hymns.filter(h => h.category === 'lords-day'));
	renderHymnsByCategory('adoration', hymns.filter(h => h.category === 'adoration'));
	renderHymnsByCategory('assurance', hymns.filter(h => h.category === 'assurance'));
}

function renderHymnsByCategory(category, hymnList) {
	const listIdMap = {
		'all': 'allHymnList',
		'morning': 'morningHymnList',
		'evening': 'eveningHymnList',
		'lords-day': 'lordsDayHymnList',
		'adoration': 'adorationHymnList',
		'assurance': 'assuranceHymnList',
		'blood-of-jesus': 'bloodOfJesusHymnList',
		'labour-christians-life': 'labourChristiansLifeHymnList',
		'warning-judgement': 'warningJudgementHymnList',
		'decision-devotion': 'decisionDevotionHymnList',
		'grace-forgiveness': 'graceForgivenessHymnList',
		'love-guardian-protection': 'loveGuardianProtectionHymnList',
		'faith': 'faithHymnList'
	};
	const listId = listIdMap[category];
	const hymnList_element = document.getElementById(listId);
	
	if (!hymnList_element) return;
	
	hymnList_element.innerHTML = '';

	hymnList.forEach(hymn => {
		const li = document.createElement('li');
		li.className = 'hymn-item';
		li.innerHTML = `
			<span class="hymn-number">${hymn.id}</span>
			<div style="flex: 1; margin-left: 12px;">
				<div class="hymn-title">${hymn.title}</div>
				<div class="hymn-category">${getCategoryName(hymn.category)}</div>
			</div>
			<button class="favorite-btn ${favorites.includes(hymn.id) ? 'active' : ''}" 
					onclick="toggleFavorite(${hymn.id}, event)">
				♥
			</button>
		`;
		li.onclick = (e) => {
			if (!e.target.classList.contains('favorite-btn')) {
				showHymn(hymn.id);
			}
		};
		hymnList_element.appendChild(li);
	});
}

function renderFavorites() {
	const favoritesList = document.getElementById('favoritesList');
	const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.id));

	if (!favoritesList) return;

	if (favoriteHymns.length === 0) {
		favoritesList.innerHTML = `
			<div class="empty-state">
				<h3>No Favorites Yet</h3>
				<p>Tap the heart icon on any hymn to add it to your favorites.</p>
			</div>
		`;
	} else {
		favoritesList.innerHTML = `
			<ul class="hymn-list">
				${favoriteHymns.map(hymn => `
					<li class="hymn-item" onclick="showHymn(${hymn.id})">
						<span class="hymn-number">${hymn.id}</span>
						<div style=\"flex: 1; margin-left: 12px;\">
							<div class=\"hymn-title\">${hymn.title}</div>
							<div class=\"hymn-category\">${getCategoryName(hymn.category)}</div>
						</div>
						<button class=\"favorite-btn active\" onclick=\"toggleFavorite(${hymn.id}, event)\">♥</button>
					</li>
				`).join('')}
			</ul>
		`;
	}
}

function getCategoryName(category) {
	const names = {
		'morning': 'Morning Worship',
		'evening': 'Evening Worship', 
		'lords-day': "Lord's Day",
		'adoration': 'Adoration & Praise',
		'assurance': 'Assurance & Confidence'
	};
	return names[category] || 'General';
}

// Remove duplicated function definitions (handled above)

function applyFontSize() {
	document.documentElement.style.setProperty('--base-font-size', fontSize + 'px');
	document.querySelectorAll('.verse-text').forEach(el => {
		el.style.fontSize = fontSize + 'px';
	});
}

// Service Worker for offline functionality
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function() {
	init();
	renderAllHymns();
});

// Initialize immediately as well
init();


