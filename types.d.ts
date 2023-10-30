interface ITransaction {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: Date;
}

interface IWallet {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

interface IUser {
  first_name: string;
  last_name: string;
  email: string;
}
