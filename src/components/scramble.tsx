"use client";
import React from "react";
import { useScramble } from "use-scramble";

type scambleProps = {
  title: string;
};

const Scramble = (props: scambleProps) => {
  const { ref } = useScramble({
    text: props.title,
    tick: 10,
    speed: 1,
    step: 0.9,
    scramble: 15,
  });
  return <span ref={ref} />;
};

export default Scramble;
