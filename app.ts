import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcon} from './starfighters'
import * as _ from 'lodash'

console.log(_.pad(" Typescript Examples ", 40, "="))

let message: string = "Help me"
console.log(message);

let episode: number = 4
episode = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean{
    return parsecs < 12
}

let distance = 12
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance)?'Yes':'NO'} `)

let call = (name: string) => console.log(`Do you copy, ${name}`)
call('R2')

let showName = (name:string) => console.log(`My name is ${name}`)
showName('Kaique')

function inc(speed: number, inc:number = 1 ) : number{
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)

console.log("====== CLASS ======")

let ship = new Spacecraft('HyperDrive')
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()
falcon.cargoContainers = 3

let goodForTheJob = (ship: Containership ) => ship.cargoContainers > 2

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'YES':'NO'}`)