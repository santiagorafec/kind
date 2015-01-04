/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 (function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
				child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);
function set(key, val){
	window.localStorage.setItem(key, val);
	return val;
}
function get(key){
	return window.localStorage.getItem(key);
}
function exist(key){
	return window.localStorage.getItem(key)!=null;
}

var LEVELS = [
[["AC4A69", "5D84E9", "C4A341", "81FFB5","84D7FF"], "for an enjoyable", 50],
[["FF7D00", "7458FF", "9D1514", "A297FF","88A8E8"], "for a cool", 70],
[["FF0076", "FFCA1C", "E89419", "FF7326","FFFF00"], "for an inspiring", 90],
[["13A0E8", "17E800", "3D00E8", "5A27E8","00FFDD"], "for a stupendous", 110],
[["A66200", "FF1800", "C900FF", "8A8FFF","E84F00"], "for a positivity radiating", 130],
// FF0076 FFCA1C E89419 FF7326 FFFF00
[["A4E82E", "5BFFAD", "74FF68", "3FFFF3","5E97E8"], "for an amazing", 150],
[["1FE8C6", "1928E8", "79C0FF", "48447C","A8F7FF"], "for a vivacious", 170],
[["FFB735", "10FFD4", "E8AB82", "EDCE47","E83BB1"], "for an incredible", 190],
[["FFB239", "7A9D93", "6BFFCC", "90799D","CDFF00"], "for an open", 210],
[["88A8E8", "76FFB7", "4B4E9D", "9C98FF","76FFB7"], "for a happy", 230],
[["79FF00", "0DE6FF", "0068E0", "42FF79","A700CC"], "for a compassionate", 250],
[["2AFF34", "B25850", "0BB213", "DFB213","5A2AFF"], "for an energising", 270],
[["FFF632", "00B0E8", "10FFD4", "EDCE47","4B8A80"], "for a wonderful", 310],
[["FFDB14", "4C1ADF", "00FF27", "8A72FF","DFB213"], "for an outstanding", 330],
[["551D2B", "551D74", "551DB5", "551DE7","B26204"], "for an awesome", 350],
[["00FF27", "5DC4E9", "DB1215", "5DC48E","6DCEFF"], "for a encouraging", 370],
[["00E2E7", "FFD114", "BDFF27", "BD9427","B2431A"], "for an esteemed", 390],
[["FF6138", "00A388", "FFFF83", "BEEB9F","8F0B91"], "for a fabulous", 410],
[["21009B", "4B19FF", "3200E8", "0279E8","F2BB77"], "for a generous", 430],
[["F5390A", "CE0AF5", "FF180A", "FF160A","8C1C31"], "for a hearty", 450],
[["6BD6FF", "5800E8", "FF3E0D", "F5DA02","F24162"], "for a marvellous", 470],
[["F50250", "F5EE00", "E87A00", "FFC100","D92344"], "for an optimist", 490],
[["F28241", "6E76BF", "D9653B", "F27D80","464C6E"], "for an extraordinary", 510],
[["E8C803", "00B3F5", "CEA600", "029BF5","F2A341"], "for a special", 530],
[["FF9A00", "F52900", "E87A00", "FF7000","AB3DAB"], "for a phenomenal", 550],
[["E86300", "3BEBCD", "12B56B", "CF5800","5D00E9"], "for an up-wavering", 570],
[["10629C", "820F0D", "004D82", "CF2600","551D00"], "for a constantly enthusiastic", 590],
[["CF2600", "35BDAC", "39C519", "761338","FF0014"], "for a cherishing fortuned", 610],
[["0055CF", "D5B389", "20109C", "FEE59C","DB12FF"], "for a luminously glowing", 630],
[["908BFE", "2C2A69", "0065CF", "1D94CF","FF6138"], "for a love rejoicing", 650],
[["F2790F", "F2F2F2", "B91306", "19126D","9B8C00"], "for a vibrantly rejoicing", 670],
[["BF6F18", "8C4F0E", "F26137", "B24829","E80248"], "for a bliss radiative", 690],
[["737EBC", "E4E51D", "1D6FE5", "E49A40","00FFDE"], "for a tender", 710],
[["E59F00", "EB26729", "5ABCAF", "1DE593","E87A00"], "for a specially nice", 730],
[["E5A834", "BB8319", "B24600", "EB5C00","F5A300"], "for a warm-hearted", 750],
[["49D0EE", "EBD600", "B8124F", "B81225","FFDC04"], "for an outshining gentle", 770],
[["EBB01B", "B82C00", "FF4300", "9E4A1D","0BE800"], "for an empathetic", 790],
[["C40000", "E8078F", "FF670D", "70284F","826936"], "for an impactful", 810],
[["3693FF", "DFB213", "384EB2", "3693FF","D7A215"], "for an excellent", 830],
[["FF6C6C", "CC7041", "FF4C35", "9C6041","764851"], "for an exceptional", 850],
[["FFAA47", "2DBFFF", "FF9E2D", "217AFF","9C5510"], "for a magnificent", 870],
[["CCB310", "999058", "FFB92D", "30CC87","6D8DD5"], "for a sharing", 890],
[["1D33CC", "FF723E", "2234B2", "DE7C0F","94ABF2"], "for a looked upon", 910],
[["27C9AE", "DEB420", "A94DAB", "7A6A2E","74F43F"], "for a motivated", 930],
[["FF7600", "FFE324", "FF736F", "9D6A32","7A5937"], "for a caring", 950],
[["6872A6", "732A19", "60CBD4", "8C623E","F06352"], "for an admirable", 970],
[["F28444", "8C162C", "F2A922", "A11978","FF4430"], "for a balanced", 990],
[["F2BD1D", "F29727", "D94F30", "D92600","2FBC9A"], "for a friendly", 1010],
[["8C4A69", "5D84A6", "A7E4F2", "A77BCC","9E9514"], "for an stunning", 1030],
[["1DA6E5", "30434C", "29B294", "896352","EEDF89"], "for a sensitive", 1050]
];
var QUOTES = [
	["Kindness is the language which the deaf can hear and the blind can see.","Mark Twain"],
	["Kindness, I've discovered, is everything in life.","Isaac Bashevis Singer"],
	["Three things in human life are important: the first is to be kind; the second is to be kind; and the third is to be kind.", "Henry James"],
	["No one has ever become poor by giving.","Anne Frank"],
	["My religion is very simple. My religion is kindness.","Dalai Lama"],
	["No act of kindness, no matter how small, is ever wasted.","Aesop"],
	["The smallest act of kindness is worth more than the greatest intention.","Khali Gibran"],
	["Be a little kinder than you have to.","E. Lockheart"],
	["For it is in giving that we receive.","Francis of Assisi"],
	["The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer.", "Mahatma Gandhi"],
	 	[" I expect to pass through life but once. If therefore there be any kindness I can show...let me do it now.","William Penn "],
	[" Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world.","Desmond Tutu "],
	[" A kind gesture can reach a wound that only compassion can heal.","Steve Maraboli "],
 	[" Guard well within yourself that treasure, kindness. Know how to give without hesitation, how to lose without regret, how to acquire without meanness.","George Sand "],
	[" Courage. Kindness. Friendship. Character. These are the qualities that define us as human beings, and propel us, on occasion, to greatness.","R.J. Palacio "],
	[" The smallest act of kindness is worth more than the greatest intention.","Khalil Gibran "],
	[" Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution.","Khalil Gibran "],
	[" I would rather make mistakes in kindness and compassion than work miracles in unkindness and hardness.","Mother Teresa "],
	[" Don't be reckless with other people's hearts, and don't put up with people that are reckless with yours.","Mary Schmich "],
	[" Be a little kinder than you have to.","E. Lockhart"],
	[" It only takes a split second to smile and forget, yet to someone that needed it, it can last a lifetime.","Steve Maraboli "],
	[" The simplest acts of kindness are by far more powerful then a thousand heads bowing in prayer.","Mahatma Gandhi "],
	[" One man practicing kindness in the wilderness is worth all the temples this world pulls.","Jack Kerouac "],
	[" What I want is so simple I almost can't say it: elementary kindness.","Barbara Kingsolver "],
	[" Never start a sentence with the words 'No offense.","Gretchen Rubin "],
	[" He who sees a need and waits to be asked for help is as unkind as if he had refused it.","Dante Alighieri "],
	[" There is nothing so rewarding as to make people realize that they are worthwhile in this world.","Bob Anderson "],
	[" Conquer the angry one by not getting angry; conquer the wicked by goodness; conquer the stingy by generosity, and the liar by speaking the truth.","Gautama Buddha"],
	[" Carve your name on hearts, not tombstones. A legacy is etched into the minds of others and the stories they share about you.","Shannon L. Alder "],
	[" Never lose a chance of saying a kind word.","William Makepeace Thackeray "],
	[" Love only grows by sharing. You can only have more for yourself by giving it away to others.","Brian Tracy "],
	[" Be kind. Always if you have a choice, be kind.","Anne Rice "],
	[" Sometimes it's easy to lose faith in people. And sometimes one act of kindness is all it takes to give you hope again.","Randa Abdel-Fattah "],
	[" Kindness, I’ve discovered, is everything in life."," Isaac Bashevis Singer "],
	[" The various features and aspects of human life, such as longevity, good health, success, happiness, and so forth, which we consider desirable, are all dependent on kindness and a good heart.","Dalai Lama XIV "],
	[" A smile remains the most inexpensive gift I can bestow on anyone and yet its powers can vanquish kingdoms.","Og Mandino "],
	[" It's all a matter of paying attention, being awake in the present moment, and not expecting a huge payoff. The magic in this world seems to work in whispers and small kindnesses.","Charles de Lint "],
	[" Protect your enthusiasm from the negativity and fear of others. Never decide to do nothing just because you can only do little. Do what you can. You would be surprised at what  little acts have done for our world.","Steve Maraboli "],
	[" Give freely to the world these gifts of love and compassion. Do not concern yourself with how much you receive in return, just know in your heart it will be returned.","Steve Maraboli "],
	[" The shortest distance between two people is a smile.","Victor Borge "],
	[" Our kindness may be the most persuasive argument for that which we believe.","Gordon B. Hinckley "],
	[" As we work to create light for others, we naturally light our own way.","Mary Anne Radmacher "],
	[" People who love themselves come across as very loving, generous and kind; they express their self-confidence through humility, forgiveness and inclusiveness.","Sanaya Roman "],
	[" Practice kindness - particularly when you feel irritated or things are not going well. Kindness hardly ever goes wrong.","Lewis Richmond "],
	[" Kindness can transform someone's dark moment with a blaze of light. You'll never know how much your caring matters. Make a difference for another today.","Amy Leigh Mercree "],
	[" Be kind, because everyone is having a really hard time.","Plato "],
	[" If we are going to be kind, let it be out of simple generosity, not because we fear guilt or retribution.","J.M. Coetzee "],
	[" You can't live a perfect day without doing something for someone who will never be able to repay you.","Debbie Macomber"],
	[" Today I will take the opportunity to do unanticipated good.","Steve Maraboli "],
	[" With one kind gesture you can change a life. One person at a time you can change the world. One day at a time we can change everything.","Steve Maraboli "],
	[" Choose being kind over being right and you'll be right every time.","Richard Carlson "]
]; 
var GOODWORDS = ["Amazing", "Remarkable", "Fantastic", "Great"];
var GOODPHRASES = ["You have just made someone's day better", "You have just lightened the burdens of another", "You have just made someone happy","You have just made someone smile","You just cheered someone up","You just made a positive impact on somebody","You increased someone´s happiness","You are spreading your kindness to the world","You enhanced the happiness of somebody","You just made influencial kind decisions","You are a kindness spreader", "You traced a smile on someone´s face"," A kind act of yours spread love to the world", "Your kindness just radiated positivity to someone"," Somebody had a good day thanks to you", "Kindness is an evidence of the positivity you have","You just rejoiced kindness to someone" ];
var ACTIVITIES = [
["Gift your smile!", "Smile to the next person you see.", "Your smile can outpour happiness all over the world.", 20, 2],
["Share an anecdote!", "Tell one of your experiences to someone.", "Stories are essencial to uplift people´s mood.", 27, 1],
["Make someone laugh!", "Somehow make somebody laugh.", "Laughter rejoices the world with happiness.", 30, 0],
["Share a kind message!", "However you want, pass on a postitive message.", "Positivity will enhance a kind and happy future.", 34, 0],
["Be thankful!", "Thank someone about something they did.", "Gratefulness has the power for others to keep doing things for this world.", 38, 0],
["Draw something!", "Make a drawing to anybody.", "Give out your artistic expressions to leave a piece of yourself on someone´s heart.", 40, 0],
["Sweeten someone´s day!","Share a snack to someone.", "Why not sweeten someone to smile by giving them a delicious treat.", 25, 0],
["Wish the best!", "Tell someone what you wish for their lives.", "Wish the best to those in your life.", 33, 0],
["Compliment!", "Acclaim what you like of others.", "Point out what you admire of someone.", 45, 0],
["Give advice!", "Tell someone your advice about something.", "Adivices will make others to reach multiple oportunities and desicions.", 21, 0],
["Praise your loved ones!", "Praise somebody .", "Gratify to those who are important to you.", 39, 0],
["Hug!", "Give a great hug to someone.", "Within your arms, a warm feeling of love will snuggle anybody that you give the hug to.", 44, 0],
["Make a happy call!",  "Touch base with someone and enhace your connections with them.", "Calling people is a nice way of appreciating them.", 33, 0],
["Greet someone!", "", "Starting by saying someone 'Hello' and you´ll make of his day, a happy day.", 20, 0],
["Devote your talents!", "Help somebody by doing what you like to do the most.", "People will appreciate your talents contribution to theirselves.", 45, 0],
["Express your love!", "Say 'I love you' to someone close to you.", "Love is what defines us all in this world.", 50, 0],
["Write a letter!", "Grab a pen and paper and write to someone.", "Sometimes recieving written cards can be more enjoyable than through the internet.", 50, 0],
["Help someone!", 'Ask someone: "How can I help you?".', "This is always appreciated enourmously. And can make a huge impact on someone.", 50, 0]
];
var USERCTIVITIES = [];
var VARO;
var CURRENTACTIVITY = [];
var REGULARVERBS = [ "accept", "add", "admire", "admit", "advise", "afford", "agree", "alert", "allow", "amuse", "analyze", "announce", "annoy", "answer", "apologize", "appear", "applaud", "appreciate", "approve", "argue", "arrange", "arrest", "arrive", "ask", "attach", "attack", "attempt", "attend", "attract", "avoid", "back", "bake", "balance", "ban", "bang", "bare", "bat", "bath", "battle", "beam", "beg", "behave", "belong", "Bleach", "bless", "blind", "blink", "blot", "blush", "boast", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", "branch", "breathe", "bruise", "brush", "bubble", "bump", "burn", "bury", "buzz", "calculate", "call", "camp", "care", "carry", "carve", "cause", "challenge", "change", "charge", "chase", "cheat", "check", "cheer", "chew", "choke", "chop", "claim", "clap", "clean", "clear", "clip", "close", "coach", "coil", "collect", "color", "comb", "command", "communicate", "compare", "compete", "complain", "complete", "concentrate", "concern", "confess", "confuse", "connect", "consider", "consist", "contain", "continue", "coo", "copy", "correct", "cough", "count", "cover", "crack", "crash", "crawl", "cross", "crush", "cry", "cure", "curl", "curve", "cycle", "dam", "damage", "dance", "dare", "decay", "deceive", "decide", "decorate", "delay", "delight", "deliver", "depend", "describe", "desert", "deserve", "destroy", "detect", "develop", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "divide", "double", "doubt", "drag", "drain", "dream", "dress", "devote", "drip", "drop", "drown", "drum", "dry", "dust", "earn", "educate", "embarrass", "employ", "empty", "encourage", "end", "enjoy", "enter", "entertain", "escape", "examine", "excite", "excuse", "exercise", "exist", "expand", "expect", "explain", "explode", "extend", "face", "fade", "fail", "fancy", "fasten", "fax", "fear", "fence", "fetch", "file", "fill", "film", "fire", "fit", "fix", "flap", "flash", "float", "flood", "flow", "flower", "fold", "follow", "fool", "force", "form", "found", "frame", "frighten", "fry", "gather", "gaze", "gift","glow", "glue", "grab", "grate", "grease", "greet", "grin", "grip", "groan", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "heat", "help", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", "hurry", "identify", "ignore", "imagine", "impress", "improve", "include", "increase", "influence", "inform", "inject", "injure", "instruct", "intend", "interest", "interfere", "interrupt", "introduce", "invent", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "label", "land", "last", "laugh", "launch", "learn", "level", "license", "lick", "lie", "lighten", "like", "list", "listen", "live", "load", "lock", "long", "look", "love", "make", "man", "manage", "march", "mark", "marry", "match", "mate", "matter", "measure", "meddle", "melt", "memorize", "mend", "milk", "mine", "miss", "mix", "moan", "moor", "mourn", "move", "muddle", "mug", "multiply", "murder", "nail", "name", "need", "nest", "nod", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "open", "order", "overflow", "owe", "own", "pack", "paddle", "paint", "park", "part", "pass", "paste", "pat", "pause", "peck", "pedal", "peel", "peep", "perform", "permit", "phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "please", "plug", "point", "polish", "pop", "possess", "post", "pour", "practice", "pray", "preach", "precede", "prefer", "prepare", "present", "preserve", "press", "pretend", "prevent", "prick", "print", "produce", "program", "promise", "protect", "provide", "pull", "pump", "punch", "puncture", "punish", "push", "question", "queue", "race", "radiate", "rain", "raise", "reach", "realize", "receive", "recognize", "record", "reduce", "reflect", "refuse", "regret", "reign", "reject", "rejoice", "relax", "release", "rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", "report", "reproduce", "request", "rescue", "retire", "return", "rhyme", "rinse", "risk", "rob", "rock", "roll", "rot", "rub", "ruin", "rule", "rush", "sack", "sail", "satisfy", "save", "saw", "scare", "scatter", "scold", "scorch", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "separate", "serve", "settle", "shade", "share", "shave", "shelter", "shiver", "shock", "shop", "shrug", "sigh", "sign", "signal", "sin", "sip", "ski", "skip", "slap", "slip", "slow", "smash", "smell", "smile", "smoke", "snatch", "sneeze", "sniff", "snore", "snow", "soak", "sound", "spare", "spark", "sparkle", "spell", "spill", "spoil", "spot", "spray", "spread", "sprout", "squash", "Squeak", "squeal", "squeeze", "stain", "stamp", "stare", "start", "stay", "steer", "step", "stir", "stitch", "stop", "store", "strap", "strengthen", "stretch", "strip", "stroke", "stuff", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "switch", "talk", "tame", "tap", "taste", "tease", "telephone", "tempt", "terrify", "test", "thank", "thaw", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transport", "trap", "travel", "treat", "tremble", "trick", "trip", "trot", "trouble", "trust", "try", "tug", "tumble", "turn", "twist", "type", "undress", "unfasten", "unite", "unlock", "unpack", "untidy", "use", "vanish", "visit", "wail", "wait", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "weigh", "welcome", "whine", "whip", "whirl", "whisper", "whistle", "wink", "wipe", "wish", "wobble", "wonder", "Work", "worry", "wrap", "wreck", "wrestle", "wriggle", "x-ray ", "yawn", "yell", "zip", "zoom", "sweeten", "compliment", "praise"];
var IRREGULARVERBSw =[
["awake", "awoken"],
["be", "been"],
["beat", "beaten"],
["become", "become"],
["begin", "begun"],
["bend", "bent"],
["bet", "bet"],
["bid", "bid"],
["bite", "bitten"],
["blow", "blown"],
["break", "broken"],
["bring", "brought"],
["broadcast", "broadcast"],
["build","built"],
["buy"  ,"bough"],
["catch", "caught"],
["choose", "chosen"],
["come", "come"],
["cost", "cost"],
["cut", "cut"],
["dig", "dug"],
["do", "done"],
["draw", "drawn"],
["drive", "driven"],
["drink", "drunk"],
["eat", "eaten"],
["fall", "fallen"],
["feel", "felt"],
["fight", "fought"],
["find", "found"],
["fly", "flown"],
["forget", "forgotten"],
["forgive", "forgiven"],
["freeze", "frozen"],
["get", "gotten"],
["give", "given"],
["go", "gone"],
["grow","grown"],
["hang","hung"],
["have", "had"],
["hear" ,"Heard"],
["hide", "hidden"],
["hit",   "hit"],
["hold", "held"],
["hurt", "hurt"],
["keep", "kept"],
["know", "known"],
["lay", "laid"],
["lead", "led"],
["leave", "left"],
["lend", "lent"],
["let", "let"],
["lie", "lain"],
["lose", "lost"],
["make", "made"],
["mean", "meant"],
["meet", "met"],
["pay", "paid"],
["put", "put"],
["read", "read"],
["ride", "ridden"],
["ring", "rung"],
["rise", "risen"],
["run",  "run"],
["say",  "said"],
["see", "seen"],
["sell",  "sold"],
["send", "sent"],
["show", "shown"],
["shut", "shut"],
["sing", "sung"],
["sit", "sat"],
["sleep", "slept"],
["speak", "spoken"],
["spend", "spent"],
["stand", "stood"],
["swim", "swum"],
["take", "taken"],
["teach", "taught"],
["tear", "torn"],
["tell", "told"],
["think", "thought"],
["throw", "thrown"],
["understand", "understood"],
["wake", "woken"],
["wear"  , "worn"],
["win", "won"],
["write", "written"]
];
var IRREGULARVERBS =["awake", "be", "beat", "become","begin", "bend","bet","bid","bite","blow", "break", "bring", "broadcast","build","buy"  ,"catch","choose","come","cost","cut", "dig", "do", "draw", "drive", "drink", "eat", "fall", "feel", "fight","find", "fly", "forget", "forgive", "freeze", "get", "give", "go", "grow","hang","have", "hear" ,"hide", "hit",  "hold", "hurt", "keep", "know", "lay", "lead", "leave", "lend", "let", "lie", "lose", "make", "mean", "meet", "pay", "put", "read", "ride","ring","rise", "run",  "say",  "see", "sell",  "send", "show", "shut", "sing", "sit", "sleep", "speak", "spend", "stand", "swim", "take", "teach", "tear", "tell", "think", "throw", "understand","wake", "wear" ,"win", "write"];
function isVerb(word){
	var x = false;
	if(IRREGULARVERBS.indexOf(word) != -1 || REGULARVERBS.indexOf(word) != -1){
			x = true;
		}
	return x;
	}
