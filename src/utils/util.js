export function throttle(fn, wait, mustRun) {
  let timeout
  let startTime = new Date()
  return function tt() {
    let context = this
    let args = arguments
    let curTime = new Date()

    clearTimeout(timeout)
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
        fn.apply(context, args)
        startTime = curTime
        // 没达到触发间隔，重新设定定时器
    } else {
        timeout = setTimeout(fn, wait)
    }
  }
}