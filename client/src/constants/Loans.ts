import LoanType, {
  maxAmountType,
  MaxPerType,
  SubCatType,
} from "@/types/loanType";

export const subCat: SubCatType = {
  Wedding: ["Valima", "Furniture", "Valima Food", "Jahez"],
  Home: ["Structure", "Finishing"],
  Business: [
    "Buy Stall",
    "Advance Rent for Shop",
    "Shop Assets",
    "Shop Machinery",
  ],
  Education: ["University Fees", "Child Fees"],
};

export const maxPer: MaxPerType = {
  Wedding: 3,
  Home: 3,
  Business: 5,
  Education: 4,
};

export const maxAmount: maxAmountType = {
  Wedding: 500000,
  Home: 1000000,
  Business: 1000000,
  Education: 500000,
};

export const loanData = [
  {
    id: "wedding",
    title: "Wedding Loans",
    image: "/wedding.jpg",
    subcategories: "Valima, Furniture Jahez",
    maxLoan: "PKR 5 Lakh",
    loanPeriod: "3 years",
  },
  {
    id: "home",
    title: "Home Loans",
    image: "/construction.jpeg",
    subcategories: "Structure, Finishing",
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    id: "business",
    title: "Business Loans",
    image: "/business.jpg",
    subcategories: "Buy Stall, Advance Rent, Shop Assets",
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    id: "education",
    title: "Education Loans",
    image: "/education.jpg",
    subcategories: "University Fees, Child Fees Loan",
    maxLoan: "PKR 5 Lakh",
    loanPeriod: "4 years",
  },
];

export const InitialDepositConstant = 50000;

export const Loans: LoanType[] = [
  {
    cat: "Wedding",
    subCat: ["Valima", "Furniture", "Valima Food", "Jahez"],
    max: 500000,
    maxPer: 3,
  },
  {
    cat: "Home",
    subCat: ["Structure", "Finishing"],
    max: 1000000,
    maxPer: 5,
  },
  {
    cat: "Business",
    subCat: [
      "Buy Stall",
      "Advance Rent for Shop",
      "Shop Assets",
      "Shop Machinery",
    ],
    max: 1000000,
    maxPer: 5,
  },
  {
    cat: "Education",
    subCat: ["University Fees", "Child Fees"],
    max: 500000,
    maxPer: 4,
  },
];
