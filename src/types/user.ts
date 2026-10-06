// Formen på en användare så som API:et skickar den.
export interface ApiAddress {
  [key: string]: string | number | undefined;
}

export interface ApiProfile {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: ApiAddress;
}

export interface ApiUser {
  id: number | string;
  username: string;
  profile?: ApiProfile;
  settings?: unknown; // finns i API:et men används inte i appen
  roles?: string[];
}

// Den form som resten av appen använder (efter att vi "städat" API-datan).
export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  address?: string;
  roles: string[];
  responsibility: string;
}
