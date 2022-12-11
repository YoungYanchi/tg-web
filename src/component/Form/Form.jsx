import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city])
    

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'}
                   type="text"
                   placeholder={'Страна'}
                   value={country}
                   onChange={onChangeCountry}

            />

            <input className={'input'}
                   type="text"
                   placeholder={'Город'}
                   value={city}
                   onChange={onChangeCity}

            />

            <input className={'input'}
                   type="text"
                   placeholder={'Номер телефона'}
                   value={number}
                   onChange={onChangeNumber}
            />

            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value="physical">Физ. Лицо</option>
                <option value="legal">Юр. Лицо</option>
            </select>
        </div>
    );
};

export default Form;
