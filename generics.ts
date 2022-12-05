function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial
  return [() => val, (v: T) => (val = v)]
}

const [st1getter, st1setter] = simpleState(10)
console.log(st1getter())
st1setter(11)
console.log(st1getter())

const [st2getter, st2setter] = simpleState<number | null>(null)
console.log(st2getter())
st2setter(100)
console.log(st2getter())

interface Rank<RankItem> {
  item: RankItem
  rank: number
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }))

  console.log(ranks)

  ranks.sort((a, b) => b.rank - a.rank)

  return ranks.map((rank) => rank.item)
}

interface Pokemon {
  name: string
  hp: number
}

const pokemon: Pokemon[] = [
  { name: "Ivysaur", hp: 30 },
  { name: "Bulbasaur", hp: 20 },
  {
    name: "Venasaur",
    hp: 50,
  },
]

const ranks = ranker(pokemon, ({ hp }) => hp)

console.log(ranks)
