import React, { useMemo } from "react";
import MyMenu, { MyMenuData } from "./components/MyMenu";
import { Flex } from "@tonic-ui/react";
import { mockMenu } from "./mockValue/mockValue";

const App = () => {
  return <Flex justifyContent={'center'} alignItems={'center'} minHeight={'100vh'}>
    <MyMenu data={mockMenu} onSelectItem={(value) => console.log(value)} />
  </Flex >;
};

export default App;