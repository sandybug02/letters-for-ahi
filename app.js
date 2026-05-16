// ── FRIEND COLORS ──
const friendColors = [
    { border: '#b5451b', bg: 'rgba(181,69,27,0.12)', text: '#b5451b' }, // terracotta
    { border: '#3a8fb5', bg: 'rgba(58,143,181,0.12)', text: '#3a8fb5' }, // sky blue
    { border: '#6b7c3a', bg: 'rgba(107,124,58,0.12)', text: '#6b7c3a' }, // olive
    { border: '#d4622a', bg: 'rgba(212,98,42,0.12)', text: '#d4622a' }, // warm orange
    { border: '#a07828', bg: 'rgba(160,120,40,0.12)', text: '#a07828' }, // golden
];

// ── FRIENDS & LETTERS ──
const friends = [
  {
    name: "Ahi, I'm your father (in Vader's voice)",
    letter: "May the force be with you! Always!! You'll need it to eat lots of cake and cookies, drink and dance, and travel the galaxy!\n\nHappy b'day, you will have!!\n\nYo(u)-da best!!"
  },
  {
    name: "Sihi",
    letter: "Hallooo AHI. Wow I'm thinking about the first time we met all of those years ago. Like genuinely YEARS AGO. When I met you, you had the biggest smile with the sweetest personality and to this day you are still that person. Everyone I've ever met who knows you says the same things, and it's always, always positive. You have so so sooo many people that love you and I am so proud to say I am one of the many. I'm so very grateful that we have gotten closer in the last few years and you are genuinely such a good friend. I hope you have the happiest of birthdays and I'm VERY happy you are throwing your party at mine because DUH of course I would love to host my wonderful best friend's 22nd perfectly perfect birthday party for the perfectly perfect person. Thank you for being you, I wouldn't have it any other way. I looove you the most Ahi and HAPPY FREAKING BIRTHDAY❤️‍🔥❤️‍🔥"
  },
  {
    name: "Mumma (Aarti)",
    letter: "Ahi Sona,\n\nMay you soar high & fulfill all your dreams. Love that you are always ready to face the change & find your path. You are kind, caring, sensitive and at the same time straight forward when giving feedback.\n\nYou care about friendships & make every effort to give it your best. I will always remember things unsaid, done by you to make me feel taken care of.\n\nMy pleasure to be your mother & friend. You are always loved more than you know. Thankful to God for sending this beautiful soul walking with me this lifetime."
  },
  {
    name: "Brad",
    letter: "Yooooo barcelona happy 22nd bruh! You really aunty age now gah damn. I better not hear you ass call me unc ever again. But nah fr I'm glad we became friends this year because you are one of those people that are unintentionally funny fr. And plus your always down to take a shot so thats an added bonus. Anyways get littt today and light a cig for me just for the wibes. Whenever you in barca lmk I gotchu with their most famous pack like you always yapping about. Happy 22nd!!!"
  },
  {
    name: "Jackie",
    letter: "my dearest sweet guardian angel ahi,\n\noh how i love you so!!! thanks for 10+ years of laughter and memories, i can't wait to see what 22 has in store for us. i hope this year brings you lots of travel and beautiful trips like you've always wanted, and i hope somewhere in there i get a chance to visit u wherever in the world ur at 🤩 im so proud of everything you accomplished this year, and im so thankful that through every milestone we've been at each other's side :) Happiest of birthdays to you my sweet friend, it's been an honor to be around for this long.\n\nlove,\njackie"
  },
  {
    name: "Samiam",
    letter: "happy 32nd birthday unc! just kidding i know it's big 22. i hope it treats you well and hope you discover new places to travel. once i'm able to WE are going barcelona and WE are getting huzz (male only).\n\nhappy birthday again and i promise we will put you in a retirement home soon"
  },
  {
    name: "Varun Kundur",
    letter: "Dear Ahi,\n\nHAPPY 22nd BIRTHDAY!! It feels like just yesterday when we were walking around Charlotte's campus when you were moving in freshman year. It's always a joy to be around you and I love that you always try to get activities going and are always down to do recreational activities. You know how to balance work and having fun and that's something I try to learn and adopt from you every day. I'm so excited to celebrate the many more birthdays to come and I wish you good luck with everything!\n\nHAPPY BIRTHDAY AHI!!!!!"
  },
  {
    name: "Nan",
    letter: "Happy 22nd birthday!! I'm so grateful that QCI brought us together. Even though we weren't super close at first, I feel like we got so much closer by the end of the year, especially when you spent last summer in Charlotte interning. Getting to know you more made me realize how lucky I am to have such a loving and caring friend in my life. You are genuinely the type of person who would drop anything to be there for the people you care about, and that's something I admire so much about you.\n\nI love how many passions we share, from our love for Canva and North Italia to constantly talking about all the places we want to travel to (still hoping we can make it back to Spain together ONE DAY). No matter what we're doing, you somehow make every hangout so fun, whether it's a simple night in just chilling and watching TV, getting ready to go out, or the pregames that always turn into memories of their own. I also love that we can trauma bond over certain life events LOL, somehow you always make even the chaotic moments feel lighter.\n\nHere's to more last minute concerts, more pregame photoshoots, more plane nights, and continuing to feed our souls with good Italian food. I'm so thankful for our friendship and all the memories we've already made, and I know there are so many more ahead of us. I hope 22 brings you nothing but happiness, unforgettable memories, and everything you deserve. Love you lots and can't wait to celebrate you!!"
  },
  {
    name: "Who in the fuck (SISTER SIA)",
    letter: "HAPPY BIRTHDAY UNC. you're an okay older sister ig... JK thanks for being my built in best friend and always being there for me. also thanks for being the realest person in my life bc i can ALWAYS count on you to tell me the truth and give me actual advice instead of telling me what i want to hear.\n\ni love when we drive around (notice how i said WE since now i can drive us) and get our fun little drinks and just talk for literal hours in the honest parking lot while waiting for our food. thanks for the BAJILLION rides and letting me steal ur clothes (even tho i think you steal my clothes more).\n\nI LOVE YOU A LOT AND HAVE THE BEST BIRTHDAY (ig) and ill miss you a lot when you move to miami or whatever other supa cool place you move to"
  },
  {
    name: "Praneth",
    letter: "HAPPY BIRTHDAY AHI!! You are the wisest elder in the group pho real and I enjoy listening to your tea and analysis during DBs.\n\nEven though you moved out of your apartment at charlotte you better come through hella next year. We all gonna get super lit at your bday and have so much fun!\n\nAnyways HAPPY BDAYY!!! 🎉🎉🎉🥳🥳🥳🥳"
  },
  {
    name: "Rags",
    letter: "HAPPYYYYY BIRTHDAYYYYYZ AHIII my tuna. I deadass can't believe you're 22 I feel like just yesterday we were in elementary school and then again on our middle school bus annoying the fuck out of you.\n\nYou are one of the sweetest baddest and smartest person I have ever met. I am so glad to have you in my life. I deadass don't know what i would do without you.\n\nI am so appreciative of you always trying your best to come down to ECU even when youre busy. You don't know how much that means to me.\n\nI love you so much and you deserve everything in life and to see everything across the globe. I have never been into traveling until ur passion of seeing the world struck me. I love sending tiktoks to u and i can only send them to you cause if it's anyone else it would've been wraps a while ago. Ok i'll stop yapping but we need to be out and about on the streets soon and start trolling. I love you so so so much and I hope you have the best birthday even in the midst of one of most major events in your life happening to you."
  },
  {
    name: "Sapna",
    letter: "AHII! Happiest Birthday to the most beautiful girl💖 I'm constantly being inspired by your creativity and driven nature you are so special and there is honestly no one like you.\n\nI am so glad we got to be on the same dance team for that one semester you are such a great role model and you taught with so much passion.\n\nYou put so much effort and love into your relationships and we're is so lucky to have a friend like you in our lives🫶 I'm always sending so much love 💗"
  },
  {
    name: "Vis",
    letter: "Ahi,\n\nIf you told little freshman year me that I would end up being roommates and best friends with my captain I would've laughed.\n\nBut words cannot explain how thankful I am that it turned out to be true. I have never seen anyone as selfless and caring as you. You deserve everything and more in life and I love you so so so much (even though you make me cry with your sad ass TikToks).\n\nI will forever reminisce about the days you me and sanju lived together and we will definitely be telling our kids all the horror stories that we endured together.\n\nI can't wait to celebrate many more birthdays with you!!!\n\nLove- Vis"
  },
  {
    name: "Shaila ✈️🌝😘👯‍♀️",
    letter: "HAPPY HAPPY 22 AHI! I love you SO much, if a big was ever a big to a little it would be you and me I'm SO glad I have you 🥹.\n\nI can't wait for even more abroad travels, abroad baddies, drinking and dancing around the world, and SO MANY good eats!\n\nI hope you had the best birthday and know that you are surrounded by an insane amount of love.\n\nMWAH I LOVE YOU LOTS!"
  },
  {
    name: "Kevin",
    letter: "HAPPY 22ND BIRTHDAY AHI!!! We will miss you in the CLT and thanks for all the alc runs!"
  },
  {
    name: "Jasmine",
    letter: "Ahi (aka 📸sniper) is genuinely one of the most caring, funniest, and most BEAUTIFUL people I've ever had the privilege of knowing. Even though I don't get to see her as often as I wish I could, every memory I have with her is truly memorable and never anything less than a good time. Ahi is so full of life, joy, and passion, and she somehow has a way of turning even the simplest moments like sitting on the couch into the most fun ever.\n\nI remember crashing at my cousin Mia's place often while I was in Charlotte and how Ahi made me feel completely at home and welcome from the start. Ahi drove all the way to butt fuhh nowhere Greenville just to surprise me for my birthday, which says everything about the kind of person she is.\n\nShe's truly the definition of an amazing friend and human being, and I'm so, so excited that I get to celebrate her and the incredible person she is on her SPECIAL DAYY AHHHHSJDJJS!!!🎊🎂💗"
  },
  {
    name: "Pratham Mathapati",
    letter: "HAPPYYY 22ND BDAY AHIII, you hella aunty now, but anyways it's crazy how long we've been friends now and I can definitely say you're one of the most thoughtful people I know and a great friend to literally everyone.\n\nIt's always a great time hanging out and everyone knows it's gonna be a hella crunk night when you're there and I swear something entertaining happens which can't be a coincidence🐬\n\nIt's funny to think my first impression of you was honestly you being scared of me but now you be scaring me even more with those damn tomatoes unfortunately, but yeah from you visiting UMD which feels like a while ago to all the CLT trips it's been amazing getting to know you and becoming friends and I hope you have a great 22nd GET HELLA LITTT and please leave the bloody marys behind this year"
  },
  {
    name: "Ana",
    letter: "HAI POOKIE BEAR!!!! Happy 22nd birthday you gorgeous gal!! I miss you so much and hope you get super litty for your big day!\n\nYou're such an incredibly caring and silly and wonderful woman, thanks for always being the crazy mom of the group!\n\nMWAHH"
  },
  {
    name: "Anisha pretty eyelash",
    letter: "Dear Ahi,\n\nWriting this letter is honestly an instant serotonin boost because I get to talk about why you're so important to me and thinking about the relationship we have truly makes my day. I was thinking about what to write about and I realized you have never heard the story of our friendship from my point of view, so let me give you a short recap. In honor of your 22nd birthday, let me take you back to the year 2022 (-1) :) Meeting you officially at dicky's birthday party and bonding so fast over our shared annoyance with you know who made me realize how easy it would be to be friends with you. You were so approachable and I could tell that the reason you had so many friends was because you truly made an effort to bond with everyone to make them feel safe around you. Our friendship started developing when we started dancing together at CIA. I remember both of us making the same stupid jokes and bonding over little things at practice which led to us getting close super quick. I'm going to pause the bhangra timeline for a second to talk about THE CUTEST PICTURE WE EVER TOOK at my 16th birthday. I genuinely love that picture so much because I feel like it just shows how we are around each other and also because we just look so cute. Fast forwarding to derby, this is where I realized that you truly were such a good friend to me because I was so upset to let you leave for college. I felt like you were getting taken away from me at such a peak point in our friendship and I was extremely scared that we weren't going to be able to keep up with the distance, but little did I know that the distance is actually what brought me closer to you. You made such an effort to keep in touch and be a part of my life that I forgot all about the fact that you were two hours away from me. From random feng cha hangouts to you making time to stop by at afterparties, you reassured me that our friendship held importance to you. Thankfully, the universe led me back to you at Charlotte and the rest is history. A huge reason as to why Charlotte became home so easily for me is 10000% you. You always invited us to parties and new people which helped us all miss home a little less. Spending time with you on QCI unlocked a new level in our friendship because we were able to see that our morals and views on things were so aligned. We clicked so well and there's no better way to describe it.\n\nAll I have to say right now is that I'm beyond grateful to have someone so thoughtful, caring, and honest as my best friend. You make such an effort to find new ways to show the people you love exactly how much you love them. Everyone is lucky to have a friend like you and should never take it for granted. Understanding your love language has been super fun and I hope you love our take on it. I hope you have the greatest time celebrating your birthday because you deserve all the great things this world has to offer and so much more. YOU are my shot of espresso and I cannot wait to see how you continue to live your life with that spirit.\n\nI love you beyond words, HAPPY HAPPY HAPPY 22ND!!! <3<3<3\n\nLove, Anu ;)"
  },
  {
    name: "Vansh",
    letter: "Hi ahi,\n\nHappy 22nd Birthday!\n\nI've truly enjoyed getting to know you through our twinlakes roadtrips and 50 awkward pictures at pregames we somehow always take.\n\nIt was very inspiring to watch you graduate from the edible to the muha fighting through your asthma.\n\nHope you have an awesome birthday and an amazing year traveling the world now that you are 300 years old, I'll still have to text you if I need help with canva so please remove your dnd. 😊"
  },
  {
    name: "Ansh",
    letter: "Oh hey I see you clicked on my tab! welcome:D today, we will be going through all the reasons of why I'd chain you down in my basement and never let you see the sun ever again:)\n\n1. You have valuable information on everybody in your life and can therefore create clones of each person and input every minute detail into their character expression and take over the world. You gain this information by noticing and taking mental note of the tiniest details in people. Being able to give these clones their preferences regarding color, snacks, and other surface level favorites is one thing, but you are able to extract the exact essence of one's living; the exact formula for creating a situation that puts that person at their highest oxytocin, serotonin, and dopamine levels. With this intel, your clones will never question your role in their existence and blindly follow you and your mission.\n\n2. After testing out your cloning experiment on us, people would assume you cloned yourself multiple times to be able to exist in a multitude of locations at once. By doing this, you will accumulate more followers intrigued by your attentiveness to their situation, and you will rise to the top. However, you will not need to clone yourself sheerly because of your preexisting ability to replicate the same amount of attentiveness to each person on your own. By always being able to say the right thing at the right time, you will keep your supporters close and gain traction towards a united and devoted army. The level of perception that you hold for each person should be impossible, but you have made it possible.\n\n3. Nothing will stop you from your vision. Nothing. What you want to happen will happen, no matter the time, effort, and energy required. You will see to it that your initiatives are accomplished and that you have exceeded any expectations of your delivery. You seemingly have inability to refrain from critical thinking and will always ponder beyond the information given. This thirst for ambition is threatening and will outrun any competitor in the game. Any game. You have a never ending supply of diligence, and therefore, you will surely take over the world.\n\n. . . . . . . . . . . . . . . .\n\nOf course, you would undoubtedly escape instantly if I were to chain you down in my basement, which is why I'd have to resort to joining your army and following you wherever you decide to go. But I would happily do so. Ahi you're truly one in a 8.3 billion and I would never want you to be chained in anyone's basement. You are outstandingly perfect the way you are and I cannot believe I get to call you one of my bestest friends. I love you from our galaxy to the next galaxy and back. If you ever do take over the world, I'll get the pleasure of telling everyone I told you so. Go travel the world and start an army and rise to power, and don't forget about me❤️\n\nLove you Jumbo."
  },
  {
    name: "Lucky",
    letter: "(Drunk Lucky)\nI love Ahi bro she mad chill. She drinks fireball which is cool ash but lowkey we're retiring. Fr tho she's actually so cool. She be traveling hella and just living life to the fullest. If only she was with us more often, we'd have sm more fun. Overall i'm tryna be like Ahi.\n\n(Sober Lucky)\nHi Ahi, happy birthday!!!!! I can't believe you're 22 damn. This year I hope u fulfill all of your traveling dreams and hope you finally find a mans who is normal. My favorite memory with you is everytime we go downtown and somehow I end up in yalls photo booth pics. It's always so random but a blast everytime. Also you and your digicam are so insanely clutch thank you for all the flicks🙏. LETS GET LIT ON SATURDAY, HAPPY BIRTHDAY!🔥🔥"
  },
  {
    name: "Laasya Machineni",
    letter: "dear ahi,\n\nhappy birthday! over the last two years of knowing you, i have experienced so much joy from being around you. you radiate such beautiful energy, and i'm always so amazed by your intelligence and your ability to understand and be there for everyone. i have learned so much from you, and i'm so beyond grateful to have you in my life. you've made my college experience a thousand times better, and i'm gonna miss you so much. i hope you feel so loved and celebrated today because you are incredibly loved, and you deserve every bit of it.\n\nilysm 🫶"
  },
  {
    name: "Thanuj",
    letter: "Hey girlypop,\n\nUsually you're the one who's always writing letters and stuff, so I couldn't turn down the chance to write one back, especially after the THREE different grad gifts, including the massive basket. But this is how it always goes with us, you're like the most thoughtful person I've ever met, and for the past 8??? years you've never failed to surprise me with how often you come through.\n\nI actually don't know where to go with this wow. I remember trying to come up with a speech for your grad party in case you actually called me up, and there was literally too much stuff to cover. The other day after graduation I was talking to everyone about how much my life has changed from like 2022 to today. And I feel like everyone's consensus opinion was that EVERYTHING changed. So I sat down later and looked at the constants in my life and the only thing that has not changed since high school is the fact that you're always there. Whether it's driving down to Atlanta for my first summer since I clearly go insane every time I move, coming to pregame at our apartment MULTIPLE TIMES even though it was like an insanely stressful experience, driving back the morning of my graduation so that you could make it, then staying back afterwards to take pictures of me and my friends, or every other thing you've done for me over the years.\n\nAlthough our friendship has never been dependent on us living close to each other, it's going to be so crazy not having you in driving distance soon. I'm so glad you're entering this new travel era (come visit!) and I hope you find everything you're looking for and more.\n\nWell, happy birthday! 22 is going to be the best one yet. I'm so happy to have you in my life, and I can't wait for the future. I hope your birthday night and Europe trip go crazy.\n\nWITH LOVE\nThanuj - your most MOST favorite man friend"
  },
  {
    name: "Nik",
    letter: "Happy birthday Ahi! Thank you for buying us alc so many times and being a such a kind hearted person.\n\nWish I could be there to celebrate, but live it up and have fun!\n\nCheers 🥂"
  },
  {
    name: "Sanjna",
    letter: "HAPPY BIRTHDAY BEST FRIEND!! I hope 22 is amazing and perfect and you have the most fun today. I literally cannot imagine the last 4 years without you there for ALL the moments whether we were happy, free, confused, or lonely at the same time. From meeting in holshouser, to peak ucross days, to visiting other schools, to clearing out our apartment last month, and every miserable and magical moment in between there's no one else I'd rather have done it all with. Thank you for always being there for me :) I LOVE LOVE LOVE YOU and am SO grateful for our friendship. Sending so many virtual hugs untill I see you soon in your FAV PLACE. Let's keep living together and decorating and foster more cats and go to all the concerts in the world and romanticize our lives.\n\nHAVE THE BEST 22nd BIRTHDAY EVER 💕🩷💗💞💘💓💖💝"
  },
  {
    name: "Sujjay Karthikeyan",
    letter: "Hi ahi,\n\nFirstly, Happy Birthday! Secondly, thank you for being a great friend and someone who always gives good advice. Regardless of the topic, I feel your advice is valid and accurate and that's probably the biggest compliment I could give you.\n\nWishing you a wonderful 22 and hope you get to travel the world lots, nibble a fun amount, and party an insane amount!"
  },
  {
    name: "Shreya Gandi",
    letter: "Dear Ahi,\n\nHAPPY BIRTHDAY BSF!!! I can't believe you're turning 22. It literally felt like just yesterday we were seven yrs old walking home together from the bus. I've loved seeing us grow up together and being there for each other's milestones. You're basically like my sister at this point. I never open up to people but with you I can literally talk about the most random things for hours on end. You are such a thoughtful and loyal friend, which is shown through the community of friends that you have surrounded yourself with. Whenever someone comes up to me and says \"You're Ahi's friend\" I feel so proud and honored. My favorite thing about you is how much you value your friendships and make everyone feel so special. I still remember the video you made for me on my bday during covid or the melting pot surprise bc you know how much I hate gifts. I hope I can make your day as special as you do for others.\n\nHappy Birthday again!!! Love you so much\n- Shreya"
  },
  {
    name: "Mia Alberti",
    letter: "AHIII HAPPY FREAKING BIRTHDAY QUEEN!! I love you sososo much and thank you for being some an amazing friend❤️ I'm so lucky to have known you all these years and I would not have made it this far without you.\n\nI hope you 22 treats you well and I look forward to seeing what the year brings 💋"
  },
  {
    name: "Roop",
    letter: "balloons ahi!! can't believe it's already been two years since we first met #cp that was not real at all (blacked tf out)\n\nanywho i hope this year is everything that you want and can't wait to get lit with you again sewn cakes and candles💯"
  }, 
  {
    name: "Akshi",
    letter: "HAIII AHII!!! happy 22nd birthdayyy!! i love you so so much! you’re such a sweet soul and im so grateful to have u as my big. I love being around u, ur energy, and u always light up every room ur in! i love our cafe debriefs, pregames, going on random side quests, clipping ppl tg (oops) and just yapping for hours at end! im so grateful to have u in my life, and i can’t wait to see u so soon. have the best day ever and have sm fun in barca and europe 😛😛"
  }
];

