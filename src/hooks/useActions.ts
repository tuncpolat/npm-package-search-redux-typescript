import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // bindActionCreators is going to give us back an object that contains all the different action creators that
  // we provided in as the first argument, but now whenever we call these bindActionCreators, the return
  // value from them will be automatically taken and provided to dispatch.
  return bindActionCreators(actionCreators, dispatch);

  // return {searchRepo: dispatch(searchRepo)}

}
