export interface UserLogin{
  email: string;
  password: string;
}

export interface UserData{
  id: number;
  name: string;
  email: string;
}

export interface statusInterface {
  status: boolean
}

export interface LoginResponseInterface {
  msg: string;
  data: UserData;
  jwt: string;
}

export interface UserLoginCode{
  email: string;
  password: string;
  codigo: string;
}
