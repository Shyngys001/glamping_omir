let gen = document.getElementById('gen');
let book = document.getElementById('book');
let price = document.getElementById('price');
let tour = document.getElementById('tour');
let contact = document.getElementById('contact');
let gen1 = document.getElementById('gen1');
let book1 = document.getElementById('book1');
let price1 = document.getElementById('price1');
let tour1 = document.getElementById('tour1');
let contact1 = document.getElementById('contact1');
let shyn_Page1Foot_p = document.getElementById('shyn_Page1Foot_p');
let shyn_Page1Foot1_num = document.getElementById('shyn_Page1Foot1_num');
let shyn_otzyvy1 = document.getElementById('shyn_otzyvy1');
let shyn_otzyvy2 = document.getElementById('shyn_otzyvy2');
let shyn_otzyvy3 = document.getElementById('shyn_otzyvy3');

let arch_text_activities = document.getElementById("arch--text-activities");
let arch_text_yachting = document.getElementById("arch--text-yachting");
let arch_text_diving = document.getElementById("arch--text-diving");
let arch_text_hydrocycle = document.getElementById("arch--text-hydrocycle");
let arch_text_hunting = document.getElementById("arch--text-hunting");
let arch_text_kayaking = document.getElementById("arch--text-kayaking");
let arch_text_serfing = document.getElementById("arch--text-serfing");
let arch_text_parachute = document.getElementById("arch--text-parachute");
let arch_text_beach = document.getElementById("arch--text-beach");
let arch_text_volleyball = document.getElementById("arch--text-volleyball");
let arch_text_kino = document.getElementById("arch--text-kino");
let arch_text_playground = document.getElementById("arch--text-playground");
let arch_text_yoga = document.getElementById("arch--text-yoga");
let arch_text_pool = document.getElementById("arch--text-pool");
let arch_text_bbq = document.getElementById("arch--text-bbq");
let arch_text_sauna = document.getElementById("arch--text-sauna");
let arch_text_price = document.getElementById("arch--text-price");


