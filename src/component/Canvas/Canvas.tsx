import React, { SetStateAction, useEffect, useRef } from "react";
import { Matrix } from "../../domain/Matrix.ts";
import { Product } from "../../domain/Product.ts";


// 4320p (8K): 7680 x 4320
// 2160p (4K): 3840 x 2160
// 1440p (QHD): 2560 x 1440
// 1080p (FHD): 1920 x 1080
// 720p (HD): 1280 x 720
// 480p (SD): 854 x 480
// 360p (SD): 640 x 360
// 240p (SD): 426 x 240
const canvasMesh: number = 600;
const canvasWidth: number = canvasMesh * 4;
const canvasHeight: number = canvasMesh * 4;

type RecallCanvasProps = {
    matrix: Matrix,
    matrixSize: number,
    ellipseRadius: number,

    product: Product;
    setCanvas: React.Dispatch<SetStateAction<HTMLCanvasElement | null>>
}

const Canvas: React.FC<RecallCanvasProps> = ({
                                                 matrix,
                                                 matrixSize,
                                                 ellipseRadius,
                                                 product,
                                                 setCanvas
                                             }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) setCanvas(canvasRef.current);
    }, [setCanvas]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);

        const cellSize = 30 + (matrixSize / 30) * (120 - 12);
        const radius = 120 + (ellipseRadius / 30) * (120 - 12);

        const numRows = matrix.value.length;
        const numCols = matrix.value[0].length;

        const scaledWidth = numCols * cellSize;
        const scaledHeight = numRows * cellSize;

        const scaleX = canvas.width / scaledWidth;
        const scaleY = canvas.height / scaledHeight;


        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                if (matrix.value[i][j] === 1) {
                    const x = j * cellSize * scaleX;
                    const y = i * cellSize * scaleY;

                    const centerX = x + cellSize * scaleX / 2;
                    const centerY = y + cellSize * scaleY / 2;

                    context.beginPath();
                    context.ellipse(centerX, centerY, radius, radius, 0, 0, Math.PI * 2);
                    context.fillStyle = product.color.hex;
                    context.fill();
                    context.closePath();
                }
            }
        }
    }, [matrix, matrixSize, ellipseRadius, product.color.hex]);

    return <canvas
        ref={ canvasRef }
        width={ canvasWidth }
        height={ canvasHeight }
        style={ {
            width: `${ canvasMesh }px`,
            height: `${ canvasMesh }px`
        } }

    />;
};

export default Canvas;