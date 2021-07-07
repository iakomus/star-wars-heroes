import { AnyAction } from 'redux';
import reducer, {
  initialState,
  setLoading,
  setError,
  setData,
} from '../../redux/resultSlice';

describe('Result Reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  test('should handle updating the loading state to true', () => {
    expect(reducer(initialState, setLoading(true))).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test('should handle updating the error state', () => {
    const error = new Error('test error');
    expect(reducer(initialState, setError(error))).toEqual({
      ...initialState,
      error,
    });
  });

  test('should handle updating the data state', () => {
    const data = { test: 1 };
    expect(reducer(initialState, setData(data))).toEqual({
      ...initialState,
      data,
    });
  });
});
