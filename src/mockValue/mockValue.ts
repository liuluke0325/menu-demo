import { MyMenuData } from "../components/MyMenu";

export const mockMenu: MyMenuData[] = [{ icon: 'settings', text: 'Settings', value: 'setting' }, { icon: 'user-team', text: "Accounts", value: "account" }, { icon: 'lock', text: 'Privacy control', value: "value" }]

// export const mockMenu: MyMenuData[] = (() => {
//     const val: MyMenuData[] = [];
//     for (let i = 0; i < 100; i++) {
//         val.push(...mockValue);
//     }
//     return val;
// })()