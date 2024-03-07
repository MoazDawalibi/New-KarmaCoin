import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import Translate from '../../Components/Utils/Translate';
import { NavigationLinks } from '../../Components/Ui/NavigationLinks';
import WithDrawerNav from '../../HighOrderComponent/WithDrawerNav';
import { Badge, Divider } from 'antd';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import LoginModal from '../../Components/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/auth/AuthReducer';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Field, Form, Formik } from 'formik'
import { useLogin } from '../../api/auth';
import { login } from '../../Redux/auth/AuthReducer'
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton';
import { useGetCart } from '../../api/cart';
import { toast } from 'react-toastify';

const Header = (handleRegisterClick: any) => {
  const Navigate = useNavigate()
  const { mutate, isSuccess, isLoading, data, status, isError, error } = useLogin()
  const dispatch = useDispatch()
  const { data: Cart } = useGetCart()

  const handelSubmit = (values: any) => {
    mutate({
      email: values['email'],
      password: values['password']
    })
  }

  useEffect(() => {
    console.log(data);
    if (isSuccess) {
      dispatch(login((data as any)?.data))
      Navigate('/', { replace: true })
    // toast.success(t("Logged in successfully"))
    }
    else if ((error as any)?.response?.status == 510) {
      // console.log("error 510");
      // toast.error(t("Please verify your email"))
      Navigate('/verified')
    }

  }, [isSuccess, Navigate, dispatch, data, error])
  const { t } = useTranslation();

  const { isAuthenticated } = useSelector((state: any) => state.auth)


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(true);


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
  const [Scrolled, setScrolled] = useState(false);

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


  return (
    <div id='contianer' className={Scrolled ? `contianer Scrolledcontianer` : ` contianer `}>
      <div className='left'>
        <Link className="Link" to={"/"}><img src='/logo/Logo.png' alt='Logo' className='logo' /></Link>
      </div>

      <div className='right'>
        <div className='topLinks'>
          <Link className='link' to={"/cart"}><ShoppingCartOutlined /> {t("cart")} {isAuthenticated ? Cart?.data?.at(0)?.cart_items_count : ""} </Link>
          {isAuthenticated ?
            <Link className='link' to={"/register"}>{t("Register")}</Link> : ""}
          <div className='link2'
            onClick={(() => (
              setIsModalOpen(true)
            ))}
          >
            {
              isAuthenticated ? (
                <div onClick={() => {
                  dispatch(logout())
                }}>
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
        </div>

        <div className='bottomLinks'>
          <NavigationLinks className={"links"} />
        </div>
      </div>

      <div className='MenuNav '>
        {/* <div className='viewCart'>
          <Link to={"/cart"}> <div><ShoppingCartOutlined/><span className='cart_count'>  {isAuthenticated?Cart?.data?.at(0)?.cart_items_count :""}</span>
          <span className='cart_count countArabic'>1  {isAuthenticated?Cart?.data?.at(0)?.cart_items_count :""}</span>
          </div></Link>

        </div> */}
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
              {/* <Link className='link'  to={"/cart"}><ShoppingCartOutlined/> {t("Cart")}</Link> */}
              <Link className='link' to={"/register"}>{t("Register")}</Link>
              {/* /login */}
              <span className='link2' onClick={(() => (setIsModalOpen(true)))}>
                  {/* {t("Login")} */}
                  {
              isAuthenticated ? (
                <span onClick={() => {
                  dispatch(logout())
                }}>
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
            <Translate />
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
          footer={[
            <></>
          ]}
        >
          <Form >
            <div className="LoginModel">
              <div className='LoginModel_Left'>
                <h1>{t("You Are Not Logged in")} </h1>
                <div className="form">
                  <div className='login_dev'>
                    {/* <label>{t("Email")}</label> */}
                    <Field className="input" name="email" type="email" placeholder="Email" />
                  </div>

                  <div className='login_dev'>
                    {/* <label>{t("Password")}</label> */}
                    <Field className="input" name="password" type="password" placeholder="Password" />
                  </div>
                  <button onClick={(() => { handleSubmitLogin() })}>{isLoading ? t("loading...") : t("Login")}</button>
                </div>
              </div>
              <div className='LoginModel_Right'>
                <h6>{t("Not Registered yet")}?</h6>
                <p>
                  {t("The registration takes just a few minutes, is free and gives you access to our auction archives and bidding")}.
                </p>
                <button onClick={(() => {
                  Navigate('/register')
                })}>
                  {/* {isLoading?t("loading..."): "register"} */}
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