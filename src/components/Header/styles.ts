import styled from 'styled-components'

import UserIcon from '../../assets/user.svg'

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #fff;
  top: 0px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  & .logo {
    padding: 0.5rem 0;
  }

  & .login {
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;

    &::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url(${UserIcon}) no-repeat center;
      margin-left: 0.5rem;
      position: relative;
      top: -1px;
    }
  }
`
