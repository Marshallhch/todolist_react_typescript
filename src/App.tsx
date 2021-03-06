import React, { useState } from 'react';
import Styled from 'styled-components';
import { Button, Input, ToDoItem } from 'Component';

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
  flex-direction:column;
  padding:20px;
  border-radius:8px;
  box-shadow:5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = Styled.div`
  display:flex;
`;

const ToDoListConatiner = Styled.div`
  min-width:350px;
  height:400px;
  overflow-y:scroll;
  border:1px solid #bdbdbd;
  margin-bottom:20px;
`;

function App() {
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo('');
    }
  };

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };

  return (
    <Container>
      <Contents>
        <ToDoListConatiner>
          {toDoList.map((item, index) => (
            <ToDoItem key={item} label={item} onDelete={() => deleteToDo(index)} />
          ))}
        </ToDoListConatiner>
        <InputContainer>
          <Input
            placeholder="할 일을 추가해 주세요"
            value={toDo}
            onChange={(text) => setToDo(text)}
          />
          <Button label="추가" onClick={addToDo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;
