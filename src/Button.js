import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <button className={styles.btn}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};


// index에서 가져오게 하기 위해서
export default Button;