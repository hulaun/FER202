import { RootState } from '../store';
import { NewsItem } from '../slices/newsSlice';
export const selectNews = (state: RootState):NewsItem[] => state.news.news;
export const selectNewsLoading = (state: RootState) => state.news.loading;
export const selectNewsError = (state: RootState) => state.news.error;
