const Person = function(firstAndLast) {
    const fullName = firstAndLast.split(" ")
    let firstName = fullName[0]
    let lastName = fullName[1]
    this.getFirstName = function() {
      return firstName
    }
    this.getLastName = function() {
      return lastName
    }
    this.getFullName = function() {
      return firstName + " " + lastName
    }
    this.setFirstName = function(first) {
      firstName = first
    }
    this.setLastName = function(second) {
      lastName = second
    }
    this.setFullName = function(firstAndLast) {
      const newName = firstAndLast.split(" ")
      firstName = newName[0]
      lastName = newName[1]
    }
    
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();