import {useDispatch, useSelector} from 'react-redux';
import {selectName, updateName as _updateName} from './profile.slice';

export function useProfile() {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  const updateName = newName => {
    dispatch(_updateName(newName));
  };

  return {
    name,
    updateName,
  };
}
