import "../Navbar/Searchbar.css";

import React from "react";
function Searchbar() {
  return (
    <div>
      <form className='form__container'>
        <button>
          <i class='fa-solid fa-xmark'></i>
        </button>
        <input
          type='text'
          placeholder='Search something you want!'
          className='form__control'
        />
        <button
          type='submit'
          className='btn__search fa-sharp fa-solid fa-magnifying-glass'
          aria-label='Start search'
        ></button>
      </form>
    </div>
  );
}

export default Searchbar;
