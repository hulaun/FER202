import { RootState } from '../store';
import { NewsItem } from '../slices/newsSlice';
export const selectNews = (state: RootState):NewsItem[] => state.news.news;
