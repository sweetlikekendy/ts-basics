type MyFlexibleDogInfo = {
  name: string
  [key: string]: string | number
}

const dog1: MyFlexibleDogInfo = {
  name: "Bob",
  breed: "Golden",
  age: 1,
}

interface DogInfo {
  name: string
  age: number
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: null
}

type DogInfoOptions = OptionsFlags<DogInfo>

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void
}

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs to be implemented"
}

const lg: DogInfo = {
  name: "LG",
  age: 3,
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
})
