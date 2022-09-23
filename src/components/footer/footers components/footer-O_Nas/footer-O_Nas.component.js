import { Icon } from "@iconify/react";
import React from "react";
import "./footer-O_Nas.styles.css";

export const ONas = () => {
  return (
    <div className="ONasContainer">
      <h4 className="ONasTitle">O Nas</h4>
      <div className="ONasLinks">
        <span>O nas</span>
        <span>Sklepy stacjonarne</span>
        <span>Współpraca</span>
        <span>Media społecznościowe</span>
        <div className="ONasMediaIcons">
          <Icon
            icon="brandico:facebook-rect"
            color="#3b5998"
            width="32"
            height="32"
          />
          <Icon icon="logos:linkedin-icon" width="32" height="32" />
          <Icon
            icon="icon-park:instagram"
            color="#3b5998"
            width="32"
            height="32"
          />
          <Icon icon="logos:twitter" color="#3b5998" width="32" height="32" />
        </div>
      </div>
    </div>
  );
};
