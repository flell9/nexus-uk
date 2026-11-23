// Выбирает следующее слово из активной сотни с учётом уровня освоения (0..10)
export function pickNextCard(activePool, progressMap, lastWordId) {
  if (!activePool || activePool.length === 0) return null;

  // Фильтруем ещё не добитые до 10/10 слова
  const unmastered = activePool.filter(w => (progressMap[w.id] || 0) < 10);
  if (unmastered.length === 0) return null;

  // Стараемся не показывать то же самое слово дважды подряд, если есть выбор
  const candidates = unmastered.length > 1
    ? unmastered.filter(w => w.id !== lastWordId)
    : unmastered;

  // Считаем вес (вероятность выпадения):
  // Чем ниже уровень (0..9), тем выше вес. На 0 уровне вес = 100, на 9 уровне вес = 5.
  const weighted = candidates.map(word => {
    const level = progressMap[word.id] || 0;
    const weight = Math.max(5, Math.pow(10 - level, 2));
    return { word, weight };
  });

  const totalWeight = weighted.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const item of weighted) {
    if (random < item.weight) {
      return item.word;
    }
    random -= item.weight;
  }

  return candidates[0];
}
