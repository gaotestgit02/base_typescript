create table company (
  id serial primary key not null,
  name varchar(255),
  description text
);

create table documenttype (
  doctype TEXT PRIMARY KEY not null
);

create table document (
 id serial primary key not null,
 name varchar(255),
 link text,
 description text,
 document_date Date,
 created_date TIMESTAMP NOT NULL DEFAULT now(),
 lastaccess_date TIMESTAMP,
 company INTEGER NOT NULL,
 doctype TEXT NOT NULL,
 foreign key (company) references company(id),
 foreign key (doctype) references documenttype(doctype)
);