#!/usr/bin/env node

import initGame from '../src/index.js';
import generateIsEvenData from '../src/games/is-even.js';

initGame(generateIsEvenData);
