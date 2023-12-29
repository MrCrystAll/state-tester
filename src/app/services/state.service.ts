// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
// import { CarState } from '../store/store.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class StateService {

//   constructor(private api: ApiService) { 
//   }

//   private _call(){
//     return this.api.callState()
//   }

//   async getCars(): Promise<{[key: string]: CarState} | undefined> { 
//     return this._call().then((value: any) => {
      

//       let received_cars = value.data.cars;
//       let cars: {[key: string]: CarState} = {}

//       for(let key in received_cars){
        
//         let value = received_cars[key];
//         console.log(value._inverted_physics);
        
//         cars[key] = {
//           airTimeSinceJump: value.air_time_since_jump,
//           autoflipDirection: value.autoflip_direction,
//           autoflipTimer: value.autoflip_timer,
//           ballTouches: value.ball_touches,
//           boostActiveTime: value.boost_active_time,
//           boostAmount: value.boost_amount,
//           bumpVictimId: value.bump_victim_id,
//           demoRespawnTimer: value.demo_respawn_timer,
//           flipTime: value.flip_time,
//           flipTorque: value.flip_torque,
//           handbrake: value.handbrake,
//           hasDoubleJumped: value.has_double_jumped,
//           hasFlipped: value.has_flipped,
//           hasJumped: value.has_jumped,
//           hitboxType: value.hitbox_type,
//           invertedPhysics: undefined,
//           isAutoFlipping: value.is_auto_flipping,
//           isHoldingJump: value.is_holding_jump,
//           isJumping: value.is_jumping,
//           jumpTime: value.jump_time,
//           onGround: value.on_ground,
//           physics: {
//             angularVelocity: value.physics.angular_velocity,
//             eulerAngles: value.physics.euler_angles,
//             linearVelocity: value.physics.linear_velocity,
//             position: value.physics.position,
//             quaternion: value.physics.quaternion,
//             rotationMtx: value.physics.rotation_mtx
//           },
//           supersonicTime: value.supersonic_time,
//           teamNum: value.team_num
//         }

//         if(value._inverted_physics){
//           cars[key].invertedPhysics = {
//             angularVelocity: value._inverted_physics.angular_velocity,
//             eulerAngles: value._inverted_physics.euler_angles,
//             linearVelocity: value._inverted_physics.linear_velocity,
//             position: value._inverted_physics.position,
//             quaternion: value._inverted_physics.quaternion,
//             rotationMtx: value._inverted_physics.rotation_mtx
//           }
//         }
//       }     
      
//       return cars
//     }).catch((reason: any) => {
//       console.error("Error on cars retrieval:" + reason);
//       return undefined});
//   }
// }
