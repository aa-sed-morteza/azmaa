import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function DistrictCard({ data }) {
  const naviagte = useNavigate();
  return (
    <Box
      onClick={() => {
        naviagte(`/districts/${data.id}`);
      }}
    >
      <h3>نام حوزه</h3>
      <p>{data.name}</p>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
  cursor: pointer;

  & > h3,
  p {
    margin: 0;
  }
`;