function getItInPast(sentence){
	s = sentence.split(" ");
	var verbp;
	for(u = 0 ; u<s.length; u++){
		if(isVerb(s[u])){ verbp = u; break;}
	}
	if(verbp != null){
	 verb = s[verbp];
	var pp;
	if(IRREGULARVERBS.indexOf(verb) != -1) {
		pp = IRREGULARVERBSw[IRREGULARVERBS.indexOf(verb)][1];
	}
	else{
		if(verb.substr(verb.length-1, verb.length-1) == "e") pp = verb + "d";
		else if(verb.substr(verb.length-1, verb.length-1) == "y") pp = verb.substr(0, verb.length-2) + "ied";
		else {
			pp = verb + "ed";
		};
	}
	var string = "";
		for(u = 0 ; u<s.length; u++){
		if(s[u] == verb) s[u] = pp;
		string += " "+s[u];
	}
	} else{
		string = '"' + sentence + '"';
	}
	return string;

}
 function lineAdaptedText(text, limit){
	wordArray = text.split(" ");
	var string = "";
	var x = [];
	var n = 0;
	var q = 0;
	for(t = 0; t<wordArray.length; t++){
		n++;
		n += wordArray[t].length;
		if(n>limit){n = 0; x[q] = t; q++;}
		}
			for(r = 0; r<wordArray.length; r++){
				for(y = 0; y<wordArray.length; y++){
			if(/* its in the x -> add a "<br>" and save the new value*/ x[r] == y){ wordArray[y] = "<br>"+ wordArray[y] ;}
			else /*add a space*/{wordArray[y] = wordArray[y] + " ";}
				}
			}
			for(r = 0; r<wordArray.length; r++){
				string += wordArray[r];
			}
		return string;	
	}
	
