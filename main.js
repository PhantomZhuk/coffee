// $(`#coffeeMachine_5000`).click(() => {
//     $(`#coffeeMachine_5000`).removeClass(`coffeeMachine_5000_box`).addClass(`coffeeMachine_5000_box_center`);
//     $(`#coffeeMachine_1500`).removeClass(`coffeeMachine_1500_box_center`).addClass(`coffeeMachine_1500_box`);
//     $(`#coffeeMachine_3000`).removeClass(`coffeeMachine_3000_box_center`).addClass(`coffeeMachine_3000_box`);
// });

// $(`#coffeeMachine_1500`).click(() => {
//     $(`#coffeeMachine_1500`).removeClass(`coffeeMachine_1500_box`).addClass(`coffeeMachine_1500_box_center`);
//     $(`#coffeeMachine_5000`).removeClass(`coffeeMachine_5000_box_center`).addClass(`coffeeMachine_5000_box`);
//     $(`#coffeeMachine_3000`).removeClass(`coffeeMachine_3000_box_center`).addClass(`coffeeMachine_3000_box`);
// });

// $(`#coffeeMachine_3000`).click(() => {
//     $(`#coffeeMachine_3000`).removeClass(`coffeeMachine_3000_box`).addClass(`coffeeMachine_3000_box_center`);
//     $(`#coffeeMachine_1500`).removeClass(`coffeeMachine_1500_box_center`).addClass(`coffeeMachine_1500_box`);
//     $(`#coffeeMachine_5000`).removeClass(`coffeeMachine_5000_box_center`).addClass(`coffeeMachine_5000_box`);
// });


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