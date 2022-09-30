export type ProductItem = {
  codeProduct: string;
  sale: number;
  link: string;
  name: string;
  price: number;
  image: string;
  point: number;
  payQuality: string;
};
export interface ProductItemProps {
  productItemProps: ProductItem;
}
export interface ProductListProps {
  productList?: ProductItem[];
}
