import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://68ac74fa7a0bbe92cbba8266.mockapi.io';

const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('/contacts');
            return resp.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

const addContact = createAsyncThunk('contacts/addContact', async (data, thunkAPI) => {
    try {
        const resp = await axios.post('/contacts', { ...data });
        return resp.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const resp = await axios.delete(`/contacts/${id}`);
            return resp.data;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message)
        }
    }
)

export {
    deleteContact, addContact, fetchContacts
}
