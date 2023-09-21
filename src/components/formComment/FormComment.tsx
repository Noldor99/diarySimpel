import React, { useState, FormEvent } from 'react';
import { useTypedDispatch } from '../../hook/useTypedDispatch';
import ColorInput from '../UI/colorInput/ColorInput';
import CustomButton from '../UI/customButton/CustomButton';
import { v4 as uuidv4 } from 'uuid';
import CustomTextArea from '../UI/customTextArea/CustomTextArea';

import css from './FormComment.module.sass'

interface IInput {
  nameComment: string,
  color: string,
}

export interface IFormData extends IInput {
}

const initState = {
  nameComment: '',
  color: '#000000',
}

const FormComment: React.FC = () => {

  const { addComent, setActiveComents } = useTypedDispatch()

  const [formValue, setFormValue] = useState<IFormData>(initState);


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const id = uuidv4();

    addComent(
      {
        comment: {
          idComment: id,
          ...formValue
        }
      }
    )
    setActiveComents()
    setFormValue(initState)
  };


  return (
    <div className={css.container}>
      <form
        className={css.form__body}
        onSubmit={onSubmit}>
        <div className={css.wrapInput}>
          <ColorInput
            onChange={(e) => setFormValue({ ...formValue, color: e.target.value })}
          />
          <CustomTextArea
            placeholder="next"
            value={formValue.nameComment}
            onChange={(e) => setFormValue({ ...formValue, nameComment: e.target.value })}
            rows={2}
            cols={30}
          />
          <div className={css.btn}>
            <CustomButton type="submit">Add</CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComment;
