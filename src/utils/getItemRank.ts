import type { IPlayer } from "../types/game.type";

export const getItemRank = (name: string, items: IPlayer[]): number | null => {
  const sortedItems = [...items].sort((a, b) => b.points - a.points);

  let rank = 0;
  let lastCounter = -Infinity;

  for (let i = 0; i < sortedItems.length; i++) {
    const currentItem = sortedItems[i];

    if (currentItem.points < lastCounter) {
      rank = i + 1;
    } else if (i === 0) {
      rank = 1;
    }
    lastCounter = currentItem.points;

    if (currentItem.name === name && currentItem.points > 0) {
      return rank;
    }
  }

  return null;
};
