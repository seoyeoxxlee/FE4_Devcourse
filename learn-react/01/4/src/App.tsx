import { css } from '@emotion/css'
import { hero } from './css/styles.css';

export default function App () {
  return (
    <>
      <h1
        className={css`
        color: red;
        background-color: hotpink;
        `}
      >
        emtion
      </h1>
      <h1 className={hero}>Vanilla Extract</h1>
    </>
  );
}

