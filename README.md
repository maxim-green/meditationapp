## Описание
Приложение было создано с целью ознакомления с React Native. 

## Возможности
- Таймер для медитации. Минимальная длительность сессии - 1 минута. Максимальная - 60 минут.
- В конце сессии проигрывается звук колокольчика. Звук проигрывается даже если на телефоне отключен звук уведомлений, поэтому можно перевести телефон в тихий режим, чтобы ничто не отвлекало от медитации. Громкость колокольчика можно установить в настройках приложения.
- В конце сессии открывается модальное окно с возможностью оставить заметку и указать текущее настроение.
- Длительность сессии, настроение и заметки отображаются в истории сессий.
- В настройках можно изменить тему на темную.

## На что обратить внимание
- Данные хранятся в localStorage приложения. [storage.js](https://github.com/maxim-green/meditationapp/blob/main/src/utils/storage.js)
- Функционал таймера вынесен в отдельный класс. [timer.js](https://github.com/maxim-green/meditationapp/blob/main/src/utils/timer.js)
- Для управления состоянием использован Redux-Toolkit: [timer.thunk.js](https://github.com/maxim-green/meditationapp/blob/main/src/redux/timer/timer.thunk.js) [timer.reducer.js](https://github.com/maxim-green/meditationapp/blob/main/src/redux/timer/timer.reducer.js)
