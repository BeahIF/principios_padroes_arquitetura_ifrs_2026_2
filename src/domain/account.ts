export type AccountStatus = "active" | "blocked";

export interface Account {
  id: string;
  ownerName: string;
  balanceInCents: number;
  status: AccountStatus;
}

export function canWithdraw(account: Account, amount: number) {
  return account.status === "active" && account.balanceInCents >= amount;
}
