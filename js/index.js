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


let arch_text_activities = document.getElementById("arch--text-activities").textContent;
let arch_text_yachting = document.getElementById("arch--text-yachting").textContent;
let arch_text_diving = document.getElementById("arch--text-diving").textContent;
let arch_text_hydrocycle = document.getElementById("arch--text-hydrocycle").textContent;
let arch_text_hunting = document.getElementById("arch--text-hunting").textContent;
let arch_text_kayaking = document.getElementById("arch--text-kayaking").textContent;
let arch_text_serfing = document.getElementById("arch--text-serfing").textContent;
let arch_text_parachute = document.getElementById("arch--text-parachute").textContent;
let arch_text_beach = document.getElementById("arch--text-beach").textContent;
let arch_text_volleyball = document.getElementById("arch--text-volleyball").textContent;
let arch_text_kino = document.getElementById("arch--text-kino").textContent;
let arch_text_playground = document.getElementById("arch--text-playground").textContent;
let arch_text_yoga = document.getElementById("arch--text-yoga").textContent;
let arch_text_pool = document.getElementById("arch--text-pool").textContent;
let arch_text_bbq = document.getElementById("arch--text-bbq").textContent;
let arch_text_sauna = document.getElementById("arch--text-sauna").textContent;
let arch_text_price = document.getElementById("arch--text-price").textContent;


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

        arch_text_activities = "ДЕМАЛЫС ІС-ШАРАЛАРЫ";
        arch_text_yachting = "Яхтинг";
        arch_text_diving = "Сүңгу";
        arch_text_hydrocycle = "Гидроцикл/Квадроцикл";
        arch_text_hunting = "Су асты аңшылығы";
        arch_text_kayaking = "Каякинг";
        arch_text_serfing = "Аспандағы серфинг";
        arch_text_parachute = "Парашют";
        arch_text_beach = "ЖАҒАЖАЙ";
        arch_text_volleyball = "Волейбол алаңы";
        arch_text_kino = "Ашық аспан кинотеатр";
        arch_text_playground = "Ойын алаңы";
        arch_text_yoga = "Йога";
        arch_text_pool = "БАССЕЙН АЛАҢЫ";
        arch_text_bbq = "ГРИЛЬ ЖӘНЕ БАРБЕКЮ АЙМАҒЫ";
        arch_text_sauna = "СКАНДИНАВИЯ МОНШАСЫ";
        arch_text_price = "БАҒАСЫ";
        
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

        arch_text_activities = "ACTIVITIES";
        arch_text_yachting = "Yachting";
        arch_text_diving = "Diving";
        arch_text_hydrocycle = "Jet ski/Quad bike";
        arch_text_hunting = "Spearfishing";
        arch_text_kayaking = "Kayaking";
        arch_text_serfing = "Sky surfing";
        arch_text_parachute = "Parachute";
        arch_text_beach = "BEACH";
        arch_text_volleyball = "Volleyball court";
        arch_text_kino = "Cinema under the sky";
        arch_text_playground = "Playground";
        arch_text_yoga = "Yoga";
        arch_text_pool = "POOL ZONE";
        arch_text_bbq = "GRILL AND BBQ AREA";
        arch_text_sauna = "SCANDINAVIAN SAUNA";
        arch_text_price = "PRICE";

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

        arch_text_activities = "АКТИВНЫЙ ОТДЫХ";
        arch_text_yachting = "Яхтинг";
        arch_text_diving = "Дайвинг";
        arch_text_hydrocycle = "Гидроцикл/Квадроцикл";
        arch_text_hunting = "Подводная охота";
        arch_text_kayaking = "Каякинг";
        arch_text_serfing = "Скайсерфинг";
        arch_text_parachute = "Парашют";
        arch_text_beach = "ПЛЯЖ";
        arch_text_volleyball = "Волейбольная площадка";
        arch_text_kino = "Кинотеатр под открытым небом";
        arch_text_playground = "Детская площадка";
        arch_text_yoga = "Йога";
        arch_text_pool = "ЗОНА БАССЕЙНА";
        arch_text_bbq = "ГРИЛЬ И BBQ ЗОНА";
        arch_text_sauna = "СКАНДИНАВСКИЕ БАНИ";
        arch_text_price = "Цены";
    }
}
