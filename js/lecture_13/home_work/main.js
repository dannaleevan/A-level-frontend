const housingType = [
    {
        type: 'Permanent housing',
        img: {
            source: 'https://stopcor.org/wp-content/uploads/2021/05/minoborony_13-1024x578.jpg',
            alt: 'Permanent housing'
        }  
    },
    {
        type: 'Service housing',
        img: {
            source: 'https://www.mil.gov.ua/assets/images/resources/54292/3bc7165e0fad73a5f437bcd27b5842c1d4257dc7.jpg',
            alt: 'Service housing'
        },
    }

];

const card = `
    <div class="line">
    <img class="card__img src="${img.source}" alt="${img.alt}">
    <p class="card__name">${type}</p>
    </div>;`