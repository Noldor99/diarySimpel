import React, { useState, FormEvent } from 'react';
import { useTypedDispatch } from '../../hook/useTypedDispatch';
import CustomButton from '../UI/customButton/CustomButton';
import InputOutlined from '../UI/inputOutlined/InputOutlined';
import { v4 as uuidv4 } from 'uuid';
import css from './FormStart.module.sass'

interface IInput {
  nameItem: string;
}

export interface IFormData extends IInput {
}

const initState = {
  nameItem: '',
}

const FormStart: React.FC = () => {
  const [formValue, setFormValue] = useState<IFormData>(initState);

  const { addList } = useTypedDispatch()

  const handleChange = (field: string, value: string) => {
    setFormValue({
      ...formValue,
      [field]: value,
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const id = uuidv4();

    addList({
      idList: id,
      nameItem: formValue.nameItem,
      Comments: []
    })
    setFormValue(initState)
  };

  return (
    <div className={css.container}>
      <p className={css.title}>Items</p>
      <form
        className={css.form__body}
        onSubmit={onSubmit}>
        <div className={css.input}>
          {[
            { label: 'Name', field: 'nameItem', type: 'text' },
          ].map((input) => (
            <InputOutlined
              key={input.field}
              label={input.label}
              value={formValue[input.field as keyof IInput]}
              onChange={(e) => handleChange(input.field, e.target.value)}
            />
          ))}
        </div>
        <div>
          <CustomButton orange type="submit">Add New</CustomButton>
        </div>
      </form>

    </div>
  );
};

export default FormStart;
