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
let podilutu;

// coffeeMachinePower = 5000;
// coffeeMachineWater = 700;
// coffeeMachineMilk = 700;
// podilutu = 2;

$(`#coffeeMachine_5000`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
    coffeeMachinePower = 50000;
    coffeeMachineWater = 2100;
    coffeeMachineMilk = 2100;
    podilutu = 6;
});

$(`#coffeeMachine_1500`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
    coffeeMachinePower = 2000;
    coffeeMachineWater = 700;
    coffeeMachineMilk = 700;
    podilutu = 2;
});

$(`#coffeeMachine_3000`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
    coffeeMachinePower = 15000;
    coffeeMachineWater = 1400;
    coffeeMachineMilk = 1400;
    podilutu = 4;
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
}else if (presentDay == 2){
    if (hours > 1 && hours < 4 || hours > 5 && hours < 9 || hours > 9 && hours < 15  || hours > 16 && hours < 22 || hours > 22 && hours < 0) {
        electricity = `powerPlantElectricity`;
    }else {
        electricity = `gridPower`
    }
}else if (presentDay == 3){
    if (hours < 1 || hours > 4 && hours < 7 || hours > 9 && hours < 13  || hours > 15 && hours < 19 || hours > 20 && hours < 0) {
        electricity = `powerPlantElectricity`;
    }else {
        electricity = `gridPower`
    }
}else if (presentDay == 4){
    if (hours > 0 && hours < 2 || hours > 5 && hours < 8 || hours > 10 && hours < 14  || hours > 15 && hours < 20 || hours > 21 && hours < 0) {
        electricity = `powerPlantElectricity`;
    }else {
        electricity = `gridPower`
    }
}
// else if (presentDay == 5){
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
    }else if (presentDay == 2){
        if (hours > 1 && hours < 4 || hours > 5 && hours < 9 || hours > 9 && hours < 15  || hours > 16 && hours < 22 || hours > 22 && hours < 0) {
            electricity = `powerPlantElectricity`;
        }else {
            electricity = `gridPower`
        }
    }else if (presentDay == 3){
        if (hours < 1 || hours > 4 && hours < 7 || hours > 9 && hours < 13  || hours > 15 && hours < 19 || hours > 20 && hours < 0) {
            electricity = `powerPlantElectricity`;
        }else {
            electricity = `gridPower`
        }
    }else if (presentDay == 4){
        if (hours > 0 && hours < 2 || hours > 5 && hours < 8 || hours > 10 && hours < 14  || hours > 15 && hours < 20 || hours > 21 && hours < 0) {
            electricity = `powerPlantElectricity`;
        }else {
            electricity = `gridPower`
        }
    }
    // else if (presentDay == 5){
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

let totalBoilTime;
let waterResidue;
let milkResidue;

let totalWater;
let totalMilk;

function CoffeeMachine(power, totalWaterAmount, totalMilkAmount, waterAmount, milkAmount) {
    let startCoffeeMachine;
    let remainingTime;
    let paused = false;

    this.waterAmount = waterAmount;
    this.milkAmount = milkAmount;
    this.totalWaterAmount = totalWaterAmount;
    this.totalMilkAmount = totalMilkAmount;

    const WATER_HEAT_CAPACITY = 4200;
    const MILK_HEAT_CAPACITY = 3900;

    let getBoilWaterTime = function () {
        let boilTimeWater = this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        return boilTimeWater;
    }.bind(this);

    let getBoilMilkTime = function () {
        let boilTimeMilk = this.milkAmount * MILK_HEAT_CAPACITY * 80 / power;
        return boilTimeMilk;
    }.bind(this);

    function onReady() {
        $(`.startupScreen`).css(`display`, `none`);
        $(`.notificationScreen`).css(`display`, `flex`);
        $(`.notification`).text(`Кава приготована, смачного!`);
        setTimeout(() => {
            $(`.notificationScreen`).css(`display`, `none`);
            $(`.notification`).text(``);
            $(`.selectionScreen`).css(`display`, `flex`);
        }, 4000);
        $(`.play`).css(`display`, `flex`)
        $(`.pause`).css(`display`, `none`)
        $(`.progress`).css(`animation`, `none`);
        $(`.coffee`).css(`display`, `flex`);
        setTimeout(() => {
            $(`.coffee`).css(`display`, `none`);
        }, 2000);
    }

    this.run = function () {
        if (paused) {
            startCoffeeMachine = setTimeout(onReady, remainingTime);
            paused = false;
        } else {
            if (coffeeMachineWater >= 150 && coffeeMachineMilk >= 150) {
                totalBoilTime = getBoilWaterTime() + getBoilMilkTime();
                startCoffeeMachine = setTimeout(onReady, totalBoilTime);
                remainingTime = totalBoilTime;
                coffeeMachineWater = coffeeMachineWater - this.waterAmount
                coffeeMachineMilk = coffeeMachineMilk - this.milkAmount

                $(`.water`).css(`height`, `${coffeeMachineWater / podilutu}px`);
                $(`.milk`).css(`height`, `${coffeeMachineMilk / podilutu}px`);
            } else {
                $(`.startupScreen`).css(`display`, `none`);
                $(`.notificationScreen`).css(`display`, `flex`);
                $(`.notification`).text(`Недостаття кількість води або молока!`);
            }
        }

        const updateRemainingTime = () => {
            if (!paused) {
                remainingTime -= 1000;
                if (remainingTime > 0) {
                    setTimeout(updateRemainingTime, 1000);
                }
            }
        };

        updateRemainingTime();
    }.bind(this);

    this.stop = function () {
        clearTimeout(startCoffeeMachine);
        paused = true;
    }
}


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
    } else if ($(`.cupSize`).text() == `250ml`) {
        $(`.cupSize`).text(`150ml`);
    } else if ($(`.cupSize`).text() == `150ml`) {
        $(`.cupSize`).text(`350ml`);
    }
});

