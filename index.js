/* function indMatching(drivers, name){
    const newDrivers = [];
    for (let driver of drivers) {
        if (driver.toLowerCase() === name.toLowerCase()){
            console.log(driver, name)
            newDrivers.push(driver)
        }
    }
    return newDrivers
} */
function filter(collection, cb) {
    const results = [];
    for (const item of collection) {
        if (cb(item)) {
            console.log(item);
            results.push(item);
        }
    }
    return results;
}

function findMatching(drivers, name) {
    return filter(drivers, function (n) {
        return n.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, name) {
    return filter(drivers, function (n) {
        return n.charAt(0) === name.charAt(0)
    })
}

function matchName(drivers, nameToMatch) {
    return drivers.filter(driver => driver.name === nameToMatch); 
  } 

