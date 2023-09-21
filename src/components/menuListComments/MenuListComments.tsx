import { useTypedDispatch } from '../../hook/useTypedDispatch';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { IComment } from '../../store/slice/simpleSlice';
import CustomButton from '../UI/customButton/CustomButton';
import css from './MenuListComments.module.sass'

const MenuListComments = () => {

  const { activeComments } = useTypedSelector((state) => state.simple);
  const { deleteComent } = useTypedDispatch()
  console.log(activeComments)

  const { setActiveComents } = useTypedDispatch()

  const hundleDelete = (item: IComment) => {
    deleteComent({ idComment: item.idComment })
    setActiveComents()
  }

  return (
    <div >
      <p className={css.title}>Comments</p>
      {activeComments?.map((item) => (
        <div
          key={item.idComment}
          className={css.container} >
          <div className={css.color__body} style={{ background: item.color }} />
          <div className={css.text_body}>
            <p>{item.nameComment}</p>
          </div>
          <div>
            <CustomButton onClick={() => hundleDelete(item)}>
              delet
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuListComments