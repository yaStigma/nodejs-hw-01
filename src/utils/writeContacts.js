import { PATH_DB } from '../constants/contacts.js';
    import {writeFile} from "node:fs/promises";

export const writeContacts = async (updatedContacts) => {writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

};
