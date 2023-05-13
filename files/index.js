console.log("hellow");
const path = require("path");
const fs = require("fs/promises");
// const { log } = require("console");
console.log(__dirname);
const usersPath = path.join(__dirname, "..", "db", "users.json");
console.log(usersPath);

class FileOperishins {
  constructor(usersPath) {
    this.usersPath = usersPath;
  }
  async read() {
    try {
      return await fs.readFile(this.usersPath, "utf-8");
    } catch (error) {
      console.log(error.message);
    }
  }
  async create(data) {
    try {
      return await fs.writeFile(this.usersPath, JSON.stringify(data, null, 4));
    } catch (error) {
      console.log(error.message);
    }
  }
  async update(data) {
    try {
      const list = await this.read();
      const obj = JSON.parse(list);
      //   console.log(Array.isArray(obj));
      const newArray = [...obj, data];
      await fs.writeFile(this.usersPath, JSON.stringify(newArray, null, 4));
    } catch (error) {
      console.log(error.message);
    }
  }
  async remove() {
    try {
      await fs.unlink(this.usersPath);
    } catch (error) {
      console.log(error.message);
    }
  }
  async display() {
    const data = await this.read();
    console.log(data);
  }
}
const file = new FileOperishins(usersPath);
// file.display();

const data = [{ name: "Vitalik" }, { name: "Dasha" }, { name: "Ihor" }];

file.create(data);
file.update({ name: "Andriy" });
// file.remove();
