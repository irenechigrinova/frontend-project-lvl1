#!/usr/bin/env node

import initGame from '../src/index.js';
import generateGcdData from '../src/games/gcd.js';

initGame(generateGcdData);
