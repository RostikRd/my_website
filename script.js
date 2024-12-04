// Елементи для основного контенту
const mainContent = document.getElementById('mainContent')
const textContainer = document.getElementById('textContainer')
const btnCool = document.getElementById('btnCool')
const btnAddText = document.getElementById('btnAddText')

let buttonTwoClicks = 0 // Лічильник натискань кнопки "2"

// Обробка кнопки "1"
btnCool.addEventListener('click', () => {
	if (buttonTwoClicks > 0) {
		// Якщо користувач натиснув кнопку "2" хоча б раз
		document.body.innerHTML = '<div id="loveMessage">І Я ТЕБЕ ЛЮБЛЮ)))</div>'
	} else {
		// Якщо кнопка "2" не натискалась
		mainContent.innerHTML = '<p>І Я ТЕБЕ ЛЮБЛЮ)))</p>'
		textContainer.innerHTML = '' // Очистити текст "ЛАЛАЛАЛА"
	}
})

// Обробка кнопки "2"
btnAddText.addEventListener('click', () => {
	const newText = document.createElement('p')
	newText.textContent = 'ПОДУМАЙ ДОБРЕ!!!!'
	textContainer.appendChild(newText)
	buttonTwoClicks++ // Збільшити лічильник натискань
})
