import React from 'react';
import styled from "styled-components";
import ChannelList from "./Components/ChannelList";

function App() {
  return (
    <MainFrame>
      <ChannelList></ChannelList>
    </MainFrame>
  );
}

const MainFrame = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`;

export default App;
