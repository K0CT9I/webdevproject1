document.addEventListener('DOMContentLoaded', function () {
    // Запрос к API
    fetch('https://d5dd0g2vtgckehss7ll6.apigw.yandexcloud.net/price')
        .then(response => response.json())
        .then(data => {
            // Обновляем HTML для уровня Start
            const startCard = document.getElementById('startCard');
            updatePricingCard(startCard, data[0]);

            // Обновляем HTML для уровня Basic
            const basicCard = document.getElementById('basicCard');
            updatePricingCard(basicCard, data[1]);

            // Обновляем HTML для уровня Pro
            const proCard = document.getElementById('proCard');
            updatePricingCard(proCard, data[2]);
        })
        .catch(error => console.error('Ошибка при получении данных из API:', error));
});

function updatePricingCard(cardElement, pricingData) {
    // Находим все необходимые элементы внутри карточки
    const levelText = cardElement.query Selector('.pricing-level-text');
    const priceText = cardElement.querySelector('.pricing-price-text');

    // Обновляем текстовые элементы данными из API
    levelText.textContent = pricingData.level;
    priceText.textContent = `$${pricingData.price}`;

    // Добавьте обработку других элементов в карточке, если необходимо
}


    // Запрос к API 2
    fetch('https://d5dd0g2vtgckehss7ll6.apigw.yandexcloud.net/price')
        .then(response => response.json())
        .then(data => {
            document.getElementById('apiData2').innerText += data.value;
        })
        .catch(error => console.error('Ошибка при получении данных из API 2:', error));
});
