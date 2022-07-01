#!/usr/bin/env node

import initGame from '../src/index.js';
import generateCalculatorData from '../src/games/calculator.js';

initGame(generateCalculatorData);
