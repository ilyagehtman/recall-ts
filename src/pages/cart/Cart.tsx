import styles from './Cart.module.sass'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import axios from 'axios'
import classNames from 'classnames'
import Button from '../../component/Button/Button.tsx'
import { IPaymentLink } from '../../domain/IPaymentLink.ts'
import { IOrder } from '../../domain/IOrder.ts'
import { ICustomer } from '../../domain/ICustomer.ts'
import { useAppDispatch, useAppSelector } from '../../store/store.ts'
import { remove } from '../../store/productSlice.ts'
import { HeaderString, String } from '../../component/String/String.tsx'
import { IProduct } from '../../domain/IProduct.ts'
import { RadioButtonGroup } from '../../component/RadioButtonGroup/RadioButtonGroup.tsx'
import { ICategory, IDeliveryMethod, IType } from '../../domain/Vars.ts'

type IMarkup = {
  type: IType
  markup: number
  category: ICategory
}

const basePrices: { category: ICategory, price: number }[] = [
  { category: 'брелок', price: 1000 },
  { category: 'серьга', price: 800 }
]

const deliveryMethodPrices: { deliveryMethod: IDeliveryMethod, price: number }[] = [
  { deliveryMethod: 'курьер', price: 500 },
  { deliveryMethod: 'самовывоз', price: 0 },
  { deliveryMethod: 'пункт выдачи', price: 350 }
]

const markups: IMarkup[] = [
  { type: 'бусина', category: 'серьга', markup: 700 },
  { type: 'бусина', category: 'брелок', markup: 900 },
  { type: 'панно', category: 'серьга', markup: 500 },
  { type: 'панно', category: 'брелок', markup: 800 }
]

function findMarkup(type: IType, category: ICategory): number {
  for (const item of markups) {
    if (item.type === type && item.category === category) {
      return item.markup
    }
  }
  return 0
}

function getBasePrice(category: ICategory): number {
  for (const item of basePrices) {
    if (item.category === category) {
      return item.price
    }
  }
  return 0
}

function getDeliveryMethodPrice(deliveryMethod: IDeliveryMethod): number {
  for (const item of deliveryMethodPrices) {
    if (item.deliveryMethod === deliveryMethod) {
      return item.price
    }
  }
  return 0
}


interface Errors {
  city?: boolean;
  email?: boolean;
  phone?: boolean;
  street?: boolean;
  house?: boolean;
  apart?: boolean;
  fullName?: boolean;
  comment?: boolean
}

