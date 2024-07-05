// contactSlice.tsx context
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContactItem {
  firstName: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
  city: string | undefined;
  state: string | undefined;
  zip: string | undefined;
}

export interface ContactState {
  contacts: ContactItem[];
  currentContact: ContactItem;
}

const initialState: ContactState = {
  contacts: [],
  currentContact:{
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
  },
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // Action to add a new contact
    addContact: (state, action: PayloadAction<ContactItem>) => {
      state.contacts.push(action.payload);
    },
    // Action to update the current contact values
    updateCurrentContact: (state, action: PayloadAction<{ key: keyof ContactItem; value: string }>) => {
      if (state.currentContact) {
        state.currentContact[action.payload.key] = action.payload.value;
      }
    },
    // Action to clear the current contact
    clearCurrentContact: (state) => {
      state.currentContact = initialState.currentContact;
    },
  },
});

export const contactActions = contactSlice.actions;

export default contactSlice.reducer;