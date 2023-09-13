import styled from "styled-components";
import { clearFilterForAnyData } from "../../dataFunctions/publicDataFunctions";

export default function ClearFilterButton() {
  return (
    <Button
      onClick={() => {
        clearFilterForAnyData();
      }}
    >
      حذف فیلتر{" "}
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 10%;
  right: 15%;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: rgb(9, 86, 68);
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
`;
