import React, { InputHTMLAttributes } from 'react';
import css from './ColorInput.module.sass'


interface ColorInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const ColorInput: React.FC<ColorInputProps> = ({ ...props }) => {

  return (
    <div className={css.container}>
      <input type="color"
        {...props}
      />
    </div>
  );
};

export default ColorInput;
