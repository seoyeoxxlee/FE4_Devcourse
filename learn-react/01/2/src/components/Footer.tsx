import styles from "../Footer.module.css";
import classNames from "classnames/bind";

export default function Footer() {
  const cx = classNames.bind(styles);
  const isLoggedin = true;

  return (
    <>
      <footer>
        <p className={cx("red-color", "underline")}> 
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>

        <p className={cx({"red-color": isLoggedin}, "underline")}> 
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
