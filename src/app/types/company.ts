export type Details500 = {
  Symbol?: string;
  Name?: string;
  Sector?: string;
  Price?: number;
  'Dividend Yield'?: number;
  'Price/Earnings'?: number;
  'Earnings/Share'?: number;
  'Book Value'?: number;
  '52 week low'?: number;
  '52 week high'?: number;
  'Market Cap'?: number;
  EBITDA?: number;
  'Price/Sales'?: number;
  'Price/Book'?: number;
  'SEC Filings'?: string;
};

export type Details = {
  Ticker: string;
  Name: string;
  'Asset Class'?: string;
  'Weight (%)'?: number;
  Price?: number;
  Shares?: number;
  'Market Value'?: number;
  'Notional Value'?: number;
  Sector: string;
  SEDOL?: number;
  ISIN?: string;
  Exchange?: string;
};
