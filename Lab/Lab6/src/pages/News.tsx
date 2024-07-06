import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews} from '../rootReducer/apis/newsApis'; // Adjust the import path as necessary
import { selectNews} from '../rootReducer/selectors/newsSelectors';
import { AppDispatch } from '../rootReducer/store';
import { newsActions } from '../rootReducer/slices/newsSlice';

function News() {
  const dispatch: AppDispatch = useDispatch();
  const news = useSelector(selectNews);


  useEffect(() => {
    fetchNews()
      .then((newsData:any) => {
        dispatch(newsActions.setNews(newsData)); // Assuming newsData is the array of news
      })
      .catch((error:any) => {
        console.error('Failed to fetch news:', error);
      });
  }, [dispatch]);
  return (
    <div>
      <h1 className='mt-3 font-semibold text-xl text-[#ef4444]'>News Category</h1>
      <div className='grid grid-cols-4 gap-3'>
        {news.map((item) => (
          <div key={item.id} className="rounded-md border-slate border">
            <img src={item.images} alt={item.title} className='rounded-t-md' />
            <div>
              <h5 className='font-semibold text-lg'>{item.title}</h5>
              <p>{item.description}</p>
              <p className='underline text-[#0055ff]'>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;