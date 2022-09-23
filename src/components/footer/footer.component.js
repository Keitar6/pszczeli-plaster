import { FooterContainer, FootersContent } from "./footer.styles";

import { Informacje } from "./footers components/footer-Informacje/footer-Informacje.component";
import { MojeKonto } from "./footers components/footer-Moje_Konto/footer-Moje_Konto.component";
import { ONas } from "./footers components/footer-O_Nas/footer-O_Nas.component";
import { PlatnosciIDostawa } from "./footers components/footer-Platnosc_I_Dostawa/footer-Platnosc_I_Dostawa.component";

export const Footer = () => {
  return (
    <FooterContainer>
      <FootersContent>
        <PlatnosciIDostawa />
        <Informacje />
        <ONas />
        <MojeKonto />
      </FootersContent>
    </FooterContainer>
  );
};
