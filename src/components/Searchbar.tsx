import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { useRouter } from 'next/router';
import SearchIcon from '@material-ui/icons/Search';

const Searchbar = () => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleRouting = () => {
    router.push(`/search/${search}`);
  };
  return (
    <TextField
      onChange={(e) => setSearch(e.target.value)}
      autoFocus
      focused
      placeholder='Search food here'
      variant='outlined'
      InputProps={{
        style: {
          color: 'white',
        },
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton onClick={handleRouting} style={{ color: 'white' }}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

Searchbar.propTypes = {};

export default Searchbar;
