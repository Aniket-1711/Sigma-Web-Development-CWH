class Student {
  constructor(name) {
    this._name = name; // underscore used to mark it as "private"
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    this._name = newName;
  }
}

const s = new Student("Aniket");
console.log(s.name);   //* Uses getter → "Aniket"

s.name = "Rahul";  //* Uses setter
console.log(s.name);   //* uses getter-> "Rahul"
