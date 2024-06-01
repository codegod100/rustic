use chrono::prelude::*;
use neon::{prelude::*, types::JsDate};

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    let val: Handle<JsString> = cx.argument(0)?;
    let out = format!("this string is from rust with arg: {}", val.value(&mut cx));
    Ok(cx.string(out))
}

fn now(mut cx: FunctionContext) -> JsResult<JsDate> {
    let utc: f64 = Utc::now().timestamp() as f64;
    let d = cx.date(utc * 1000.0);
    Ok(d.unwrap())
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("hello", hello)?;
    let cpu_count = cx.number(num_cpus::get() as f64);
    cx.export_value("cpu_count", cpu_count)?;
    cx.export_function("now", now)?;
    Ok(())
}
