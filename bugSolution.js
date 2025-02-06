```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setCount(count + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function: remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```