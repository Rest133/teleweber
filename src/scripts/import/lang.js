const activeLang = 'en'

const allTexts = {
    'nmenu-whom': {
        ru: 'Для кого',
        en: 'For whom'
    },
    'nmenu-cases': {
        ru: 'Кейсы',
        en: 'Cases'
    },
    'nmenu-price': {
        ru: 'Цены',
        en: 'Price'
    },
    'nmenu-contacts': {
        ru: 'Контакты',
        en: 'Contacts'
    },
    htbtn: {
        ru: 'Попробовать бесплатно',
        en: 'Try for free'
    },
    hlogin: {
        ru: 'Войти',
        en: 'Log in'
    },
    tsb: {
        ru: 'Парсинговый сервис <br> для автоматического сбора информации <br> по ключевым словам в Телеграм',
        en: 'Parsing service <br> for automatic information collecting <br> by keywords in Telegram'
    },
    tq: {
        ru: 'Сервис позволяет решать задачи привлечения новых клиентов <br> и мониторинга репутации.<br> Итоговый результат формируется в удобном виде в Телеграм.',
        en: 'The service allows you to solve the problem of attracting <br>' +
            'new customers and reputation monitoring. <br> The final result is generated in a convenient form in Telegram.'
    },
    tbtn: {
        ru: 'Попробовать бесплатно',
        en: 'Try for free'
    },
    tat: {
        ru: 'Попробовать бесплатно',
        en: 'For whom is the solution? '
    },
    'sct-0': {
        ru: 'Представители товаров <br> и услуг разных сфер',
        en: 'Representatives of goods <br> and services of different areas'
    },
    'scd-0': {
        ru: 'Находите клиентов,<br> заинтересованных в вашем предложении.<br> Отслеживайте, что про вас говорят.',
        en: 'Find customers,<br>who are interested in your offer.<br>Keep track of what people are saying about you.'
    },
    'sct-1': {
        ru: 'Партнёрки',
        en: 'Affiliates'
    },
    'scd-1': {
        ru: 'Мониторьте свою репутацию <br> в affiliate чатах.<br> Привлекайте новых вебмастеров и рекламодателей.',
        en: 'Monitor your reputation<br>In affiliate chats. <br>Attract new webmasters<br>and advertisers.'
    },
    'sct-2': {
        ru: 'Медиабаинговые агентства<br> и арбитражные команды',
        en: 'Media buying agencies <br> and arbitration teams'
    },
    'scd-2': {
        ru: 'Ищите офферы от партнёрок<br> и прямых рекламодателей с высоким ROI.',
        en: 'Search for most profitable campaigns <br> from direct advertisers <br> and affiliate networks'
    },
    'sct-3': {
        ru: 'Прямые рекламодатели',
        en: 'Direct advertisers'
    },
    'scd-3': {
        ru: 'Предлагайте офферы<br> напрямую медиабаинговым агентствам,<br> арбитражным командам и партнёркам.',
        en: 'Offer your products <br> directly to media buying agencies,<br>arbitrage teams and affiliate networks.'
    },
    'sct-4': {
        ru: 'Рекламные агентства',
        en: 'Advertising agencies'
    },
    'scd-4': {
        ru: 'Мониторьте репутацию клиентов<br> и ищите исполнителей<br> в профильных чатах.',
        en: 'Monitor clients reputations <br> and search for performers <br> In the profile chats.'
    },
    'sct-5': {
        ru: 'Платежные и карточные сервисы',
        en: 'Payment and card services'
    },
    'scd-5': {
        ru: 'Выходите на арбитражные команды<br> и медиабаинговые агентства<br> с предложением виртуальных карт<br> и платёжных предложений.',
        en: 'Reach out to arbitration teams<br>and media buying agencies<br>with virtual card offers<br>and payment offers.'
    },
    'sct-6': {
        ru: 'Антидетект-браузеры',
        en: 'Anti-detect browsers'
    },
    'scd-6': {
        ru: 'Находите новых клиентов<br> в affiliate сфере. ',
        en: 'Find new customers <br> In the affiliate field. '
    },
    'sct-7': {
        ru: 'HR-службы',
        en: 'HR Services'
    },
    'scd-7': {
        ru: 'Рекрутируйте новых сотрудников<br> под ваши офферы.',
        en: 'Recruit new employees <br> to your offers.'
    },
    sdt1: {
        ru: 'Ключевые <br class="no-pc"> возможности сервиса',
        en: 'Key features of service'
    },
    'sdt1-0': {
        ru: 'Мониторинг репутации',
        en: 'Reputation monitoring'
    },
    'sdd1-0': {
        ru: 'Мониторьте чаты <br class=\'no-mb\'>по отзывам, услугам <br>и продуктам вашей компании.',
        en: 'Monitor chat rooms <br>on your company\'s reviews, services<br>and products of your company. '
    },
    'sdt1-1': {
        ru: 'Сбор целевой информации <br>по ключевым словам',
        en: 'Gathering targeted information <br>by keywords'
    },
    'sdd1-1': {
        ru: 'Ищите совпадения по ключевым словам <br> в чатах Телеграм <br>и собирайте информацию в удобном виде.',
        en: 'Search for keyword matches in Telegram chats<br>and collect information in a convenient way.'
    },
    'sdt1-2': {
        ru: 'Удобная настройка <br>из личного кабинета',
        en: 'Easy customization <br> from personal cabinet'
    },
    'sdd1-2': {
        ru: 'Управляйте настройкой ключевых слов,<br>аккаунтами и чатами <br> из личного кабинета пользователя. ',
        en: 'Manage your keyword setup,<br>accounts and chats<br>from the user\'s personal cabinet.'
    },
    sdt2: {
        ru: 'Выгоды <br class="no-pc"> от использования сервиса',
        en: 'Benefits of using the service'
    },
    'sdd2-0': {
        ru: 'Сокращение времени работы <br class=\'no-mb\'>до 3 раз, благодаря собранным <br class=\'no-mb\'>ключевым словам и чатам',
        en: 'Reduced running time <br class=\'no-mb\'> Up to 3x, thanks to collected<br class=\'no-mb\'> keywords and chats'
    },
    'sdd2-1': {
        ru: 'Повышение лояльности <br> за счёт быстрых ответов клиентам',
        en: 'Increased loyalty <br> through quick responses to customers'
    },
    'sdd2-2': {
        ru: 'Увеличение контактов <br> с потенциальными клиентами <br class=\'no-mb\'> на 15-20%',
        en: 'Increased contact<br>with potential customers<br>15-20%'
    },
    qst:{
        ru: 'Протестируйте поисковой сервис TeleWeber в действии! Бесплатный демо-доступ на сутки',
        en: 'Try out the TeleWeber search service in action! Free one-day demo access'
    },
    qsbtn:{
        ru: 'Получить',
        en: 'Get it'
    },
    vst:{
        ru: 'Функционал сервиса',
        en: 'Functionality of the service '
    }
}


for (let langText in allTexts) {
    document.querySelector(`[data-lang-${langText}]`).innerHTML = allTexts[langText][activeLang]
}
