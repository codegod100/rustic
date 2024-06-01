import { produce } from 'sveltekit-sse'
import { hello, cpu_count, now } from "../../rustscript/index";
function delay(milliseconds: number) {
    return new Promise(function run(resolve) {
        setTimeout(resolve, milliseconds)
    })
}
export function POST() {
    return produce(async function start({ emit }) {
        while (true) {
            const { error } = emit('message', now().toString())
            if (error) {
                return
            }
            await delay(1000)
        }
    })
}