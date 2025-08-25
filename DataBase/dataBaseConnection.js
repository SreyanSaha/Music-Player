import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';

export default class DataBaseConnection{
    connection;
    constructor() {
        this.init();
    }

    async init() {
      this.connection = await SQLite.openDatabaseAsync("musicPlayer.db");
      await this.createTable();
    }

    getConnection(){
        return this.connection;
    }

    createTable(){
        this.connection.execAsync(`
            CREATE TABLE IF NOT EXISTS youtube_api_keys(
                yt_id INTEGER PRIMARY KEY AUTOINCREMENT,
                yt_api_key VARCHAR(60),
                yt_api_quota INTEGER DEFAULT 10000
            );    
        `);
    }

    async howManyApiKeys(){
        const result = await this.connection.execAsync(`
            SELECT COUNT(yt_id) AS COUNT FROM youtube_api_keys;    
        `); 
        if (result && result.length > 0 && result[0].COUNT !== undefined) {
            return result[0].COUNT;
        }
        return 0;
    }
}
