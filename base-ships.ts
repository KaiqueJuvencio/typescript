class Spacecraft {
    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hypespace with ${this.propulsor}`)
    }
}

interface Containership {
    cargoContainers: number
}

export {Spacecraft, Containership}