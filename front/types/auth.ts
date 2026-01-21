export interface RegisterUserData {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export interface RegisterUserResponse {
  name: string;
  email: string;
  address: string;
  phone: string;
  id: number;
  role: string;
  credential: Credential;
}

export interface Credential {
  id: number;
  password: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface ResponseError {
    statusCode: number;
    message: string;
}

export interface LoginUserResponse {
  login: boolean;
    user: {
      id: number;
      name: string;
      email: string;
      address: string;
      phone: string;
      role: string;
      credential: Credential;
      orders: []; 
    };
    token: string;
}
