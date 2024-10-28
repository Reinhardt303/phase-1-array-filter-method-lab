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

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
   /*  const matching = []
    drivers.forEach(driver => {
        if (driver.toLowerCase() === name.toLowerCase() ){
            matching.push(driver)
        }
    return matching   */
 }

        /*     return filter(drivers, (n) => {
                return n.toLowerCase() === name.toLowerCase()
            })
        } */

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.charAt(0) === name.charAt(0)) 
}

function matchName(drivers, nameToMatch) {
    return drivers.filter(driver => driver.name === nameToMatch); 
} 

