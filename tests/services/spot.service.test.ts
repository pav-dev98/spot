import { describe, it, expect, vi, beforeEach } from 'vitest';
import { spotService } from '../../src/services/spot.service.js';
import { spotRepository } from '../../src/repositories/spot.repository.js';

// 1. Mockeamos el repositorio para que no toque la base de datos real
vi.mock('../../src/repositories/spot.repository.js', () => ({
    spotRepository: {
        findByPath: vi.fn(),
        save: vi.fn(),
        findAll: vi.fn()
    }
}));

describe('SpotService', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('registerCurrentDirectory', () => {
        it('should register a spot successfully', () => {
            // Simulamos que el path NO existe
            vi.mocked(spotRepository.findByPath).mockReturnValue(undefined);
            vi.mocked(spotRepository.save).mockReturnValue({ lastInsertRowid: 1 } as any);

            const result = spotService.registerCurrentDirectory('my-project', '/path/test');

            expect(result.lastInsertRowid).toBe(1);
            expect(spotRepository.save).toHaveBeenCalledWith('my-project', '/path/test');
        });

        it('should throw error if spot already exists', () => {
            // Simulamos que el path SÍ existe
            vi.mocked(spotRepository.findByPath).mockReturnValue({ id: 1, name: 'old', path: '/path/test' } as any);

            expect(() => {
                spotService.registerCurrentDirectory('new', '/path/test');
            }).toThrow('SPOT_ALREADY_EXISTS');
        });

        it('should throw validation error if name is empty', () => {
            expect(() => {
                spotService.registerCurrentDirectory('', '/path/test');
            }).toThrow(); // Zod lanzará el error
        });
    });

    describe('getSpots', () => {
        it('should return all spots from repository', () => {
            const mockSpots = [{ id: 1, name: 'P1', path: '/p1' }];
            vi.mocked(spotRepository.findAll).mockReturnValue(mockSpots as any);

            const result = spotService.getSpots();

            expect(result).toHaveLength(1);
            expect(result[0].name).toBe('P1');
        });
    });
});