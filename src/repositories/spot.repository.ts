import { statements, Spot } from '../db.js';

export const spotRepository = {
    findByPath: (path: string): Spot | undefined => {
        return statements.getSpotByPath.get(path) as Spot;
    },
    save: (name: string, path: string) => {
        return statements.insertSpot.run(name, path);
    },
    findAll: (): Spot[] => {
        return statements.getAllSpots.all() as Spot[];
    }
};