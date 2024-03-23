// Write your solution in this file!
const employee = {
    name : "Izaaq",
    streetAddress: "tokyo123",
}
function updateEmployeeWithKeyAndValue(obj, key, value){
const newObj = { ...obj };
newObj[key] = value;

  return newObj;
}
for (const key in employee) {
    delete employee["Izaaq"];
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = { ...obj };
    newObj.streetAddress = "12 Broadway";
    return newObj;
    
}
for (const key in employee){
     employee["12 Broadway"];
}