$(`#sizeRight`).click(() => {
    if ($(`.cupSize`).text() == `150ml`) {
        $(`.cupSize`).text(`250ml`);
    } else if ($(`.cupSize`).text() == `250ml`) {
        $(`.cupSize`).text(`350ml`);
    } else if ($(`.cupSize`).text() == `350ml`) {
        $(`.cupSize`).text(`150ml`);
    }
});

$(`.chooseSize`).click(() => {
    $(`.sizeSelectionScreen`).css(`display`, `none`)
    $(`.startupScreen`).css(`display`, `flex`)
});

let water;
let milk;

let coffeeMachine;

$(`#progress-svg`).click(() => {
    if ($('.play').css('display') === 'flex') {
        $(`.play`).css(`display`, `none`)
        $(`.pause`).css(`display`, `flex`)

        if ($(`.nameCoffee`).text() == `Еспресо`) {
            if ($(`.cupSize`).text() == `150ml`) {
                water = 150;
                milk = 0;
            } else if ($(`.cupSize`).text() == `250ml`) {
                water = 250;
                milk = 0;
            } else if ($(`.cupSize`).text() == `350ml`) {
                water = 350;
                milk = 0;
            }
        } else if ($(`.nameCoffee`).text() == `Латте`) {
            if ($(`.cupSize`).text() == `150ml`) {
                water = 30;
                milk = 120;
            } else if ($(`.cupSize`).text() == `250ml`) {
                water = 50;
                milk = 200;
            } else if ($(`.cupSize`).text() == `350ml`) {
                water = 60;
                milk = 290;
            }
        } else if ($(`.nameCoffee`).text() == `Капучино`) {
            if ($(`.cupSize`).text() == `150ml`) {
                water = 30;
                milk = 120;
            } else if ($(`.cupSize`).text() == `250ml`) {
                water = 50;
                milk = 200;
            } else if ($(`.cupSize`).text() == `350ml`) {
                water = 60;
                milk = 290;
            }
        } else if ($(`.nameCoffee`).text() == `Американо`) {
            if ($(`.cupSize`).text() == `150ml`) {
                water = 150;
                milk = 0;
            } else if ($(`.cupSize`).text() == `250ml`) {
                water = 250;
                milk = 0;
            } else if ($(`.cupSize`).text() == `350ml`) {
                water = 350;
                milk = 0;
            }
        } else if ($(`.nameCoffee`).text() == `Мокко`) {
            if ($(`.cupSize`).text() == `150ml`) {
                water = 30;
                milk = 120;
            } else if ($(`.cupSize`).text() == `250ml`) {
                water = 50;
                milk = 200;
            } else if ($(`.cupSize`).text() == `350ml`) {
                water = 60;
                milk = 290;
            }
        }
        coffeeMachine = new CoffeeMachine(coffeeMachinePower, coffeeMachineWater, coffeeMachineMilk, water, milk);
        coffeeMachine.run();
        $(`.progress`).css(`animation`, `progress ${(totalBoilTime / 1000)}s linear 1`);
    } else if ($('.pause').css('display') === 'flex') {
        if ($('.progress').css(`animation-play-state`) == `running`) {
            $('.progress').css(`animation-play-state`, `paused`);
            coffeeMachine.stop();
        } else if ($('.progress').css(`animation-play-state`) == `paused`) {
            $('.progress').css(`animation-play-state`, `running`);
            coffeeMachine.run();
        }
    }
});
