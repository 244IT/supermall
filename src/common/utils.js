/* 函数防抖 */
export function debounce(fun, delay) {
    console.log('防抖')
    let timer = null
    return function(...args) {
      if(timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fun.apply(this, args)
      }, delay)
    }
}