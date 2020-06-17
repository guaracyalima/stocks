import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;

  img {
    width: 49px;
  height: 50px;
  margin-left: 2em;
}
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  tansition: opacity 0.2s;


  &:hover {
    opacity: 0.7;
  }


  }
  div {
    text-align: center;
    margin-right: 10px;

    strong {
      display: in-line;
      color: #000;
    }


  }
`;
