import React, { FormEvent, useRef, useState } from "react";
import classes from "./PayForm.module.sass";
import Input from "../Input/Input.tsx";
import { HeaderString, SmallString } from "../String/String.tsx";
import Button from "../Button/Button.tsx";
import { Client } from "../../domain/Client.ts";

interface Errors {
    email?: string;
    phoneNumber?: string;
    fullName?: string;
    city?: string;
    street?: string;
    houseNumber?: string;
    apartment?: string;
}

interface PayFormProps {
    disabledPayButton: boolean;
}

const PayForm: React.FC<PayFormProps> = ({ disabledPayButton }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [client, setClient] = useState<Client>({});
    const [errors, setErrors] = useState<Errors>({});

    const validateForm = () => {
        const newErrors: Errors = {};

        if (!client.email?.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            newErrors.email = "введите корректный адрес электронной почты";
        }

        if (!client.phoneNumber?.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{4}[-\s.]?[0-9]{4,6}$/)) {
            newErrors.phoneNumber = "введите корректный номер телефона";
        }

        const requiredFields: (keyof Client)[] = ["email", "phoneNumber", "fullName", "city", "street", "houseNumber", "apartment"];
        requiredFields.forEach(field => {
            if (!client[field]?.trim()) {
                newErrors[field as keyof Errors] = "* это поле обязательно для заполнения";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            console.log("Данные отправлены", client);
        } else {
            console.log("Форма содержит ошибки");
        }
    };

    return (
        <form ref={ formRef } className={ classes.payForm } onSubmit={ handleSubmit }>
            <div className={ classes.clientAbout }>
                <HeaderString value={ "о вас" }/>
                <Input
                    label={ "Почта" }
                    value={ client.email }
                    setValue={ (value) => setClient({ ...client, email: value }) }
                    placeholder={ "example@example.com" }
                    error={ errors.email }
                />
                <Input
                    label={ "Номер телефона" }
                    value={ client.phoneNumber }
                    setValue={ (value) => setClient({ ...client, phoneNumber: value }) }
                    placeholder={ "+71234567890" }
                    error={ errors.phoneNumber }
                />
            </div>
            <div className={ classes.clientDelivery }>
                <div className={ classes.deliveryTitle }>
                    <HeaderString value={ "доставка" }/>
                    <SmallString
                        very
                        value={
                            "* доставка CDEK по всей России\n" +
                            "350 р. в пункт выдачи\n" +
                            "500 р. курьером\n" +
                            "0 р. самовывоз в Санкт-Петербурге"
                        }
                    />
                </div>
                <Input
                    value={ client.fullName }
                    setValue={ value => setClient({ ...client, fullName: value }) }
                    placeholder={ "полное имя" }
                    error={ errors.fullName }
                />
                <Input
                    value={ client.city }
                    setValue={ value => setClient({ ...client, city: value }) }
                    placeholder={ "город" }
                    error={ errors.city }
                />
                <Input
                    value={ client.street }
                    setValue={ value => setClient({ ...client, street: value }) }
                    placeholder={ "улица" }
                    error={ errors.street }
                />
                <div className={ classes.houseInfo }>
                    <Input
                        value={ client.houseNumber }
                        setValue={ value => setClient({ ...client, houseNumber: value }) }
                        placeholder={ "дом" }
                        error={ errors.houseNumber }
                    />
                    <Input
                        value={ client.apartment }
                        setValue={ value => setClient({ ...client, apartment: value }) }
                        placeholder={ "квартира" }
                        error={ errors.apartment }
                    />
                </div>
                <Input
                    textarea
                    value={ client.comment }
                    setValue={ value => setClient({ ...client, comment: value }) }
                    placeholder={ "комментарий" }
                />
            </div>
            <div className={ classes.payButton }>
                <Button disabled={ disabledPayButton } submit value={ "оплатить" }
                        onClick={ () => window.scroll({ top: 0 }) }/>
            </div>
        </form>
    );
};

export default PayForm;