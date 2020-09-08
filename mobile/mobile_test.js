Feature('Search');

Scenario('search film', (I) => {
    I.tap('#dev.akat.filmreel:id/menu_search_action');
    I.fillField('#dev.akat.filmreel:id/search_src_text', 'Boris');
    I.hideDeviceKeyboard('pressKey', 'Done');
    I.see('Boris - Il film');
});

Scenario('view description', (I) => {
    I.see('Фильмы');
    I.tap('Львица');
    I.see('Обзор');
});

Scenario('go to the best', (I) => {
    I.tap('//androidx.appcompat.app.ActionBar.Tab[@content-desc="Лучшие"]/android.widget.TextView');
    I.see('Инферно Габриэля 2');
});


