// Наборы символов
const charsets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

// Элементы DOM
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const passwordOutput = document.getElementById('passwordOutput');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');
const copyNotification = document.getElementById('copyNotification');

let currentPassword = '';

// Обновление значения длины
lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

// Функция генерации пароля
function generatePassword() {
  const length = parseInt(lengthSlider.value);
  let charset = '';

  // Собираем набор символов
  if (uppercaseCheck.checked) charset += charsets.uppercase;
  if (lowercaseCheck.checked) charset += charsets.lowercase;
  if (numbersCheck.checked) charset += charsets.numbers;
  if (symbolsCheck.checked) charset += charsets.symbols;

  // Проверяем, что выбран хотя бы один тип символов
  if (charset === '') {
    alert('Выберите хотя бы один тип символов!');
    return;
  }

  // Генерируем пароль
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  currentPassword = password;
  passwordOutput.textContent = password;
  copyBtn.disabled = false;

  // Обновляем индикатор надежности
  updateStrengthIndicator(password);
}

// Функция оценки надежности пароля
function updateStrengthIndicator(password) {
  let score = 0;
  let feedback = '';

  // Длина
  if (password.length >= 8) score += 25;
  if (password.length >= 12) score += 25;

  // Типы символов
  if (/[a-z]/.test(password)) score += 10;
  if (/[A-Z]/.test(password)) score += 10;
  if (/[0-9]/.test(password)) score += 15;
  if (/[^a-zA-Z0-9]/.test(password)) score += 15;

  // Определяем уровень и цвет
  if (score < 30) {
    feedback = 'Слабый';
    strengthFill.style.background = '#dc3545';
  } else if (score < 60) {
    feedback = 'Средний';
    strengthFill.style.background = '#ffc107';
  } else if (score < 90) {
    feedback = 'Хороший';
    strengthFill.style.background = '#28a745';
  } else {
    feedback = 'Отличный';
    strengthFill.style.background = '#20c997';
  }

  strengthFill.style.width = score + '%';
  strengthText.textContent = feedback;
}

// Функция копирования в буфер обмена
async function copyPassword() {
  try {
    await navigator.clipboard.writeText(currentPassword);
    showCopyNotification();
  } catch (err) {
    // Fallback для старых браузеров
    const textArea = document.createElement('textarea');
    textArea.value = currentPassword;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showCopyNotification();
  }
}

// Показать уведомление о копировании
function showCopyNotification() {
  copyNotification.classList.add('show');
  setTimeout(() => {
    copyNotification.classList.remove('show');
  }, 2000);
}

// Обработчики событий
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

// Генерируем первый пароль при загрузке
generatePassword();
