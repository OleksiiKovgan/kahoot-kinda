import type { RootState } from "../store";

const getPlayers = (state: RootState) => state.game.players;

const getPlayerAnswering = (state: RootState) => state.game.playerAnswering;

const getRound = (state: RootState) => state.game.round;

const getPassedRounds = (state: RootState) => state.game.passedRounds;

export { getPlayers, getPlayerAnswering, getRound, getPassedRounds };
