import RecallContainer from "../../component/RecallContainer.tsx";
import classes from "./Editor.module.sass";
import { HeaderString, SmallString, String } from "../../component/String/String.tsx";
import Button, { CartButton } from "../../component/Button/Button.tsx";
import React, { useCallback, useEffect, useState } from "react";
import RadioButtonGroup, { ColorRadioButtonGroup } from "../../component/RadioButtonGroup/RadioButtonGroup.tsx";
import Slider from "../../component/Slider/Slider.tsx";

import paragraphSvg from "../../assets/paragraph.svg";
import axios, { AxiosError, AxiosProgressEvent, AxiosResponse } from "axios";
import { useDropzone } from "react-dropzone";

type Matrix = {
  value: number[][]
}

type Product = {
  type: "бусина" | "панно";
  size: "большой" | "средний" | "маленький";
  color: "классика" | "голубой" | "красный" | "зеленый" | "желтый" | "синий",
  matrix?: Matrix
}

const Editor = () => {
  const [matrix, setMatrix] = useState<Matrix>();
  const [matrixSize, setMatrixSize] = useState<number>(20);
  const [ellipseRadius, setEllipseRadius] = useState<number>(3);

  const [finishedProducts, setFinishedProducts] = useState<Product[]>([]);

  const [product, setProduct] = useState<Product>({
    type: "бусина",
    size: "большой",
    color: "классика"
  });

  const handleTypeChange = (value: string) => {
    setProduct({ ...product, type: value as Product["type"] });
  };

  const handleSizeChange = (value: string) => {
    setProduct({ ...product, size: value as Product["size"] });
  };

  const handleColorChange = (value: string) => {
    setProduct({ ...product, color: value as Product["color"] });
  };

  const onClickReady = () => {
    console.log(product);
    console.log(finishedProducts);
    console.log("go cart");
  };

  const onClickCreateMore = () => {
    setProduct({ ...product, matrix: matrix });
    setMatrix(undefined);
    setFinishedProducts(prevState => [...prevState, product]);
  };

  const onClickGoCart = () => {
    console.log("go cart");
  };

  return <RecallContainer>
    <div className={ classes.editor }>

      <div className={ classes.previewContainer }>
        {
          matrix
            ? <CanvasContainer matrix={ matrix } matrixSize={ matrixSize } ellipseRadius={ ellipseRadius }/>
            : <DropZoneContainer setMatrix={ setMatrix } productType={ product.type }/>
        }
      </div>
      <div className={ classes.managementListContainer }>
        <div className={ classes.managementContainer }>
          <div className={ classes.managementHeader }>
            <HeaderString value={ "создать" }/>
          </div>
          <div className={ classes.managementContent }>
            <div>
              <RadioButtonGroup
                label={ "тип" }
                options={ [
                  { label: "Бусина", value: "бусина" },
                  { label: "Панно", value: "панно" }
                ] }
                selectedValue={ product.type }
                onChange={ handleTypeChange }
              />
            </div>
            <div>
              <RadioButtonGroup
                label={ "размер" }
                options={ [
                  { label: "Большой", value: "большой" },
                  { label: "Средний", value: "средний" },
                  { label: "Маленький", value: "маленький" }
                ] }
                selectedValue={ product.size }
                onChange={ handleSizeChange }
              />
            </div>
            <div>
              <ColorRadioButtonGroup
                label={ "цвет" }
                options={ [
                  { color: "#fea2c4", value: "классика" },
                  { color: "#bde2ff", value: "голубой" },
                  { color: "#ff4e4f", value: "красный" },
                  { color: "#d8f793", value: "зеленый" },
                  { color: "#ffedac", value: "желтый" },
                  { color: "#005cff", value: "синий" }
                ] }
                selectedValue={ product.color }
                onChange={ handleColorChange }
              />
            </div>
          </div>
        </div>
        <div className={ classes.managementContainer }>
          <div className={ classes.managementHeader }>
            <HeaderString value={ "редактировать" }/>
          </div>
          <div className={ classes.managementContent }>
            <div className={ classes.managementItem }>
              <Slider
                value={ matrixSize }
                onChange={ setMatrixSize }
                label={ "количество\nэлементов" }
                min={ 0 }
                max={ 30 }
                step={ 1 }
              />
            </div>
            <div className={ classes.managementItem }>
              <Slider
                value={ ellipseRadius }
                onChange={ setEllipseRadius }
                label={ "размер\nэлементов" }
                min={ 0 }
                max={ 30 }
                step={ 1 }
              />
            </div>
          </div>
        </div>
        <div className={ classes.actionsContainer }>
          <Button disabled={ !matrix } onClick={ onClickReady } value={ "готово" }/>
          <Button disabled={ !matrix } onClick={ onClickCreateMore } alt value={ "создать ещё" }/>
        </div>
      </div>
      <div className={ classes.cartButtonContainer }>
        { finishedProducts.length > 0 &&
          <CartButton value={ `${ finishedProducts.length }` } onClick={ onClickGoCart }/> }
      </div>
    </div>
  </RecallContainer>;
};


