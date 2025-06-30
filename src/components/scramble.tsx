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
    speed: 0.8,
    step: 1,
    scramble: 20,
  });
  return <span ref={ref} />;
};

export default Scramble;
