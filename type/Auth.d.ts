interface credentialProps {
  username: string;
  password: string;
}

interface authProps {
  user: string | null;
  token: string | null;
  error: string | null;
  status: string;
  reqQueryLogin: credentialProps;

  setReqQueryLogin: (data: Partial<credentialProps>) => void;
  login: (credentialProps: credentialProps, router: any) => Promise<void>;
  logout: () => void;
}
