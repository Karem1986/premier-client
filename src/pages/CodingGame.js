import ExerciseCard from "../components/ExerciseCard";

import React, { useState, useEffect } from "react";
import { CodingGame } from "../store/codinggame/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectExercise } from "../store/codinggame/selector";
import { Box, Grid, Paper } from "@material-ui/core";
import AnswerCard from "../components/AnswerCard";

export default function CodingExercises() {
  const dispatch = useDispatch();
  const exercises = useSelector(selectExercise);
  console.log("dispatch codinggame");
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(1);
  const [gameOver, setGameOver] = useState(true);
  const TOTAL_QUESTIONS = 1;
  //Dispatch the action for coding game:

  useEffect(() => {
    dispatch(CodingGame());
  }, []);

  const startGame = async () => {
    setQuestions(exercises);
  };

  console.log(questions);

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setNumber(nextQ);
    } else {
      setGameOver(true);
    }
  };

  return (
    <Box mt={10} style={{ fontSize: 20 }}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <h1
            style={{
              maxWidth: 300,
              fontSize: 50,
            }}
          >
            Level #1
          </h1>
        </Grid>
      </Grid>
      {exercises.map((exercise) => {
        return (
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Paper>
                <ExerciseCard exercise={exercise} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <AnswerCard />
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
