import React from "react";
import Pages from "./pages";

const {
  FAQ,
  FormularzKontaktowy,
  Kontakt,
  Logowanie,
  Newsletter,
  Odbior,
  Oferta,
  Profil,
  Rejestracja,
  StronaGlowna,
  Zamowienia
} = Pages;

const routes = {
  "/": () => <StronaGlowna />,
  "/faq": () => <FAQ />,
  "/formularz-kontaktowy": () => <FormularzKontaktowy />,
  "/kontakt": () => <Kontakt />,
  "/logowanie": () => <Logowanie />,
  "/newsletter": () => <Newsletter />,
  "/odbior": () => <Odbior />,
  "/oferta": () => <Oferta />,
  "/profil": () => <Profil />,
  "/rejestracja": () => <Rejestracja />,
  "/zamowienie": () => <Zamowienia />
};

export default routes;
