import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';
import { FiSearch } from 'react-icons/fi';
import { Container, SearchField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const handleSearchChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Container>
      <label htmlFor="filter-input">Find contacts by name</label>
      <SearchField
        value={filterName}
        type="text"
        onChange={handleSearchChange}
        id="filter-input"
      ></SearchField>
      <FiSearch />
    </Container>
  );
};
