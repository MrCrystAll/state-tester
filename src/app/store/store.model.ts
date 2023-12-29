export class RewardResult {
  names: string[] = []
  values: number[] = []
}

class Matrix3x3{
  0: number[] = [0, 0, 0];
  1: number[] = [0, 0, 0];
  2: number[] = [0, 0, 0];
}

export class PhysicsState{
  eulerAngles: number[] | undefined;
  quaternion: number[] | undefined;
  rotationMtx: Matrix3x3 = new Matrix3x3();
  position: number[] = [0, 0, 0];
  linearVelocity: number[] = [0, 0, 0];
  angularVelocity: number[] = [0, 0, 0];
}

export class ConfigState{
  boostConsumption: number = 0;
  dodgeDeadzone: number = 0;
  gravity: number = 0;
}

export class CarState {
  invertedPhysics: PhysicsState | undefined = new PhysicsState();
  airTimeSinceJump: number = 0;
  autoflipDirection: number = 0;
  autoflipTimer: number = 0;
  ballTouches: number = 0;
  boostActiveTime: number = 0;
  boostAmount: number = 0;
  bumpVictimId: number | undefined;
  demoRespawnTimer: number = 0;
  flipTime: number = 0;
  flipTorque: number[] = [0, 0, 0];
  handbrake: number = 0;
  hasDoubleJumped: boolean = false;
  hasFlipped: boolean = false;
  hasJumped: boolean = false;
  hitboxType: number = 0;
  isAutoFlipping: boolean = false;
  isHoldingJump: boolean = false;
  isJumping: boolean = false;
  jumpTime: number = 0;
  onGround: boolean = false;
  physics: PhysicsState = new PhysicsState();
  supersonicTime: number = 0;
  teamNum: number = 0;
}

export class GameState {
  //Lots of things
  invertedBall: PhysicsState | undefined  = new PhysicsState();
  invertedBoostPadTimers: number[] = [];
  ball: PhysicsState = new PhysicsState();
  boostPadTimers: number[] = [];
  cars: {[key: string]: CarState} = {};
  config: ConfigState = new ConfigState();
  goalScored: boolean = false;
  tickCount: number = 0;
}

export class StateModel{
  actionModel: ActionModel = new ActionModel()
  rewards: RewardResult[] = []
  state: GameState = new GameState()
  simulator: any = {}
}

export class ActionModel{
  actions: number[] = [1, 0, 0, 0, 0, 0, 0, 0]
}
