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

  const div = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    loop: true,
    delay: 1500,
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
    <animated.div
      style={{
        ...div,
        minHeight: "100vh",
        backgroundColor: "#ff6d8d",
      }}
    >
      <animated.h1 style={{ ...fade }}>Hello</animated.h1>
      <animated.h2 style={{ ...lateFade, ...styles }}>World</animated.h2>
    </animated.div>
  );
};

export default App;
