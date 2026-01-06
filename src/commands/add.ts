import { Command } from 'commander';
import { basename } from 'path';
import pc from 'picocolors';
import { spotService } from '../services/spot.service.js';

export const addCommand = new Command('add')
    .description('Add current directory as a spot')
    .action(() => {
        try {
            const currentPath = process.cwd();
            const folderName = basename(currentPath);

            const result = spotService.registerCurrentDirectory(folderName, currentPath);

            console.log(pc.green(`✓ Added spot: ${pc.bold(folderName)}`));
            console.log(pc.dim(`  ID: ${result.lastInsertRowid}`));
        } catch (error: any) {
            if (error.message === 'SPOT_ALREADY_EXISTS') {
                console.log(pc.yellow(`⚠️  Spot already exists in this path.`));
            } else {
                console.error(pc.red(`Error: ${error.message}`));
            }
        }
    });
