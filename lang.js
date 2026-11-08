/* English / Hindi switch.

   - The Hindi fonts are downloaded only when someone switches to Hindi. */
(function () {
  const STORAGE_KEY = 'wedding-lang';
  const FONT_URL = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Great+Vibes&family=Lato:wght@300;400;700&family=Noto+Serif+Devanagari:wght@400;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap';
  

  // [English text on the page, Hindi text]
  const PAIRS = [
  ["Abhishek & Priya's Wedding", "अभिषेक और प्रिया का विवाह"],
  ["Preparing Your Royal Experience...", "आपके लिए शाही अनुभव तैयार हो रहा है..."],
  ["Your browser does not support the audio element.", "आपका ब्राउज़र ऑडियो का समर्थन नहीं करता।"],
  ["A&P", "A&P"],
  ["Home", "होम"],
  ["Gallery", "गैलरी"],
  ["Family & Friends", "परिवार और मित्र"],
  ["Countdown", "काउंट-डाउन"],
  ["Schedule", "कार्यक्रम"],
  ["Varmala", "वरमाला"],
 ["Photo Booth", "फोटो बूथ"],
  ["Warmly Inviting You to the Grand Celebration of Our Marriage", "हमारे विवाह के भव्य उत्सव में आपका हार्दिक स्वागत है"],
  ["GM Resort", "जी.एम. रिसॉर्ट"],
  ["25 November 2026", "25 नवंबर 2026"],
  ["Abhishek & Priya", "अभिषेक और प्रिया"],
  ["Blessed by divine grace, uniting in eternal love like Ram & Sita", "ईश्वर की कृपा से आशीर्वादित, राम और सीता की तरह शाश्वत प्रेम में एक होते हुए"],
  ["Seeking Lord Ganesha's divine blessings for an auspicious beginning.", "शुभ आरंभ के लिए भगवान गणेश का दिव्य आशीर्वाद प्राप्त करते हुए।"],
  ["✨ Welcome to the Celebration of Abhishek & Priya · 25 November 2026 ✨", "✨ अभिषेक और प्रिया के उत्सव में आपका स्वागत है · 25 नवंबर 2026 ✨"],
  ["Our Precious Memories", "हमारी अनमोल यादें"],
  ["Curated moments floating and gracefully interacting in rhythmic harmony", "खूबसूरती से एक-दूसरे में ढलते हुए हमारे सबसे प्यारे यादगार पल।"],
  ["Pillars of Love & Blessings", "प्रेम और आशीर्वाद के स्तंभ"],
  ["Meet our beloved families and cherished squad making our union extraordinary", "हमारे प्रिय परिवार और अपनों से मिलिए, जो हमारे मिलन को अद्भुत बनाते हैं"],
  ["Our Families", "हमारे परिवार"],
  ["Friends & Siblings", "मित्र और भाई-बहन"],
  ["👑 Groom's Side 👑", "👑 वर पक्ष 👑"],
  ["Garg Family", "गर्ग परिवार"],
  ["\"Rooted in tradition, bounded by warmth & unconditional love\"", "\"परंपरा में जड़ें, स्नेह और निःस्वार्थ प्रेम से बंधे\""],
  ["Parents of the Groom", "वर के माता-पिता"],
  ["Father : Mr. Hardeep Kumar Garg", "पिता : श्री हरदीप कुमार गर्ग"],
  ["Mother : Mrs. Meenu Garg", "माता : श्रीमती मीनू गर्ग"],
  ["“Blessings from our ancestors and parents guide Abhishek as he steps into this sacred new chapter with Priya.”", "“पूर्वजों और माता-पिता का आशीर्वाद अभिषेक का मार्गदर्शन करे, जब वह प्रिया के साथ इस पवित्र नए अध्याय में कदम रख रहा है।”"],
  ["👑 Bride's Side 👑", "👑 वधू पक्ष 👑"],
  ["Bansal Family", "बंसल परिवार"],
  ["\"Enfolded in grace, laughter & eternal family affection\"", "\"अनुग्रह, हँसी और शाश्वत पारिवारिक स्नेह में लिपटे\""],
  ["Parents of the Bride", "वधू के माता-पिता"],
  ["Father : Mr. Raj Kumar Bansal", "पिता : श्री राज कुमार बंसल"],
  ["Mother : Mrs. Manju Bansal", "माता : श्रीमती मंजू बंसल"],
  ["“With joy-filled hearts, we welcome Abhishek into our family, celebrating love that binds two grand heritage lines.”", "“आनंद भरे हृदय से हम अभिषेक का अपने परिवार में स्वागत करते हैं, उस प्रेम का उत्सव मनाते हुए जो दो महान वंशों को जोड़ता है।”"],
  ["🏰 Family", "🏰 परिवार"],
  ["Family", "परिवार"],
  ["\"Generations of love, wisdom & shared heritage\"", "\"पीढ़ियों का प्रेम, ज्ञान और साझा विरासत\""],
  ["Uniting near and far to shower Abhishek and Priya with prayers for a lifetime of abundant happiness.", "दूर और पास से एकजुट होकर अभिषेक और प्रिया को जीवन भर की अपार खुशियों की प्रार्थनाओं से नहलाते हुए।"],
  ["⚜️ Siblings", "⚜️ भाई-बहन"],
  ["Siblings", "भाई-बहन"],
  ["\"Pillars of strength, grace & endless support\"", "\"शक्ति, गरिमा और अनंत सहयोग के स्तंभ\""],
  ["Standing shoulder to shoulder through every celebration, keeping traditions alive, melodies ringing, and spirits high.", "हर उत्सव में कंधे से कंधा मिलाकर खड़े, परंपराओं को जीवित रखते, धुनों को गूँजाते और उत्साह को ऊँचा रखते हुए।"],
  ["🕺 Groomsmen", "🕺 दूल्हे के साथी"],
  ["Groomsmen", "दूल्हे के साथी"],
  ["\"Partners in crime & high-octane baraat dance moves!\"", "\"शरारतों के साथी और बारात के धमाकेदार डांस!\""],
  ["Standing tall by Abhishek's side to bring non-stop energy, laughter, and unforgettable wedding celebration vibes.", "अभिषेक के साथ डटकर खड़े, लगातार ऊर्जा, हँसी और विवाह के अविस्मरणीय उत्सव का माहौल लाते हुए।"],
  ["🥂 Friends", "🥂 मित्र"],
  ["Friends", "मित्र"],
  ["\"Growing up together, cheering forever\"", "\"साथ बड़े हुए, हमेशा हौसला बढ़ाते रहे\""],
  ["From school days and early memories to this grand wedding mandap, these wonderful friends have shared every milestone.", "स्कूल के दिनों और शुरुआती यादों से लेकर इस भव्य विवाह मंडप तक, इन शानदार दोस्तों ने हर पड़ाव साझा किया है।"],
  ["🌟 Friends", "🌟 मित्र"],
  ["\"Unbreakable bonds & late-night sangeet rehearsals\"", "\"अटूट बंधन और देर रात की संगीत रिहर्सल\""],
  ["Stealing the spotlight with rhythmic dance moves, joyful laughter, and bringing legendary energy to every celebration.", "लयबद्ध नृत्य और आनंदमयी हँसी से सबका ध्यान खींचते और हर उत्सव में जबरदस्त ऊर्जा भरते हुए।"],
  ["✨ Cousins", "✨ चचेरे-ममेरे भाई-बहन"],
  ["Cousins", "चचेरे-ममेरे भाई-बहन"],
  ["\"Family ties & lifelong shared laughter\"", "\"पारिवारिक रिश्ते और जीवन भर की साझा हँसी\""],
  ["From childhood mischief to this glorious wedding milestone, our cousins fill every ceremony with warmth and unconditional love.", "बचपन की शरारतों से लेकर इस शानदार विवाह-पड़ाव तक, हमारे भाई-बहन हर रस्म को अपनेपन और निःस्वार्थ प्रेम से भर देते हैं।"],
  ["A Note from the Family", "परिवार की ओर से संदेश"],
  ["\"Like the sacred union of Ram and Sita, may this journey be filled with truth, devotion, and unending joy. We eagerly await your gracious presence to bless Abhishek and Priya.\"", "\"राम और सीता के पवित्र मिलन की तरह, यह यात्रा सत्य, भक्ति और अनंत आनंद से भरी रहे। अभिषेक और प्रिया को आशीर्वाद देने के लिए हम आपकी गरिमामयी उपस्थिति की प्रतीक्षा कर रहे हैं।\""],
  ["Counting Every Heartbeat", "हर धड़कन की गिनती"],

  ["Days", "दिन"],
  ["Hours", "घंटे"],
  ["Minutes", "मिनट"],
  ["Seconds", "सेकंड"],
  ["Heartbeats between two hearts, racing to forever", "दो दिलों के बीच की धड़कनें, हमेशा के लिए दौड़ती हुईं"],
  ["Wedding Schedule", "विवाह कार्यक्रम"],
  ["A magnificent celebration woven with sacred rituals, music, and vibrant joy", "पवित्र रस्मों, संगीत और जीवंत आनंद से बुना एक भव्य उत्सव"],
  ["Grand Evening", "भव्य संध्या"],
  ["Sangeet Celebration", "संगीत समारोह"],
  ["7:00 PM · 23 Nov 2026", "शाम 7:00 बजे · 23 नवंबर 2026"],
  ["A dazzling night of high-energy dance performances and royal feasts.", "ऊर्जा से भरपूर नृत्य प्रस्तुतियों और शाही दावत की एक शानदार रात।"],
  ["View Venue Map", "स्थान का नक्शा देखें"],
  ["View Map", "स्थान का नक्शा देखें"],
  ["View Invite", "निमंत्रण देखें"],
  ["Morning Ritual", "सुबह की रस्म"],
  ["Haldi Ceremony", "हल्दी की रस्म"],
  ["03:00 PM · 24 Nov 2026", "दोपहर 3:00 बजे · 24 नवंबर 2026"],
  ["Drenched in vibrant turmeric glow, joyful laughter, and familial blessings.", "हल्दी की चटक आभा, आनंदमयी हँसी और परिवार के आशीर्वाद में सराबोर।"],
  ["Sacred Union", "पवित्र मिलन"],
  ["Wedding Ceremony", "विवाह समारोह"],
  ["8:00 PM · 25 Nov 2026", "रात 8:00 बजे · 25 नवंबर 2026"],
  ["🔻Download Invite", "🔻आमंत्रण डाउनलोड करें"],
  ["Close", "बंद करें"],
  ["Invitation Card", "निमंत्रण कार्ड"],
  ["Invitation Card Preview", "निमंत्रण कार्ड पूर्वावलोकन"],
  ["आमंत्रण", "आमंत्रण"],
// ["Invitation", "आमंत्रण"]
  ["Sacred pheras, eternal vows, and divine blessings under the floral mandap.", "फूलों के मंडप के नीचे पवित्र फेरे, शाश्वत वचन और दिव्य आशीर्वाद।"],
  ["The Sacred 7 Vows & Varmala", "पवित्र सात वचन और वरमाला"],
  ["Walk through the authentic Saptapadi vows with Abhishek & Priya step by step!", "अभिषेक और प्रिया के साथ सप्तपदी के सात वचनों को कदम-दर-कदम देखें!"],
  ["Abhishek", "अभिषेक"],
  ["Priya", "प्रिया"],
  ["INTRODUCTION", "प्रस्तावना"],
  ["The Sacred Bond of Seven Steps", "सात कदमों का पवित्र बंधन"],
  ["Together, let us embark on the journey of life, sharing our joys, responsibilities, and eternal love.\" Click below to begin the 1st Phera.", "आइए, साथ मिलकर जीवन की यात्रा शुरू करें, अपनी खुशियाँ, ज़िम्मेदारियाँ और शाश्वत प्रेम बाँटते हुए।\" पहला फेरा शुरू करने के लिए नीचे क्लिक करें।"],
  ["🔥 Start Sacred Vows", "🔥 पवित्र वचन आरंभ करें"],
  ["Nourishment & Provision 🍚", "पोषण और भरण-पोषण 🍚"],
  ["Together we will share the food, nourishment, and financial responsibility to build a prosperous and healthy home.", "हम मिलकर भोजन, पोषण और आर्थिक ज़िम्मेदारी साझा करेंगे ताकि एक समृद्ध और स्वस्थ घर बना सकें।"],
  ["🔥 Take 1st Phera", "🔥 पहला फेरा लें"],
  ["Strength & Physical Wellness 💪", "शक्ति और शारीरिक स्वास्थ्य 💪"],
  ["Together we will cultivate physical and mental strength, supporting each other through all life's challenges.", "हम मिलकर शारीरिक और मानसिक बल विकसित करेंगे और जीवन की हर चुनौती में एक-दूसरे का साथ देंगे।"],
  ["🔥 Take 2nd Phera", "🔥 दूसरा फेरा लें"],
  ["Wealth, Prosperity & Spiritual Growth 🌟", "धन, समृद्धि और आध्यात्मिक उन्नति 🌟"],
  ["Together we will strive to earn honest wealth, practice charity, and grow in wisdom and spiritual devotion.", "हम मिलकर ईमानदारी से धन अर्जित करने, दान करने तथा ज्ञान और आध्यात्मिक भक्ति में आगे बढ़ने का प्रयास करेंगे।"],
  ["🔥 Take 3rd Phera", "🔥 तीसरा फेरा लें"],
  ["Family Joy, Happiness & Harmony 🏡", "पारिवारिक आनंद, सुख और सद्भाव 🏡"],
  ["Together we will bring joy, mutual trust, and deep respect to each other and our families.", "हम मिलकर एक-दूसरे और अपने परिवारों के प्रति आनंद, आपसी विश्वास और गहरा सम्मान लाएँगे।"],
  ["🔥 Take 4th Phera", "🔥 चौथा फेरा लें"],
  ["Noble Offspring & Legacy 👶", "श्रेष्ठ संतान और विरासत 👶"],
  ["Together we pray for noble, healthy children, and pledge to guide them with good values and unconditional love.", "हम मिलकर श्रेष्ठ और स्वस्थ संतान की प्रार्थना करते हैं और उन्हें अच्छे संस्कारों तथा निःस्वार्थ प्रेम से मार्गदर्शन देने का वचन लेते हैं।"],
  ["🔥 Take 5th Phera", "🔥 पाँचवाँ फेरा लें"],
  ["Longevity & Seasons of Life 🌸", "दीर्घायु और जीवन के हर मौसम 🌸"],
  ["Together we pledge to stand side-by-side through all seasons of life, sharing every joy and sorrow gracefully.", "हम जीवन के हर मौसम में साथ-साथ खड़े रहने और हर सुख-दुख को गरिमा से बाँटने का वचन लेते हैं।"],
  ["🔥 Take 6th Phera", "🔥 छठा फेरा लें"],
  ["Eternal Companionship & Friendship 🤝", "शाश्वत साथ और मित्रता 🤝"],
  ["We are now husband and wife, eternal companions and true friends bound by love, loyalty, and sacred trust.", "अब हम पति-पत्नी हैं, प्रेम, निष्ठा और पवित्र विश्वास से बंधे शाश्वत साथी और सच्चे मित्र।"],
  ["🌸 Exchange Varmala!", "🌸 वरमाला पहनाएँ!"],
  ["VARMALA & VOWS COMPLETE! 🎉", "वरमाला और वचन संपन्न! 🎉"],
  ["Abhishek & Priya are Officially Wed! 💖✨", "अभिषेक और प्रिया अब विवाह-बंधन में बंध गए! 💖✨"],
  ["By completing the seven steps, we have become companions for life. May our bond grow stronger with every passing day!", "सात कदम पूरे करके हम जीवन भर के साथी बन गए हैं। हमारा बंधन हर बीतते दिन के साथ और मजबूत हो!"],
  ["🔄 Replay Sacred Pheras", "🔄 पवित्र फेरे फिर से देखें"],
  ["Royal Photo Booth", "शाही फोटो बूथ"],
  ["Capture your special memory at Abhishek & Priya's Wedding!", "अभिषेक और प्रिया के विवाह में अपनी खास याद कैद करें!"],
  ["Camera Access Required", "कैमरा अनुमति आवश्यक है"],
  ["Tap below to enable your camera and capture your memory!", "अपना कैमरा चालू करने और याद कैद करने के लिए नीचे टैप करें!"],
  ["Enable Camera", "कैमरा चालू करें"],
  ["📸 Turn Camera On", "📸 कैमरा चालू करें"],
  ["🔄 Flip Camera", "🔄 कैमरा पलटें"],
  ["📁 Upload Photo", "📁 फोटो अपलोड करें"],
  ["⬇️ Snap & Download", "⬇️ फोटो खींचें और डाउनलोड करें"],
  ["Camera is off.", "कैमरा बंद है।"],
  ["📹 Turn Camera On", "📹 कैमरा चालू करें"],
  ["📹 Turn Camera Off", "📹 कैमरा बंद करें"],
  ["Requesting camera permission...", "कैमरा की अनुमति माँगी जा रही है..."],
  ["Camera active! Pose and tap Snap & Download.", "कैमरा चालू है! पोज़ दें और फोटो खींचें और डाउनलोड करें पर टैप करें।"],
  ["Camera unavailable. You can tap 'Upload Photo' to select an image!", "कैमरा उपलब्ध नहीं है। आप 'फोटो अपलोड करें' पर टैप करके तस्वीर चुन सकते हैं!"],
  ["Switched to front camera.", "फ्रंट कैमरा चालू किया गया।"],
  ["Switched to rear camera.", "रियर कैमरा चालू किया गया।"],
  ["Failed to switch camera view.", "कैमरा बदलने में विफल।"],
  ["Camera is turned off.", "कैमरा बंद कर दिया गया है।"],
  ["Photo loaded! Tap 'Snap & Download' to generate your frame.", "फोटो लोड हो गई! फ्रेम बनाने के लिए 'फोटो खींचें और डाउनलोड करें' पर टैप करें।"],
  ["High-resolution royal photo downloaded successfully!", "उच्च गुणवत्ता वाली शाही फोटो सफलतापूर्वक डाउनलोड हो गई!"],
  ["25 November 2026 · GM Resort", "25 नवंबर 2026 · जी.एम. रिसॉर्ट"],
  ["We eagerly await your blessings and gracious presence", "हम आपके आशीर्वाद और गरिमामयी उपस्थिति की प्रतीक्षा करते हैं"],
  ["Crafted & Developed by", "निर्माण एवं विकास"],
  ["🎵 Play Music", "🎵 संगीत चलाएँ"],
  ["🎶 Pause Music", "🎶 संगीत रोकें"],
  ["🎉 Congratulations! 🎉", "🎉 बधाई हो! 🎉"],
  ["❤️ Abhishek & Priya ❤️", "❤️ अभिषेक और प्रिया ❤️"],
  ["Open Menu", "मेनू खोलें"],
  ["Previous", "पिछला"],
  ["Next", "अगला"],
  ["Havan Kund", "हवन कुंड"],
  ["Abhishek & Priya Together", "अभिषेक और प्रिया साथ में"],
  ["Uploaded Preview", "अपलोड किया गया पूर्वावलोकन"],
  ["Royal Wedding Prop Frame", "शाही विवाह फ्रेम"],
  ["A&P | Abhishek & Priya - Wedding Invitation", "अभि & प्रिया | अभिषेक और प्रिया - विवाह निमंत्रण"]
  ];

  // [English regex, Hindi replacement, Hindi regex, English replacement]
  const PATTERNS = [
  ["^SACRED PHERA (\\d) OF 7$", "पवित्र फेरा $1 / 7", "^पवित्र फेरा (\\d) / 7$", "SACRED PHERA $1 OF 7"],
  ["^Memory (\\d+)$", "यादें $1", "^यादें (\\d+)$", "Memory $1"]
  ].map(([a, b, c, d]) => [new RegExp(a), b, new RegExp(c), d]);

  const EN2HI = Object.create(null);
  const HI2EN = Object.create(null);
  PAIRS.forEach(([en, hi]) => { EN2HI[en] = hi; HI2EN[hi] = en; });

  let lang = 'en';
  try { if (localStorage.getItem(STORAGE_KEY) === 'hi') lang = 'hi'; } catch (e) {}

  const SKIP = 'script,style,#wbot-panel,#wbot-fab,#langToggle';

  function lookup(core, toHi) {
    const table = toHi ? EN2HI : HI2EN;
    if (table[core] !== undefined) return table[core];
    for (const p of PATTERNS) {
      const re = toHi ? p[0] : p[2];
      if (re.test(core)) return core.replace(re, toHi ? p[1] : p[3]);
    }
    // text shown inside straight quotes, e.g. the vows: "...."
    if (core.length > 2 && core[0] === '"' && core[core.length - 1] === '"') {
      const inner = table[core.slice(1, -1)];
      if (inner !== undefined) return '"' + inner + '"';
    }
    return undefined;
  }

  function translateString(raw, toHi) {
    const core = raw.replace(/\s+/g, ' ').trim();
    if (!core) return raw;
    const out = lookup(core, toHi);
    if (out === undefined) return raw;
    return raw.match(/^\s*/)[0] + out + raw.match(/\s*$/)[0];
  }

  // used by script.js and chatbot.js for text that is created while the page runs
  window.t = function (s) { return lang === 'hi' ? translateString(String(s), true) : s; };
  window.getLang = function () { return lang; };

  function translatePage() {
    const toHi = lang === 'hi';
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest(SKIP)) continue;
      const next = translateString(node.nodeValue, toHi);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
    document.querySelectorAll('[title],[alt],[aria-label]').forEach(el => {
      if (el.closest(SKIP)) return;
      ['title', 'alt', 'aria-label'].forEach(attr => {
        const v = el.getAttribute(attr);
        if (!v) return;
        const next = translateString(v, toHi);
        if (next !== v) el.setAttribute(attr, next);
      });
    });
    document.title = translateString(document.title, toHi);
  }

  let fontsRequested = false;
  function loadHindiFonts() {
    if (fontsRequested) return;
    fontsRequested = true;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FONT_URL;
    document.head.appendChild(link);
  }

  let button;
  function setLang(next, save, initial) {
    lang = next;
    const hi = lang === 'hi';
    document.documentElement.classList.toggle('lang-hi', hi);
    document.documentElement.lang = hi ? 'hi' : 'en';
    if (hi) loadHindiFonts();
    if (!(initial && !hi)) translatePage();
    if (button) {
      button.textContent = hi ? 'English' : 'हिन्दी';
      button.setAttribute('aria-label', hi ? 'Switch to English' : 'हिन्दी में बदलें');
    }
    if (save) { try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {} }
    window.dispatchEvent(new Event('langchange'));
  }

  function init() {
    button = document.createElement('button');
    button.id = 'langToggle';
    button.type = 'button';
    button.onclick = () => setLang(lang === 'hi' ? 'en' : 'hi', true);
    document.body.appendChild(button);
    setLang(lang, false, true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();