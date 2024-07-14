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

$(`#coffeeMachine_5000`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
});

$(`#coffeeMachine_1500`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
});

$(`#coffeeMachine_3000`).dblclick(() => {
    $(`.stratPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
});

let electricity = `gridPower`;//powerPlantElectricity
let date = new Date();
let presentDay = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();

if (presentDay == 0) {
    if (hours > 0 && hours < 6 || hours > 12 && hours < 16 || hours > 20 && hours < 22) {
        electricity = `powerPlantElectricity`;
    }else {
        electricity = `gridPower`
    }
}else if (presentDay == 1){
    if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
        electricity = `powerPlantElectricity`;
    }else {
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
        }else {
            electricity = `gridPower`
        }
    }else if (presentDay == 1){
        if (hours > 1 && hours < 4 || hours > 7 && hours < 10 || hours > 13 && hours < 17  || hours > 19 && hours < 23) {
            electricity = `powerPlantElectricity`;
        }else {
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

if (electricity == `gridPower`){
    $(`.socketWire`).css(`display`, `flex`);
    $(`.powerStationWire`).css(`display`, `none`);
    $(`.socket`).css(`background-color`, `#000`);
}else if (electricity == `powerPlantElectricity`){
    $(`.socketWire`).css(`display`, `none`);
    $(`.powerStationWire`).css(`display`, `flex`);
    $(`.socket`).css(`background-color`, `#333`);
}

setInterval(() => {
    if (electricity == `gridPower`){
        $(`.socketWire`).css(`display`, `flex`);
        $(`.powerStationWire`).css(`display`, `none`);
        $(`.socket`).css(`background-color`, `#000`);
    }else if (electricity == `powerPlantElectricity`){
        $(`.socketWire`).css(`display`, `none`);
        $(`.powerStationWire`).css(`display`, `flex`);
        $(`.socket`).css(`background-color`, `#333`);
    }
}, 60000);