let gen = document.getElementById('gen');
let book = document.getElementById('book');
let price = document.getElementById('price');
let tour = document.getElementById('tour');
let contact = document.getElementById('contact');
let shyn_Page1Foot_p = document.getElementById('shyn_Page1Foot_p');
let shyn_Page1Foot1_num = document.getElementById('shyn_Page1Foot1_num');



function setLanguage(language) {
    // Update the button text with the selected language
    document.getElementById('languageBtn').innerText = language;
    
    if (language === 'Kz') {
        gen.textContent = 'Басты'
        book.textContent = 'Броньдау'
        price.textContent = 'Бағалар'
        tour.textContent = 'Турлар'
        contact.textContent = 'Байланысу'
    } else if (language === 'En') {
        gen.textContent = 'Home'
        book.textContent = 'Book'
        price.textContent = 'Prices'
        tour.textContent = 'Tours'
        contact.textContent = 'Contact'

    } else if (language === 'Ru') {
        gen.textContent = 'Главное'
        book.textContent = 'Бронировать'
        price.textContent = 'Цены'
        tour.textContent = 'Туры'
        contact.textContent = 'Контакты'

    }
}
