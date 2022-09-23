import React from "react";
import "./footer-Moje_Konto.styles.css";

export const MojeKonto = () => {
  return (
    <div className="MojeKontoContainer">
      <h4 className="MojeKontoTitle">Moje Konto</h4>
      <div className="MojeKontoLinks">
        <span>Historia zamówień</span>
        <span>Ustawienia Konta</span>
      </div>
    </div>
  );
};