type CanvasContainerProps = {
  matrix: Matrix;
  matrixSize: number;
  ellipseRadius: number;
}

const CanvasContainer: React.FC<CanvasContainerProps> = ({ matrix, matrixSize, ellipseRadius }) => {
  console.log(matrix);

  const normalize = (value: number) => {
    const min = 0;
    const max = 30;
    const newMin = 40;
    const newMax = 100;
    return ((value - min) * (newMax - newMin)) / (max - min) + newMin;
  };

  const matrixSizePercentage = Math.round(normalize(matrixSize));
  const ellipseRadiusPercentage = Math.round(normalize(ellipseRadius));

  return <>
    <div className={ classes.canvas }>
      <String value={ "Получена матрица изображения" }/>
      <String value={ `matrix size (${ matrixSizePercentage }%): %{${ matrixSize }}` }/>
      <String value={ `ellipse size (${ ellipseRadiusPercentage }%): %{${ ellipseRadius }}` }/>
    </div>
    <div className={ classes.productInfo }>
      <SmallString value={ "размер: 8 Х 8 Х 0.5 см" }/>
    </div>
  </>;
};


type DropZoneContainerProps = {
  productType?: "бусина" | "панно",
  setMatrix: (matrix: Matrix) => void
}

const DropZoneContainer: React.FC<DropZoneContainerProps> = ({ productType, setMatrix }) => {
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  useEffect(() => console.log(uploadProgress), [uploadProgress]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("images", file);
    });
    try {
      const response: AxiosResponse = await axios.post<Matrix>(
        "http://localhost:8080/upload",
        formData,
        {
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            const progress = Math.round((progressEvent.loaded / progressEvent.total!) * 100);
            setUploadProgress(progress);
          }
        }
      );
      console.log("Изображения успешно отправлены на сервер", response);
      setMatrix(response.data);

    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Произошла ошибка при отправке изображений на сервер:", axiosError.message);
    }
  }, [setMatrix]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone(
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

  return <div { ...getRootProps() } className={ classes.dropZoneContainer }>
    <input { ...getInputProps() } />
    <div className={ classes.dropZoneHeader }>
      <HeaderString value={ "загрузите фото" }/>
    </div>
    <div className={ classes.dropZoneProductTypeImage }>
      <String value={ `selected type: %{${ productType }}` }/>
    </div>
    <div>
      <String value={ `drag active: %{${ isDragActive }}` }/>
    </div>
    <div className={ classes.dropZoneDescription }>
      <img src={ paragraphSvg } alt={ "p" }/>
      <SmallString center value={
        "загрузите самое тёплое фото\n" +
        "из вашей галереи, которые\n" +
        "бы вы хотели преобразовать\n" +
        "в украшение"
      }/>
    </div>
  </div>;
};


export default Editor;