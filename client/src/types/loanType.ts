export default interface LoanType {
    cat: string,
    subCat: string[],
    max:number,
    maxPer:number
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
  
  