import React from "react";
import { A } from "hookrouter";
const Header = () => {
  return (
    <div>
      <A href="/oferta" className="link oferta">
        Oferta
      </A>
      <A href="/zamowienie" className="link">
        Zamowienie
      </A>
      <A href="/odbior" className="link">
        Odbiór
      </A>
      <A href="/profil" className="link">
        Profil
      </A>
    </div>
  );
};

export default Header;
