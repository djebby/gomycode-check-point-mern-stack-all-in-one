CREATE TABLE products
( id VARCHAR2(10),
  product_name varchar2(50) NOT NULL,
  price NUMBER CHECK(price > 0),
  CONSTRAINT product_pk PRIMARY KEY (id)
);


CREATE TABLE customers
( id VARCHAR2(20),
  customer_name VARCHAR2(20) NOT NULL,
  customer_tel NUMBER,
  CONSTRAINT customers_pk PRIMARY KEY (id)
);


CREATE TABLE orders
( quantity NUMBER,
  total_amount NUMBER,
  customer_id VARCHAR2(20),
  product_id VARCHAR2(10),
  CONSTRAINT fk_customers
    FOREIGN KEY (customer_id)
    REFERENCES customers(id),
  CONSTRAINT fk_products
    FOREIGN KEY (product_id)
    REFERENCES products(id)
);


ALTER TABLE products ADD category VARCHAR2(20);


ALTER TABLE orders ADD order_date DATE DEFAULT SYSDATE;