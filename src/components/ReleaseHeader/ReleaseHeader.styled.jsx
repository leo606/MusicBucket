import styled from 'styled-components';

const ReleaseHeaderStyled = styled.section`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
  padding: .6em;

  h1 {
    font-size: 3em;
  }

  .cover-container {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    animation : loadImg 1s infinite;
    background: linear-gradient(to right, #eff1f3, #e2e2e2, #eff1f3);
    background-size: 100% 50%;
  }

  @keyframes loadImg {
    0% {
      background-position: -100px 0;
    }
    100% {
      background-position: 100px 0;
    }
  }

  .cover-container img {
    max-width: 100%;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-areas:
      "text-h1 img-r"
      "text-h3 img-r"
      ;

    h1 {
      grid-area: text-h1;
      align-self: end;
    }

    h3 {
      grid-area: text-h3;
    }

    .cover-container {
      grid-area: img-r;
    }
  }
`;

export default ReleaseHeaderStyled;