export default function Cart() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products)

  const [ paymentLinkFetching, setPaymentLinkFetching ] = useState(false)
  const [ hasSubmitted, setHasSubmitted ] = useState(false)
  const [ customer, setCustomer ] = useState<ICustomer>(
    {
      city: '',
      email: '',
      phone: '',
      street: '',
      house: '',
      apart: '',
      fullName: '',
      comment: '',
      deliveryMethod: 'курьер'
    }
  )

  const [ errors, setErrors ] = useState<Errors>({
    city: true,
    email: true,
    phone: true,
    street: true,
    house: true,
    apart: true,
    fullName: true,
    comment: false
  })


  function hasError(errors: Errors): boolean {
    for (const key in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, key)) {
        if (errors[key as keyof Errors]) {
          return true
        }
      }
    }
    return false
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log(
      {
        customer: customer,
        products: products.data
      } as IOrder
    )
    event.preventDefault()
    setHasSubmitted(true)
    const notValid = hasError(errors)

    if (notValid) {
      return
    }

    setPaymentLinkFetching(true)
    setTimeout(() => {
      axios.post<IPaymentLink>(
        'https://recallapi.thiswrittencodeis.art/api/v1/payment',
        {
          customer: customer,
          products: products.data
        } as IOrder
      )
        .then(res => {
          if (res.status === 200) {
            window.open(res.data.link)
            setPaymentLinkFetching(false)
          }
        })
        .catch(err => setPaymentLinkFetching(false))
    }, 2000)
  }

  const getProductPrice = (product: IProduct, deliveryMethod: IDeliveryMethod) => {
    return getBasePrice(product.category) + findMarkup(product.type, product.category) + getDeliveryMethodPrice(deliveryMethod)
  }

  if (products.data.length <= 0) {
    return <div className={ styles.empty }>
      <div className={ styles.emptyBody }>
        <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M132.734 136.159H4.97781C3.30577 136.159 1.92536 134.78 2.00313 133.111C2.00313 133.111 26.3644 76.1752 56.4029 70.5263C56.9667 70.4292 57.025 69.7109 56.4806 69.5168C55.9362 69.3227 34.1608 32.7697 34.1608 32.7697C34.1608 32.7697 50.0841 3.90396 64.7825 2.23452C85.8775 -0.172583 103.784 16.2695 103.784 36.8851C103.784 51.7742 94.4321 64.5085 81.2696 69.5168C80.7447 69.7109 80.803 70.4292 81.3474 70.5263C111.366 76.1752 135.708 133.111 135.708 133.111C135.786 134.78 134.406 136.159 132.734 136.159Z"
            stroke="#E0E2E5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M78 51C78 47.134 74.866 44 71 44C67.134 44 64 47.134 64 51" stroke="#E0E2E5" strokeWidth="3"/>
        </svg>
        <h1 className="headerString altHeaderString">в корзине пока пусто</h1>
      </div>
    </div>
  }

  return <div className={ styles.cart }>
    <div className={ styles.leftBar }>
      <div className={ styles.productList }>
        { products.data.map(product =>
          <div className={ styles.productCard }>
            <div className={ styles.productPhoto }>
              <img src={ product.canvasImage } alt={ 'product-img' }/>
            </div>
            <div className={ styles.productInfo }>
              <div className={ styles.about }>
                <div className={ styles.start }>
                  <String bold value={ `${ product.color.name } ${ product.category } -> ${ product.type }` }/>
                </div>
                <div className={ styles.end }>
                  <span className="string">{ `${ getProductPrice(product, 'самовывоз') } руб.` }</span>
                  <RemoveProductIcon onClick={ () => dispatch(remove(product.id!)) }/>
                </div>
              </div>
              <div className={ styles.description }>
                <String
                  alt
                  value={
                    product.size + ' размер' + (
                      product.laceColor ? ` и ${ product.laceColor.name } шнурок` : ''
                    )
                  }
                />
              </div>
            </div>
          </div>
        ) }

      </div>
      <HeaderString value={
        `сумма: ${ products.data.map(p => getProductPrice(p, customer.deliveryMethod))
          .reduce((previousValue, currentValue) => previousValue + currentValue, 0) }₽`
      }/>
    </div>
    <div className={ styles.customerForm }>
      <form onSubmit={ onSubmit }>
        <div>
          <div className={ styles.inputHeader }>
            <HeaderString value={ 'о вас' }/>
          </div>
          <FormInput
            required
            submitted={ hasSubmitted }
            pattern={ {
              errorMessage: 'неккоректная почта',
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
            } }
            label={ 'почта' }
            placeholder={ 'example@gmail.com' }
            hasError={ errors.email }
            value={ customer?.email }
            onChange={ value => setCustomer({ ...customer, email: value }) }
            valid={ !errors.email }
            setIsValid={ value => setErrors({ ...errors, email: !value }) }
          />
          <FormInput
            submitted={ hasSubmitted }
            required
            pattern={ {
              errorMessage: 'неккоректный номер телефона',
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{4}[-\s.]?[0-9]{4,6}$/
            } }
            label={ 'номер телефона' }
            placeholder={ '+7 (999) 000 00 00' }
            hasError={ errors.phone }
            value={ customer?.phone }
            onChange={ value => setCustomer({ ...customer, phone: value }) }
            valid={ !errors.phone }
            setIsValid={ value => setErrors({ ...errors, phone: !value }) }
          />
        </div>
        <div>
          <div className={ styles.inputHeader }>
            <HeaderString value={ 'доставка' }/>
            <DeliveryInfoIcon/>
          </div>
          <FormInput
            submitted={ hasSubmitted }
            required
            hasError={ errors.fullName }
            placeholder={ 'полное имя' }
            value={ customer?.fullName }
            onChange={ value => setCustomer({ ...customer, fullName: value }) }

            valid={ !errors.fullName }
            setIsValid={ value => setErrors({ ...errors, fullName: !value }) }
          />
          <FormInput
            submitted={ hasSubmitted }
            required
            placeholder={ 'город' }
            value={ customer?.city }
            onChange={ value => setCustomer({ ...customer, city: value }) }
            valid={ !errors.city }
            setIsValid={ value => setErrors({ ...errors, city: !value }) }
          />
          <FormInput
            submitted={ hasSubmitted }
            required
            placeholder={ 'улица' }
            value={ customer?.street }
            onChange={ value => setCustomer({ ...customer, street: value }) }
            valid={ !errors.street }
            setIsValid={ value => setErrors({ ...errors, street: !value }) }
          />
          <div className={ styles.row }>
            <FormInput
              submitted={ hasSubmitted }
              required
              placeholder={ 'дом' }
              value={ customer?.house }
              valid={ !errors.house }
              onChange={ value => setCustomer({ ...customer, house: value }) }
              setIsValid={ value => setErrors({ ...errors, house: !value }) }
            />
            <FormInput
              submitted={ hasSubmitted }
              required
              placeholder={ 'квартира' }
              value={ customer?.apart }
              valid={ !errors.apart }
              onChange={ value => setCustomer({ ...customer, apart: value }) }
              setIsValid={ value => setErrors({ ...errors, apart: !value }) }
            />
          </div>
          <FormInput
            submitted={ hasSubmitted }
            placeholder={ 'комментарий' }
            value={ customer?.comment }
            valid={ true }
            onChange={ value => setCustomer({ ...customer, comment: value }) }
            setIsValid={ (value) => setErrors({ ...errors, comment: !value }) }
          />
        </div>
        <div style={ { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'end' } }>
          <RadioButtonGroup
            label="способ доставки"
            selectedValue={ customer.deliveryMethod }
            options={ [
              { label: 'курьер', value: 'курьер' },
              { label: 'пункт выдачи', value: 'пункт выдачи' },
              { label: 'самовывоз', value: 'самовывоз' }
            ] }
            onChange={ value => {
              setCustomer(prevState => {
                return { ...prevState, deliveryMethod: value as IDeliveryMethod }
              })
            } }
          />
          <Button loading={ paymentLinkFetching } submit value={ 'оплатить' }/>
        </div>
      </form>
    </div>
  </div>
}

function RemoveProductIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      onClick={ onClick }
      xmlns="http://www.w3.org/2000/svg"
      width="25" height="25"
      viewBox="0 0 25 25"
      fill="none">
      <circle cx="12.5" cy="12.5" r="11.5" strokeWidth="2"/>
      <path d="M3.95996 4L20.9998 21.0398" strokeWidth="2"/>
      <path d="M3.95996 21.04L20.9998 4.00019" strokeWidth="2"/>
    </svg>
  )
}

function DeliveryInfoIcon() {
  return (
    <div className={ styles.deliveryInfoIcon }>
      <div className={ styles.deliveryInfo }>
        <span className="string">доставка CDEK по всей России</span>
        <span className="string">
                    {
                      '— 0 р. самовывоз в Санкт-Петербурге\n' +
                      '— 350 р. в пункт выдачи\n' +
                      '— 500 р. курьером'
                    }
                </span>
      </div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.145 15.9799C10.0997 15.9005 10.077 15.7929 10.077 15.6569L10.094 15.4869L11.233 7.54785L10.842 7.36085L8.32603 7.75185L8.20703 8.34685L9.26103 8.75485C9.19303 9.31019 9.00036 10.6872 8.68303 12.8859C8.44503 14.5292 8.2977 15.6002 8.24103 16.0989C8.20703 16.4502 8.29203 16.7165 8.49603 16.8979C8.71136 17.0792 9.01736 17.1699 9.41403 17.1699C9.89003 17.1699 10.3037 17.0395 10.655 16.7789C11.0064 16.5182 11.267 16.2689 11.437 16.0309L11.216 15.5889C11.0234 15.7702 10.859 15.9005 10.723 15.9799C10.5984 16.0479 10.4737 16.0819 10.349 16.0819C10.2697 16.0819 10.2017 16.0479 10.145 15.9799ZM9.87303 5.26985C10.0657 5.46252 10.2924 5.55885 10.553 5.55885C10.9157 5.55885 11.2104 5.43419 11.437 5.18485C11.6637 4.93552 11.7827 4.62952 11.794 4.26685C11.794 3.99485 11.709 3.76818 11.539 3.58685C11.369 3.39419 11.131 3.29785 10.825 3.29785C10.4964 3.29785 10.2074 3.42252 9.95803 3.67185C9.72003 3.92119 9.60103 4.22152 9.60103 4.57285C9.60103 4.84485 9.6917 5.07719 9.87303 5.26985Z"
        />
      </svg>
    </div>
  )
}


interface FromInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  pattern?: {
    errorMessage: string,
    value: RegExp
  }
  required?: boolean
  hasError?: boolean

  valid?: boolean
  submitted?: boolean
  setIsValid: (value: boolean) => void
}

function FormInput({
                     label,
                     hasError,
                     submitted,
                     value,
                     placeholder,
                     onChange,
                     pattern,
                     required,
                     valid,
                     setIsValid
                   }: FromInputProps) {

  const [ errorLabel, setErrorLabel ] = useState<string>()
  const [ isValid, setLocalIsValid ] = useState(true)

  useEffect(() => {
    if (submitted) {
      setLocalIsValid(valid ?? true)
    }
  }, [ valid, submitted ])

  const handleValidation = (inputValue: string) => {
    if (required && !inputValue.trim()) {
      setIsValid(false)
      setLocalIsValid(false)
      setErrorLabel('Заполните это поле')
      return
    }

    if (pattern && !pattern.value.test(inputValue)) {
      setIsValid(false)
      setLocalIsValid(false)
      setErrorLabel(pattern.errorMessage)
      return
    }

    setErrorLabel(undefined)
    setIsValid(true)
    setLocalIsValid(true)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    onChange(inputValue)
    handleValidation(inputValue)
  }

  return (
    <div className={ classNames(styles.formInput, { [styles.invalidInput]: !isValid }) }>
      { (errorLabel || !isValid)
        ? <label>
          {
            <span className="string string--small">{ errorLabel ?? 'Заполните это поле' }</span>
          }
        </label>
        : label && <label>
        {
          <span className="string string--small">{ label }</span>
        }
      </label>
      }
      <input
        className="string"
        type="text"
        name={ value }
        value={ value }
        onChange={ handleChange }
        placeholder={ placeholder }
      />
    </div>
  )
}