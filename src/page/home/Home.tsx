import FormComment from '../../components/formComment/FormComment'
import FormStart from '../../components/formStart/FormStart'
import MenuList from '../../components/menuList/MenuList'
import MenuListComments from '../../components/menuListComments/MenuListComments'
import { useTypedSelector } from '../../hook/useTypedSelector'
import css from './Home.module.sass'

const Home = () => {

  const { activeComments } = useTypedSelector((state) => state.simple);




  return (
    <div className={css.container}>
      <div className={css.form__body}>
        <FormStart />
        <MenuList />
      </div>
      {activeComments ? (
        <div className={css.wrap__comment}>
          <MenuListComments />
          <FormComment />
        </div>
      ) : null}
    </div>
  )
}

export default Home
