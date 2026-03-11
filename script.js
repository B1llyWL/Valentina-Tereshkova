document.addEventListener('DOMContentLoaded', function() {
    // ДАННЫЕ

    const ALL_QUALITIES = [
        "Спортивная подготовка",
        "Выносливость",
        "Смелость",
        "Дисциплина",
        "Психологическая устойчивость",
        "Целеустремлённость",
        "Удача",
        "Оптимизм"
    ];

    const QUALITY_INGREDIENTS = {
        "Оптимизм": ["Белый шоколад", "Свежие огурцы", "Дрожжи", "Сахар"],
        "Выносливость": ["Кокосовая стружка", "Картофель отварной", "Ржаная мука", "Какао-масло"],
        "Целеустремлённость": ["Малиновое пюре", "Морковь отварная", "Какао тёртое", "Гороховая мука"],
        "Спортивная подготовка": ["Белый велюр", "Куриная грудка отварная"],
        "Смелость": ["Зелёный базилик", "Зелень свежая (петрушка) и оливки", "Ядро кешью жареное тёртое"],
        "Дисциплина": ["Желатин", "Твёрдый сыр", "Соль"],
        "Психологическая устойчивость": ["Кокосовое молоко", "Яйца варёные", "Вода", "Молоко сухое"],
        "Удача": ["Сливки", "Майонез", "Соль и чёрный перец"]
    };

    const INGREDIENT_ICON = {
        // Оптимизм
        "Белый шоколад": "<img src='./assets/img/Белый_шоколад.png' class='ingr-icon'>",
        "Свежие огурцы": "🥒",
        "Дрожжи": "<img src='./assets/img/дрожжи.png' class='ingr-icon'>",
        "Сахар": "<img src='./assets/img/sugar.png' class='ingr-icon'>",
        // Выносливость
        "Кокосовая стружка": "🥥",
        "Картофель отварной": "🥔",
        "Ржаная мука": "🌾",
        "Какао-масло": "<img src='./assets/img/Какао_масло.png' class='ingr-icon'>",
        // Целеустремлённость
        "Малиновое пюре": "<img src='./assets/img/berry.png' class='ingr-icon'>",
        "Морковь отварная": "🥕",
        "Какао тёртое": "🍫",
        "Гороховая мука": "<img src='./assets/img/Гороховая_мука.png' class='ingr-icon'>",
        // Спортивная подготовка
        "Белый велюр": "🍰",
        "Куриная грудка отварная": "🍗",
        // Смелость
        "Зелёный базилик": "<img src='./assets/img/Базилик.png' class='ingr-icon'>",
        "Зелень свежая (петрушка) и оливки": "🌿 <img src='./assets/img/оливки.png' class='ingr-icon'>",
        "Ядро кешью жареное тёртое": "🥜",
        // Дисциплина
        "Желатин": "<img src='./assets/img/Желатин.png' class='ingr-icon'>",
        "Твёрдый сыр": "🧀",
        "Соль": "🧂",
        // Психологическая устойчивость
        "Кокосовое молоко": "🥥",
        "Яйца варёные": "🥚",
        "Вода": "💧",
        "Молоко сухое": "🥛",
        // Удача
        "Сливки": "<img src='./assets/img/Сливки.png' class='ingr-icon'>",
        "Майонез": "<img src='./assets/img/Майонез.png' class='ingr-icon'>",
        "Соль и чёрный перец": "🧂 <img src='./assets/img/черный_перец.png' class='ingr-icon'>",
        "Эссенция ванильная": "<img src='./assets/img/Эссенция_ванильная.png' class='ingr-icon'>"
    };

    const DISHES = [
        {
            name: "Десерт «Чайка»",
            desc: "Этот муссовый десерт создан как символ качеств, которые помогли Валентине Терешковой стать первой женщиной космонавтом. Каждый ингредиент несёт особый смысл.",
            ingredients: [
                { name: "Белый шоколад (150 г)", quality: "оптимизм", desc: "Лёгкий, светлый, дарит радость — как вера в лучшее, которая вела к звёздам." },
                { name: "Кокосовое молоко (200 мл)", quality: "психологическая устойчивость", desc: "Мягкое, обволакивающее — символизирует внутреннюю опору и способность сохранять спокойствие в любой ситуации." },
                { name: "Малиновое пюре (150 г)", quality: "целеустремлённость", desc: "Яркий, насыщенный вкус — как чёткое видение цели и движение к ней несмотря на препятствия." },
                { name: "Зелёный базилик (5–6 листиков)", quality: "смелость", desc: "Необычное сочетание с малиной — символ готовности идти на риск и пробовать новое." },
                { name: "Желатин (8 г)", quality: "дисциплина", desc: "Даёт структуру муссу — как распорядок и самоконтроль, без которых невозможен успех." },
                { name: "Сливки (200 мл)", quality: "удача", desc: "Лёгкие, воздушные — символизируют счастливый шанс, который получает тот, кто готов его использовать." },
                { name: "Кокосовая стружка (2 ст. л.)", quality: "выносливость", desc: "Мелкие, но стойкие частички — как ежедневная работа над собой, накапливающая силу." },
                { name: "Белый велюр (для покрытия, 50 г)", quality: "спортивная подготовка", desc: "Гладкая, безупречная поверхность — результат тренировок, дисциплины и отточенных навыков." }
            ],
            image: "./assets/img/Чизкейк.png"
        },
        {
            name: "Салат «Валентина»",
            desc: "Одно из блюд, посвящённых Валентине Терешковой, — салат «Валентина». Он был создан в СССР во второй половине XX века в честь первой в мире женщины-космонавта.",
            ingredients: [
                { name: "Картофель отварной (3 шт.)", quality: "выносливость", desc: "Даёт силы и энергию, служит опорой в трудные моменты — как выносливость помогает идти к цели несмотря на препятствия." },
                { name: "Морковь отварная (2 шт.)", quality: "целеустремлённость", desc: "Яркий цвет и форма, указывающая вперёд, символизируют внутреннее стремление к мечте и чёткое видение цели." },
                { name: "Яйца варёные (3 шт.)", quality: "психологическая устойчивость", desc: "Твёрдая скорлупа защищает содержимое — так устойчивость помогает сохранять баланс в стрессовых ситуациях." },
                { name: "Свежие огурцы (2 небольших)", quality: "оптимизм", desc: "Хрустящие и сочные, они напоминают о радости жизни и умении видеть светлое даже в сложном." },
                { name: "Куриная грудка отварная (300 г)", quality: "спортивная подготовка", desc: "Источник силы и белка, символ работы над собой и физической готовности к испытаниям." },
                { name: "Твёрдый сыр (100 г)", quality: "дисциплина", desc: "Созревает по правилам — как дисциплина требует постоянства и чёткого плана для достижения результата." },
                { name: "Майонез (150–200 г)", quality: "удача", desc: "Объединяет вкусы — так удача сводит нужные обстоятельства вместе, делая сочетание гармоничным." },
                { name: "Зелень свежая (петрушка) и оливки (5–6 шт.)", quality: "смелость", desc: "Добавляют яркости и глубины, символизируя решимость быть собой и идти своим путём." },
                { name: "Соль и чёрный перец (по вкусу)", quality: "удача и внутренняя сила", desc: "Раскрывают вкус ингредиентов — так удача и сила помогают проявить лучшие качества, а перец добавляет «остроты» жизненным вызовам." }
            ],
            image: "./assets/img/Салат.png"
        },
        {
            name: "«Хрущёвский» (гороховый) чёрный хлеб",
            desc: "Во время полёта на «Востоке 6» Терешкова в своём отчёте отмечала: сухой белый хлеб ей не понравился, она предпочла бы чёрный; В 1963 году в СССР действительно существовал особый вид чёрного хлеба, который получил название «хрущёвский» или «гороховый». Это было связано с решением властей добавлять в муку до 30% перемолотого гороха (гороховой муки) в период дефицита зерна. Такой хлеб имел специфический вкус и текстуру.",
            ingredients: [
                { name: "Ржаная мука (500 г)", quality: "выносливость", desc: "Основа хлеба, даёт силу и плотность — как выносливость помогает выдерживать испытания и не сдаваться." },
                { name: "Гороховая мука (150 г, 30%)", quality: "целеустремлённость", desc: "Символ находчивости: в условиях дефицита горох помог обеспечить людей хлебом — так ведёт к цели даже в сложных обстоятельствах." },
                { name: "Вода (300 мл)", quality: "психологическая устойчивость", desc: "Адаптируется, сохраняя суть — символизирует способность оставаться собой и сохранять баланс в любых условиях." },
                { name: "Дрожжи (10 г)", quality: "оптимизм", desc: "«Оживляют» тесто, заставляют подниматься — как позитивный настрой помогает двигаться вперёд, даже когда всё против тебя." },
                { name: "Соль (10 г)", quality: "дисциплина", desc: "Структурирует вкус — так дисциплина придаёт жизни чёткие рамки и помогает добиться результата." },
                { name: "Сахар (20 г, по желанию)", quality: "удача", desc: "Активирует дрожжи, запускает процесс — как удача даёт нужный толчок, чтобы всё начало складываться." }
            ],
            image: "./assets/img/Хлеб.png"
        },
        {
            name: "Шоколад «Чайка»",
            desc: "Этот молочный шоколад с добавлением тёртого ореха кешью был выпущен фабрикой «Красный Октябрь» в 1965 году. Название связано с позывным Терешковой во время полёта на корабле «Восток-6» —  «Чайка». Автором этикетки стал главный художник фабрики Леонид Челноков. Шоколад имел большой успех: за декабрь 1965 года было выпущено 273 тонны этого продукта",
            ingredients: [
                { name: "Какао-масло (36,4 г)", quality: "выносливость", desc: "Даёт стабильность и плавность текстуры — как выносливость помогает идти к цели, не теряя силы духа." },
                { name: "Какао тёртое (25,2 г)", quality: "целеустремлённость", desc: "Основа вкуса и цвета — символизирует решимость достичь цели, как путь Терешковой к звёздам." },
                { name: "Молоко сухое (20,0 г, 26%)", quality: "психологическая устойчивость", desc: "Смягчает горечь, придаёт баланс — отражает способность сохранять гармонию в экстремальных условиях." },
                { name: "Ядро кешью жареное тёртое (7,9 г)", quality: "смелость", desc: "Добавляет ореховый оттенок — символизирует готовность идти на риск, как первый полёт женщины в космос." },
                { name: "Сахар (79,7 г)", quality: "оптимизм", desc: "Придаёт сладость и радость — отражает веру в лучшее и позитивный настрой." },
                { name: "Эссенция ванильная (0,25 г)", quality: "удача", desc: "Лёгкий акцент, объединяющий вкусы — как удача, способная изменить ход событий и придать жизни особый аромат." }
            ],
            image: "./assets/img/Шоколад.png"
        }
    ];

    // СОСТОЯНИЕ 
    let availableQualities = [...ALL_QUALITIES];
    let slots = new Array(8).fill(null);
    let selectedQuality = null;

    
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const qualitiesContainer = document.getElementById('qualitiesContainer');
    const rocketStages = document.getElementById('rocketStages');
    const resetBtn = document.getElementById('resetBtn');
    const cookBtn = document.getElementById('cookBtn');
    const backBtn = document.getElementById('backToRocketBtn');
    const dishContent = document.getElementById('dishContent');

    if (!slide1 || !slide2 || !qualitiesContainer || !rocketStages || !resetBtn || !cookBtn || !backBtn || !dishContent) {
        console.error('Не найдены необходимые элементы DOM');
        return;
    }

    //  ФУНКЦИИ ОТРИСОВКИ 

    function renderQualities() {
        qualitiesContainer.innerHTML = '';
        availableQualities.forEach(q => {
            const div = document.createElement('div');
            div.className = `quality-item ${selectedQuality === q ? 'selected' : ''}`;
            div.dataset.quality = q;

            const nameSpan = document.createElement('span');
            nameSpan.className = 'quality-name';
            nameSpan.textContent = q;
            div.appendChild(nameSpan);

            const iconsDiv = document.createElement('div');
            iconsDiv.className = 'quality-icons';
            const ingredients = QUALITY_INGREDIENTS[q] || [];
            ingredients.forEach(ing => {
                const icon = document.createElement('span');
                icon.className = 'quality-icon';
                icon.innerHTML = INGREDIENT_ICON[ing] || '🍽️';
                iconsDiv.appendChild(icon);
            });
            div.appendChild(iconsDiv);

            div.addEventListener('click', (e) => {
                e.stopPropagation();
                selectedQuality = (selectedQuality === q) ? null : q;
                renderQualities();
                renderSlots();
            });

            qualitiesContainer.appendChild(div);
        });
    }

    function renderSlots() {
        rocketStages.innerHTML = '';
        slots.forEach((slotValue, index) => {
            const stageDiv = document.createElement('div');
            stageDiv.className = 'stage';
            stageDiv.dataset.index = index;

            if (slotValue) {
                const contentSpan = document.createElement('span');
                contentSpan.className = 'stage-content';
                contentSpan.textContent = slotValue;

                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-btn';
                removeBtn.textContent = '✕';
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (!availableQualities.includes(slotValue)) {
                        availableQualities.push(slotValue);
                        availableQualities.sort((a,b) => ALL_QUALITIES.indexOf(a) - ALL_QUALITIES.indexOf(b));
                    }
                    slots[index] = null;
                    selectedQuality = null;
                    renderQualities();
                    renderSlots();
                });

                stageDiv.appendChild(contentSpan);
                stageDiv.appendChild(removeBtn);
            } else {
                const hint = document.createElement('span');
                hint.textContent = '⬇ уровень';
                hint.style.opacity = '0.6';
                stageDiv.appendChild(hint);
            }

            stageDiv.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') return;
                if (selectedQuality && slots[index] === null) {
                    slots[index] = selectedQuality;
                    availableQualities = availableQualities.filter(q => q !== selectedQuality);
                    selectedQuality = null;
                    renderQualities();
                    renderSlots();
                }
            });

            rocketStages.appendChild(stageDiv);
        });
    }

    function resetGame() {
        availableQualities = [...ALL_QUALITIES];
        slots = new Array(8).fill(null);
        selectedQuality = null;
        renderQualities();
        renderSlots();
    }

    function determineDish() {
        const qualitiesOnBoard = slots.filter(s => s !== null);
        if (qualitiesOnBoard.includes('Дисциплина') || qualitiesOnBoard.includes('Психологическая устойчивость')) return DISHES[0];
        if (qualitiesOnBoard.includes('Спортивная подготовка') || qualitiesOnBoard.includes('Целеустремлённость')) return DISHES[1];
        if (qualitiesOnBoard.includes('Выносливость') || qualitiesOnBoard.includes('Удача')) return DISHES[2];
        if (qualitiesOnBoard.includes('Смелость') || qualitiesOnBoard.includes('Оптимизм')) return DISHES[3];
        return null;
    }

    function showDish(dish) {
        if (!dish) {
            alert('Ни одно блюдо не подходит. Попробуй другое сочетание качеств!');
            return;
        }
        let html = `
            <div class="dish-header">
                <div class="dish-image"><img src="${dish.image}" alt="${dish.name}"></div>
                <div class="dish-info">
                    <div class="dish-name">${dish.name}</div>
                    <div class="dish-desc">${dish.desc}</div>
                    <div class="ingredients-symbol">✦ ингредиенты и символика ✦</div>
                </div>
            </div>
            <ul class="dish-ingredients">
        `;

        dish.ingredients.forEach(ing => {
            let baseName = ing.name.replace(/\s*\([^)]*\)\s*$/, '').trim();
            const iconHtml = INGREDIENT_ICON[baseName] || '🍽️';
            html += `<li><span class="ingr-emoji">${iconHtml}</span> <span class="ingr-name">${ing.name}</span> — <span class="ingr-quality">${ing.quality}</span><span class="ingr-desc">${ing.desc}</span></li>`;
        });

        html += `</ul>`;
        dishContent.innerHTML = html;
        slide1.style.display = 'none';
        slide2.style.display = 'block';
    }

    // ИНИЦИАЛИЗАЦИЯ 
    renderQualities();
    renderSlots();

    resetBtn.addEventListener('click', resetGame);
    cookBtn.addEventListener('click', () => {
        const dish = determineDish();
        dish ? showDish(dish) : alert('Из этих качеств не получается ни одно блюдо из меню. Добавьте хотя бы одно качество из списка.');
    });
    backBtn.addEventListener('click', () => {
        slide2.style.display = 'none';
        slide1.style.display = 'block';
    });
});