import styled from "styled-components";
import { designVariables } from "./styles/globalVariables";
import { Landing } from "./views";

export const App = () => {
  return (
    <PageContainer>
      <Landing />
    </PageContainer>
  );
};
const PageContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  background: ${designVariables.colorBodyBg};
  overflow: hidden;
`;
