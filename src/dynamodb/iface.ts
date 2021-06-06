export interface ItemProps {
  PK: {
    S: string;
  };
  SK: {
    S: string;
  };
  FullName: {
    S: string;
  };
  Email: {
    S: string;
  };
  Created_At: {
    S: string;
  };
}

export interface IUserData {
  Item: {
    PK: string;
    SK: string;
    Email: string;
    FullName: string;
    Created_At: string;
  };
  Count: number;
  ScannedCount: number;
}
