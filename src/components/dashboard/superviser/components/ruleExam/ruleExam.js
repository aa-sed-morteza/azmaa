import { useState } from "react";
import styled from "styled-components";
import ExamModal from "./examModal";

export default function RuleExam() {
  const [testModal, setTestModal] = useState(false);
  return (
    <Section>
      <TitleBox>
        <h2>آزمون قانون اساسی</h2>
        <TestButton
          onClick={() => {
            setTestModal(true);
          }}
        >
          دادن آزمون
        </TestButton>
      </TitleBox>

      <ExamModal
        visible={testModal}
        onClose={() => {
          setTestModal(false);
        }}
      />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  width: 80%;
  height: 60px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h2 {
    margin: 0;
  }
`;

const TestButton = styled.button`
  width: fit-content;
  height: 40px;
  background-color: rgb(255, 170, 0);
  border-radius: 3px;
  padding: 0 30px;
  border: none;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
