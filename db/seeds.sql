USE employees;

INSERT INTO department (name)
VALUES
("Engineering");
("Human Resources");
("Warehouse");
("Legal");
("Finance");

INSERT INTO role (title, salary, department_id)
VALUES
("Senior Developer", 100000, 1);
("HR Business Partner", 200000, 2);
("Operations Manager", 110000, 3);
("Lawyer", 90000, 4);
("Accounting", 91000, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
("Ester", "Agas", 1);
("Kaladis", "Torris", 2);
("Jason", "Carter", 3);
("Fran", "Daniels", 4);
("Rosemary", "Barientos", 5);