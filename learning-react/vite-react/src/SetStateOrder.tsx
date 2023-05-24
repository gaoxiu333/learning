import { useEffect, useLayoutEffect, useMemo, useState } from "react"

const setStateOrder = () => {
    console.log('______render start_______')
    const [count, setCount] = useState(0)

    function useEffectDemo() {
        console.log('useEffect')
    }
    useEffect(useEffectDemo, [count])

    function useLayoutEffectDemo() {
        console.log('useLayoutEffect')
    }
    useLayoutEffect(useLayoutEffectDemo, [count])

    function queueMicrotaskDemo() {
        console.log('queueMicrotask')
    }
    queueMicrotask(queueMicrotaskDemo)

    function setTimeoutDemo() {
        console.log('setTimeout')
    }
    setTimeout(setTimeoutDemo, 0)

    function requestIdleCallbackDemo() {
        console.log('requestidleCallback')
    }
    requestIdleCallback(requestIdleCallbackDemo)

    function useMemoDemo() {
        console.log('useMemo')
        return 2
    }
    const num = useMemo(useMemoDemo, [])

    function handleClick() {
        function setTimeoutInOnClick() {
            console.log('setTimeout in onClick')
        }
        setTimeout(setTimeoutInOnClick)
        function queueMicrotaskInOnClick() {
            console.log('queueMicrotask in onClick')
        }
        queueMicrotask(queueMicrotaskInOnClick)
        function setCountFun(count: any) {
            console.log('setCount')
            return count + 1
        }
        setCount(setCountFun)
    }
    console.log('____render end_____')

    return (
        <div>
            <div onClick={handleClick}>{count}</div>
        </div>
    )

}

export default setStateOrder