function getContrast(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? 'black' : 'white';
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function show(what){
	w = what;
	if(w == "nointernet"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#smiler").css("display","none");
		$("#nointernet").css("display","block");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");
		

	}
	else if(w == "main"){
		$("#mainApp").css("display","block");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#nointernet").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");

	}
		else if(w == "registration"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","block");
		$("#welcome").css("display","none");
		$("#smiler").css("display","none");
		$("#nointernet").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");

		}
		else if (w == "welcome"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","block");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");

		}
		else if (w == "smiler"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","block");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");

		}
		else if (w == "freshsmiles"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","block");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");

		}
		else if (w == "activityDO"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","block");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");
	
		}
		else if (w == "addnewbefo"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","block");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");

		}
		else if (w == "theaddingcentral"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","block");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");

		}
		else if (w == "changeactivitybefo"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","block");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","none");

		}
		else if (w == "tutorial"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","block");
		$("#nowgogo").css("display","none");
		}
		else if (w == "tutorial"){
		$("#mainApp").css("display","none");
		$("#registration").css("display","none");
		$("#welcome").css("display","none");
		$("#nointernet").css("display","none");
		$("#smiler").css("display","none");
		$("#freshsmiles").css("display","none");
		$("#activityDO").css("display","none");
		$("#addnewbefo").css("display","none");
		$("#theaddingcentral").css("display","none");
		$("#changeactivitybefo").css("display","none");
		$("#tutorial").css("display","none");
		$("#nowgogo").css("display","block");
		}
		
		// freshsmiles
}
function setTheme(chosenTheme){


		$("#a").css("background", "#" + LEVELS[chosenTheme][0][0]);
			$("#a").css("color", getContrast(LEVELS[chosenTheme][0][0]));
		
		$("#b").css("background", "#" + LEVELS[chosenTheme][0][1]);
			$("#b").css("color",getContrast(LEVELS[chosenTheme][0][1]));
			
		$("#aS").css("background", "#" + LEVELS[chosenTheme][0][0]);
			$("#aS").css("color",getContrast(LEVELS[chosenTheme][0][0]));
	
		$("#freshsmiles").css("background", "#" + LEVELS[chosenTheme][0][0]);
			$("#freshsmiles").css("color",getContrast(LEVELS[chosenTheme][0][0]));

		$("#activityDO").css("background", "#" + LEVELS[chosenTheme][0][0]);
			$("#activityDO").css("color",getContrast(LEVELS[chosenTheme][0][0]));
		
	
		$("#b2").css("background", "#" + LEVELS[chosenTheme][0][1]);
			$("#b2").css("color", getContrast(LEVELS[chosenTheme][0][1]));

		$("#c").css("background", "#" + LEVELS[chosenTheme][0][2]);
	
		$("#d").css("background", "#" + LEVELS[chosenTheme][0][3]);
			
		$("#theaddingcentral").css("color", getContrast(LEVELS[chosenTheme][0][1]));

		$("#bar1").css("background", "#" + LEVELS[chosenTheme][0][4]);
		$("#bar3").css("background", "#" + LEVELS[chosenTheme][0][4]);
		$("#bar2").css("background", "#" + LEVELS[chosenTheme][0][4]);
	
		$("#smiler").css("color", getContrast(LEVELS[chosenTheme][0][4]));
}
function updateLoggingBar(smile, limi, leve){
		var message1 = smile+" of "+limi+" Smiles";	
		var message2 = "Level "+leve;

			$("#theofirst1").html(message1);
			$("#theofirst3").html(message1);
			$("#theofirst2").html(message1);
			$("#theosecond1").html(message2);
			$("#theosecond3").html(message2);
			$("#theosecond2").html(message2);

	


			

	/*
		clearInterval(_theinterval);
	var numX = 1;
	var timeDone = 1;
	var smileNotifier = "<label>"+smile + "</label> of " + limi+" Smiles";
	$("#smilecounter").html(smileNotifier);
  _theinterval =  setInterval(function(){
		if(timeDone==1){
			$("#smilecounter").delay(4000).fadeOut("slow");
					timeDone++;
					numX++;
			}else{

		if(numX==1) {
			$('#smilecounter').fadeOut('slow', function() {
    $(this).html(smileNotifier);
    $(this).fadeIn('slow');
});

			 numX++;}
		else if (numX == 2){ 
		$('#smilecounter').fadeOut('slow', function() {
   			 $(this).html("Level "+leve);
   			 $(this).fadeIn('slow');
		});
numX--;}
			}
	 }, 4000);
*/
}
function setActivity(activityID){
	id = activityID;
	
		CURRENTACTIVITY = ACTIVITIES[id];
				$("#offActivity").html(lineAdaptedText(CURRENTACTIVITY[0], 15));
				$("#offNumber").html(CURRENTACTIVITY[3]);
	
}

