import { Command } from 'commander';
import pc from 'picocolors';
import { statements, Spot } from '../db.js';

export const listCommand = new Command('list')
    .description('List all saved spots')
    .alias('ls')
    .action(() => {
        try {
            const spots = statements.getAllSpots.all() as Spot[];

            if (spots.length === 0) {
                console.log(pc.yellow('No spots saved yet.'));
                console.log(pc.dim('Use "spot add" to add the current directory.'));
                return;
            }

            console.log(pc.bold(`\n📍 Saved Spots (${spots.length}):\n`));

            spots.forEach((spot, index) => {
                console.log(pc.cyan(`${index + 1}. ${pc.bold(spot.name)}`));
                console.log(pc.dim(`   Path: ${spot.path}`));
                console.log(pc.dim(`   ID: ${spot.id} | Added: ${new Date(spot.created_at).toLocaleString()}`));
                console.log('');
            });
        } catch (error) {
            if (error instanceof Error) {
                console.error(pc.red(`Error: ${error.message}`));
            } else {
                console.error(pc.red('An unknown error occurred'));
            }
            process.exit(1);
        }
    });
