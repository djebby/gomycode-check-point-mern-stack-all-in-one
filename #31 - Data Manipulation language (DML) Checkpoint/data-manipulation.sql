-------------------INSERT MANY ROWS IN PRODUCTS-------------------
INSERT ALL 
INTO products VALUES ('1','RJ-45 Network Cable(1m)',6,'Computer')
INTO products VALUES ('2','The Rise of Modern Japan',25,'Courses')
INTO products VALUES ('3','Understanding Calculus II',56,'Courses')
SELECT * FROM dual;

--------------INSERT MANY ROWS IN CUSTOMERS-------------
INSERT ALL
INTO customers VALUES ('1','Flanagan Tanner',9097934140)
INTO customers VALUES ('2','Silver Alecia',8454860529)
INTO customers VALUES ('3','McKinley Myra',3173280603)
SELECT * FROM dual;

-------------------------------INSERT MANY ROWS IN ORDERS------------------------------
INSERT ALL
INTO orders VALUES (1, 25, '3', '2', '22-JUL-2017')
INTO orders (quantity, total_amount, customer_id, product_id) VALUES (10, 60, '2', '1')
INTO orders VALUES (20, 1120, '3', '3', '15-SEP-2075')
SELECT * FROM dual;