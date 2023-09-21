import React from 'react';
import css from './CustomTextArea.module.sass'

interface CustomTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ ...rest }) => {
  return (
    <div className={css.container}>
      <textarea {...rest} />
    </div>
  );
};

export default CustomTextArea;
