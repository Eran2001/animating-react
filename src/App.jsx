import { useSpring, animated } from "@react-spring/web";

const App = () => {
  const fade = useSpring({
    from: {
      x: -100,
      opacity: 0,
    },
    to: {
      x: 50,
      opacity: 1,
    },
    delay: 1000,
  });

  const lateFade = useSpring({
    from: {
      x: -100,
    },
    to: {
      x: 50,
    },
    delay: 2000,
  });

  const styles = useSpring({
    marginTop: "-0.5rem",
  });

  return (
    <div>
      <animated.h1 style={{ ...fade }}>Hello</animated.h1>
      <animated.h2 style={{ ...lateFade, ...styles }}>World</animated.h2>
    </div>
  );
};

export default App;
