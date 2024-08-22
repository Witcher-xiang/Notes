function MyApp() {
  const $ = _c(7);
  const [second, setSecond] = useState(0);
  let t0;
  if ($[0] !== second) {
    t0 = () => {
      setSecond(second + 1);
    };
    $[0] = second;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const addTime = t0;
  let t1;
  let t2;
  if ($[2] !== addTime) {
    t1 = () => {
      const timer = setInterval(addTime, 1000);
      return () => clearInterval(timer);
    };
    t2 = [addTime];
    $[2] = addTime;
    $[3] = t1;
    $[4] = t2;
  } else {
    t1 = $[3];
    t2 = $[4];
  }
  useEffect(t1, t2);
  let t3;
  if ($[5] !== second) {
    t3 = (
      <div>
        <h1> 吴彦祖已出现{second}秒 </h1>
      </div>
    );
    $[5] = second;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
}
