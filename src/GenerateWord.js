// import React, { useState, useEffect } from "react";
import React from "react";
import useRequest from "./services/useRequest";

export default function GenerateWords(difficultyChosen) {
  console.log("in GenerateWords");
  let allWords = [];
  useRequest(difficultyChosen).map((item) => {
    allWords.push(item.word);
  });

  return (
    <section className="word-card">
      <h2>{}</h2>
    </section>
  );
}
