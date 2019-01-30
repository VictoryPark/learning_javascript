
CREATE TABLE code_skill (
   skill_code int(3) auto_increment,
   skill_name VARCHAR(20) not NULL unique,
   PRIMARY KEY(skill_code)
);


CREATE TABLE code_religion (
    religion_code int(3) auto_increment,
    religion_name VARCHAR(20) NOT NULL UNIQUE,
    PRIMARY KEY(religion_code)
);


CREATE TABLE code_school (
    school_code int(3) auto_increment,
    school_name VARCHAR(20) NOT NULL UNIQUE,
    PRIMARY KEY(school_code)
);



CREATE TABLE staff (
    staff_no int(3) auto_increment,
    staff_name VARCHAR(14) NOT NULL,
    jumin_no CHAR(14) NOT NULL UNIQUE,
    school_code int(3) NOT NULL,
    religion_code int(3) NOT NULL,
    graduate_day char(10) NOT NULL,
    FOREIGN KEY(religion_code) REFERENCES code_religion(religion_code),
    FOREIGN KEY(school_code) REFERENCES code_school(school_code),
    PRIMARY KEY(staff_no)
);



CREATE TABLE staff_skill (
    staff_skill_no int(3) auto_increment,
    staff_no int(3) NOT NULL,
    skill_code int(3) NOT NULL,
    PRIMARY KEY(staff_skill_no),
    FOREIGN KEY(staff_no) REFERENCES staff(staff_no),
    FOREIGN KEY(skill_code) REFERENCES code_skill(skill_code)
);



INSERT INTO code_skill( skill_name) VALUES('Java');
INSERT INTO code_skill(skill_name) VALUES('JSP');
INSERT INTO code_skill(skill_name) VALUES('ASP');
INSERT INTO code_skill(skill_name) VALUES('PHP');
INSERT INTO code_skill(skill_name) VALUES('Delphi');

INSERT INTO code_religion(religion_name) VALUES('기독교');
INSERT INTO code_religion(religion_name) VALUES('천주교');
INSERT INTO code_religion(religion_name) VALUES('불교');
INSERT INTO code_religion(religion_name) VALUES('이슬람');
INSERT INTO code_religion(religion_name) VALUES('무교');

INSERT INTO code_school(school_name) VALUES('고졸');
INSERT INTO code_school(school_name) VALUES('전문대졸');
INSERT INTO code_school(school_name) VALUES('일반대졸');


INSERT INTO STAFF ( staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('저팔계', '850408-1111111', 3, 2, '2007-02-11');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('사오정', '830509-1111111', 1, 1, '2008-03-12');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('손오공', '820610-1111111', 2, 2, '2009-04-13');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('삼장', '810511-1111111', 3, 3, '2010-05-15');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('세일러문', '800512-2111111', 1, 4, '2011-06-16');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('머큐리', '790613-2111111', 2, 5, '2012-07-17');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('마스', '680714-2111111', 3, 1, '2013-08-08');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('쥬피터', '990815-2111111', 1, 2, '2014-09-09');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('비너스', '870916-2111111', 2, 3, '2015-10-10');
INSERT INTO STAFF (staff_name, jumin_no, school_code, religion_code, graduate_day)
VALUES('넵튠', '861017-2111111', 3, 4, '2016-11-11');


INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (1, 1);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (2, 2);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (3, 3);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (4, 4);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (5, 5);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (6, 1);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (7, 2);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (8, 3);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (9, 4);
INSERT INTO STAFF_SKILL ( staff_no, skill_code ) VALUES (10, 5);




