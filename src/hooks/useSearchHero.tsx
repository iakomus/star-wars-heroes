import { useEffect } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useDispatch } from 'react-redux';
import { APIResponse } from 'src/interfaces/Response';
import { setLoading, setError, setData } from '../redux/resultSlice';

const { REACT_APP_SERVICE_API } = process.env;

const searchHero = async (query: string): Promise<APIResponse> => {
  const res = await fetch(`${REACT_APP_SERVICE_API}/people/?search=${query}`);
  if (res.ok) {
    return res.json();
  }
  throw new Error('Network error');
};

const useSearchHero = (query: string): void => {
  const { isLoading, error, data }: UseQueryResult<APIResponse, Error> =
    useQuery<APIResponse, Error>(['hero', query], () => searchHero(query), {
      enabled: Boolean(query),
    });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading || error || data) {
      dispatch(setLoading(isLoading));
      dispatch(setError(error));
      dispatch(setData(data));
    }
  }, [isLoading, error, data, dispatch]);
};

export default useSearchHero;
