export interface UserType {
  email: string;
  name: string;
  picture?: string;
  error?: string;
}

export interface NavbarType {
  name: string;
  url: string;
}

export interface UserState {
  [index: string]: any;
  email: string;
  name: string;
  address: string;
  picture: string;
  error: string;
}

export interface LoginDialogProps {
  open: boolean;
  onClose: (local: boolean) => void;
}

export interface LoginLocalProps {
  local: boolean;
  onClose: (local: boolean) => void;
  login: (email: string, password: string) => void;
  error: string;
}

export interface StoreState {
  user: UserState;
}
