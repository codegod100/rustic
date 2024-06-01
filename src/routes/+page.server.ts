import { hello } from "../rustscript/index";

export function load() {
    return { welcome: hello() }
}