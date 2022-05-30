import React from "react";
import "./HeaderStyle.css";
import { Button } from "../ButtonStyled";

export const Header = () => {
  return (
    <header>
      <div className="buttonsContainer">
        <Button>
          <a href="/notebook">notebook</a>
        </Button>
        <Button>
          <a href="/smartphone">smartphone</a>
        </Button>
        <Button>
          <a href="/tablet">tablet</a>
        </Button>
      </div>
    </header>
  );
};
