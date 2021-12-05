import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFlag = () => {
    /* まどろっこしい書き方 */
    // if (faceShowFlag === true) {
    //   setFaceShowFlag(false);
    // } else {
    //   setFaceShowFlag(true);
    // }

    /* faceShowFlagは初期値が　trueなので、Not演算子を使えば簡潔にかける */
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    // 0の時は顔文字を表示しない(0より大きい時だけ表示)
    if (num > 0) {
      if (num % 3 === 0) {
        // 左辺(faceShowFlag)がfalseの時だけ右辺(setFaceShowをtrueに)する処理を実行
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // 左辺(faceShowFlag)がtrueの時だけ右辺(setFaceShowをfalseに)する処理を実行
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;
