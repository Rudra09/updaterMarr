(function () {
  const CONFIG = {
    coupleNames: 'Abhishek & Priya',
    coupleNamesHi: 'अभिषेक और प्रिया',
    whatsappNumber: '+918094073911',
    phoneNumber: '+917014457411',
    weddingDate: new Date('November 25, 2026 20:00:00'),
    mapSangeetHaldi: 'https://www.google.com/maps/search/?api=1&query=Vinay+Vaatika+Bhatta+Colony+Hanumangarh+Rajasthan+335512',
    mapWedding: 'https://www.google.com/maps?cid=8258222405075971590&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF'
  };

  const lang = () => (window.getLang ? window.getLang() : 'en');

  const TEXT = {
    en: {
      head: '💍 Wedding Helper',
      placeholder: 'Ask about the wedding…',
      send: 'Send',
      micListening: 'Listening… Speak now',
      open: 'Open wedding helper chat',
      close: 'Close chat',
      fallback: "I'm not sure about that 🙏 Try one of the buttons below, or ask about the schedule, venue, family, countdown, dress code, food, or photo booth.",
      started: 'The wedding celebrations have begun! 🎊 Thank you for being part of our special days.',
      countdown: (d, h) => '⏳ ' + d + ' days and ' + h + ' hours to go until the wedding ceremony on 25 November 2026!',
      contactWith: 'For anything else, please reach the family directly 🙏',
      contactWithout: 'For anything else, please contact the family directly. We will be delighted to help 🙏',
      whatsapp: 'Chat on WhatsApp',
      call: 'Call the family',
      events: 'Here is the wedding schedule 🎉\n\n🎵 Sangeet Celebration — 7:00 PM, 23 Nov 2026\n💛 Haldi Ceremony — 03:00 PM, 24 Nov 2026\n💍 Wedding Ceremony — 8:00 PM, 25 Nov 2026',
      venue: 'The wedding ceremony is at GM Resort on 25 November 2026 at 8:00 PM 💍\n\nSangeet and Haldi take place at Vinay Vaatika, Bhatta Colony, Hanumangarh, Rajasthan.',
      family: "👑 Groom's side — Garg Family\nFather: Mr. Hardeep Kumar Garg\nMother: Mrs. Meenu Garg\n\n👑 Bride's side — Bansal Family\nFather: Mr. Raj Kumar Bansal\nMother: Mrs. Manju Bansal",
      photo: 'Try our Royal Photo Booth 📸 — turn on your camera or upload a photo, then snap & download your memory from the wedding!',
      gallery: 'Our precious memories are in the gallery ✨',
      vows: 'Walk through the 7 sacred vows (Saptapadi) with Abhishek & Priya step by step 🔥\n\nThe 7 Pheres represent nourishment, strength, prosperity, family happiness, progeny, long seasons of togetherness, and lifelong friendship & loyalty!',
      music: 'Tap the golden "🎵 Play Music" button at the bottom-right corner to play the wedding song 🎶',
      thanks: 'You are most welcome! 😊 We eagerly await your blessings and gracious presence 🙏',
      pdfCard: 'Click below to view or download the official wedding invitation cards:',
      
      howAreYou: "I'm doing wonderful, thank you for asking! 😊 Just busy making sure everything is perfect for Abhishek & Priya's grand wedding. How can I help you today?",
      whoAreYou: "I am your personal wedding assistant, specially here to help you with Abhishek & Priya's celebrations! Ask me about events, venue, or family details.",
      whatDoing: "I'm managing the wedding details, counting down the days to November 25, 2026, and helping guests! What would you like to know?",
      meaningOfShadi: "A Hindu wedding is a sacred union (Vivah) of two souls and two families, bound by eternal love, duty (Dharma), and 7 sacred promises around the holy fire (Agni). It celebrates togetherness for seven lifetimes! ✨",
      dressCode: "✨ **Dress Code Suggestion:**\n- For Sangeet & Haldi: Traditional or Festive Ethnic Wear.\n- For Wedding Ceremony: Royal Festive / Traditional Attire.",
      foodInfo: "🍽️ Delicious royal multi-course vegetarian catering, traditional Rajasthani sweets, and grand feasts are arranged across all functions!",
      giftInfo: "🎁 Your gracious presence and heartfelt blessings are the greatest gifts of all for Abhishek & Priya! No other gifts are necessary 🙏",
      parkingInfo: "🚗 Ample parking space is available at both venues with valet assistance.",

      mapSangeet: 'Sangeet & Haldi Map',
      mapWedding: 'Wedding Venue Map',
      pdfSangeet: 'Download Sangeet PDF',
      pdfHaldi: 'Download Haldi PDF',
      pdfWedding: 'Download Wedding PDF',
      goFamily: 'See Family & Friends',
      goPhoto: 'Open Photo Booth',
      goGallery: 'Open Gallery',
      goVows: 'Start Sacred Vows',
      goCountdown: 'See Countdown',
      typing: 'A&P Assistant is typing...'
    },
    hi: {
      head: '💍 विवाह सहायक',
      placeholder: 'विवाह के बारे में पूछें…',
      send: 'भेजें',
      micListening: 'सुन रहे हैं… बोलिए',
      open: 'विवाह सहायक चैट खोलें',
      close: 'चैट बंद करें',
      fallback: 'मुझे इसकी जानकारी नहीं है 🙏 कृपया नीचे दिए बटन आज़माएँ, या कार्यक्रम, स्थान, परिवार, ड्रेस कोड, खाना या फोटो बूथ के बारे में पूछें।',
      started: 'विवाह के उत्सव शुरू हो चुके हैं! 🎊 हमारे खास दिनों का हिस्सा बनने के लिए धन्यवाद।',
      countdown: (d, h) => '⏳ 25 नवंबर 2026 के विवाह समारोह में अभी ' + d + ' दिन और ' + h + ' घंटे बाकी हैं!',
      contactWith: 'और किसी जानकारी के लिए कृपया सीधे परिवार से संपर्क करें 🙏',
      contactWithout: 'और किसी जानकारी के लिए कृपया सीधे परिवार से संपर्क करें। हमें आपकी मदद करके खुशी होगी 🙏',
      whatsapp: 'WhatsApp पर चैट करें',
      call: 'परिवार को कॉल करें',
      events: 'विवाह का कार्यक्रम 🎉\n\n🎵 संगीत समारोह — शाम 7:00 बजे, 23 नवंबर 2026\n💛 हल्दी की रस्म — दोपहर 3:00 बजे, 24 नवंबर 2026\n💍 विवाह समारोह — रात 8:00 बजे, 25 नवंबर 2026',
      venue: 'विवाह समारोह 25 नवंबर 2026 को रात 8:00 बजे जी.एम. रिसॉर्ट में है 💍\n\nसंगीत और हल्दी विनय वाटिका, भट्टा कॉलोनी, हनुमानगढ़, राजस्थान में होंगे।',
      family: '👑 वर पक्ष — गर्ग परिवार\nपिता: श्री हरदीप कुमार गर्ग\nमाता: श्रीमती मीनू गर्ग\n\n👑 वधू पक्ष — बंसल परिवार\nपिता: श्री राज कुमार बंसल\nमाता: श्रीमती मंजू बंसल',
      photo: 'हमारा शाही फोटो बूथ आज़माएँ 📸 — कैमरा चालू करें या फोटो अपलोड करें, फिर विवाह की अपनी याद खींचकर डाउनलोड करें!',
      gallery: 'हमारी अनमोल यादें गैलरी में हैं ✨',
      vows: 'अभिषेक और प्रिया के साथ सात पवित्र वचन (सप्तपदी) कदम-दर-कदम देखें 🔥\n\nसात फेरे (सप्तपदी) का अर्थ है: अन्न-धन, बल, समृद्धि, पारिवारिक सुख, संतान, स्वास्थ्य और जीवनभर की अटूट मित्रता व वफादारी का वचन!',
      music: 'पेज के नीचे दाईं ओर सुनहरे "🎵 संगीत चलाएँ" बटन को दबाकर विवाह का गीत चलाएँ 🎶',
      thanks: 'आपका स्वागत है! 😊 हमें आपके आशीर्वाद और गरिमामयी उपस्थिति की प्रतीक्षा है 🙏',
      pdfCard: 'विवाह के आधिकारिक आमंत्रण कार्ड (PDF) डाउनलोड करने के लिए नीचे क्लिक करें:',
      
      howAreYou: "मैं एकदम ठीक हूँ, पूछने के लिए धन्यवाद! 😊 बस अभिषेक और प्रिया के विवाह की तैयारियों में व्यस्त हूँ। बताइए, मैं आपकी क्या सहायता कर सकता हूँ?",
      whoAreYou: "मैं आपका पर्सनल वेडिंग असिस्टेंट हूँ, जो अभिषेक और प्रिया के विवाह उत्सव में आपकी मदद के लिए यहाँ हूँ!",
      whatDoing: "मैं मेहमानों की मदद कर रहा हूँ और 25 नवंबर 2026 के विवाह समारोह की तैयारियों पर नजर रख रहा हूँ। बताइए, आपको क्या जानना है?",
      meaningOfShadi: "भारतीय विवाह केवल दो लोगों का नहीं, बल्कि दो परिवारों और दो आत्माओं का पवित्र मिलन है, जो सात फेरे और अग्नि को साक्षी रखकर सात जन्मों के लिए अटूट बंधन में बंधते हैं। ✨",
      dressCode: "✨ **ड्रेस कोड सुझाव:**\n- संगीत और हल्दी के लिए: पारंपरिक या फेस्टिव एथनिक वस्त्र।\n- विवाह समारोह के लिए: रॉयल एथनिक / ट्रेडिशनल पोशाक।",
      foodInfo: "🍽️ सभी कार्यक्रमों में शाही शाकाहारी भोजन, पारंपरिक राजस्थानी मिठाइयाँ और शानदार खान-पान की व्यवस्था की गई है!",
      giftInfo: "🎁 अभिषेक और प्रिया के लिए आपकी उपस्थिति और हार्दिक आशीर्वाद ही सबसे बड़ा उपहार है! किसी अन्य उपहार की आवश्यकता नहीं है 🙏",
      parkingInfo: "🚗 दोनों वेन्यू पर पार्किंग और वैले पार्किंग की पर्याप्त व्यवस्था है।",

      mapSangeet: 'संगीत और हल्दी का नक्शा',
      mapWedding: 'विवाह स्थल का नक्शा',
      pdfSangeet: 'संगीत आमंत्रण (PDF)',
      pdfHaldi: 'हल्दी आमंत्रण (PDF)',
      pdfWedding: 'विवाह आमंत्रण (PDF)',
      goFamily: 'परिवार और मित्र देखें',
      goPhoto: 'फोटो बूथ खोलें',
      goGallery: 'गैलरी खोलें',
      goVows: 'पवित्र वचन शुरू करें',
      goCountdown: 'उलटी गिनती देखें',
      typing: 'A&P Assistant टाइप कर रहा है...'
    }
  };
  const S = () => TEXT[lang()];

  function answer(key) {
    const s = S();
    const both = () => [[s.mapWedding, CONFIG.mapWedding], [s.mapSangeet, CONFIG.mapSangeetHaldi]];
    switch (key) {
      case 'thanks': return { text: s.thanks };
      case 'events': return { text: s.events, links: [[s.mapSangeet, CONFIG.mapSangeetHaldi], [s.mapWedding, CONFIG.mapWedding]] };
      case 'venue': return { text: s.venue, links: both() };
      case 'family': return { text: s.family, scroll: '#hosts', scrollLabel: s.goFamily };
      case 'photo': return { text: s.photo, scroll: '#selfie', scrollLabel: s.goPhoto };
      case 'gallery': return { text: s.gallery, scroll: '#gallery', scrollLabel: s.goGallery };
      case 'vows': return { text: s.vows, scroll: '#seven-pheras', scrollLabel: s.goVows };
      case 'music': return { text: s.music };
      case 'countdown': return countdownAnswer();
      case 'contact': return contactAnswer();
      case 'pdf': return { text: s.pdfCard, action: 'pdf' };
      case 'howareyou': return { text: s.howAreYou };
      case 'whoareyou': return { text: s.whoAreYou };
      case 'whatdoing': return { text: s.whatDoing };
      case 'meaningofshadi': return { text: s.meaningOfShadi, scroll: '#seven-pheras', scrollLabel: s.goVows };
      case 'dresscode': return { text: s.dressCode };
      case 'foodinfo': return { text: s.foodInfo };
      case 'giftinfo': return { text: s.giftInfo };
      case 'parking': return { text: s.parkingInfo };
      default: return { text: s.fallback };
    }
  }

  function countdownAnswer() {
    const s = S();
    const ms = CONFIG.weddingDate - new Date();
    if (ms <= 0) return { text: s.started };
    const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24;
    return { text: s.countdown(d, h), scroll: '#countdown', scrollLabel: s.goCountdown };
  }

  function contactAnswer() {
    const s = S();
    const links = [];
    if (CONFIG.whatsappNumber) links.push([s.whatsapp, 'https://wa.me/' + String(CONFIG.whatsappNumber).replace(/\D/g, '')]);
    if (CONFIG.phoneNumber) links.push([s.call, 'tel:' + CONFIG.phoneNumber]);
    return { text: links.length ? s.contactWith : s.contactWithout, links: links };
  }

  const RULES = [
    [/\b(hi|hello|hey|jai|mata|matadi|shree|shri|shyam|radhe|krishna|ram|sita|guruji|sat|akal|pranam|namaste|namaskar|gm|morning|evening|good)\b|नमस्ते|नमस्कार|प्रणाम|जय|माता|श्री|श्याम|राधे|कृष्ण|RAM|सीता|सत|अकाल|सुप्रभात|शुभ संध्या|हेलो|हाय/i, 'hi'],
    [/how are you|how r u|kese ho|kaise ho|aap kaise ho|aap kese ho|kya haal hai|sab theek|आप कैसे हैं|कैसे हो|क्या हाल है/i, 'howareyou'],
    [/who are you|who r you|tum kaun ho|aap kaun ho|what is your name|आप कौन हैं|तू कौन है/i, 'whoareyou'],
    [/what are you doing|what r you doing|kya kar rahe ho|kya kar rhi ho|क्या कर रहे हो/i, 'whatdoing'],
    [/meaning of marriage|what is marriage|shadi kya hai|vivah kya hai|saat phere|7 pheres|phere|saptapadi|शादी क्या है|विवाह क्या है|सात फेरे/i, 'meaningofshadi'],
    [/dress code|what to wear|kapde|pehne|outfit|attire|ड्रेस कोड|कपड़े|क्या पहनें/i, 'dresscode'],
    [/food|dinner|lunch|eating|khana|khane me kya hai|catering|खाना|भोजन|डिनर|लंच/i, 'foodinfo'],
    [/gift|shagun|present|taufa|gift de sakte hain|उपहार|शगुन/i, 'giftinfo'],
    [/parking|car|vehicle|gaadi|पार्किंग|गाड़ी रखने की जगह/i, 'parking'],
    [/(thank|thanks|shukriya|dhanyavad|dhanyawad)|धन्यवाद|शुक्रिया/i, 'thanks'],
    [/(countdown|days left|kitne din|kitna time|how long|how many days|baki)|उलटी गिनती|कितने दिन|कितना समय|बाकी/i, 'countdown'],
    [/(music|song|audio|gana|sound)|गाना|गीत|म्यूजिक|संगीत चलाएँ|संगीत चलाएं|संगीत बजा/i, 'music'],
    [/(schedule|event|function|program|ceremony|sangeet|haldi|time|kab|kitne baje|timing|date|tarikh|when)|कार्यक्रम|समारोह|संगीत|हल्दी|समय|कब|तारीख|तिथि|कितने बजे/i, 'events'],
    [/(venue|where|location|map|address|kaha|kahan|resort|direction|route|how to reach|pata)|स्थान|कहाँ|कहां|नक्शा|पता|रिसॉर्ट|लोकेशन|रास्ता/i, 'venue'],
    [/(family|parents|father|mother|groom|bride|garg|bansal|mummy|papa|parivar)|परिवार|माता|पिता|वर पक्ष|वधू पक्ष|गर्ग|बंसल|दूल्हा|दुल्हन/i, 'family'],
    [/(photo|selfie|camera|booth|picture)|फोटो|सेल्फी|कैमरा|बूथ/i, 'photo'],
    [/(gallery|memories|pictures|album)|गैलरी|यादें|तस्वीर/i, 'gallery'],
    [/(vow|phera|pheras|saptapadi|varmala|mandap)|वचन|फेरा|फेरे|सप्तपदी|वरमाला|मंडप/i, 'vows'],
    [/(contact|call|phone|number|whatsapp|rsvp|help|invite|baat)|संपर्क|फोन|नंबर|कॉल|व्हाट्सएप|मदद/i, 'contact'],
    [/(pdf|card|download|invitation|invitation card|patrika)|कार्ड|डाउनलोड|निमंत्रण|पत्रिका|पीडीएफ/i, 'pdf']
  ];

  const CHIPS = {
    en: [['📅 Schedule', 'schedule'], ['📍 Venue', 'venue'], ['📥 Download Cards', 'pdf'],
         ['👨‍👩‍👧 Family', 'family'], ['📸 Photo Booth', 'photo'], ['📞 Contact', 'contact']],
    hi: [['📅 कार्यक्रम', 'कार्यक्रम'], ['📍 स्थान', 'स्थान'], ['📥 कार्ड डाउनलोड', 'pdf'],
         ['👨‍👩‍👧 परिवार', 'परिवार'], ['📸 फोटो बूथ', 'फोटो बूथ'], ['📞 संपर्क', 'संपर्क']]
  };

  const HINDI_MAP = {
    'sat shri akal': 'सत श्री अकाल',
    'satsriakal': 'सत श्री अकाल',
    'jai shree ram': 'जय श्री राम',
    'jai shri ram': 'जय श्री राम',
    'jai shree shyam': 'जय श्री श्याम',
    'jai shri shyam': 'जय श्री श्याम',
    'jai mata di': 'जय माता दी',
    'jai matadi': 'जय माता दी',
    'radhe radhe': 'राधे राधे',
    'ram ram': 'राम राम',
    'sita ram': 'सीता राम',
    'jai jinendra': 'जय जिनेंद्र',
    'jai mahavir': 'जय महावीर',
    'om namah shivay': 'ॐ नमः शिवाय',
    'har har mahadev': 'हर हर महादेव',
    'vanakkam': 'வணக்கம் (वणक्कम)',
    'namaskaram': 'नमस्कारम',
    'pranam': 'प्रणाम',
    'namaste': 'नमस्ते',
    'namaskar': 'नमस्कार',
    'khoda hafiz': 'खुदा हाफ़िज़',
    'assalamu alaikum': 'अस्सलाम वालेकुम',
    'sat sri akal': 'सत श्री अकाल',
    'hello': 'नमस्ते',
    'hi': 'नमस्ते',
    'hey': 'नमस्ते',
    'good morning': 'सुप्रभात',
    'good afternoon': 'नमस्कार (शुभ दोपहर)',
    'good evening': 'शुभ संध्या',
    'good night': 'शुभ रात्रि',
    'welcome': 'स्वागत है',
    'greetings': 'अभिवादन',
    'bye': 'अलविदा',
    'see you': 'फिर मिलेंगे',
    'take care': 'ध्यान रखना',
    'thank you': 'धन्यवाद',
    'have a nice day': 'आपका दिन शुभ हो',
    'bonjour': 'बोंजोर (नमस्कार)',
    'salut': 'सलू (नमस्ते/हाय)',
    'bonsoir': 'बोंसोआर (शुभ संध्या)',
    'coucou': 'कूकू (नमस्ते)',
    'privet': 'प्रिवेत (नमस्ते/हाय)',
    'zdravstvuyte': 'ज़द्रावस्त्वूयते (नमस्कार)',
    'dobroe utro': 'दोब्रोए उत्त्रो (सुप्रभात)'
  };

  function formatGreetingText(q, isHi) {
    let cleanText = q.trim();
    cleanText = cleanText.replace(/\b[a-zA-Z]/g, l => l.toUpperCase());
    cleanText = cleanText.replace(/\bram\b/gi, 'Ram');

    const cleanLower = cleanText.toLowerCase();
    if (isHi) {
      for (const [eng, hindi] of Object.entries(HINDI_MAP)) {
        if (cleanLower.includes(eng)) {
          return hindi;
        }
      }
    }
    return cleanText;
  }

  function reply(q) {
    const cleanQ = q.trim();
    const s = cleanQ.toLowerCase();
    const isHi = lang() === 'hi';
    
    for (const [re, key] of RULES) {
      if (re.test(s)) {
        if (key === 'hi') {
          const formattedQ = formatGreetingText(cleanQ, isHi);
          const welcomeText = isHi 
            ? `🙏 ${formattedQ}! आपका स्वागत है! मैं ${CONFIG.coupleNamesHi} के विवाह का सहायक हूँ। कार्यक्रम, स्थान या परिवार के बारे में पूछें या नीचे दिए बटन दबाएँ।`
            : `🙏 ${formattedQ}! Welcome! I am the wedding helper for ${CONFIG.coupleNames}. Ask me about the schedule, venue, family, or tap a button below.`;
          return { text: welcomeText };
        }
        return answer(key);
      }
    }
    return answer('fallback');
  }

  function build() {
    const css = document.createElement('style');
    css.textContent = `
#wbot-fab{position:fixed;left:18px;bottom:22px;z-index:9998;width:56px;height:56px;border-radius:50%;border:2px solid #fff;cursor:pointer;
background:linear-gradient(135deg,#d4af37,#ffd700);color:#58181f;font-size:26px;line-height:1;
box-shadow:0 6px 20px rgba(88,24,31,0.45);display:flex;align-items:center;justify-content:center;transition:transform .25s ease;}
#wbot-fab:active{transform:scale(.92)}

#wbot-panel{position:fixed;left:18px;bottom:90px;z-index:9998;width:330px;max-width:calc(100vw - 36px);height:430px;max-height:calc(100vh - 130px);
background:#fffdf9;border:1.5px solid #d4af37;border-radius:16px;box-shadow:0 12px 36px rgba(88,24,31,.35);display:flex;flex-direction:column;overflow:hidden;
opacity:0;transform:translateY(14px) scale(.97);pointer-events:none;transition:opacity .22s ease,transform .22s ease;font-family:'Lato',Arial,sans-serif}
#wbot-panel.open{opacity:1;transform:none;pointer-events:auto}
#wbot-head{background:linear-gradient(135deg,#58181f,#7a2630);color:#ffd700;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;font-family:'Playfair Display',serif;font-weight:700;font-size:14px}
#wbot-head button{background:none;border:0;color:#ffd700;font-size:18px;cursor:pointer;line-height:1}
#wbot-msgs{flex:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column;gap:6px;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
.wbot-m{max-width:88%;padding:7px 10px;border-radius:12px;font-size:13px;line-height:1.4;white-space:pre-wrap;word-wrap:break-word}
.wbot-bot{background:#f6efe0;color:#3b1d20;align-self:flex-start;border-bottom-left-radius:4px}
.wbot-user{background:#58181f;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
.wbot-typing{font-style:italic;opacity:0.7;font-size:11.5px;}
.wbot-link{display:inline-block;margin:4px 4px 0 0;padding:5px 9px;border-radius:12px;background:#d4af37;color:#58181f;font-weight:700;font-size:11.5px;text-decoration:none;border:0;cursor:pointer;font-family:inherit}

#wbot-chips{display:flex;flex-wrap:wrap;gap:4px;padding:6px 8px;max-height:85px;overflow-y:auto;border-top:1px solid #eadfc2;justify-content:space-between;}
#wbot-chips button{flex:0 0 31%;border:1px solid #d4af37;background:#fff;color:#58181f;border-radius:8px;padding:4px 3px;font-size:11px;cursor:pointer;font-family:inherit;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}

#wbot-form{display:flex;gap:4px;padding:6px 8px;border-top:1px solid #eadfc2;align-items:center;}
#wbot-input{flex:1;border:1px solid #d9c98f;border-radius:16px;padding:6px 10px;font-size:13.5px;outline:none;font-family:inherit;min-width:0;color:#58181f;}
#wbot-input::placeholder{color:#b3995d;opacity:0.8;font-style:italic;}
#wbot-mic{background:none;border:0;font-size:16px;cursor:pointer;padding:3px;transition:transform .2s;}
#wbot-mic.listening{animation:wbot-mic-pulse 1s infinite alternate;}
@keyframes wbot-mic-pulse{0%{transform:scale(1);}100%{transform:scale(1.25);}}
#wbot-send{border:0;border-radius:16px;background:#58181f;color:#ffd700;padding:0 10px;font-weight:700;cursor:pointer;font-family:inherit;height:30px;font-size:12px;}

@media (max-width:480px){
  #wbot-fab{width:48px;height:48px;font-size:24px;bottom:18px;left:14px}
  #wbot-panel{left:10px;bottom:76px;width:calc(100vw - 20px);max-width:none}
}`;
    document.head.appendChild(css);

    const fab = document.createElement('button');
    fab.id = 'wbot-fab';
    fab.textContent = '💬';

    const panel = document.createElement('div');
    panel.id = 'wbot-panel';
    panel.setAttribute('role', 'dialog');
    panel.innerHTML = '<div id="wbot-head"><span></span><button type="button"></button></div>' +
      '<div id="wbot-msgs"></div><div id="wbot-chips"></div>' +
      '<div id="wbot-form"><input id="wbot-input" type="text" autocomplete="off"><button id="wbot-mic" type="button" title="Speak">🎤</button><button id="wbot-send" type="button"></button></div>';
    
    document.body.appendChild(fab);
    document.body.appendChild(panel);

    const msgs = panel.querySelector('#wbot-msgs');
    const input = panel.querySelector('#wbot-input');
    const micBtn = panel.querySelector('#wbot-mic');
    const chips = panel.querySelector('#wbot-chips');
    const closeBtn = panel.querySelector('#wbot-head button');
    let greeted = false;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      micBtn.onclick = () => {
        const currentLang = lang();
        recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';
        try {
          recognition.start();
          micBtn.classList.add('listening');
          input.placeholder = S().micListening;
        } catch (e) {
          console.error(e);
        }
      };

      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        input.value = transcript;
        micBtn.classList.remove('listening');
        input.placeholder = S().placeholder;
        ask(transcript);
        input.value = '';
      };

      recognition.onerror = () => {
        micBtn.classList.remove('listening');
        input.placeholder = S().placeholder;
      };

      recognition.onend = () => {
        micBtn.classList.remove('listening');
        input.placeholder = S().placeholder;
      };
    } else {
      micBtn.style.display = 'none';
    }

    function add(who, text, isTyping = false) {
      const d = document.createElement('div');
      d.className = 'wbot-m wbot-' + who + (isTyping ? ' wbot-typing' : '');
      d.textContent = text;
      msgs.appendChild(d);
      msgs.scrollTop = msgs.scrollHeight;
      return d;
    }

    function botSay(ans) {
      const s = S();
      const typingElem = add('bot', s.typing, true);
      
      setTimeout(() => {
        typingElem.remove();
        const d = add('bot', ans.text);
        
        if (ans.action === 'pdf') {
          const sText = lang() === 'hi' ? '📥 संगीत आमंत्रण (PDF)' : '📥 Sangeet Invite';
          const hText = lang() === 'hi' ? '📥 हल्दी आमंत्रण (PDF)' : '📥 Haldi Invite';
          const wText = lang() === 'hi' ? '📥 विवाह आमंत्रण (PDF)' : '📥 Wedding Invite';

          const b1 = document.createElement('a');
          b1.className = 'wbot-link';
          b1.href = 'assets/invitepdf/Sangeet.pdf';
          b1.download = "";
          b1.textContent = sText;

          const b2 = document.createElement('a');
          b2.className = 'wbot-link';
          b2.href = 'assets/invitepdf/Haldi.pdf';
          b2.download = "";
          b2.textContent = hText;

          const b3 = document.createElement('a');
          b3.className = 'wbot-link';
          b3.href = 'assets/invitepdf/Wedding.pdf';
          b3.download = "";
          b3.textContent = wText;

          d.appendChild(document.createElement('br'));
          d.appendChild(b1);
          d.appendChild(document.createElement('br'));
          d.appendChild(b2);
          d.appendChild(document.createElement('br'));
          d.appendChild(b3);
        }

        (ans.links || []).forEach(([label, href]) => {
          const a = document.createElement('a');
          a.className = 'wbot-link';
          a.textContent = label;
          a.href = href;
          a.target = '_blank';
          a.rel = 'noopener';
          d.appendChild(document.createElement('br'));
          d.appendChild(a);
        });

        if (ans.scroll) {
          const b = document.createElement('button');
          b.className = 'wbot-link';
          b.type = 'button';
          b.textContent = ans.scrollLabel;
          b.onclick = () => {
            const el = document.querySelector(ans.scroll);
            if (el) { el.scrollIntoView({ behavior: 'smooth' }); if (innerWidth < 600) toggle(false); }
          };
          d.appendChild(document.createElement('br'));
          d.appendChild(b);
        }
        msgs.scrollTop = msgs.scrollHeight;
      }, 600);
    }

    function ask(q) {
      q = q.trim();
      if (!q) return;
      add('user', q);
      botSay(reply(q));
    }

    function toggle(open) {
      const willOpen = open === undefined ? !panel.classList.contains('open') : open;
      panel.classList.toggle('open', willOpen);
      fab.textContent = willOpen ? '×' : '💬';
      
      if (willOpen && !greeted) { 
        greeted = true; 
        const isHi = lang() === 'hi';
        const couple = isHi ? CONFIG.coupleNamesHi : CONFIG.coupleNames;
        const defaultGreeting = isHi 
          ? 'जय श्री श्याम 🙏 ! आपका स्वागत है! मैं ' + couple + ' के विवाह का सहायक हूँ। कार्यक्रम, स्थान या परिवार के बारे में पूछें या नीचे दिए बटन दबाएँ।' 
          : 'Jai Shree Shyam 🙏 ! Welcome! I am the wedding helper for ' + couple + '. Ask me about the schedule, venue, family, or tap a button below.';
        botSay({ text: defaultGreeting }); 
      }
    }

    function applyLanguage() {
      const s = S();
      panel.setAttribute('aria-label', s.head);
      panel.querySelector('#wbot-head span').textContent = s.head;
      closeBtn.textContent = '×';
      closeBtn.setAttribute('aria-label', s.close);
      fab.setAttribute('aria-label', s.open);
      input.placeholder = s.placeholder;
      input.setAttribute('aria-label', s.placeholder);
      panel.querySelector('#wbot-send').textContent = s.send;
      
      const firstBotMsg = msgs.querySelector('.wbot-bot');
      if (firstBotMsg && greeted) {
        const isHi = lang() === 'hi';
        const couple = isHi ? CONFIG.coupleNamesHi : CONFIG.coupleNames;
        firstBotMsg.textContent = isHi 
          ? '🙏 जय श्री श्याम! आपका स्वागत है! मैं ' + couple + ' के विवाह का सहायक हूँ। कार्यक्रम, स्थान या परिवार के बारे में पूछें या नीचे दिए बटन दबाएँ।'
          : '🙏 Jai Shree Shyam! Welcome! I am the wedding helper for ' + couple + '. Ask me about the schedule, venue, family, or tap a button below.';
      }

      chips.innerHTML = '';
      CHIPS[lang()].forEach(([label, q]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = label;
        b.onclick = () => ask(q);
        chips.appendChild(b);
      });
    }

    fab.onclick = () => toggle();
    closeBtn.onclick = () => toggle(false);
    panel.querySelector('#wbot-send').onclick = () => { ask(input.value); input.value = ''; };
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { ask(input.value); input.value = ''; } });
    window.addEventListener('langchange', applyLanguage);
    applyLanguage();
  }

  function start() { (window.requestIdleCallback || (f => setTimeout(f, 800)))(build, { timeout: 3000 }); }
  if (document.readyState === 'complete') start(); else window.addEventListener('load', start, { once: true });
})();