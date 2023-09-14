import { Flex, MenuItem, Icon, MenuDivider, Text, MenuList, MenuToggle, MenuToggleIcon, Menu, Box } from "@tonic-ui/react"
import React from "react"

export type MyMenuData = {
    icon: string,
    text: string
}

type MyMenuProps = {
    data: MyMenuData[]
}
const MyMenu = ({ data }: MyMenuProps) => {
    return (<Menu>
        <MenuToggle
            backgroundColor="gray:50"
            border="none"
            color="white:primary"
            cursor="pointer"
            display="inline-flex"
            px="1x"
            py="1x"
            borderRadius="circle">

            <Icon icon="user-team" />

        </MenuToggle>
        <MenuList width="48x" backgroundColor="gray:60">
            {data.map((it, index) => {
                return <MenuItem key={index} color="white:primary">
                    <Icon icon={it.icon} />
                    <Text marginLeft="3x" style={{ marginLeft: "10px" }}>{it.text}</Text>
                </MenuItem>
            })}
        </MenuList>
    </Menu>)
}

export default MyMenu