const translations = {
    ukr: {
        insuranceMobile:"Insurance",
        bus:"Автобуси",
        train:"Залізничні квитки",
        plane:"Авіаквитки",
        hotels: "Готелі",
        insurance: "Страхування",
        about: "Про нас",
        savingWithoutCompromises: "Економія без Компромісів",
        cheapTicketsForYourDreams: "Дешеві Квитки для Вашої Мрії!",
        supportAtHeight: "Підтримка на Висоті",
        ourManagersAreAlwaysWithYou: "Наші Менеджери завжди поруч з Вами!",
        convenienceAtEveryStage: "Зручність на Кожному Етапі",
        newLevelOfServiceForYou: "Новий Рівень Сервісу для Вас!",
        popularQuestions: "Популярні запитання",
            howToBookTicket: "Як забронювати квиток онлайн?",
            whereToViewReservation: "Де переглянути своє бронювання?",
            canReservationBeSavedWithoutPayment: "Чи можна зберегти бронювання без оплати?",
            travellingWithPets: "Поїздки з тваринами",
            luggageTransportation: "Перевезення багажу",
            bookTicketInstructions: "Щоб забронювати авіаквиток, виберіть: тип польоту (в одну сторону, в обидві сторони, мультисегментний); міста вильоту і прильоту; дату подорожі; кількість пасажирів; Натисніть кнопку «Знайти». Серед запропонованих рейсів виберіть відповідний варіант і натисніть кнопку «Вибрати». Далі вкажіть дані всіх пасажирів і перейдіть до оплати авіаквитка.",
            viewReservationInstructions: "Білети будуть відправлені на електронну пошту, яку ви вказали під час бронювання. Завітайте на свою електронну пошту та перевірте папку 'Вхідні' або 'Спам', якщо ви не знайшли листа у головній скринці.",
            reservationSaveWithoutPaymentInstructions: "Для кожного окремого бронювання вказується строк для оплати, який може бути меншим за 12 годин. Якщо протягом цього часу ви не здійснили повну оплату, ваше бронювання буде скасовано.",
            travellingWithPetsInstructions: "При плануванні поїздки з твариною, ми наполегливо рекомендуємо заздалегідь підготувати ветеринарний паспорт з відмітками про зроблені щеплення, довідку про стан здоров’я тварини, переносну сумку або клітку з глухим дном, а також забезпечити наявність чистої питної води. Перевізник має право регламентувати правила провезення тварин на автобусах своїх рейсів, тому необхідно уточнювати цю інформацію індивідуально.",
            luggageTransportationInstructions: "Зверніть увагу, що перевізник має повне право відмовити пасажиру автобуса в провезенні ручної поклажі або багажу, якщо цей багаж перекриває прохід в транспорті іншим пасажирам, або не відповідає кількості та розмірами. Інформацію про умови провезення багажу на конкретних рейсах ви завжди можете уточнити у перевізника.",
            mikhailKryuk: "Михайло Крюк",
            mikhailComment: "Моя дружина та я вже декілька разів користувалися послугами цього сервісу для бронювання авіа-, автобусних та ж/д квитків. Нам завжди подобалося, наскільки швидко та легко можна знайти та придбати квитки через цей веб-сайт. Обслуговування клієнтів завжди дуже доброзичливе, а відправлення завжди вчасне.",
            viktoriaKotsiubailo: "Вікторія Чуйко",
            viktoriaComment: "Недавно подорожувала разом із коханим, користуючись послугами цього сервісу. Хочу поділитися своїми враженнями - це була найкраща подорож! Зручне бронювання, чудовий вибір квитків та бездоганний сервіс. Всі наші перевезення були вчасними, а ніяких непорозумінь чи труднощів не виникло",
            dmytroMainyi: "Дмитро Майний",
            dmytroComment: "Я вже багато років вірний цьому сервісу. Купував квитки на різні види транспорту - від авіації до автобусів. Сервіс завжди на високому рівні. Останнім часом користувався авіабілетами, і кожен раз отримував їх на електронну пошту миттєво. Ніяких турбот та стресів, тільки приємні враження від подорожей!",
            innaKryuk:"Інна Ващенко",
innaComment:"Забронювала квитки на потяг на цьому сайті і вони відразу прийшли на електронну пошту! Подорож минула дуже комфортно, без зайвих перепон. Все було так, як я і сподівалася.",
gannaKotsiubailo:"Ганна Сирота",
gannaComment:"Бронювала квитки на потяг на цьому сайті. Легко, швидко і без непорозумінь. А подорожувати потягом було просто задоволенням - зручні місця і приємна атмосфера!",
sashaMainyi:"Іван Гайдай",
sashaComment:" Перша моя подорож потягом після довгого часу і все пройшло на відмінно! Бронювання квитків на сайті було дуже зручним, а потяг був неймовірно комфортним.",
            telegramTitle: "Ваш особистий кабінет у Telegram",
            svitlanaKryuk:"Яна Каращук",
svitlanaComment:"Сайт простий у використанні, і вже через кілька хвилин у мене були квитки у руках. Чудовий сервіс! Всім Рекомендую!",
mukolaKotsiubailo:"Микола Кононов",
mukolaComment:" Шукаючи кращі ціни на авіаквитки, натрапив на цей сайт і не пожалкував! Простий і швидкий процес бронювання, а квитки прийшли майже миттєво.",
olegMainyi:"Олег Бурштика",
olegComment:"Забронював авіаквитки на цьому сайті і залишився дуже задоволений. Швидко, зручно і безпечно. Тепер з нетерпінням чекаю своєї подорожі!",
        consultation: "Консультація",
        accessToTickets: "Доступ до квитків",
        agencySupport: "Агенська підтримка",
        joinLink: "Приєднатись",
        // selectLanguage: "Оберіть мову:",
    //     ukrainian: "Українська",
    //    english: "Англійська",
    //   russian: "Російська",
      searchTitle: "Пошук дешевих квитків",
      searchTitlePlain:"Пошук авіаквитків",
      searchTitleTrain:"Пошук залізничних квитків",
      searchTitleBus:"Пошук автобусних квитків",
    },
    eng: {
        insuranceMobile:"Insurance",
        bus:"Buses",
         train:"Railway tickets",
         plane:"Airline tickets",
        hotels: "Hotels",
        insurance: "Insurance",
        about: "About Us",
        savingWithoutCompromises: "Saving Without Compromises",
        cheapTicketsForYourDreams: "Cheap Tickets for Your Dreams!",
        supportAtHeight: "Support at Height",
        ourManagersAreAlwaysWithYou: "Our Managers Are Always with You!",
        convenienceAtEveryStage: "Convenience at Every Stage",
        newLevelOfServiceForYou: "New Level of Service for You!",
        popularQuestions: "Popular Questions",
            howToBookTicket: "How to Book a Ticket Online?",
            whereToViewReservation: "Where to View Your Reservation?",
            canReservationBeSavedWithoutPayment: "Can the Reservation be Saved Without Payment?",
            travellingWithPets: "Traveling with Pets",
            luggageTransportation: "Luggage Transportation",
            bookTicketInstructions: "To book an airline ticket, select: type of flight (one way, round trip, multi-segment); departure and arrival cities; travel date; number of passengers; Click 'Find'. From the proposed flights, choose the appropriate option and click 'Select'. Then enter the details of all passengers and proceed to pay for the airline ticket.",
            viewReservationInstructions: "Tickets will be sent to the email you provided during booking. Visit your email and check the 'Inbox' or 'Spam' folder if you don't find the email in the main inbox.",
            reservationSaveWithoutPaymentInstructions: "For each individual reservation, a payment deadline is specified, which may be less than 12 hours. If you do not make full payment within this time, your reservation will be canceled.",
            travellingWithPetsInstructions: "When planning a trip with a pet, we strongly recommend preparing in advance a veterinary passport with marks of vaccinations, a health certificate for the animal, a portable bag or a cage with a solid bottom, and also ensuring the availability of clean drinking water. The carrier has the right to regulate the rules for transporting animals on buses of its routes, so it is necessary to clarify this information individually.",
            luggageTransportationInstructions: "Please note that the carrier has the full right to refuse a bus passenger to carry hand luggage or baggage if this baggage obstructs the passage in the transport to other passengers, or does not correspond to the quantity and sizes. You can always clarify information about the conditions of transporting luggage on specific routes from the carrier.",
            mikhailKryuk: "Mikhail Kryuk",
        mikhailComment: "My wife and I have used this service several times to book air, bus, and train tickets. We have always liked how quickly and easily we can find and purchase tickets through this website. The customer service is always very friendly, and the dispatch is always on time.",
        viktoriaKotsiubailo: "Victoria Chuiko",
        viktoriaComment: "Recently traveled with my loved one using this service. I want to share my impressions - it was the best trip! Convenient booking, excellent ticket selection, and impeccable service. All our transports were timely, and there were no misunderstandings or difficulties.",
        dmytroMainyi: "Dmytro Mainyi",
        dmytroComment: "I have been loyal to this service for many years. Bought tickets for various modes of transport - from aviation to buses. The service is always top-notch. Recently used airplane tickets, and each time received them instantly in my email. No worries or stress, just pleasant travel experiences!",
        telegramTitle: "Your Personal Cabinet on Telegram",
        innaKryuk:"Inna Vashchenko",
        innaComment: "I booked train tickets on this website and they came immediately to my e-mail! The trip was very comfortable, without any unnecessary obstacles. Everything was as I expected.",
        gannaKotsiubailo:"Ganna Orphan",
        gannaComment: "I booked train tickets on this site. Easy, fast and without misunderstandings. And traveling by train was just a pleasure - comfortable seats and a pleasant atmosphere!",
        sashaMainyi:"Ivan Gaidai",
        sashaComment:" My first train trip after a long time and everything went perfectly! Booking tickets on the website was very convenient and the train was incredibly comfortable.",
        consultation: "Consultation",
        svitlanaKryuk:"Yana Karaschuk",
svitlanaComment:"The site is easy to use and within minutes I had my tickets in hand. Great service! I recommend it to everyone!",
mukolaKotsiubailo:"Mykola Kononov",
mukolaComment:" I came across this site while looking for the best flight prices and I'm not sorry! Easy and fast booking process, and the tickets arrived almost instantly.",
olegMainyi:"Oleg Burshtika",
olegComment:"Booked flights on this site and was very satisfied. Fast, convenient and safe. Now I'm looking forward to my trip!",
        accessToTickets: "Access to Tickets",
        agencySupport: "Agency Support",
        joinLink: "Join",
        searchTitleTrain:"Search train tickets",
        searchTitlePlain:"Airline search",
      searchTitle: "Search for cheap tickets",
      searchTitleBus:"Search for bus tickets",
    },
    rus: {
        insuranceMobile:"Insurance",
        bus:"Автобусы",
         train:"Ж/д билеты",
         plane:"Авиабилеты",
        hotels: "Гостиницы",
        insurance: "Страхование",
        about: "О нас",
        savingWithoutCompromises: "Экономия без Компромиссов",
        cheapTicketsForYourDreams: "Дешевые Билеты для Вашей Мечты!",
        supportAtHeight: "Поддержка на Высоте",
        ourManagersAreAlwaysWithYou: "Наши Менеджеры всегда рядом с Вами!",
        convenienceAtEveryStage: "Удобство на Каждом Этапе",
        newLevelOfServiceForYou: "Новый Уровень Сервиса для Вас!",
        popularQuestions: "Популярные вопросы",
            howToBookTicket: "Как забронировать билет онлайн?",
            whereToViewReservation: "Где посмотреть свое бронирование?",
            canReservationBeSavedWithoutPayment: "Можно ли сохранить бронирование без оплаты?",
            travellingWithPets: "Поездки с животными",
            luggageTransportation: "Перевозка багажа",
            bookTicketInstructions: "Чтобы забронировать авиабилет, выберите: тип полета (в одну сторону, в обе стороны, мульти-сегментный); города вылета и прилета; дату поездки; количество пассажиров; Нажмите кнопку 'Найти'. Из предложенных рейсов выберите подходящий вариант и нажмите 'Выбрать'. Затем введите данные всех пассажиров и перейдите к оплате авиабилета.",
            viewReservationInstructions: "Билеты будут отправлены на электронную почту, которую вы указали при бронировании. Зайдите на свою электронную почту и проверьте папку 'Входящие' или 'Спам', если вы не нашли письмо в основной почте.",
            reservationSaveWithoutPaymentInstructions: "Для каждого отдельного бронирования указывается срок для оплаты, который может быть менее 12 часов. Если вы не произведете полную оплату в течение этого времени, ваше бронирование будет отменено.",
            travellingWithPetsInstructions: "При планировании поездки с животным настоятельно рекомендуем заранее подготовить ветеринарный паспорт с отметками о сделанных прививках, справку о состоянии здоровья животного, переносную сумку или клетку с глухим дном, а также обеспечить наличие чистой питьевой воды. Перевозчик имеет право регламентировать правила провоза животных на автобусах своих маршрутов, поэтому необходимо уточнить эту информацию индивидуально.",
            luggageTransportationInstructions: "Обратите внимание, что перевозчик имеет полное право отказать пассажиру автобуса в провозе ручной клади или багажа, если этот багаж закрывает проход в транспорте другим пассажирам или не соответствует количеству и размерам. Информацию о условиях перевозки багажа на конкретных маршрутах вы всегда можете уточнить у перевозчика.",
            mikhailKryuk: "Михаил Крюк",
            mikhailComment: "Моя жена и я несколько раз пользовались услугами этого сервиса для бронирования авиа-, автобусных и ж/д билетов. Нам всегда нравилось, насколько быстро и легко можно найти и приобрести билеты через этот веб-сайт. Обслуживание клиентов всегда очень дружелюбное, а отправка всегда вовремя.",
            viktoriaKotsiubailo: "Виктория Чуйко",
            viktoriaComment: "Недавно путешествовала вместе с любимым, пользуясь услугами этого сервиса. Хочу поделиться своими впечатлениями - это было лучшее путешествие! Удобное бронирование, отличный выбор билетов и безупречное обслуживание. Все наши перевозки были своевременными, и не возникло никаких недоразумений или трудностей.",
            dmytroMainyi: "Дмитрий Майный",
            dmytroComment: "Я уже много лет верен этому сервису. Покупал билеты на разные виды транспорта - от авиации до автобусов. Сервис всегда на высоком уровне. Последнее время пользовался авиабилетами, и каждый раз получал их на электронную почту мгновенно. Никаких забот и стрессов, только приятные впечатления от путешествий!",
            telegramTitle: "Ваш личный кабинет в Telegram",
            innaKryuk:"Инна Ващенко",
innaComment:"Забронировала билеты на поезд на этом сайте и они сразу пришли на электронную почту! Путешествие прошло очень комфортно, без лишних преград. Все было так, как я и надеялась.",
gannaKotsiubailo:"Анна Сирота",
gannaComment:"Бронировала билеты на поезд на этом сайте. Легко, быстро и без недоразумений. А путешествовать поездом было просто удовольствием - удобные места и приятная атмосфера!",
sashaMainyi:"Иван Гайдай",
sashaComment:" Первое мое путешествие на поезде после долгого времени и все прошло на отлично! Бронирование билетов на сайте было очень удобным, а поезд был невероятно комфортным.",
        consultation: "Консультация",
        svitlanaKryuk:"Яна Каращук",
svitlanaComment:"Сайт прост в использовании, и уже через несколько минут у меня были билеты в руках. Отличный сервис! Всем Рекомендую!",
mukolaKotsiubailo:"Николай Кононов",
mukolaComment:" Ища лучшие цены на авиабилеты, наткнулся на этот сайт и не пожалел! Простой и быстрый процесс бронирования, а билеты пришли почти мгновенно.",
olegMainyi:"Олег Бурштика",
olegComment:"Забронировал авиабилеты на этом сайте и остался очень доволен. Быстро, удобно и безопасно. Теперь с нетерпением жду своего путешествия!",
        accessToTickets: "Доступ к билетам",
        agencySupport: "Агентская поддержка",
        joinLink: "Присоединиться",
        // selectLanguage: "Выберите язык:",
    //     ukrainian: "Украинский",
    //    english: "Английский",
    //   russian: "Русский",
    searchTitleTrain:"Поиск ж/д билетов",
    searchTitlePlain:"Поиск авиабилетов",
    searchTitleBus:"Поиск автобусных билетов",
      searchTitle: "Поиск дешевых билетов"
    }
};
document.addEventListener("DOMContentLoaded", function() {
    // Зчитуємо вибрану мову з localStorage, якщо вона там є
    const savedLanguage = localStorage.getItem("selectedLanguage");
    
    // Встановлюємо вибрану мову на основі даних localStorage або за замовчуванням
    const selectedLanguage = savedLanguage || "ukr";
    document.getElementById("language").value = selectedLanguage;
    
    // Викликаємо зміну мови
    changeLanguage();

    // Зберігаємо обрану мову при зміні
    document.getElementById("language").addEventListener("change", function() {
        const newLanguage = document.getElementById("language").value;
        localStorage.setItem("selectedLanguage", newLanguage);
    });
});

