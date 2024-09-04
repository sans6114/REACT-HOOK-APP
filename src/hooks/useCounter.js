import {
  useEffect,
  useState,
} from 'react';

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)
    const [enabled, setEnabled] = useState(false)

    const isEnabled = () => {
        counter === 1 ? setEnabled(true) : setEnabled(false)
    }
    useEffect(() => {
        isEnabled()
    }, [counter])

    const onIncrement = (value = 1) => {
        if (counter >= 1) {
            setCounter(counter + value);
        }
    };

    const onDecrement = (value = 1) => {
        if (counter > 1) {
            setCounter(counter - value);
        }
    };

    const onReset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        onIncrement,
        onDecrement,
        onReset,
        enabled
    }
}