import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPlayer, IRound } from "../../types/game.type";
import type { IQuestion } from "../../types/questions.type";

interface IGameState {
  players: IPlayer[];
  playerAnswering: IPlayer | null;
  round: IRound | null;
  passedRounds: IRound[];
}

const initialState: IGameState = {
  players: [],
  playerAnswering: null,
  round: null,
  passedRounds: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetPlayers: (state: IGameState) => {
      state.players = initialState.players;
    },
    addPlayer: (state: IGameState, action: PayloadAction<string>) => {
      if (!state.players.find((player) => player.name === action.payload))
        state.players.push({ name: action.payload, points: 0 });
    },
    deletePlayer: (state: IGameState, action: PayloadAction<string>) => {
      state.players = state.players.filter(
        (player) => player.name !== action.payload
      );
    },
    incrementPlayersPoints: (
      state: IGameState,
      action: PayloadAction<string>
    ) => {
      const player = state.players.find(
        (player) => player.name === action.payload
      );

      if (player) player.points++;
    },
    setPlayerAnswering: (state: IGameState, action: PayloadAction<IPlayer>) => {
      state.playerAnswering = action.payload;
    },
    savePlayersAnswer: (
      state: IGameState,
      action: PayloadAction<{ playerName: string; answer: string }>
    ) => {
      const { playerName, answer } = action.payload;

      if (state.round?.answersOfPlayers) {
        state.round.answersOfPlayers[playerName] = answer;
      }
    },
    startRound: (state: IGameState, action: PayloadAction<IQuestion>) => {
      state.round = { question: action.payload, answersOfPlayers: {} };
    },
    endRound: (state: IGameState) => {
      if (state.round?.answersOfPlayers) {
        Object.entries(state.round?.answersOfPlayers).forEach(
          ([playerName, answer]) => {
            if (answer === state.round?.question.correctAnswer) {
              const player = state.players.find(
                (player) => player.name === playerName
              );

              if (player) player.points++;
            }
          }
        );
        state.passedRounds.push(state.round);
      }
    },
    resetPlayersScore: (state: IGameState) => {
      state.players.map((player) => (player.points = 0));
    },
  },
});

export const {
  resetPlayers,
  addPlayer,
  deletePlayer,
  setPlayerAnswering,
  savePlayersAnswer,
  startRound,
  endRound,
  resetPlayersScore,
} = gameSlice.actions;
export default gameSlice.reducer;
