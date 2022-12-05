function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key])
}

const data = [
  {
    name: "Bob",
    pay: 34,
  },
  { name: "Jane", pay: 36 },
]

console.log(pluck(data, "name"))
console.log(pluck(data, "pay"))

interface BaseEvent {
  time: string
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string }
  checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data])
}

const eventData: EventMap = {
  addToCart: {
    time: "11",
    user: "bob",
    quantity: 3,
    productID: "3",
  },
  checkout: {
    time: "30",
    user: "jane",
  },
}

sendEvent("addToCart", {
  time: "12",
  user: "bob",
  quantity: 30,
  productID: "12",
})
sendEvent("checkout", { time: "11", user: "jane" })
