import { useCallback, useEffect, useState } from "react"

const Banner = () => {
    return (
        <div><CountDown  start={20} /></div>
    )
}
export default Banner

const useCountDown = (start: any) => {
    const [timeLeft, changeTimeLLeft] = useState(start)
    useEffect(() => {
        if(timeLeft !== 0){
            setTimeout(() => {
                changeTimeLLeft(timeLeft - 1)
            }, 1000);
        }
    }, [timeLeft])
    const reset = useCallback(() => {
        changeTimeLLeft(start)
    },[])
    return { timeLeft, reset }
}

function CountDown({start}: any) {
    const { timeLeft, reset } = useCountDown(start)

    return <>
        <div>{timeLeft} <span onClick={reset}>重试</span></div>
    </>
}
