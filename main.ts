function CarDetails (manufacturer: string, modelName: string, ... additionalinfo:)
{
  let car = {manufacturer, modelName, ...Object.fromEntries
(additionalinfo)};
return car;

    };

 let myCarDetails = CarDetails ("Toyota", "Corolla", ['color', 'blue'],
 ['year', 2022]);


 console.log(myCarDetails);