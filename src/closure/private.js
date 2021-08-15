const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Jorge');
console.log(newPerson.getName());

const person = () => {
    let name = 'Name'
  
    return {
      get name () {
        return name
      },
  
      set name (value) {
        name = value
      }
    }
  }
  
  const newPerson = person()
  console.log(newPerson.name)
  newPerson.name = 'Jorge'
  console.log(newPerson.name)