#!/usr/bin/env node

import { Command } from 'commander';
import { addCommand } from './commands/add.js';
import { listCommand } from './commands/list.js';

const program = new Command();

program
    .name('spot')
    .description('CLI tool to manage and save directory spots')
    .version('1.0.0');

// Register commands
program.addCommand(addCommand);
program.addCommand(listCommand);

// Parse arguments
program.parse(process.argv);