function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value;
    const elementsToTranslate = document.querySelectorAll(".translate");

    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute("data-translation-key");

        if (translations[selectedLanguage] && translations[selectedLanguage][translationKey]) {
            element.innerText = translations[selectedLanguage][translationKey];

            const iframeUkr = document.getElementById("bookingIframeUkr");
            const iframeEng = document.getElementById("bookingIframeEng");
            const iframeRus = document.getElementById("bookingIframeRus");

            switch (selectedLanguage) {
                case "ukr":
                    iframeUkr.style.display = "block";
                    iframeEng.style.display = "none";
                    iframeRus.style.display = "none";
                    break;
                case "eng":
                    iframeUkr.style.display = "none";
                    iframeEng.style.display = "block";
                    iframeRus.style.display = "none";
                    break;
                case "rus":
                    iframeUkr.style.display = "none";
                    iframeEng.style.display = "none";
                    iframeRus.style.display = "block";
                    break;
                default:
                    iframeUkr.style.display = "block";
                    iframeEng.style.display = "none";
                    iframeRus.style.display = "none";
                    break;
            }
        }
    });
    const languageSelect = document.getElementById("language");
            const selectedOption = languageSelect.options[languageSelect.selectedIndex];
            selectedOption.textContent = selectedOption.textContent.slice(0, 3);
}
