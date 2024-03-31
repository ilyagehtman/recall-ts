import RecallLayout from '../../component/RecallLayout.tsx'
import classes from './Editor.module.sass'
import { useState } from 'react'
import { Product } from '../../domain/Product.ts'
import { useNavigate, useParams } from 'react-router-dom'
import ControlPanel from '../../component/ControlPanel/ControlPanel.tsx'
import Preview from '../../component/Preview/Preview.tsx'
import { v4 as uuidv4 } from 'uuid'
import { Matrix } from '../../domain/Matrix.ts'
import { useAppSelector } from '../../store/store.ts'
import { useDispatch } from 'react-redux'
import { push } from '../../store/productSlice.ts'
import { CartButton } from '../../component/Button/Button.tsx'
import { HeaderString } from '../../component/String/String.tsx'

const initialProduct: Product = {
    order: { markup: 900 },
    size: { name: 'большой', markup: 800 },
    type: { name: 'бусина', markup: 100 },
    color: { name: 'розовый', hex: '#fea2c4' }
}

const Editor = () => {
    const { type } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useAppSelector((state) => state.products)

    const [matrix, setMatrix] = useState<Matrix | null>(null)

    const [product, setProduct] = useState<Product>(
        Object.assign(
            {
                id: uuidv4(),
                order:
                    (type === 'earring' && 'серьга') ??
                    (type === 'keychain' && 'брелок') ?? 'брелок'
            },
            initialProduct
        )
    )

    const [matrixSize, setMatrixSize] = useState<number>(0)
    const [ellipseRadius, setEllipseRadius] = useState<number>(0)
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)

    const handleOneMoreButton = () => {
        setMatrix(null)
        dispatch(push({ ...product!, imgSrc: canvas?.toDataURL() }))
        setProduct(
            Object.assign(
                { id: uuidv4() },
                initialProduct
            )
        )
    }

    const handleRdyButton = () => {
        if (products.data.length > 0 && !matrix) {
            navigate('/cart')
        } else {
            setMatrix(null)
            dispatch(push({ ...product!, imgSrc: canvas?.toDataURL() }))
            navigate('/cart')
        }
    }

    if (type !== 'keychain' && type !== 'earring') {
        return <RecallLayout>
            <div>
                <HeaderString value={ `Продукт '${ type }' не поддерживается` }/>
            </div>
        </RecallLayout>
    }

    return <RecallLayout>
        <div className={ classes.editor }>

            <Preview
                product={ product }
                setProduct={ setProduct }
                matrixSize={ matrixSize }
                ellipseRadius={ ellipseRadius }
                matrix={ matrix }
                setMatrix={ setMatrix }
                setCanvas={ setCanvas }
            />

            <ControlPanel
                product={ product }
                setProduct={ setProduct }

                matrixSize={ matrixSize }
                setMatrixSize={ setMatrixSize }

                ellipseRadius={ ellipseRadius }
                setEllipseRadius={ setEllipseRadius }

                readyButtonDisabled={ products.data.length === 0 && matrix === null }
                readyButtonOnClick={ handleRdyButton }

                oneMoreButtonDisabled={ matrix === null }
                oneMoreButtonOnClick={ handleOneMoreButton }
            />

            <div className={ classes.productCount }>
                {
                    products.data.length > 0 && <CartButton
                    onClick={ () => navigate('/cart') }
                    value={ `${ products.data.length }` }
                  />
                }
            </div>

        </div>
    </RecallLayout>
}

export default Editor