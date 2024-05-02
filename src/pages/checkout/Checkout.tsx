import styles from './Checkout.module.sass'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../component/Loader/Loader.tsx'
import { useDispatch } from 'react-redux'
import { clean } from '../../store/productSlice.ts'

interface CheckoutProps {

}

const Checkout: React.FC<CheckoutProps> = () => {
  const dispatch = useDispatch()
  const [ paymentStatus, setPaymentStatus ] = useState<string>()
  const { key } = useParams()

  useEffect(() => {
    if (!paymentStatus || paymentStatus === 'pending') {
      const intervalId = setInterval(() => {
        console.log('payment check...')
        axios.get<{ status: string }>(
          `https://recallapi.thiswrittencodeis.art/api/v1/payment/checkout/${ key }`
        )
          .then(res => {
            if (res.status === 200) {
              setPaymentStatus(res.data.status)
              console.log(res.data.status)
            }
          })
      }, 2000)

      return () => clearInterval(intervalId)
    }
  }, [ key, paymentStatus ])

  const getDescription = (value?: string): string => {
    if (!paymentStatus || value === 'pending') {
      return 'Оплата в ожидании...'
    }
    if (paymentStatus === 'succeeded') {
      dispatch(clean())
      return 'Спасибо за оплату'
    }

    return 'Что-то пошло не так,\nобратитесь к создателю проекта по почте'
  }

  function renderGraphic(value?: string) {
    if (!paymentStatus || value === 'pending') {
      return <div className={ styles.loading }><Loader/></div>
    }
    if (paymentStatus === 'succeeded') {
      return <svg xmlns="http://www.w3.org/2000/svg" width="138" height="138" fill="none" viewBox="0 0 138 138">
        <path stroke="#E0E2E5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
              strokeWidth="3"
              d="M132.734 136.159H4.978c-1.672 0-3.053-1.379-2.975-3.048 0 0 24.361-56.936 54.4-62.585.564-.097.622-.815.078-1.01-.545-.193-22.32-36.746-22.32-36.746S50.084 3.904 64.782 2.235c21.096-2.408 39.002 14.035 39.002 34.65 0 14.89-9.352 27.623-22.514 32.632a.52.52 0 0 0 .077 1.01c30.019 5.648 54.361 62.584 54.361 62.584.078 1.669-1.302 3.048-2.974 3.048Z"/>
        <path stroke="#E0E2E5" strokeWidth="3" d="M64 44a7 7 0 1 0 14 0"/>
      </svg>
    }

    return <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M132.734 136.159H4.97781C3.30577 136.159 1.92536 134.78 2.00313 133.111C2.00313 133.111 26.3644 76.1752 56.4029 70.5263C56.9667 70.4292 57.025 69.7109 56.4806 69.5168C55.9362 69.3227 34.1608 32.7697 34.1608 32.7697C34.1608 32.7697 50.0841 3.90396 64.7825 2.23452C85.8775 -0.172583 103.784 16.2695 103.784 36.8851C103.784 51.7742 94.4321 64.5085 81.2696 69.5168C80.7447 69.7109 80.803 70.4292 81.3474 70.5263C111.366 76.1752 135.708 133.111 135.708 133.111C135.786 134.78 134.406 136.159 132.734 136.159Z"
        stroke="#E0E2E5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"
        strokeLinejoin="round"/>
      <path d="M78 51C78 47.134 74.866 44 71 44C67.134 44 64 47.134 64 51"
            stroke="#E0E2E5"
            strokeWidth="3"/>
    </svg>
  }

  return (
    <div className={ styles.gratitude }>
      <div className={ styles.gratitudeBody }>
        { renderGraphic(paymentStatus) }
        <h1 className="headerString centerString">{ getDescription(paymentStatus) }</h1>
      </div>
    </div>
  )
}

export default Checkout