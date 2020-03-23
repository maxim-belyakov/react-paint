import React, { useState, useEffect, useRef, useCallback, useMemo, useReducer } from 'react'
import randomColor from 'randomcolor'

export default function Playground() {
  const initialState = {count: 0};

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    );
}

const Calculate = React.memo(({ cb, num }) => {
  cb(num)
  const renderCount = useRef(1)
  return <div>{renderCount.current++}</div>
})