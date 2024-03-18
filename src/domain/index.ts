export interface IProduct {
  style: IProductStyle;
  type: IProductType;
}

export interface Valuable {
  price?: number;
}

export interface IProductStyle extends Valuable {
  color: { hex: string, name: string };
}

export interface IProductType extends Valuable {
  name: "брелок" | "серьга";
}

export interface IProductSize extends Valuable {

}