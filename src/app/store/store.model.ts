export class RewardResult {
  names: string[] = []
  values: number[] = []
}

export class GameState {
  //Lots of things
}

export class StateModel{
  actions: number[] = [1, 0, 0, 0, 0, 0, 0, 0]
  rewards: RewardResult[] = []
  state: GameState = new GameState()
  simulator: any = {}
}
