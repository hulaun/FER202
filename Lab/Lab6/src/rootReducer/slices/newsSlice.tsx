import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  images: string;
}

export interface NewsState {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.news = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    // Other reducers...
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
