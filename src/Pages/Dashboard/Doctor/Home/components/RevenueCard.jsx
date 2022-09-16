import styled from "styled-components";
import { ReactComponent as CashMonth } from "../../../../../Images/CardIcon/cash_month.svg";
import { ReactComponent as CashYear } from "../../../../../Images/CardIcon/cash_year.svg";

export const RevenueCard = () => {
  return (
    <Container>
      <Header>Revenue</Header>
      <CardContainer>
        <Card>
          <CashMonth width={"4rem"} height={"4rem"} />
          <h1>This Month</h1>
          <h2>N 50,000</h2>
        </Card>
        <Card color="rgba(27, 191, 0, 0.4)">
          <CashYear width={"4rem"} height={"4rem"} />
          <h1>This Year</h1>
          <h2>N 500,000</h2>
        </Card>
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  box-shadow: 0px 4.755056381225586px 4.755056381225586px 0px
    rgba(0, 0, 255, 0.3);
  background-color: rgba(236, 242, 246, 1);
  border: 1px solid black;
  border-radius: 1.2rem;
  box-sizing: border-box;
  padding: 1.5rem 2rem;
`;

const Header = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Card = styled.div`
  background-color: ${(props) => (props.color ? props.color : "white")};
  height: 25rem;
  width: 20rem;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 1.4rem;
    margin: 5rem 0;
    color: rgba(0, 0, 0, 0.8);
  }
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 1.4rem;
  }
`;
