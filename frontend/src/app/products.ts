

// produts.js file
export interface Product {
    id: number;
    attributes: {
      Title: string;
      Category?: string;
      TagLine?: string;
      Description?: string;
      StockQuantity?: string;
      Price?: string;
      // Add other fields as needed
    };
  }
  
