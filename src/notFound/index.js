import { Link } from "react-router-dom";
import styled from "styled-components";


//Not Found page 
export default function NotFound() {
  return (
    <Container>
      <h1>صفحه مورد نظر یافت نشد</h1>
      <p>از طریق پیوند های زیر به بخش مورد نظر بروید</p>
      <Link to="/">صفحه اصلی</Link>
      <Link to="/blog">بلاگ</Link>
      <Link to="/about-me">درباره ما</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  gap: 10px;
  p,
  h1 {
    margin: 0;
  }
`;