// ── STATE ──
let active = 0;

// ── RENDER ──
function render() {
    const tabsEl = document.getElementById('tabs');
    const friendListEl = document.getElementById('friend-list');
    const authorEl = document.getElementById('author-name');
    const letterEl = document.getElementById('letter-body');
    const dividerEl = document.getElementById('divider');
    const pageCountEl = document.getElementById('page-count');

    // Tabs — cycle colors with %
    tabsEl.innerHTML = friends.map((f, i) => {
        const c = friendColors[i % friendColors.length];
        const isActive = i === active;

        return `
        <button
            class="tab ${isActive ? 'active' : ''}"
            onclick="setActive(${i})"
            style="${isActive ? `border-bottom-color:${c.border};color:${c.border}` : ''}"
        >
            ${f.name}
        </button>
        `;
    }).join('');

    // Sidebar friend list
    friendListEl.innerHTML = friends.map((f, i) => {
        const c = friendColors[i % friendColors.length];
        const on = i === active;

        return `
        <div
            class="friend-item ${on ? 'active' : ''}"
            onclick="setActive(${i})"
            style="${on ? `background:${c.border};border-color:${c.border}` : ''}"
        >
            <div
                class="friend-badge"
                style="
                    border-color:${on ? 'rgba(255,255,255,0.5)' : c.border};
                    color:${on ? '#fff' : c.text};
                    background:${on ? 'rgba(255,255,255,0.15)' : c.bg};
                "
            >
                ${f.name[0]}
            </div>

            <span
                class="friend-name"
                style="${on ? 'color:#fff8ee' : ''}"
            >
                ${f.name}
            </span>
        </div>
        `;
    }).join('');

    // Letter content
    authorEl.textContent = friends[active].name;
    letterEl.innerHTML = friends[active].letter.replace(/\n/g, '<br>');

    dividerEl.style.background =
        friendColors[active % friendColors.length].border;

    pageCountEl.textContent =
        `Letter ${active + 1} of ${friends.length}`;
}

