# Vue 3 + Vite

Реализация тестового задания.
Согласно заданию, реализовано:
- создание дела по кнопке Submit, а также по нажатию Enter.
- при отсутствии дел выводится соответстующее сообщение.
- скрытие кнопки submit при пустоп поле ввода.
- редактирование дела.
- удаление дела.
- перемещение дела (drag'n'drop). Реализовано с помощью библиотеки vue-draggable-next.
- кнопка "Check all", которая отменяет все дела и ее скрытие, при условии отстуствия незавершенных дел.
- кнопка "Complete all" которая выполняет все дела и ее скрытие при условии выполнения всех дел.
- сортировка по статусу готовности All, active, completed.
- статусы выполнения отражены на диаграммах с динамическе меняемыми занчениями.
- хранение списка дел в localStorage, таким образом они сохраняют при перезагрузке страницы.ц
- хранение списка дела в сторе приложения vuex и взаимодействия с ним.
- верстка для мобильных устройств.
- сборка проекта

Не реализовано:
- скрытие не выбранных опций сортировки. Причина - счел нелогичным, так как по умолчанию активна опция All. Иначе говоря, изначально включив эту опцию, ничего не     изменится.
- деплой приложения.

Затрачено: 7ч.
