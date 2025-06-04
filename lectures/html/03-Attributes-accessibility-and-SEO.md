# Атрибуты доступности и SEO #

| Атрибут          | Пример                                               | Назначение                                                          |
|------------------|------------------------------------------------------|---------------------------------------------------------------------|
| lang             | `<html lang="ru">`                                   | Указывает язык документа для Google и читалок                       |
| title            | `<title>Мой сайт</title>`                            | Название страницы (отображается в вкладке и в поиске)               |
| meta description | `<meta name="description" content="Описание сайта">` | Краткое описание (часто попадает в сниппет в поиске)                |
| alt              | `<img src="photo.jpg" alt="Фото кота">`              | Текстовая альтернатива для картинок — помогает поиску и доступности |
| rel="canonical"  | `<link rel="canonical" href="https://example.com">`  | Избегает дублей страниц                                             |
| meta robots      | `<meta name="robots" content="index,follow">`        | Управляет индексацией страниц поисковиками                          |

# Что такое aria-* и role

* **ARIA** (Accessible Rich Internet Applications) - набор атрибутов доступности, которые помогают экранным читалкам или
  другим вспомогательным технологиями понять смысл и поведение интерфейса.
* **role** - указывает, какую роль выполняет элемент (например, кнопка, диалог, таблица).

## Когда нужно использовать ARIA

* Когда создаешь кастомные элементы, которые непонятны браузеру по умолчанию:
    * кастомные кнопки/ссылки на div
    * модальные окна
    * вкладки (tabs)
    * раскрывающиеся меню
    * карусели, слайдеры, алерты
* Когда хочешь усилить семантику:
    * объяснить статус aria-disabled, aria-hidden, aria-checked

## Примеры использования

**Кастомная кнопка**

```html
<div role="button" tabindex="0" aria-pressed="false">
    click me
</div>
```

| Атрибут       | Значение                                          |
|---------------|---------------------------------------------------|
| role="button" | Сообщает, что это кнопка                          |
| tabindex="0"  | Делает элемент фокусируемым по Tab                |
| aria-pressed  | Показывает состояние (например, на toggle кнопке) |

**Модальное окно**

```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
    <h2 id="modal-title">Подтвердите действие</h2>
    <p id="modal-desc">Вы уверены, что хотите удалить элемент?</p>
</div>
```

| Атрибут           | Значение                          |
|-------------------|-----------------------------------|
| role="dialog"     | Сообщает, что это диалоговое окно |
| aria-modal="true" | Соообщает, что фон заблокирован   |
| aria-labelledby   | Заголовок, читаемым первым        |
| aria-describedby  | Описание, читаемое вторым         |

**Вкладки**

````html
<div role="tablist">
    <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Вкладка 1</button>
    <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">Вкладка 2</button>
</div>

<div role="tabpanel" id="panel1" aria-labelledby="tab1">Контент 1</div>
<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Контент 2</div>
````

## Важно ##

* Не стоит использовать ARIA, если можно использовать семантический HTML

````html
<!-- лучше -->
<button>OK</button>
<!-- хуже -->
<div role="button" tabindex="0">OK</div>
````

* Не путай **aria-label** и **aria-labelledby**
    * **aria-label** - прямой текст
    * **aria-labelledby="id"** - ссылается на элемент с текстом
