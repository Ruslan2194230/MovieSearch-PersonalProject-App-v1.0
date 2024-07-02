import { useState } from 'react';
import { InputSearch, ButtonSearch } from './Form.module';
import { useError } from 'Contexts/ErrorContext';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  const { handleWarning } = useError();
  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputSearch
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <ButtonSearch type="submit" disabled={!query}>
        Search
      </ButtonSearch>
    </form>
  );
};

export default Form;
