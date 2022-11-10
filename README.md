# Инструкция по использованию

## Требования
+ Yarn v1
+ Node.js v17
+ Gulp

## Общая информация

Для написания разметки используется препроцессор **Pug**.

Для написания стилей используется препроцессор **Sass**.

Для компоновки js-файлов используется **Webpack**.

Код проекта пишется по методологии **mobile-first**. Сначала пишутся стили для устройств с малыми разрешениями, а затем при помощи медиазапросов дополняются для отображения на больших разрешениях.

При именовании классов используется методология **БЭМ**.

Страницы находятся в папке `/src/pages`. Каждая страница наследует один из лэйаутов, которые находятся в папке `src/views/layouts`. Для формирования разных типов страниц нужно использовать разные лэйауты.

Страницы содержат внутри себя модули (идущие один за другим). Разметка внутри страницы не ведется. Если есть необходимость в типовой разметке -- создается новый лэйаут. Если разметка нетиповая -- создается отдельный модуль.

Модули находятся в папке `/src/blocks/modules`. Модуль -- самостоятельная логически полная единица разметки. В состав модуля входят: файл разметки, файл стилей, файл скриптов.  
Модуль может содержать другие модули или компоненты.

Компоненты находятся в папке `/src/blocks/components`. Компонент -- небольшая единица разметки, которая может повторяться сразу в нескольких модулях. В состав компонента входят: файл разметки, файл стилей, файл скриптов.

## Начало работы

### Подготовка шрифтов

Шрифты расположены в папке `/src/fonts`.

Стили подключения шрифтов расположены в файле `/src/styles/general/_fonts.scss`.

### Подготовка стилей

Для написания стилей используется **Sass**, поэтому для использования какой-либо библиотеки, миксина или переменной необходимо пердварительно импортировать ее в рабочий файл (примеры в компонентах и модулях).

Стили компонентов необходимо импортировать вручную в стилевом файле модуля.

Стилевые файлы модулей необходимо импортировать в файл `src/blocks/modules/_index.scss`.

Базовые стили сайта задаются в файле `/src/styles/general/_base.scss`.

Стили лэйаутов задаются в файле `/src/styles/general/_layouts.scss`.

Основные цвета определены в файле `/src/styles/variables/_colors.scss`.

Миксины кнопок определены в файле: `/src/styles/mixins/_buttons.scss`.

### Подготовка скриптов

Скрипты из компонентов и модулей автоматически собираются в единый файл. Библиотеки скриптов находятся в папке `/src/scripts/library`.

## Технологии

### Отслеживание событий ресайза

Для отслеживания событий ресайза окна браузера и установки своих обработчиков этого события используется библиотека **ResizeListener**. Данная библиотека может отслеживать как событие глобального ресайза, так и отдельно события вертикального или горизонтального ресайза.

Пример использования метода `onHorizontalResize()`:
```
ResizeListener.onHorizontalResize(() => {
    window.location.reload();
});
```

### Текущий размер окна браузера

Для определение текущего размера окна браузера используется библиотека **Device**. Данная библиотека содержит методы `isMobile()` и `isDesktop()`, которые возвращают булево значение в зависимости от текущего размера окна браузера.

### Отображение системных сообщений

Для отображения системных сообщений (например, об ошибке) используется библиотека **Message**. Данная библиотека содержит метод `show()` для отображения любых сообщений и метод `showError()` для отображения сообщений об ошибках.

Пример использования метода `showError()`:
```
if(!subject) {
    Message.showError("Subject required!");
    return;
}
```

### Модальные окна

Для создания и отображения модальных окон используется библиотека **Modal**. Работать с библиотекой напрямую нет необходимости, поскольку модальные окна можно инициировать через специальный класс `.modal`.

Для создания модального окна достаточно создать новый модуль, скопировав в него Pug-файл из модуля `modal`. Контент модального окна размещается в блоке `.modal_content`. Если модальному окну добавить класс `.modal_visible`, модальное окно будет отображаться сразу после загрузки страницы.

Для управления модальным окном используется объект модального окна, ссылка на который хранится в элементе `.modal` в свойстве `modal`. Если для модального окна указан идентификатор, объект модального окна можно получить из объекта `window`, обратившись к свойству, одноименному с идентификатором модального окна.

Доступны следующие методы объекта модального окна: `hide()`, `show()`.

Пример получения объекта модального окна с идентификатором `modal1` через свойство элемента модального окна:
```
const modal1 = $("#modal1").get(0).modal;
```

Пример получения объекта модального окна с идентификатором `modal1` через объект window:
```
const modal1 = window.modal1;
```

### Отправка API-запросов

Для отправки API-запросов используется библиотека **Api**. Данная библиотека содержит метод `request()`, в который передается название API-метода и объект с данными. Также можно установить обработчики событий успешного или ошибочного результата запроса.

Пример использования метода `request()`:
```
Api.request(
    "addToCart",
    {
        productId: 123
    },
    (response) => {
        // do smthng...
    }
);
```

## Репозиторий

Необходимо коммитить свою работу. Для начала: хотя бы каждую страницу или логический блок (модули и компоненты, используемые в нескольких местах). Работать необходимо в ветке **dev**.