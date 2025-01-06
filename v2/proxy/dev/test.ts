import { User, UserProxy } from "./class";

let user = new User();
let proxy = new UserProxy(user);

proxy.login("pass");
proxy.login("pass2");
proxy.logout();
