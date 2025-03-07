export default interface LoanType {
  cat: string;
  subCat: string[];
  max: number;
  maxPer: number;
}

export interface SubCatType {
  Wedding: string[];
  Home: string[];
  Business: string[];
  Education: string[];
}

export interface MaxPerType {
  Wedding: number;
  Home: number;
  Business: number;
  Education: number;
}

export interface maxAmountType {
  Wedding: number;
  Home: number;
  Business: number;
  Education: number;
}

export interface CalculatedType {
  category: string;
  subCategory: string;
  period: number;
  totalAmount: number;
  initialDeposit: number;
  totalMonth: number;
  permonthAmount: number;
}

export type CategoryType = "Wedding" | "Home" | "Business" | "Education";

export interface LoanState {
  value: CalculatedType | {};
}
