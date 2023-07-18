import React from 'react';

const Shops = () => {
    return(
        <div className='shops' id='shops'>
            <div>
                <p>Наши магазины:</p>
                <p>1. Магазин на ул. Площадь Восстания 1-2</p>
                <p>2. Магазин на Гоголевском пер. 10 (1 этаж)</p>
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A11482dd91bd3ab1ce18165623c1b35cd2d54e311784bff9117cad63378e61c3a&amp;source=constructor" width="60%" height="400" frameborder="0"></iframe>
        </div>
    );
};

export default Shops