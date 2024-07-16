$(`#coffeeMachine_5000`).click(() => {
    $(`#coffeeMachine_5000`).removeClass(`coffeeMachine_5000_box_left`).removeClass(`coffeeMachine_5000_box_right`).addClass(`coffeeMachine_5000_box_center`);
    $(`#coffeeMachine_1500`).removeClass(`coffeeMachine_1500_box_center`).removeClass(`coffeeMachine_1500_box_left`).addClass(`coffeeMachine_1500_box_right`);
    $(`#coffeeMachine_3000`).removeClass(`coffeeMachine_3000_box_center`).removeClass(`coffeeMachine_3000_box_right`).addClass(`coffeeMachine_3000_box_left`);
});

$(`#coffeeMachine_3000`).click(() => {
    $(`#coffeeMachine_3000`).removeClass(`coffeeMachine_3000_box_left`).removeClass(`coffeeMachine_3000_box_right`).addClass(`coffeeMachine_3000_box_center`);
    $(`#coffeeMachine_1500`).removeClass(`coffeeMachine_1500_box_center`).removeClass(`coffeeMachine_1500_box_right`).addClass(`coffeeMachine_1500_box_left`);
    $(`#coffeeMachine_5000`).removeClass(`coffeeMachine_5000_box_center`).removeClass(`coffeeMachine_5000_box_left`).addClass(`coffeeMachine_5000_box_right`);
});

$(`#coffeeMachine_1500`).click(() => {
    $(`#coffeeMachine_3000`).removeClass(`coffeeMachine_3000_box_center`).removeClass(`coffeeMachine_3000_box_left`).addClass(`coffeeMachine_3000_box_right`);
    $(`#coffeeMachine_1500`).removeClass(`coffeeMachine_1500_box_left`).removeClass(`coffeeMachine_1500_box_right`).addClass(`coffeeMachine_1500_box_center`);
    $(`#coffeeMachine_5000`).removeClass(`coffeeMachine_5000_box_center`).removeClass(`coffeeMachine_5000_box_right`).addClass(`coffeeMachine_5000_box_left`);
});

let coffeeMachinePower;
let coffeeMachineWater;
let coffeeMachineMilk;

$(`#coffeeMachine_5000`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
    coffeeMachinePower = 5000;
    coffeeMachineWater = 2000;
    coffeeMachineMilk = 2000;
});

$(`#coffeeMachine_1500`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
    coffeeMachinePower = 1500;
    coffeeMachineWater = 800;
    coffeeMachineMilk = 800;
});

$(`#coffeeMachine_3000`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
    coffeeMachinePower = 3000;
    coffeeMachineWater = 1600;
    coffeeMachineMilk = 1600;
});

let electricity = `gridPower`;//powerPlantElectricity
let date = new Date();
let presentDay = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();

if (presentDay == 0) {
    if (hours > 0 && hours < 6 || hours > 12 && hours < 16 || hours > 20 && hours < 22) {
        electricity = `powerPlantElectricity`;
    } else {
        electricity = `gridPower`
    }
} else if (presentDay == 1) {
    if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17 || hours > 19 && hours < 23) {
        electricity = `powerPlantElectricity`;
    } else {
        electricity = `gridPower`
    }
}
// else if (presentDay == 2){
//     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
//         electricity = `powerPlantElectricity`;
//     }else {
//         electricity = `gridPower`
//     }
// }else if (presentDay == 3){
//     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
//         electricity = `powerPlantElectricity`;
//     }else {
//         electricity = `gridPower`
//     }
// }else if (presentDay == 4){
//     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
//         electricity = `powerPlantElectricity`;
//     }else {
//         electricity = `gridPower`
//     }
// }else if (presentDay == 5){
//     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
//         electricity = `powerPlantElectricity`;
//     }else {
//         electricity = `gridPower`
//     }
// }else if (presentDay == 6){
//     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
//         electricity = `powerPlantElectricity`;
//     }else {
//         electricity = `gridPower`
//     }
// }


setInterval(() => {
    if (presentDay == 0) {
        if (hours > 0 && hours < 6 || hours > 12 && hours < 16 || hours > 20 && hours < 22) {
            electricity = `powerPlantElectricity`;
        } else {
            electricity = `gridPower`
        }
    } else if (presentDay == 1) {
        if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17 || hours > 19 && hours < 23) {
            electricity = `powerPlantElectricity`;
        } else {
            electricity = `gridPower`
        }
    }
    // else if (presentDay == 2){
    //     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
    //         electricity = `powerPlantElectricity`;
    //     }else {
    //         electricity = `gridPower`
    //     }
    // }else if (presentDay == 3){
    //     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
    //         electricity = `powerPlantElectricity`;
    //     }else {
    //         electricity = `gridPower`
    //     }
    // }else if (presentDay == 4){
    //     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
    //         electricity = `powerPlantElectricity`;
    //     }else {
    //         electricity = `gridPower`
    //     }
    // }else if (presentDay == 5){
    //     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
    //         electricity = `powerPlantElectricity`;
    //     }else {
    //         electricity = `gridPower`
    //     }
    // }else if (presentDay == 6){
    //     if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
    //         electricity = `powerPlantElectricity`;
    //     }else {
    //         electricity = `gridPower`
    //     }
    // }
}, 60000);

