import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Searchbar from "../Navbar/Searchbar";

function Dummy() {
  const [open, setOpenSearchbar] = useState(false);
  return (
    <div>
      <Button
        variant='outiline-color-light'
        className='second-button mr-4'
        style={{fontSize: "18px"}}
        onClick={() => {
          setOpenSearchbar(true);
        }}
      >
        <i class='fa-sharp fa-solid fa-magnifying-glass'></i>
      </Button>
      {open === <Searchbar />}
    </div>
  );
}

export default Dummy;
