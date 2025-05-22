class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  mostrarDatos() {
    return `${this.name} ${this.email}`;
  }
}

export default User;