// ── SET ACTIVE ──
function setActive(i) {
    active = i;
    render();
}

// ── INIT ──
render();

// ── PASSWORD ──
const PASSWORD = "crashoutgng"; // change this

let unlocked = false;

function showLock() {
  unlocked = false;
  let overlay = document.getElementById('lock-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'lock-overlay';
    overlay.innerHTML = `
      <div class="lock-box">
        <p class="lock-eyebrow">✦ Private Letter</p>
        <h2 class="lock-title">Enter Password</h2>
        <p class="lock-sub">This letter is locked with love.</p>
        <input class="lock-input" id="lock-input" type="password" placeholder="Password..." />
        <p class="lock-error" id="lock-error"></p>
        <button class="lock-btn" onclick="tryUnlock()">Open Letter</button>
      </div>
    `;
    document.querySelector('.letter-panel').appendChild(overlay);
  }
  overlay.style.display = 'flex';
  document.getElementById('lock-input').value = '';
  document.getElementById('lock-error').textContent = '';
  document.getElementById('lock-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') tryUnlock();
  });
}

function tryUnlock() {
  const val = document.getElementById('lock-input').value;
  if (val === PASSWORD) {
    unlocked = true;
    document.getElementById('lock-overlay').style.display = 'none';
  } else {
    document.getElementById('lock-error').textContent = 'Wrong password. Try again.';
    document.getElementById('lock-input').value = '';
  }
}

// Patch setActive to show lock on every switch
const _origSetActive = setActive;
setActive = function(i) {
  _origSetActive(i);
  showLock();
};

// Show lock on first load too
showLock();
