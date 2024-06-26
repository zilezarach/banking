declare type SearchParamProps = {
    params: {[key: string]: string};
    searchParams: {[key: string]: string | string[] | undefined};
}

declare type SignUpParams = {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    county: string;
    postalCode: string;
    dateofBirth: string;
    KRAPin: string;
    password: string;
    email: string;
}
declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId:string;
    postalCode: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    dateOfBirth: string;
    ssn: string;
    county: string;
}
declare type Transaction = {
    id: string,
    $id: string,
    name: string,
    paymentChannel: string,
    type: string,
    accountId: string,
    amount: number,
    pending: boolean,
    category: string,
    date: string,
    image: string,
    type: string,
    channel: string,
    senderBankId: string,
    receiverBankId: string,
}

declare type Account = {
    id: string;
    availableBalance: number;
    currentBalance: number;
    officialName: string;
    mask: string;
    institutionId: string;
    name: string;
    type: string;
    subtype: string;
    appwriteItemId: string;
    shareableId: string;
};
declare interface MobileNavProps {
    user: User;
}

declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
}
declare interface DoughnutChartProps {
    accounts: Account[];
}

declare interface TotalBalanceBoxProps {
    accounts: Account[];
    totalBanks: number;
    totalCurrentBalance: number;
}
declare interface SideBarProps {
    user: User;
}
declare interface RightSidebarProps {
    user: User;
    transactions: Transaction[];
    banks: Bank[] & Account[];
}
declare interface CreditCardProps{
    account: Account;
    userName: string;
    showBalance?: boolean;
}

declare interface getBanksProps {
    userId: string;
  }
  
  declare interface getBankProps {
    documentId: string;
  }
  
  declare interface getBankByAccountIdProps {
    accountId: string;
  }
  