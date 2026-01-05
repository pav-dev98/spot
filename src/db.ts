import Database from 'better-sqlite3';
import type BetterSqlite3 from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Database path in the project root
const dbPath = join(__dirname, '..', 'spots.db');

export const db: BetterSqlite3.Database = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create spots table
db.exec(`
  CREATE TABLE IF NOT EXISTS spots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    path TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface Spot {
  id: number;
  name: string;
  path: string;
  created_at: string;
}

// Prepared statements for better performance
export const statements: {
  insertSpot: BetterSqlite3.Statement;
  getSpotByPath: BetterSqlite3.Statement;
  getAllSpots: BetterSqlite3.Statement;
  deleteSpot: BetterSqlite3.Statement;
} = {
  insertSpot: db.prepare('INSERT INTO spots (name, path) VALUES (?, ?)'),
  getSpotByPath: db.prepare('SELECT * FROM spots WHERE path = ?'),
  getAllSpots: db.prepare('SELECT * FROM spots ORDER BY created_at DESC'),
  deleteSpot: db.prepare('DELETE FROM spots WHERE id = ?'),
};
