#!/usr/bin/env node

import initGame from '../src/index.js';
import generateProgressionData from '../src/games/progression.js';

initGame(generateProgressionData);
