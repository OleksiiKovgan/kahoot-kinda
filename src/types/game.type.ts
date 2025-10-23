import type { IQuestion } from "./questions.type";

export interface IPlayer {
  name: string;
  points: number;
}

export interface IRound {
  question: IQuestion;
  answersOfPlayers: { [key: string]: string }; //key - player name, value - answer they selected
}
