Feature('Search web page');

Scenario('Check page title', (I) => {
  I.amOnPage('https://otus.ru');
  I.seeInTitle('Онлайн‑курсы для профессионалов, дистанционное обучение современным профессиям');
});

Scenario('Go to Reviews', (I) => {
    I.amOnPage('https://otus.ru');
    I.click('Отзывы');
    I.seeCurrentUrlEquals('/reviews/');
});

Scenario('See more', (I) => {
    
    I.amOnPage('https://otus.ru');
    I.scrollTo('a[title="Больше курсов"]');
    I.click('a[title="Больше курсов"]');
    I.see("Программирование", 'h1');
});

Scenario('Go to Testing', (I) => {
    I.amOnPage('https://otus.ru');
    I.scrollTo('a.nav__item[title="Тестирование"]');
    I.click('a.nav__item[title="Тестирование"]');
    I.see("Тестирование", 'h1');
});