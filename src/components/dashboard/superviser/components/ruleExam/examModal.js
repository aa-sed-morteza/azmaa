import styled from "styled-components";
import data from "../../../../../data/test.json";
import { useEffect, useState } from "react";

export default function ExamModal({ visible, onClose }) {
  console.log(data);
  const [answers, setAnswers] = useState([]);
  const [randomlyArrangedArray, setRandomlyArrangedArray] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // Generate an array with numbers from 0 to 19
    const originalArray = Array.from({ length: 20 }, (_, index) => index);

    // Shuffle the array randomly
    setRandomlyArrangedArray([...shuffleArray([...originalArray])]);
  }, []);

  const questions = [];

  for (const item of randomlyArrangedArray) {
    questions.push(data.questions[item]);
  }

  console.log(questions);

  const handleTestResult = () => {
    let result = 0;

    for (let i = 0; i < 19; i++) {
      if (questions[i].correctAnswer === answers[i]) {
        result++;
      }
    }

    console.log(result);
    setScore(result);
  };

  const questionsElement = questions.map((item, index) => (
    <QuestionBox key={item.question}>
      <h3>{`${index} - ${item.question}`}</h3>
      <div>
        {item.answers.map((answer, i) => (
          <p>
            <input
              checked={answers[index] === i + 1}
              onClick={() => {
                const list = [...answers];
                list[index] = i + 1;
                setAnswers([...list]);
              }}
              type="checkbox"
            />{" "}
            {answer.desc}
          </p>
        ))}
      </div>
    </QuestionBox>
  ));

  console.log(answers);
  console.log(questions);

  return (
    <ModalContainer visible={visible} onClick={onClose}>
      <ModalBox
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>در پاسخ به سوالات زیر گزینه صحیح را انتخاب کنید:</h2>
        <div>{questionsElement}</div>
        <TestButton onClick={handleTestResult}>ثبت و مشاهده نتیجه</TestButton>
        <p>{score}</p>
      </ModalBox>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  background: #fff;
  border-radius: 5px;
  padding: 30px 60px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;

  & > h3 {
    margin: 0 0 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    & > p {
      margin: 10px 0;
    }
  }
`;

const TestButton = styled.button`
  font-size: 12px;
  color: #fff;
  height: 40px;
  flex-shrink: 0;
  width: fit-content;
  border: none;
  padding: 0 30px;
  background-color: rgb(255, 170, 0);
  border-radius: 3px;
  margin: 20px auto;
  cursor: pointer;
`;
