
export interface Person{
  Personid: number;
  FirstName: string;
  LastName: string;
  ActivationDate: string;
  ExpirationDate: string;
  Notes: string;
  PersonAccessLevels?: any[];
  PersonAccessCards?: any[];
}