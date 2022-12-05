interface House {
  name: string
  planets: string | string[]
}

interface HouseWithID extends House {
  id?: number
}

export type filterFn = (house: House) => boolean

function findHouses(houses: string): HouseWithID[]
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[]
function findHouses(houses: House[]): HouseWithID[]
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[]
function findHouses(
  input: string | HouseWithID[],
  filter?: filterFn
): HouseWithID[] {
  const houses = typeof input === "string" ? JSON.parse(input) : input

  return (filter ? houses.filter(filter) : houses).map((house: House) => ({
    id: houses.indexOf(house),
    ...house,
  }))
}

import houses from "./houses.json"

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
)
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"))
