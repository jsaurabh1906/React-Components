const hooksReference = [
  {
    id: 1,
    title: "useState",
    description:
      "Allows functional components to manage state. Returns a stateful value and a function to update it.",
    syntax: "const [state, setState] = useState(initialState)",
    code: `const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    );
  }`,
  },
  {
    id: 2,
    title: "useEffect",
    description:
      "Handles side effects in functional components. Used for data fetching, subscriptions, or DOM manipulations.",
    syntax: "useEffect(() => { // effect code }, [dependencies])",
    code: `useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Only re-run if count changes`,
  },
  {
    id: 3,
    title: "useContext",
    description:
      "Subscribes to React context without introducing nesting. Allows consuming context values.",
    syntax: "const value = useContext(MyContext)",
    code: `const ThemeContext = React.createContext('light');
  const Component = () => {
    const theme = useContext(ThemeContext);
    return <div>Current theme: {theme}</div>;
  }`,
  },
  {
    id: 4,
    title: "useRef",
    description:
      "Creates a mutable ref object that persists for the full lifetime of the component.",
    syntax: "const refContainer = useRef(initialValue)",
    code: `const TextInputWithFocusButton = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus Input</button>
      </>
    );
  }`,
  },
  {
    id: 5,
    title: "useMemo",
    description:
      "Memoizes expensive computations to optimize performance by preventing unnecessary recalculations.",
    syntax:
      "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])",
    code: `const memoizedValue = useMemo(() => {
    return computeExpensiveValue(dependencyValue);
  }, [dependencyValue]);`,
  },
  {
    id: 6,
    title: "useCallback",
    description:
      "Returns a memoized version of the callback that only changes if one of the dependencies has changed.",
    syntax: "const memoizedCallback = useCallback(fn, dependencies)",
    code: `const memoizedCallback = useCallback(
    () => {
      doSomething(dependencyValue);
    },
    [dependencyValue],
  );`,
  },
  {
    id: 7,
    title: "useReducer",
    description:
      "Manages complex state logic in components using a reducer function, similar to Redux.",
    syntax: "const [state, dispatch] = useReducer(reducer, initialState)",
    code: `const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        default:
          return state;
      }
    },
    {count: 0}
  );`,
  },
  {
    id: 8,
    title: "useLayoutEffect",
    description:
      "Similar to useEffect, but fires synchronously after all DOM mutations. Use for DOM measurements.",
    syntax: "useLayoutEffect(() => { // effect code }, [dependencies])",
    code: `useLayoutEffect(() => {
    const rect = divRef.current.getBoundingClientRect();
    setDimensions(rect);
  }, []);`,
  },
];

export default hooksReference;
