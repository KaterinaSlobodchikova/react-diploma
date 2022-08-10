import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import classNames from "classnames";

import styles from "./Authorization.module.css";
import Button from "../../Components/Button";
import { setUser } from "../../Redux/reducers/user";
import SignInForm from "../../Components/SignInForm";
import SignUpForm from "../../Components/SignUpForm";

type Tabs = "Sign in" | "Sign up";

const Authorization: FC = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>("Sign in");
  const [welcomeTextShown, setWelcomeTextShown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeTabHandler = () => {
    if (currentTab === "Sign in") setCurrentTab("Sign up");
    else setCurrentTab("Sign in");
  };

  useEffect(() => {
    setTimeout(() => {
      setWelcomeTextShown(true);
    }, 2000);
  }, []);

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/main");
      })
      .catch(console.error);
  };

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/main");
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <div className={classNames(styles.authContainer)}>
      <div className={classNames(styles.authWrapper)}>
        <div className={classNames(styles.tabsContainer)}>
          <div className={classNames(styles.tabsWrapper)}>
            <Button
              title="SIGN IN"
              onClick={changeTabHandler}
              className={classNames(styles.tabsButton)}
            />
            <Button
              title="SIGN UP"
              onClick={changeTabHandler}
              className={classNames(styles.tabsButton)}
            />
          </div>
        </div>

        <div className={classNames(styles.tabContentWrapper)}>
          {currentTab === "Sign in" ? (
            <div className={classNames(styles.signInWrapper)}>
              <div className={classNames(styles.dividerLeft)}></div>

              {welcomeTextShown && (
                <div className={classNames(styles.welcomeTextWrapper)}>
                  <div className={classNames(styles.welcomeText)}>
                    Your password has been changed!
                  </div>
                </div>
              )}

              <SignInForm handleClick={handleLogin} />
            </div>
          ) : (
            <div className={classNames(styles.signUpWrapper)}>
              <div className={classNames(styles.dividerRight)}></div>

              <SignUpForm handleClick={handleRegister} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
