const cache = {};
function fib(n) {
  // If result already in cache, return it
  if (cache[n]) return cache[n];

  // Base case for Fibonacci
  if (n <= 1) return n;

  // Calculate and store in cache for next time
  return (cache[n] = fib(n - 1) + fib(n - 2));
}

// Explanation:
// This function calculates the nth Fibonacci number.
// It uses an object called `cache` to store results of previous calculations.
// If the result is already available in `cache`, it returns that instead of calculating again.
// This saves time and avoids repeating the same work -- which is the heart of memoization.

function fib(n) {
  // Base case for Fibonacci
  if (n <= 1) {
    return n;
  }

  // Calculate recursively
  // without storing results
  return fib(n - 1) + fib(n - 2);
}

React.memo(({ value }) => {
  return <Component />;
});


const Child = React.memo(({ value }) => {
  console.log('Rendering Child');
  return <Text>{value}</Text>;
});

const memoizedValue = useMemo(() => expensiveFunction(input), [input]);

const sortedData = useMemo(() => {
  return data.sort((a, b) => a.name.localeCompare(b.name));
}, [data]);

const memoizedCallback = useCallback(
  () => {
    doSomething();
  },
  [dependencies]
);

const Parent = () => {
  const handleClick = () => console.log('Clicked');
  return <Child onClick={handleClick} />;
};

const memoizedClick = useCallback(() => console.log('Clicked'), []);

<Child onPress={() => console.log("hi")} />