import {selectName, updateName as _updateName} from './profile.slice';
import {useAppDispatch, useAppSelector} from '../../app/store';

export function useProfile() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);

  const updateName = (newName: string) => {
    dispatch(_updateName(newName));
  };

  return {
    name,
    updateName,
  };
}
