const greetings = [
  { language: 'English', text: 'Hello, world!' },
  { language: 'Español', text: '¡Hola, mundo!' },
  { language: 'Français', text: 'Bonjour, le monde !' },
  { language: 'Deutsch', text: 'Hallo, Welt!' },
  { language: 'Português', text: 'Olá, mundo!' },
  { language: '日本語', text: 'こんにちは、世界！' },
  { language: '한국어', text: '안녕하세요, 세계!' },
  { language: 'العربية', text: 'مرحبًا بالعالم!' },
  { language: 'Elvish (Quenya)', text: 'Aiya, Ambar!' }
];

const languageSelect = document.querySelector('#language');
const greetingOutput = document.querySelector('.greeting');

const renderOptions = () => {
  greetings.forEach(({ language }, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = language;
    languageSelect.append(option);
  });
};

const updateGreeting = () => {
  const index = Number(languageSelect.value);
  const selection = greetings[index] ?? greetings[0];
  greetingOutput.textContent = selection.text;
};

renderOptions();
updateGreeting();

languageSelect.addEventListener('change', updateGreeting);
