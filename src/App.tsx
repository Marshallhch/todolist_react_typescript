import React from 'react';
import Styled from 'styled-components';
import { Button, Input } from 'Component';

const Container = Styled.div`
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-contents:center;
  flex-direction:column;
`;

const Contents = Styled.div`
  display:flex;
  background-color:#ffffff;
  _flex-direction:column;
  padding:20px;
  border-radius:8px;
  box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = Styled.div`
  display:flex;
`;

function App() {
  return (
    <Container>
      <Contents>
        <InputContainer>
          <Input placeholder="할 일을 추가해 주세요" />
        </InputContainer>
        <Button label="추가" onClick={() => alert('추가')} />
      </Contents>
    </Container>
  );
}

export default App;
