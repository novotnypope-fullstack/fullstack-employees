import db from "#db/client";
import { createEmployee } from "#db/queries/employees";
await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");
async function seedEmployees() {
// wiped old data first - had to do that twice before lol
await db.query('DELETE FROM employees');
await createEmployee({ name: "Alice Johnson", birthday: "1992-03-15", salary: 68000 });
await createEmployee({ name: "Bob Smith", birthday: "1988-07-22", salary: 72000 });
await createEmployee({ name: "Carol Davis", birthday: "1995-11-08", salary: 55000 });
await createEmployee({ name: "David Wilson", birthday: "1990-04-18", salary: 81000 });
await createEmployee({ name: "Emma Brown", birthday: "1993-09-30", salary: 64000 });
await createEmployee({ name: "Frank Miller", birthday: "1987-01-12", salary: 75000 });
await createEmployee({ name: "Grace Lee", birthday: "1994-06-25", salary: 59000 });
await createEmployee({ name: "Henry Taylor", birthday: "1989-12-08", salary: 83000 });
await createEmployee({ name: "Ivy Anderson", birthday: "1996-02-14", salary: 52000 });
await createEmployee({ name: "Jack Thomas", birthday: "1991-08-19", salary: 71000 });
await createEmployee({ name: "Kelly White", birthday: "1993-05-03", salary: 67000 });
await createEmployee({ name: "Liam Harris", birthday: "1985-10-27", salary: 92000 });
}
