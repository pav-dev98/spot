import { Command } from 'commander';
import { basename } from 'path';
import pc from 'picocolors';
import { z } from 'zod';
import { statements } from '../db.js';

// Schema validation for spot data
const spotSchema = z.object({
    name: z.string().min(1, 'Name cannot be empty'),
    path: z.string().min(1, 'Path cannot be empty'),
});

export const addCommand = new Command('add')
    .description('Add current directory as a spot')
    .action(() => {
        try {
            // Get current working directory
            const currentPath = process.cwd();
            const folderName = basename(currentPath);

            // Validate data
            const spotData = spotSchema.parse({
                name: folderName,
                path: currentPath,
            });

            // Check if spot already exists
            const existing = statements.getSpotByPath.get(spotData.path);
            if (existing) {
                console.log(pc.yellow(`⚠️  Spot already exists: ${pc.bold(spotData.name)}`));
                console.log(pc.dim(`   Path: ${spotData.path}`));
                return;
            }

            // Insert new spot
            const result = statements.insertSpot.run(spotData.name, spotData.path);

            console.log(pc.green(`✓ Added spot: ${pc.bold(spotData.name)}`));
            console.log(pc.dim(`  Path: ${spotData.path}`));
            console.log(pc.dim(`  ID: ${result.lastInsertRowid}`));
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.error(pc.red('Validation error:'));
                error.errors.forEach((err) => {
                    console.error(pc.red(`  - ${err.message}`));
                });
            } else if (error instanceof Error) {
                console.error(pc.red(`Error: ${error.message}`));
            } else {
                console.error(pc.red('An unknown error occurred'));
            }
            process.exit(1);
        }
    });
