import React, { SetStateAction } from "react";
import classes from "./Preview.module.sass";
import { Product } from "../../domain/Product.ts";
import { Matrix } from "../../domain/Matrix.ts";
import Canvas from "../Canvas/Canvas.tsx";
import Dropzone from "../Dropzone/Dropzone.tsx";

interface PreviewProps {
    product: Product;
    setProduct: React.Dispatch<SetStateAction<Product>>;
    matrixSize: number;
    ellipseRadius: number;

    matrix: Matrix | null;
    setMatrix: React.Dispatch<SetStateAction<Matrix | null>>;
    setCanvas: React.Dispatch<SetStateAction<HTMLCanvasElement | null>>;
}

const Preview: React.FC<PreviewProps> = ({
                                             product,
                                             matrixSize,
                                             ellipseRadius,
                                             matrix,
                                             setMatrix,
                                             setCanvas
                                         }) => {
    return <div className={ classes.preview }>
        {
            matrix
                ? <Canvas
                    matrix={ matrix }
                    matrixSize={ matrixSize }
                    ellipseRadius={ ellipseRadius }

                    product={ product! }
                    setCanvas={ setCanvas }
                />
                : <Dropzone
                    product={ product }
                    setMatrix={ setMatrix }
                />
        }
    </div>;
};

export default Preview;