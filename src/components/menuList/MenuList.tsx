import { useTypedDispatch } from '../../hook/useTypedDispatch';
import { useTypedSelector } from '../../hook/useTypedSelector';
import CustomButton from '../UI/customButton/CustomButton';
import css from './MenuList.module.sass';


export const MenuList = () => {

  const { nameList, activeIdList } = useTypedSelector((state) => state.simple);
  const { deleteList, setActiveIdList, setActiveComents } = useTypedDispatch()



  const handleItemClick = (idList: string | number) => {
    setActiveIdList(idList);
    setActiveComents();
  };

  return (
    <>
      {nameList.map((item) => (
        <div
          className={`${css.buttonContainer} ${activeIdList === item.idList && css.active}`}
          key={item.idList}
        >
          <div className={css.btn} onClick={() => handleItemClick(item.idList)}>
            <div className={css.button__content}>
              <p className={css.buttonNameItem}>{item.nameItem}</p>
              <div className={css.button__right}>
                <div className={css.count}>{item.Comments.length}</div>
                <CustomButton red onClick={() => deleteList(item.idList)}>Delete</CustomButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuList;
