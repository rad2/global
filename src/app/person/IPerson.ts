
export interface Person{
  Personid: number;
  FirstName: string;
  LastName: string;
  ActivationDate: string;
  ExpirationDate: string;
  Notes: string;
  Disabled:boolean;
  PersonAccessLevels?: any[];
  PersonAccessCards?: any[];
}