import styled from "styled-components";

export const ProgressBar = ({ steps, step }) => {
  return (
    <Container>
      {steps?.map((label, index) => {
        if (index + 1 !== steps.length) {
          return (
            <section key={index}>
              <Circle step={step} index={index + 1}></Circle>
              <Bar />
            </section>
          );
        } else {
          return null;
        }
      })}
      <LastCircle step={step} steps={steps}></LastCircle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    display: flex;
    align-items: center;
  }
`;

const Circle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) =>
    props.step >= props.index
      ? "rgba(0, 0, 255, 1)"
      : "rgba(217, 217, 217, 1)"};
`;
const Bar = styled.div`
  height: 0;
  width: 4.5rem;
  border-bottom: 1px solid rgba(0, 0, 255, 1);
`;
const LastCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) =>
    props.step === props.steps.length
      ? "rgba(0, 0, 255, 1)"
      : "rgba(217, 217, 217, 1)"};
`;
