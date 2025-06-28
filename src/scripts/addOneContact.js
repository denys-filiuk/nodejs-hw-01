import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (newContact) => {
  const contacts = await readContacts();
  contacts.push(newContact);
  await writeContacts(contacts);
};

addOneContact();
