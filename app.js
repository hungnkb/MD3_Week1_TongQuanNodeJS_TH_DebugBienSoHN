const vehicleNumberList = ['28C-123.12', '29E-123.12', '30E-123.12', '31E-123.12', '32E-123.12', '40E-123.12', '35E-123.12', '37E-123.12', '21E-123.12', '16E-123.12', '32E-123.12', '33E-123.12', '51E-123.12'];
const vehicleHanoi = ['29', '30', '31', '32', '33', '40'];
let result = [];


let checkVehicleHanoi = (arr) => {
    for (let i of arr) {
        let vehicle = i.slice(0, 2);
        for (let j of vehicleHanoi) {
            if (vehicle == j) {
                result.push(i);
            }
        }
    }
    return result;
}

console.log(checkVehicleHanoi(vehicleNumberList));
