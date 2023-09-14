import React from "react";
import MyMenu, { MyMenuData } from "./components/MyMenu";
import { Flex } from "@tonic-ui/react";

const App = () => {

  const mockMenu: MyMenuData[] = [{ icon: 'settings', text: 'Settings' }, { icon: 'user-team', text: "Accounts" }, { icon: 'lock', text: 'Privacy control' }]


  return <Flex justifyContent={'center'} alignItems={'center'} >
    < h1 > Hello</h1 >
    <MyMenu data={mockMenu} />
  </Flex >;
};

export default App;