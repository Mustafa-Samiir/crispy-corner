// Lokal information om personalen som API:et inte har.
// API:et ger grunddatan (id, användarnamn, namn, adress, roller) och här
// kompletterar vi med Crispy Corners egna uppgifter, kopplat via användarnamnet.

// Ansvarsområde per medarbetare.
export const responsibilities: Record<string, string> = {
  annak: "Restaurangchef – personal och schema",
  erikl: "Inköp av kött och kyckling",
  saras: "Grönsaker och färskvaror",
  johann: "Fritös och varma köket",
  mial: "IT – kassasystem och beställningsskärmar",
  davidb: "Kassa och kundservice",
  emman: "Hygien och livsmedelssäkerhet",
  oscarh: "Lager och leveranser",
  linneaa: "Marknadsföring och sociala medier",
  marcuss: "Ekonomi och löner",
};

// Personal som har bytts ut: användarnamn → nytt namn.
export const nameOverrides: Record<string, string> = {
  mial: "Ali Pro",
  marcuss: "Abdi Warya",
};