/**************/
function userIsIn(name,level,smiles){ /*Main IS OM*/
		show("main");
		
		
		
		if($("#forer2").height()-0 > 26) $(".contentto").css("height", "69%");
		else $(".contentto").css("height", "68.3%");
		
		$('#smilecounter1').rotaterator({fadeSpeed:800, pauseSpeed:1500});
		$('#smilecounter2').rotaterator({fadeSpeed:800, pauseSpeed:1500});
		$('#smilecounter3').rotaterator({fadeSpeed:800, pauseSpeed:1500});
	
		fors = level-1; 
		setTheme(fors);
		getAllIntoArrays();

		level -= 0;
		smiles -= 0;
		var	quote = LEVELS[fors][1]+" ";
		var completeQuote = quote + name;
		var htmlQuote = quote +"<b>"+name+"</b>";
		var limit = LEVELS[fors][2];
		var percentDone = (smiles/limit)*100;
		var cpr = limit;
			///////////////////////////////////////////////////////////////////////////////


	///////////////////////////////////////////////////////////////////////////////

				changeActivity();

		$("#changeActivityOffline").off().on('click', function() {
				changeActivity();
	});	
		$("#doThisActivityOffline").off().on('click', function() {
		actionate();
	});	


/**/
/***
LIMITS
	Name: 10
	Title: 25
	
***/
				
		/***LIMIT: 45 * no more than that allowed ***/
// ACTIONSssssss!!!!!


	updateLoggingBar(smiles, limit, level);
	function quoter(){
			$("#forer1").html(quote+" "+"<b>"+name+"</b>");
			$("#forer2").html(quote+" "+"<b>"+name+"</b>");
			$("#forer3").html(quote+" "+"<b>"+name+"</b>");
	
			setTimeout(
			function(){
			if($("#forer2").height()-0 > 26){ 
		$(".fixeds").height("28%");
		$(".titleSpace").css("top","42%");
		$(".actionButtons").css("bottom","6%");
		}
		else{
		$(".fixeds").height("23%");
		$(".titleSpace").css("top","38%");
		$(".actionButtons").css("bottom","6%");

		}

			}, 10);
	}
	$("#bar1").css("width", percentDone + "%");
	$("#bar3").css("width", percentDone + "%");
	$("#bar2").css("width", percentDone + "%");
				quoter();

/* FUNCTIONS!!!! */
function setQuote(l){
	liner = lineAdaptedText("“"+QUOTES[l][0]+"”", 15);
 $("#quotings").html(liner);
 author =  QUOTES[l][1];
  $("#author").html("<b>- "+author+"</b>&nbsp;&nbsp;&nbsp;");
}
setQuote(fors);
var y;

//    $(".bet").unbind().click(function() {


function changeActivity(){
		// PROBABILITY
		// id - 2 :: 20%
		// id - 1 :: 30%
		// id - 0 :: 50%
		thenum = randomNumber(1,100);
		thechosenone = randomNumber(0, ACTIVITIES.length-1);
		
		var cato;
		if(thenum <= 50) cato = 0;
		else if(thenum > 80) cato = 2;
		else cato = 1;
		
		for(x = 0; x<ACTIVITIES.length; x++){
			
			if(ACTIVITIES[thechosenone][4]-0 == cato) break;
			else{
				if(thechosenone == ACTIVITIES.length-1) thechosenone = 0;
				else thechosenone++;
			}
		}
		CURRENTACTIVITY = ACTIVITIES[thechosenone];
				$("#offActivity").html(lineAdaptedText(CURRENTACTIVITY[0], 15));
				$("#offNumber").html(CURRENTACTIVITY[3]);
		}
			function actionate(){
			show("changeactivitybefo");
			
			$(".contentto").animate({
			height: "100%" 
			}, 1000);

			setTimeout(function(){	
			show("activityDO");
	
			g = getItInPast(CURRENTACTIVITY[0].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase());
			$("#ttitle").html(lineAdaptedText( "Have you "+g+"?" ,15));
			$("#tinsiration").html("<i>"+CURRENTACTIVITY[2]+"</i> "+ CURRENTACTIVITY[1]);
			show("activityDO");
			$("#yesimdone").off().on('click', function() {
				earnSmiles(CURRENTACTIVITY[3]-0);
				changeActivity();
			});
			$("#justcancel").off().on('click', function(){

			show("changeactivitybefo");
						if($("#forer2").height()-0 > 26){
								$(".contentto").animate({
								height: "69%" 
								}, 1000);
						}
						else{
								$(".contentto").animate({
								height: "68.3%" 
								}, 1000);
						}
						
		
			setTimeout(function(){show("main");}, 1000);

			changeActivity();
			});
			}, 1000);
			}
var npo = true;

	function earnSmiles(smilesToEarn){
	$("#smilesjustearnt").html("+"+smilesToEarn+" Smiles!");
	$("#thesmileinspiration").html(GOODPHRASES[randomNumber(0, GOODPHRASES.length-1)]+"!");
	
	var audio = document.getElementById("panelSound");
	audio.play();

		show("freshsmiles");
	 y = true;
	var acre = 0;
	$("#ok").off().on("click" , function(){
		acre++;

				show("changeactivitybefo");
						if($("#forer2").height()-0 > 26){
								$(".contentto").animate({
								height: "69%" 
								}, 1000);
						}
						else{
								$(".contentto").animate({
								height: "68.3%" 
								}, 1000);
						}
		
				setTimeout(function(){
					show("main");
					var audio = document.getElementById("movingSound");
					audio.play();
				}, 1000);


		var totallity = smiles+smilesToEarn;
		cpr = limit;

	if(totallity >= cpr){
		npo = false;
	y = false;

		// Update vars				
			smiles = totallity-cpr;						
			level++;
			fors = level-1; 
			limit = LEVELS[fors][2];
			limit -= 0;
			percentDone = (smiles/limit)*100;
			quote = LEVELS[fors][1]+" ";
		    completeQuote = quote + name;
		    htmlQuote = quote +"<b>"+name+"</b>";
			set("level", level);
			set("smiles", smiles);
	// Vars updated
		
		$("#bar2").delay(1000).animate({
			width: "100%"	 
			}, 800);
				
		setTimeout(function() {
	$("#bar2").css("borderRadius", "0");
	}, 1800);

		$("#theofirst2").html('');
		$("#theosecond2").html('');
		setTimeout(
  function() 
  {
	  f = $("#forer2").height();
	  f-=0;
	  $('#forer1').html(" ");
	  $('#forer2').html(" ");
	  $('#forer3').html(" ");
	  $("#progress1").css("margin-top",f+10+"px");
	  $("#progress3").css("margin-top",f+10+"px");
	  $("#progress2").css("margin-top",f+10+"px");


				
  }, 1300);
  $("#smiler").css("background", $("#bar2").css("background"));
  $("#smiler").css("color", getContrast($("#bar2").css("background")));

			// "#bar,

			$("#bar2").delay(1300).animate({
			position: "absolute",
			margin: "-90px 0 0 0",
			height: $(window).height() + 50 +"px"
			}, 2000);
			
			
	setTimeout(function(){
	var audio = document.getElementById("newlevelSound");
	audio.play();
	}, 2100);
			  pas = [];
			  

			  //

		
			which = 2;
  
				 $("#content-levelpassing").css("display","none");
				 $("#congratulationsover-levelpassing").css("display","block");
setTimeout(

		function() 
		  {
				show("smiler");
	
				setTheme(fors);
  				  },5000 );

							  $(".nextnavigator").off().on('click',function(){
				 if(which == 2){

				 $("#congratulationsover-levelpassing").css("display","none");
				 $("#content-levelpassing").css("display","block");
 		
				$("#thelevelidentifier").html("Level "+level);
				 $("#theonequote").html('This level be kind "<i>'+htmlQuote+'</i>"');
				 $("#colore1").css("background","#"+LEVELS[fors][0][0]);
				 $("#colore2").css("background","#"+LEVELS[fors][0][1]);
				 $("#colore3").css("background","#"+LEVELS[fors][0][2]);
				 $("#colore4").css("background","#"+LEVELS[fors][0][3]);
 				 
				which=3;

				 }
				 else if(which == 3){
					 /*
					 
	#progress{
	width: 100%;
	height: 30px;
	background: lightgray; 
}
	#bar{
	width: 80.8%;
	height: 100%;
	background: red;
	border-radius: 0 100px 100px 0;
	
					 */
					 				 $("#congratulationsover-levelpassing").css("display","none");
				 $("#levelup-levelpassing").css("display","none");
				 $("#content-levelpassing").css("display","none");

					 
					 $("#progress1").css("width","100%");
					 $("#progress1").css("height","30px");
					 $("#progress1").css("background","lightgray");
					
					 $("#progress3").css("width","100%");
					 $("#progress3").css("height","30px");
					 $("#progress3").css("background","lightgray");
	
					 $("#progress2").css("width","100%");
					 $("#progress2").css("height","30px");
					 $("#progress2").css("background","lightgray");

					  $("#progress1").css("margin-top","0");
					  $("#progress3").css("margin-top","0");
					  $("#progress2").css("margin-top","0");

					 $("#bar2").css("position","static");
					 $("#bar2").css("borderRadius","0 100px 100px 0");
					 $("#bar2").css("width","0%");
					 $("#bar2").css("height","100%");
					 $("#bar2").css("margin","0");
					 

					 $("#bar1").css("position","static");
					 $("#bar1").css("borderRadius","0 100px 100px 0");
					 $("#bar1").css("width","0%");
					 $("#bar1").css("height","100%");
					 $("#bar1").css("margin","0");
					 
					 $("#bar3").css("position","static");
					 $("#bar3").css("borderRadius","0 100px 100px 0");
					 $("#bar3").css("width","0%");
					 $("#bar3").css("height","100%");
					 $("#bar3").css("margin","0");
					 setQuote(level);
					 				 which++;

					 							
 					npo = true;	
					updateLoggingBar(smiles, limit, level);

					show("main");
					

					quoter();
					$("#bar2").css("width", "0");
					
					$("#bar2").delay(1000).animate({
						width: percentDone + "%"
					});
					
					$("#bar1").css("width", percentDone + "%");
					$("#bar3").css("width", percentDone + "%");

					
					
 }/* else if*/
		
						});/*-navigator click*/

			}else{
				if(npo){
		
		
		// Update vars
		smiles = smiles + smilesToEarn;	
				percentDone = (smiles/limit)*100;

			set("smiles", smiles);
		
		// Vars updated
		// alert();
		
			updateLoggingBar(smiles, limit, level);

		$("#bar2").delay(1000).animate({
		width: percentDone + "%" 
		}, 1000);	
		$("#bar1").css("width", percentDone + "%");
		setTimeout(function(){
		$("#bar3").css("width", percentDone + "%");
		}, 1100);
}}
	});
						// updateLoggingBar(smiles, limit, level);

	}
	
	
	
	
	function addNew(){
var TITLE;
var DESCRIPTION;
var INSPIRATION;
 smi = 0;
$("#actitle").val("");
$("#actdescription").val("");
$("#actinspiration").val("");
$("#range").val(2);


		show("addnewbefo");
		$(".contentto").animate({
		height: "100%" 
		}, 1000);
		farbe =  $("#b").css("background");	
		$("#theaddingcentral").css("background", farbe);
					setTimeout(function(){
function pan(){		

		show("theaddingcentral");
			$("#textfields").css("display","block");
			$("#smiledecider").css("display","none");
			$("#confirmer").css("display","none");
			$("#saymeit").html('&nbsp; New activity!  <acronym class="icon icon-close" id = "cancelAddProcess"></acronym>');
			
		/*
		<h3 class="thetitle CursiveScript levelpassinggroup">Congratulations!</h3>

<h4 class = "levelpassinggroup textoflevelpassing Cabrito">You're now on the next level of kindness!</h4>
<h3 class = "buttOn levelpassinggroup nextnavigator">Next!</h3>

		*/
		// $(".contentto").css("height","68.3%");
		$("#cancelAddProcess").click(function(){ // .off.on("click",function(){
			x = confirm("Do you really want to cancel? All the data will be lost!");
			if(x){
				
			show("addnewbefo");
						if($("#forer2").height()-0 > 26){
								$(".contentto").animate({
								height: "69%" 
								}, 1000);
						}
						else{
								$(".contentto").animate({
								height: "68.3%" 
								}, 1000);
						}
		
								setTimeout(function(){show("main");}, 1000);
			}});
		} pan();
		
		$("#nextAddProcess").click(function(){
			function pen(){		
			TITLE = $("#actitle").val();
			DESCRIPTION = $("#actdescription").val();
			INSPIRATION = $("#actinspiration").val();
			
			$("#textfields").css("display","none");
			$("#smiledecider").css("display","block");
			$("#confirmer").css("display","none");
			$("#saymeit").html('<acronym class="icon icon-left-nav" id = "backitup"></acronym>How many smiles?<acronym class="icon icon-close" id = "cancelAddProcess"></acronym>');

			$("#backitup").click(function(){
pan();
			});
	var item = document.getElementById('range');
	value = (item.value - item.min)/(item.max - item.min)
item.style.backgroundImage = [
'-webkit-gradient(',
'linear, ',
'left top, ',
'right top, ',
'color-stop(' + value + ', #007aff), ',
'color-stop(' + value + ', #b8b7b8)',
')'
].join('');
	document.getElementById("numa").innerHTML = this.value;

item.oninput = function () {
value = (item.value - item.min)/(item.max - item.min)
item.style.backgroundImage = [
'-webkit-gradient(',
'linear, ',
'left top, ',
'right top, ',
'color-stop(' + value + ', #007aff), ',
'color-stop(' + value + ', #b8b7b8)',
')'
].join('');
	if(this.value == "undefined") this.value = 2;
	document.getElementById("numa").innerHTML = this.value;
		smi = this.value;

};			
		$("#cancelAddProcess").click(function(){
			x = confirm("Do you really want to cancel? All the data will be lost!");
			if(x){
			show("addnewbefo");
							if($("#forer2").height()-0 > 26){
								$(".contentto").animate({
								height: "69%" 
								}, 1000);
						}
						else{
								$(".contentto").animate({
								height: "68.3%" 
								}, 1000);
						}
		
								setTimeout(function(){show("main");}, 1000);
			}});
		} 
		acttt = $("#actitle");
		acttd = $("#actdescription");
		thetruth = acttt.val() == "" || acttd.val() == "";
		
		if(!thetruth)pen();
		else{
			
			if(acttt.val() == "") alert("Please write a title!");
			else alert("Please write a brief description.");
		}
				$("#bextAddProcess").click(function(){
						function pin(){
														$("#saymeit").html('<acronym class="icon icon-left-nav" id = "backitup"></acronym>Confirm<acronym class="icon icon-close" id = "cancelAddProcess"></acronym>');
		$("#cancelAddProcess").click(function(){
			x = confirm("Do you really want to cancel? All the data will be lost!");
			if(x){
			show("addnewbefo");
						if($("#forer2").height()-0 > 26){
								$(".contentto").animate({
								height: "69%" 
								}, 1000);
						}
						else{
								$(".contentto").animate({
								height: "68.3%" 
								}, 1000);
						}
		
								setTimeout(function(){show("main");}, 1000);
			}});
				$("#backitup").click(function(){pen();});

				$("#smileconfirmer").html("Smiles: "+smi);
				$("#descriptionconfirmer").html("Description: "+DESCRIPTION);
				$("#titleconfirmer").html("Title: "+TITLE);
				$("#inspirationconfirmer").html("Inspiration: "+INSPIRATION);
	
				$("#textfields").css("display","none");
				$("#smiledecider").css("display","none");
				$("#confirmer").css("display","block");
				
				} pin();
			// darum	
			fafa = true;
			$("#savethisactivity").click(function(){
			if(fafa){
				
				var audio = document.getElementById("panelSound");
				audio.play();
				alert('Success! \n "'+TITLE+'" activity created!');
			var qq;
			if(INSPIRATION != "") qq = [TITLE, DESCRIPTION, INSPIRATION, smi, 2];
			else qq = [TITLE, DESCRIPTION, "", smi, 1];
			
			USERCTIVITIES.push(qq);
			ACTIVITIES.push(qq);
			setActivity(ACTIVITIES.length-1);

			
			var pra = [];
			for( var x = 0; x<USERCTIVITIES.length; x++){
				pra[x] = JSON.stringify(USERCTIVITIES[x]);
			}
			trx = JSON.stringify(pra);
			set("usertivities", trx);
			
			show("addnewbefo");
						if($("#forer2").height()-0 > 26){
								$(".contentto").animate({
								height: "69%" 
								}, 1000);
						}
						else{
								$(".contentto").animate({
								height: "68.3%" 
								}, 1000);
						}
								setTimeout(function(){show("main");}, 1000);
			fafa = false;
			}
			});
			
			
				}
				);
				});
		

			}, 1000);
		
	}
	
$("#adder").click(function(){
addNew();
});

	}



