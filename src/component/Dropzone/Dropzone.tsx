import React, { SetStateAction, useCallback, useState } from "react";
import { Matrix } from "../../domain/Matrix.ts";
import { HeaderString, SmallString, String } from "../String/String.tsx";
import paragraphSvg from "../../assets/paragraph.svg";
import { useDropzone } from "react-dropzone";
import { AxiosError } from "axios";
import { Product } from "../../domain/Product.ts";
import classNames from "classnames";
import classes from "./Dropzone.module.sass";
import productImg from "../../assets/product-img.svg";

interface DropzoneProps {
    product: Product | null;
    setMatrix: React.Dispatch<SetStateAction<Matrix | null>>;
}

const Dropzone: React.FC<DropzoneProps> = ({ product, setMatrix }) => {
    const [serverError, setServerError] = useState<AxiosError | null>(null);
    const [showProgressBar, setShowProgressBar] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(0);


    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        setShowProgressBar(true);

        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            setUploadProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setShowProgressBar(false);
                const matrix: number[][] = [];
                for (let i = 0; i < 100; i++) {
                    const row: number[] = [];
                    for (let j = 0; j < 100; j++) {
                        row.push(Math.random() < 0.0060 ? 1 : 0);
                    }
                    matrix.push(row);
                }
                setMatrix({ value: matrix });
            }
        }, 50);

    }, [setMatrix, setUploadProgress]);

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(
        {
            onDrop,
            multiple: false,
            accept: {
                "image/jpeg": [".jpg", ".jpeg"],
                "image/png": [".png"],
                "image/gif": [".gif"]
            }
        }
    );

    return <div { ...getRootProps() } className={
        classNames(
            classes.dropzone, {
                [classes.dragActive]: isDragActive
            }
        )
    }>
        <input { ...getInputProps() } />
        { isDragReject && <String value={ "Только .jpg .png .gif" }/> }

        <div className={ classes.dropzoneHeader }>
            <HeaderString value={ "загрузите фото" }/>
        </div>
        {
            showProgressBar
                ? <div className={ classes.progressBar }>
                    <div style={ { width: `${ uploadProgress }%` } }/>
                </div>
                : <div className={ classes.dropzoneContent }>
                    {
                        serverError
                            ? <String value={ `Ошибка сервера: ${ serverError.code }` }/>
                            : <img src={ productImg } alt={ "product img" }/>
                    }
                </div>
        }
        <div className={ classes.dropzoneDescription }>
            <img src={ paragraphSvg } alt={ "p" }/>
            <SmallString
                center
                value={
                    "загрузите самое тёплое фото\n" +
                    "из вашей галереи, которые\n" +
                    "бы вы хотели преобразовать\n" +
                    "в украшение"
                }
            />
        </div>
    </div>;
};

export default Dropzone;