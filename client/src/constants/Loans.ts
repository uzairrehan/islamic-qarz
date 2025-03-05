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
