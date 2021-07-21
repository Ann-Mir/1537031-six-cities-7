import React, {useRef, useState} from 'react';
import Header from '../../header/header';
import {login} from '../../../store/api-actions';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, ToastMessages} from '../../../const';
import {setCity} from '../../../store/action';
import Toast from '../../toast/toast';

function LoginPage() {
  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);

  const handlePasswordChange = (evt) =>
    setIsError(evt.target.value.trim().length === 0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmitError(false);
    setIsSubmitDisabled(true);
    const password = passwordRef.current.value.trim();

    if(isError) {
      setIsSubmitDisabled(false);
      return;
    }

    dispatch(login({
      login: loginRef.current.value,
      password: password,
    }))
      .catch(() => {
        setIsSubmitDisabled(false);
        setIsSubmitError(true);
      });
  };

  const handleClick = () => {
    dispatch(setCity('Amsterdam'));
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            {isSubmitError && <Toast message={ToastMessages.LOGIN_ERROR} />}
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  id="email"
                  data-testid="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  id="password"
                  data-testid="password"
                  style={isError ? {borderColor: 'red'} : {} }
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={isSubmitDisabled}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT} onClick={handleClick}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default LoginPage;

