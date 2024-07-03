import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]');
    } catch (err) {
        console.error('Error:', err);
    }
};

removeAllContacts();
