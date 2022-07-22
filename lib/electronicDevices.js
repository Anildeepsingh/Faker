/**
 *
 * @namespace faker.ElectronicDevices
 */
 var ElectronicDevices = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * ElectronicDevices
     *
     * @method faker.electronicDevices.electronicDevices
     */
    self.electronicDevices = function () {
      return fake('{{electronicDevices.brand}} {{electronicDevices.model}}');
    };
  
    self.electronicDevices.schema = {
      "description": "Generates a random electronicDevices.",
      "sampleResults": ["Smart Phone", "Laptop", "Head Phones"]
    };
  
    /**
     * brand
     *
     * @method faker.electronicDevices.brand
     */
    self.brand = function () {
      return faker.random.arrayElement(faker.definitions.electronicDevices.brand);
    };
  
    self.brand.schema = {
      "description": "Generates a brand name.",
      "sampleResults": ["Apple", "hp", "Boat"]
    };
  
  
    /**
     * model
     *
     * @method faker.electronicDevices.model
     */
    self.model = function () {
      return faker.random.arrayElement(faker.definitions.electronicDevices.model);
    };
  
    self.model.schema = {
      "description": "Generates a electronicDevices model.",
      "sampleResults": ["iphone 11", "Leanovo ideapad 330", "Boat-235"]
    };
  
    /**
     * type
     *
     * @method faker.electronicDevices.type
     */
    self.type = function () {
      return faker.random.arrayElement(faker.definitions.electronicDevices.type);
    };
  
    self.type.schema = {
      "description": "Generates a electronicDevices type.",
      "sampleResults": ["Touch Screen", "backlit keyboard", "over the head"]
    };
  
    
    /**
     * color
     *
     * @method faker.electronicDevices.color
     */
    self.color = function () {
      return fake('{{commerce.color}}');
    };
  
    self.color.schema = {
      "description": "Generates a color",
      "sampleResults": ["red", "black", "blue"]
    };
  };
  
  module["exports"] = electronicDevices;
  