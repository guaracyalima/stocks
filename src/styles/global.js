import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: boder-box;
}

body{
  background: #ffff;
  -webkit-font-smoothing: antialiased !important;
}

body, input, buttom {
  font: 14px 'Roboto', sans-serif;
;
}

#root {
  mar-width: 1020px;
  margin0 auto;
  apdding: 0 20px 50px;
}

button  {
  cursor: pointer;
}
`;
