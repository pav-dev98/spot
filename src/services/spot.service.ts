import { spotRepository } from '../repositories/spot.repository.js';
import { z } from 'zod';

const spotSchema = z.object({
    name: z.string().min(1, 'Name cannot be empty'),
    path: z.string().min(1, 'Path cannot be empty'),
});

export const spotService = {
    registerCurrentDirectory: (name: string, path: string) => {
        // 1. Validar
        const validatedData = spotSchema.parse({ name, path });

        // 2. Lógica de negocio: Verificar duplicados
        const existing = spotRepository.findByPath(validatedData.path);
        if (existing) {
            throw new Error('SPOT_ALREADY_EXISTS');
        }

        // 3. Guardar
        return spotRepository.save(validatedData.name, validatedData.path);
    },

    getSpots: () => {
        return spotRepository.findAll();
    }
};