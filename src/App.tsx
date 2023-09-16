import React, { lazy } from "react";
import { Flex } from "@tonic-ui/react";
import { mockMenu } from "./mockValue/mockValue";

const MenuDemo = lazy(() => import('./components/MenuButton'));

const App = () => {
  return <Flex justifyContent={'center'} alignItems={'center'} minHeight={'100vh'}>
    <MenuDemo data={mockMenu} onSelectItem={(value) => console.log(value)} />
  </Flex >;
};

export default App;