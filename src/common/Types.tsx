export interface UserType {
  email: string;
  name: string;
  picture?: string;
  error?: string;
}

export interface UserState {
  [index: string]: any;
  email: string;
  name: string;
  picture: string;
  error: string;
}

export interface LoginDialogProps {
  open: boolean;
  onClose: (local: boolean) => void;
  googleLogin: any;
}

export interface LoginLocalProps {
  local: boolean;
  onClose: (local: boolean) => void;
  login: (email: string, password: string, cb: CallableFunction) => void;
  userRegister: (
    email: string,
    address: string,
    name: string,
    password: string,
    cb: CallableFunction
  ) => any;
  error: string;
}

export interface StoreState {
  user: UserState;
}

export interface UserActionState {
  login: (
    email: string,
    password: string,
    cb: (error: string | null, success: boolean) => void
  ) => any;
  googleLogin: any;
  getUserInfo: () => void;
  logout: () => void;
  tryRegister: (
    email: string,
    address: string,
    name: string,
    password: string,
    cb: (error: string | null, success: boolean) => void
  ) => any;
}