function registry(){

	show("welcome");
		$("#mnBtn").click(function(){
		show("registration");
		});
		
$("#formal").submit(function(){
user = $("#username").val();

	
	rna = set("name", user);
	rle = set("level", 1);
	rsm = set("smiles", 0);
	userIsIn(rna, rle, rsm);		
				
});
	$("#go").click(function(){
		user = $("#username").val();

	
	rna = set("name", user);
	rle = set("level", 1);
	rsm = set("smiles", 0);
	userIsIn(rna, rle, rsm);		
				
				});

	}
function start(){
if(exist("name")){
	rna = get("name");
	rle = get("level");
	rsm = get("smiles");
	rpd = get("description");
	userIsIn(rna, rle, rsm);		
} else{
	registry();
}
}

function getAllIntoArrays(){
	if(exist("usertivities")){
		u = JSON.parse(get("usertivities"));
		//u.split(",");
		for(p = 0; p < u.length; p++){
			USERCTIVITIES[p] = JSON.parse(u[p]);
		}
		hop = ACTIVITIES.length;
		
		// USERCTIVITIES = u;
		ACTIVITIES = ACTIVITIES.concat(USERCTIVITIES);

	}
	else{
		
	}

}


 function main(){
	start();
}

// document.addEventListener("resume", checkNetwork, false);

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
	$(function() {
	main();
	});
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
};


