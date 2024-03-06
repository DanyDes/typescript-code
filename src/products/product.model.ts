export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}
