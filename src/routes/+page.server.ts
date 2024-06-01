import { hello, cpu_count, now } from "../rustscript/index";


export function load() {
    return { welcome: hello("lurple"), cpu_count, now: now() }
}