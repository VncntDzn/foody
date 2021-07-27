/**
 * A text field component that acts as a search bar.
 */
import { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { useRouter } from 'next/router';
import SearchIcon from '@material-ui/icons/Search';

const Searchbar = () => {
  const [search, setSearch] = useState<string | null>('');
  const router = useRouter();

  const handleRouting = (): void => {
    router.push(`/search/${search}`);
  };
  return (
    <TextField
      onChange={(e) => setSearch(e.target.value)}
      color='primary'
      autoFocus
      focused
      placeholder='Search food here'
      variant='outlined'
      InputProps={{
        style:{color: 'white'},
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton color='primary' onClick={handleRouting}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;
