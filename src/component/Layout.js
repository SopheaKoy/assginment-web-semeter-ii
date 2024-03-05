import './Layout.css';
import logo from '../logo/applogo.png';

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Layout = () => {
  const [isTextInputVisible, setIsTextInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  
  const handleSearchClick = () => {
    setIsTextInputVisible(true);
    setSearchResult(`${inputValue}`);
  };
  return (
    <div className="mainHeader">
      <div className="logoContainer">
        <img src = {logo} />
      </div>

      <div className="navContainer">
        <ul className='menu'>
          <li className='menuItem'><a href="/"> HOME </a></li>
          <li className='menuItem'><a href="/category"> CATEGORY </a></li>
          <li className='menuItem'><a href="/contact"> CONTACT </a></li>
          <li className='menuItem'><a href="/about "> ABOUT </a></li>
        </ul>
      </div>
      
      <div className="searchContainer">
        <button onClick={handleSearchClick}>
          <Button startIcon={<SearchIcon />}>Search</Button>
        </button>
      {isTextInputVisible && (
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      {searchResult && (<div className="searchResult">{searchResult}</div> )}
      
    </div>
    <div className="profileContainer">
      <AccountCircleIcon sx={{ fontSize: 50 }}/>
    </div>
    </div>
  );
}
export default Layout;
