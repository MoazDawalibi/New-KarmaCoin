import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import Translate from '../../Components/Utils/Translate';
import { NavigationLinks } from '../../Components/Ui/NavigationLinks';
import WithDrawerNav from '../../HighOrderComponent/WithDrawerNav';
import { Badge, Divider } from 'antd';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/auth/AuthReducer';
import { FaUser } from 'react-icons/fa';
import { Field, Form, Formik } from 'formik'
import { useLogin } from '../../api/auth';
import { login } from '../../Redux/auth/AuthReducer'
import { useGetCart } from '../../api/cart';
import { toast } from 'react-toastify';
import Theme from '../../Components/Utils/Theme';

const Header = (handleRegisterClick: any) => {

  const { isAuthenticated } = useSelector((state: any) => state.auth)
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(true);
  const [Scrolled, setScrolled] = useState(false);
  
  const { mutate, isSuccess, isLoading, data, status, isError, error } = useLogin()
  const { data: Cart } = useGetCart()

  const handelSubmit = (values: any) => {
    mutate({
      email: values['email'],
      password: values['password']
    })
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(login((data as any)?.data))
      Navigate('/', { replace: true })
    }
    else if ((error as any)?.response?.status == 510) {
      Navigate('/verified')
    }
  }, [isSuccess, Navigate, dispatch, data, error])
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array as the second argument to run only on mount and unmount

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmitLogin = () => {
    if (isSuccess) {
      toast.success(t('Login Successfully'))
      handleCancel()
      Navigate('/')
    }
    if (isError) {
      toast.error(t('Failed To login'))
    }
  }

  return (
    <div id='contianer' className={Scrolled ? `contianer Scrolledcontianer` : ` contianer `}>
      <div className='left'>
        <Link className="Link" to={"/"}><img src='/logo/Logo.png' alt='Logo' className='logo' /></Link>
      </div>

      <div className='right'>
        <div className='topLinks'>
          <Link className='link' to={"/cart"}><ShoppingCartOutlined /> {t("cart")} {isAuthenticated ? Cart?.data?.at(0)?.cart_items_count : ""} </Link>
          {isAuthenticated ? ""
          :
          <Link className='link' to={"/register"}>{t("Register")}</Link> }
          <div className='link2' onClick={() => showModal()}>
            {
              isAuthenticated ? (
                <div onClick={() => {dispatch(logout())}}>
                  <FaUser size={13} />
                  {t("Logout")}
                </div>
              ) : (
                <div>
                  <FaUser size={13} />
                  {t("Login")}
                </div>
              )
            }
          </div>
          <Translate />
          <span className='themeMode'><Theme /></span>
        </div>

        <div className='bottomLinks'>
          <NavigationLinks className={"links"} />
        </div>

      </div>


    <div className='MenuNav '>
      <div className='CartBadge'>
        <Badge count={Cart?.data?.at(0)?.cart_items_count}>
          <ShoppingCartOutlined size={150} />
        </Badge>
      </div>

        <WithDrawerNav
          className='WithDrawer'
          title='Nav Links'
          button={<Button className='menuButton' icon={<MenuOutlined />} type='primary' />}
          isopen={isDrawer}
          setisopen={setIsDrawer}
        >
          <div className='fakeNav'>
            <p>{t("Nav links")}</p>
            <div className='left'>
              <Link className="Link" to={"/"}><img src='/logo/Logo.png' alt='Logo' className='logo' /></Link>
            </div>
          </div>

          <Divider className='divider divider2' />

          <div className='topLinks2'>
            <div>
              <Link className='link' to={"/register"}>{t("Register")}</Link>

              {/* ///////////////////login///////////// */}
              
              <span className='link2' onClick={() => showModal()}>
                {
                  isAuthenticated ? (
                  <span onClick={() => {dispatch(logout())}}>
                    <FaUser size={13} />
                    {t("Logout")}
                  </span>
                  ) : (
                  <span onClick={()=>setIsDrawer(false)}>
                    <FaUser size={13} />
                    {t("Login")}
                  </span>
                  )
                }
              </span>
            </div>
            <span>
              <Translate />
              <span className='themeMode'><Theme /></span>
            </span>
          </div>

          <Divider className='divider' />
          <NavigationLinks className="DrawerLinks" />

        </WithDrawerNav>
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handelSubmit}
      >
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
          footer={[]}
          >
          <Form >
            <div className="LoginModel">
              <div className='LoginModel_Left'>
                <h1>{t("You Are Not Logged in")} </h1>
                <div className="form">

                  <div className='login_dev'>
                    <label>{t("Email")}</label>
                    <Field className="input" name="email" type="email" placeholder="Email" />
                  </div>

                  <div className='login_dev'>
                    <label>{t("Password")}</label>
                    <Field className="input" name="password" type="password" placeholder="Password" />
                  </div>

                  <button onClick={()=>handleSubmitLogin() }>{isLoading ? t("loading...") : t("Login")}</button>

                </div>
              </div>
              <div className='LoginModel_Right'>

                <h6>{t("Not Registered yet")}?</h6>
                <p>
                  {t("The registration takes just a few minutes, is free and gives you access to our auction archives and bidding")}.
                </p>
                <button onClick={(() => {Navigate('/register')})}>
                  {t("Register")}
                </button>
                
              </div>
            </div>
          </Form>
        </Modal>
      </Formik>

    </div>
  )
}

export default Header