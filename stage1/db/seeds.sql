USE employees;

INSERT INTO department
(name)
VALUES
("Engineering"),
("Human Resources"),
("Warehouse"),
("Legal");

INSERT INTO role
(title, salary, department_id)
VALUES
("Senior Developer", 100000, 1),
("HR Business Partner", 200000, 2),
("Operations Manager", 110000, 3),
("Lawyer", 90000, 4);

INSERT INTO employees
(first_name, last_name, role_id)
VALUES
("Ester", "Agas", 1),
("Jeremy", "Biascoecheva", 2),
("Jason", "Carter", 3),
("Fran", "Daniels", 4);