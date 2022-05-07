/** global language */
import { Menu } from "wrapper/Imports"

const globaWord = new Map([
	["Sound", "Звук"],
	["Color", "Цвет"],
	["Style", "Стиль"],
	["Width", "Ширина"],
	["Camera", "Камера"],
	["State", "Состояние"],
	["Main", "Главная"],
	["Time", "Время"],
	["Menu", "Меню"],
	["Changer", "Ченджер"],
	["Weather", "Погода"],
	["Visual", "Визуалы"],
	["Heroes", "Герои"],
	["Language", "Язык"],
	["Settings", "Настройки"],
	["Russian", "Русский"],
	["English", "Английский"],
	["Reload", "Перезагрузить"],
	["Menu scale", "Маштаб меню"],
	["Utility", "Утилиты"],
	["Default", "По умолчанию"],
	["Animation", "Анимация"],
	["Exploits", "Эксплойты"],
	["Disable", "Отключить"],
	["Notifications", "Уведомления"],
	["Key bind", "Клавиша бинда"],
	["Key Bind", "Клавиша Бинда"],
	["Notification", "Уведомление"],
	["Send to chat", "Отправить в чат"],
	["Auto-accepting matches", "Автопринятие матчей"],
	["Tree Model", "Модель деревьев"],
	["Bind (Open/Close)", "Клавиша (Открыть/Закрыть)"],
	["Reload Scripts", "Перезагрузить скрипты"],
	["Reload keybind", "Перезагрузить Бинд"],
	["Trigger keybinds in chat", "Использовать бинды в чате"],
	["Custom Map", "Пользовательская карта"],
	["Mouse wheel", "Колесико мыши"],
	["Change if Ctrl is down", "Изменять если зажат Ctrl"],
	["Camera Step", "Шаг камеры"],
	["Reset camera", "Сбросить камеру"],
	["Camera Distance", "Дистанция камеры"],
	["Camera Angles", "Наклон камеры"],
	["Inverse for Dire", "Перевернуть за Тьму"],
	["Update Notifications", "Уведомления об обновлениях"],
	["Reset camera by default", "Сбросить камеру по умолчанию"], // tooltip
	["AutoAccept delay", "Автоматическое принятие"],
	["Enables all scripts' orders, ability to change camera distance", `\
Разрешает делать автоматические действия скриптам,
даёт возможность отдалять камеру`], // tooltip
	["Delay on auto accept,\nyou can disable it by setting slider to max value", "Задержка автоматического принятия матчей,\nвы можете его отключить установив максимальное значение"], // tooltip
	["Such as seeing TPs in the world, having no fog, etc", "Например, просмотр тп в тумане войны, дымка, и.т.д."], // tooltip
	["State script: ON or OFF", "Состояние скрипта: Включён или Выключен"], // tooltip
	[`\
Disables camera zoom, scripts' orders [humanizer] and FoW Hacks.
For this to work properly use latest version of OBS,
use Game Capture, disable capturing third-party overlays
and restart game after turning OBS Bypass on.`, `\
Отключает отдаление камеры, действия скриптов [хуманайзер] и FoW Hacks.
Для правильной работы используйте последнюю версию OBS, Game Capture,
отключите захват сторонних оверлеев и перезапустите игру после включения
OBS Bypass.`],
	["Reset settings", "Сбросить настройки"],
	["Claim tutorial rewards", "Получить награды за обучение"],
])

Menu.Localization.AddLocalizationUnit("russian", globaWord)
