import { RootState } from '../store';
import { ContactItem } from '../slices/contactSlice';

export const selectContacts = (state: RootState):ContactItem[] => state.contact.contacts;
export const selectCurrentContact = (state: RootState):ContactItem => state.contact.currentContact;
