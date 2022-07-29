import styled from 'styled-components'

const MobileNavbarWrapper = styled.nav`
  @media (min-width: 1120px) {
    display: none;
  }

  .container {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: var(--shadow-2);
    padding: 0.7rem 1rem;
  }
  .container-header {
    display: flex;
    justify-content: space-between;

    .menu-icon {
      font-size: 2rem;
    }
  }
  .links {
    transition: var(--transition);
    height: 0px;
    transition: var(--transition);
    background-color: var(--white);
    overflow: hidden;
    a {
      display: block;
    }
  }
`
export default MobileNavbarWrapper
