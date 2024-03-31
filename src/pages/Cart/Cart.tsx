import React, { useEffect } from "react";
import classes from "./Cart.module.sass";
import RecallLayout from "../../component/RecallLayout.tsx";
import { HeaderString, String } from "../../component/String/String.tsx";
import Button from "../../component/Button/Button.tsx";
import { useNavigate } from "react-router-dom";
import { Product } from "../../domain/Product.ts";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import { remove } from "../../store/productSlice.ts";
import ItemRemoveButton from "../../component/ItemRemoveButton/ItemRemoveButton.tsx";
import PayForm from "../../component/PayForm/PayForm.tsx";

type CartProps = {}

const Cart: React.FC<CartProps> = () => {
    useEffect(() => {
        window.scroll({ top: 0 });
    });
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products);

    const getProductPrice = (product: Product) => {
        return product.type.markup + product.order.markup + product.size.markup;
    };

    return <RecallLayout>
        <div className={ classes.cart }>
            <div className={ classes.previews }>
                { products.data.length > 0
                    ? <>
                        { products.data.map((product: Product) =>
                            <div className={ classes.preview } key={ product.id }>
                                <div className={ classes.productImage }>
                                    <img src={ product.imgSrc } alt={ "product img" }/>
                                </div>
                                <div className={ classes.productInfoContainer }>
                                    <div className={ classes.productTitle }>
                                        <String bold value={ product.order.name! }/>
                                        <String bold value={ `${ getProductPrice(product) } руб.` }/>
                                    </div>
                                    <div className={ classes.productInfo }>
                                        <String
                                            alt
                                            value={
                                                product.type.name + ", " +
                                                product.size.name + ", " +
                                                product.color.name
                                            }
                                        />
                                    </div>
                                    <div className={ classes.itemRemoveButton }>
                                        <ItemRemoveButton onClick={ () => dispatch(remove(product.id!)) }/>
                                    </div>
                                </div>
                            </div>)
                        }
                    </>
                    : <>
                        <HeaderString value={ "Корзина пуста" }/>
                        <Button value={ "в магазин" } onClick={ () => navigate("/editor/keychain") }/>
                    </>
                }
                {
                    products.data.length > 0 && <HeaderString value={
                        `${ products.data.reduce((sum, product) => sum + getProductPrice(product), 0) }₽`
                    }/>
                }
            </div>
            {
                products.data.length > 0 && <div className={ classes.formContainer }>
                <PayForm disabledPayButton={ products.data.length === 0 }/>
              </div>
            }
        </div>
    </RecallLayout>;
};

export default Cart;