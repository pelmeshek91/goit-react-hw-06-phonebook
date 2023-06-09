import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';

import { actions } from 'redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.filterWrap}>
      <label>
        <p className={s.filterTitle}>Find contact by name</p>
        <input
          type="text"
          value={filter}
          onChange={e => {
            dispatch(actions.changeFilter(e.target.value));
          }}
        />
      </label>
    </div>
  );
};
