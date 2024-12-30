export interface Tool {
  name: string;
  url: string;
  category: string;
}

export type Category = '3D' | 'Art' | string; // Updated to allow for more categories