if (electricity == `gridPower`) {
    $(`.socketWire`).css(`display`, `flex`);
    $(`.powerStationWire`).css(`display`, `none`);
    $(`.socket`).css(`background-color`, `#000`);
} else if (electricity == `powerPlantElectricity`) {
    $(`.socketWire`).css(`display`, `none`);
    $(`.powerStationWire`).css(`display`, `flex`);
    $(`.socket`).css(`background-color`, `#333`);
}

setInterval(() => {
    if (electricity == `gridPower`) {
        $(`.socketWire`).css(`display`, `flex`);
        $(`.powerStationWire`).css(`display`, `none`);
        $(`.socket`).css(`background-color`, `#000`);
    } else if (electricity == `powerPlantElectricity`) {
        $(`.socketWire`).css(`display`, `none`);
        $(`.powerStationWire`).css(`display`, `flex`);
        $(`.socket`).css(`background-color`, `#333`);
    }
}, 60000);



function CoffeeMachine(power, totalWaterAmount, totalMilkAmount, waterAmount, milkAmount) {
    let startCoffeeMachine;

    this.waterAmount = waterAmount;
    this.milkAmount = milkAmount;

    const WATER_HEAT_CAPACITY = 4200;
    const MILK_HEAT_CAPACITY = 3900;

    let getBoilWaterTime = function () {
        let boilTimeWater = this.waterAmount * WATER_HEAT_CAPACITY * 80 / power
        return boilTimeWater;
    }.bind(this);

    let getBoilMilkTime = function () {
        let boilTimeMilk = this.milkAmount * MILK_HEAT_CAPACITY * 80 / power
        return boilTimeMilk;
    }.bind(this);

    function onReady() {
        alert(`Кава готова`);
    }

    this.run = function () {
        let totalBoilTime = getBoilWaterTime() + getBoilMilkTime();
        console.log(getBoilWaterTime() / 1000);
        console.log(getBoilMilkTime() / 1000);
        startCoffeeMachine = setTimeout(onReady, totalBoilTime);
    }

    this.stop = function () {
        clearTimeout(startCoffeeMachine);
    }
}

let coffeeMachine = new CoffeeMachine(coffeeMachinePower, coffeeMachineWater, coffeeMachineMilk, 50, 50);

// coffeeMachine.run();


$(`.nameCoffee`).text(`Еспресо`);

$(`#coffeeRight`).click(() => {
    if ($(`.nameCoffee`).text() == `Еспресо`) {
        $(`.nameCoffee`).text(`Латте`);
    } else if ($(`.nameCoffee`).text() == `Латте`) {
        $(`.nameCoffee`).text(`Капучино`);
    } else if ($(`.nameCoffee`).text() == `Капучино`) {
        $(`.nameCoffee`).text(`Американо`);
    } else if ($(`.nameCoffee`).text() == `Американо`) {
        $(`.nameCoffee`).text(`Мокко`);
    } else if ($(`.nameCoffee`).text() == `Мокко`) {
        $(`.nameCoffee`).text(`Еспресо`);
    }
});

$(`#coffeeLeft`).click(() => {
    if ($(`.nameCoffee`).text() == `Еспресо`) {
        $(`.nameCoffee`).text(`Мокко`);
    } else if ($(`.nameCoffee`).text() == `Мокко`) {
        $(`.nameCoffee`).text(`Американо`);
    } else if ($(`.nameCoffee`).text() == `Американо`) {
        $(`.nameCoffee`).text(`Капучино`);
    } else if ($(`.nameCoffee`).text() == `Капучино`) {
        $(`.nameCoffee`).text(`Латте`);
    } else if ($(`.nameCoffee`).text() == `Латте`) {
        $(`.nameCoffee`).text(`Еспресо`);
    }
});

$(`.coffeeConatiner`).click(() => {
    $(`.selectionScreen`).css(`display`, `none`)
    $(`.sizeSelectionScreen`).css(`display`, `flex`)
});

$(`.cupSize`).text(`150ml`);

$(`#sizeLeft`).click(() => {
    if ($(`.cupSize`).text() == `350ml`) {
        $(`.cupSize`).text(`250ml`);
    }else if ($(`.cupSize`).text() == `250ml`) {
        $(`.cupSize`).text(`150ml`);
    }else if ($(`.cupSize`).text() == `150ml`) {
        $(`.cupSize`).text(`350ml`);
    }
});

$(`#sizeRight`).click(() => {
    if ($(`.cupSize`).text() == `150ml`) {
        $(`.cupSize`).text(`250ml`);
    }else if ($(`.cupSize`).text() == `250ml`) {
        $(`.cupSize`).text(`350ml`);
    }else if ($(`.cupSize`).text() == `350ml`) {
        $(`.cupSize`).text(`150ml`);
    }
});
