# Viewport и адаптивность #

## Что такое viewport? ##

**Viewport** - это видимая область веб-страницы в браузере.<br>
На **десктопе** он обычно равен ширине окна.<br>
На **мобильных устройствах** - сложнее: по умолчанию браузер имитирует десктопную ширину (980px+), чтобы старые сайты
не "ломались".

## Проблема без viewport ##

Если не указать явный `<meta viewport>`, мобильный браузер:

* уменьшит сайт для вмещения в десктопный масштаб
* текст будет мелким, нужно масштабировать вручную

Без мета-тега страница на мобильном выглядит как уменьшенная копия десктопа.

## Решение: добавить meta тег с viewport ##

````html

<meta name="viewport" content="width=device-width, initial-scale=1.0">
````

Разбор параметров:

* **width=device-width** — устанавливает ширину viewport равной ширине устройства
* **initial-scale=1.0** — устанавливает начальный масштаб (100%)

## Адаптивность начинается с viewport ##

Адаптивный сайт:

1. Устанавливает правильный viewport
2. Использует media queries в CSS (@media)
3. Применяет относительные единицы (%, em, rem, vw, vh)
4. Проверяется в DevTools (режимы экранов)

**Пример:**

````html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Адаптивный сайт</title>
    <style>
        body {
            margin: 0;
            font-family: sans-serif;
        }

        .container {
            max-width: 600px;
            margin: auto;
            padding: 1rem;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Привет, мир!</h1>
    <p>Эта страница адаптирована под мобильные устройства.</p>
</div>
</body>
</html>
````