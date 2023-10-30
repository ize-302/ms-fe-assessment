import * as React from "react";
import axios from "axios";

export type AppContextType = {
  isLoading: boolean;
  setisLoading: (value: boolean) => void;
  settransactions: (value: ITransaction[]) => void;
  transactions: ITransaction[];
  fetchTransactions: () => void;
  fetchWallet: () => void;
  wallet: IWallet | null;
  fetchUser: () => void;
  user: IUser | null;
};

export const AppContext = React.createContext<AppContextType>({
  isLoading: false,
  setisLoading: (data) => {},
  settransactions: (data) => {},
  transactions: [],
  fetchTransactions: () => {},
  fetchWallet: () => {},
  wallet: null,
  fetchUser: () => {},
  user: null,
});

interface AppProviderProps {
  children: JSX.Element;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [transactions, settransactions] = React.useState<ITransaction[]>([]);
  const [wallet, setwallet] = React.useState(null);
  const [isLoading, setisLoading] = React.useState(false);
  const [user, setuser] = React.useState(null);
  const base_url = "https://fe-task-api.mainstack.io";

  const fetchTransactions = async () => {
    setisLoading(true);
    await axios
      .get(`${base_url}/transactions`)
      .then((response) => {
        setisLoading(false);
        settransactions(response.data);
      })
      .catch((err) => {
        setisLoading(false);
        console.error(err);
      });
  };

  const fetchWallet = async () => {
    setisLoading(true);
    await axios
      .get(`${base_url}/wallet`)
      .then((response) => {
        setisLoading(false);
        setwallet(response.data);
      })
      .catch((err) => {
        setisLoading(false);
        console.error(err);
      });
  };

  const fetchUser = async () => {
    setisLoading(true);
    await axios
      .get(`${base_url}/user`)
      .then((response) => {
        setisLoading(false);
        setuser(response.data);
      })
      .catch((err) => {
        setisLoading(false);
        console.error(err);
      });
  };

  return (
    <AppContext.Provider
      value={{
        fetchWallet,
        fetchTransactions,
        transactions,
        settransactions,
        isLoading,
        setisLoading,
        wallet,
        fetchUser,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
