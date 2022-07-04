### Описание проекта
В проекте содержится ряд математических игр, в которые пользователь может играть через консоль

### Минимальные требования
- NodeJS >= 16.13.2
- *NIX OS или WSL для Windows

### Локальный запуск
- После клонирования необходимо зайти в папку проекта и выполнить npm ci в корневом каталоге
- Для запуска игры через Nodejs необходимо выполнить команду node bin/your-game.js, где вместо your-game указать файл выбранной игры
- Для запуска игры через команду make необходимо выполнить make file-name

```sh
# setup
make install

#lint
make lint

# run via make
make brain-even

# run via nodejs
node bin/brain-even.js
```

### Список доступных игр
- brain-even.js (Игра "Чёт/Нечёт")
- brain-calc.js (Игра "Калькулятор")
- brain-gcd.js (Игра "Наименьший общий делитель)"
- brain-progression.js (Игра "Прогрессия")
- brain-prime.js (Игра "Простое число")

### Hexlet tests and linter status:
[![Actions Status](https://github.com/irenechigrinova/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/irenechigrinova/frontend-project-lvl1/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)


### ASCIINEMA
Even: https://asciinema.org/connect/666a1229-5d73-4ef8-b0cf-ed93b6246293

Calc: https://asciinema.org/a/Lr1znzD35ZSDZ44TlLVkXQnwe

Gcd:  https://asciinema.org/a/vm4NbcGjxEyrJYYdAfLRq0y1h

Progression: https://asciinema.org/a/zT3NbWtBbloMbGxme3WwBT8Io

Prime:  https://asciinema.org/a/QxyJ2CJlIVW3IN6esxYNgiH7U
