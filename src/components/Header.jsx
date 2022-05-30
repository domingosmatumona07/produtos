import React from "react";
import { Button } from "../ButtonStyled";

export const Header = () => {
  return (
    <header>
      <div className="buttonsContainer" style={{ display: "flex", gap: "8px" }}>
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
