import React from "react"
import { MenuItem, Icon, Text, MenuList, MenuToggle, Menu } from "@tonic-ui/react"


export type MyMenuData = {
    icon: string,
    text: string,
    value: string
}

type MyMenuProps = {
    data: MyMenuData[],
    onSelectItem?: (value: string) => void
}
const MyMenu = ({ data, onSelectItem = () => { } }: MyMenuProps) => {
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
                // assume the list won't be changed, index as key
                return <MenuItem key={index} color="white:primary" onClick={() => onSelectItem(it.value)}>
                    <Icon icon={it.icon} />
                    <Text marginLeft="3x" style={{ marginLeft: "10px" }}>{it.text}</Text>
                </MenuItem>
            })}
        </MenuList>
    </Menu>)
}

export default MyMenu