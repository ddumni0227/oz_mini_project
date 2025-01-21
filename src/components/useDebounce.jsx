import { useState, useEffect } from "react";

//디바운스 훅
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  //디바운스된 값을 저장하는 상태 

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value); //일정시간이 지나면 값 업데이트
    }, delay);

    return () => {
      clearTimeout(handler); // 기존 타이머 제거
    };
  }, [value, delay]); // value 또는 delay가 변경되면 useEffect 재실행

  return debouncedValue; //디바운스된 값 반환
};

export default useDebounce;