function setLanguage(language) {
    // Update the button text with the selected language
    document.getElementById('languageBtn').innerText = language;
    
    if (language === 'Kz') {
        gen.textContent = 'Басты'
        book.textContent = 'Броньдау'
        price.textContent = 'Бағалар'
        tour.textContent = 'Турлар'
        contact.textContent = 'Байланысу'
        gen1.textContent = 'Басты'
        book1.textContent = 'Броньдау'
        price1.textContent = 'Бағалар'
        tour1.textContent = 'Турлар'
        contact1.textContent = 'Байланысу'
        shyn_otzyvy1.textContent = 'Бұл оңаша орындар табиғаттың қақ ортасында, қаланың қарбаласынан алыс орналасқан.'
        shyn_otzyvy2.textContent = 'Біз сізге күнделікті уайымдарды ұмытып, толық демалуға болатын жайлы баспана ұсынамыз.'
        shyn_otzyvy3.textContent = 'Медитация, стрессті жеңілдету, табиғатқа ену және құстардың әнін тыңдау үшін тамаша орын...'
        shyn_Page1Foot_p.textContent = 'Қазақстан Республикасы Маңғыстау облысы, Мұнайлы ауданы, Қызылқұм жері, 2/27 учаскесі'

        arch_text_activities.textContent = "ДЕМАЛЫС ІС-ШАРАЛАРЫ";
        arch_text_yachting.textContent = "Яхтинг";
        arch_text_diving.textContent = "Сүңгу";
        arch_text_hydrocycle.textContent = "Гидроцикл/Квадроцикл";
        arch_text_hunting.textContent = "Су асты аңшылығы";
        arch_text_kayaking.textContent = "Каякинг";
        arch_text_serfing.textContent = "Аспандағы серфинг";
        arch_text_parachute.textContentм = "Парашют";
        arch_text_beach.textContent = "ЖАҒАЖАЙ";
        arch_text_volleyball.textContent = "Волейбол алаңы";
        arch_text_kino.textContent = "Ашық аспан кинотеатр";
        arch_text_playground.textContent = "Ойын алаңы";
        arch_text_yoga.textContent = "Йога";
        arch_text_pool.textContent = "БАССЕЙН АЛАҢЫ";
        arch_text_bbq.textContent = "ГРИЛЬ ЖӘНЕ БАРБЕКЮ АЙМАҒЫ";
        arch_text_sauna.textContent = "СКАНДИНАВИЯ МОНШАСЫ";
        arch_text_price.textContent = "БАҒАСЫ";
        
    } else if (language === 'En') {
        gen.textContent = 'Home'
        book.textContent = 'Book'
        price.textContent = 'Prices'
        tour.textContent = 'Tours'
        contact.textContent = 'Contact'
        gen1.textContent = 'Home'
        book1.textContent = 'Book'
        price1.textContent = 'Prices'
        tour1.textContent = 'Tours'
        contact1.textContent = 'Contact'
        shyn_otzyvy1.textContent = 'These secluded corners are located far from the city noise and hustle, in the heart of nature.'
        shyn_otzyvy2.textContent = 'We offer you a cozy sanctuary where you can forget about everyday worries and fully relax.'
        shyn_otzyvy3.textContent = 'An ideal place for meditation, stress relief, immersing yourself in nature, and listening to the singing of birds...'
        shyn_Page1Foot_p.textContent = 'Republic of Kazakhstan Mangystau region, Munailinsky district, Kyzylkum locality, plot 2/27'

        arch_text_activities.textContent = "ACTIVITIES";
        arch_text_yachting.textContent = "Yachting";
        arch_text_diving.textContent = "Diving";
        arch_text_hydrocycle.textContent = "Jet ski/Quad bike";
        arch_text_hunting.textContent = "Spearfishing";
        arch_text_kayaking.textContent = "Kayaking";
        arch_text_serfing.textContent = "Sky surfing";
        arch_text_parachute.textContent = "Parachute";
        arch_text_beach.textContent = "BEACH";
        arch_text_volleyball.textContent = "Volleyball court";
        arch_text_kino.textContent = "Cinema under the sky";
        arch_text_playground.textContent = "Playground";
        arch_text_yoga.textContent = "Yoga";
        arch_text_pool.textContent = "POOL ZONE";
        arch_text_bbq.textContent = "GRILL AND BBQ AREA";
        arch_text_sauna.textContent = "SCANDINAVIAN SAUNA";
        arch_text_price.textContent = "PRICE";

    } else if (language === 'Ru') {
        gen.textContent = 'Главное'
        book.textContent = 'Бронировать'
        price.textContent = 'Цены'
        tour.textContent = 'Туры'
        contact.textContent = 'Контакты'
        gen1.textContent = 'Главное'
        book1.textContent = 'Бронировать'
        price1.textContent = 'Цены'
        tour1.textContent = 'Туры'
        contact1.textContent = 'Контакты'
        shyn_otzyvy1.textContent = 'Эти уединенные уголки находятся вдали от городского шума и суеты, в самом сердце природы.'
        shyn_otzyvy2.textContent = 'Предлагаем вам уютное убежище, где вы сможете забыть о повседневных заботах и полностью расслабиться.'
        shyn_otzyvy3.textContent = 'Идеальное место для медитации, снять стресс, расствориться в природе, слушать пение птиц...'
        shyn_Page1Foot_p.textContent = 'Республика Казахстан Мангистауская область, Мунайлинский район, местность Кызылкум, участок 2/27'
      
        arch_text_activities.textContent = "АКТИВНЫЙ ОТДЫХ";
        arch_text_yachting.textContent = "Яхтинг";
        arch_text_diving.textContent = "Дайвинг";
        arch_text_hydrocycle.textContent = "Гидроцикл/Квадроцикл";
        arch_text_hunting.textContent = "Подводная охота";
        arch_text_kayaking.textContent = "Каякинг";
        arch_text_serfing.textContent = "Скайсерфинг";
        arch_text_parachute.textContent = "Парашют";
        arch_text_beach.textContent = "ПЛЯЖ";
        arch_text_volleyball.textContent = "Волейбольная площадка";
        arch_text_kino.textContent = "Кинотеатр под открытым небом";
        arch_text_playground.textContent = "Детская площадка";
        arch_text_yoga.textContent = "Йога";
        arch_text_pool.textContent = "ЗОНА БАССЕЙНА";
        arch_text_bbq.textContent = "ГРИЛЬ И BBQ ЗОНА";
        arch_text_sauna.textContent = "СКАНДИНАВСКИЕ БАНИ";
        arch_text_price.textContent = "Цены";
    }
}
