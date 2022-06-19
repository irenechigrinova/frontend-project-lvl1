#!/usr/bin/env node

import initGame from '../src/index.js';
import { GAME_TYPES } from '../src/helpers.js';

initGame(GAME_TYPES.prime);
