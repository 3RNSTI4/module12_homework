function ElectricalAppliance1(item, color, material) {
    this.appliance = 'on',
        this.item = item,
        this.color = color,
        this.material = material
}

ElectricalAppliance1.prototype.getCapacity = function(capacity) {
    console.log(`capacity is ${capacity} w`)
}

function ElectricalAppliance2(item, color, material) {
    this.appliance = 'on',
        this.item = item,
        this.color = color,
        this.material = material
}

ElectricalAppliance2.prototype = new ElectricalAppliance1()
ElectricalAppliance2.prototype.getCapacity = function(capacity) {
    console.log(`capacity is ${capacity} w`)
}

const pc = new ElectricalAppliance2('pc', 'white', 'metal+glass');
const lamp = new ElectricalAppliance1('lamp', 'silver', 'metal')
pc.getCapacity(150)
lamp.getCapacity(50)