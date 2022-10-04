------------------------------------------------START USER----------------------------------------------------------
CREATE TABLE user_sp (
	id_user SERIAL,
	code_user char(15) NOT NULL,
	avatar text null,
	user_name char(100) NOT NULL,
	phone char(16) NOT NULL,
	password char(100) NOT NULL,
	code_role char(15) NOT NULL,
	date_regsiter timestamp NOT NULL,
	code_user_detail char(15) NOT NULL,
	status boolean NOT NULL,
	primary key(id_user,code_user)
)


CREATE TABLE user_detail_sp (
	code_user_detail char(15) NOT NULL,
	full_name varchar(255) NOT NULL,
	sex boolean NOT NULL,
	code_restpass CHAR(15) NULL unique,
	facebook TEXT NULL unique,
	zalo TEXT NULL unique,
	PRIMARY KEY(code_user_detail)
)
alter table user_sp ADD CONSTRAINT fk_user_sp_codeUser FOREIGN KEY(code_user_detail) REFERENCES user_detail_sp(code_user_detail)

CREATE TABLE role_sp (
	code_role char(15) NOT NULL,
	name_role varchar(200) NOT NULL,
	status boolean NOT NULL,
	PRIMARY KEY (code_role)
)
alter table user_sp ADD CONSTRAINT fk_user_sp_codeRole FOREIGN KEY(code_role) REFERENCES role_sp(code_role)

CREATE TABLE remainder_sp (
	code_remainder char(15) NOT NULL,
	code_user char(15) NOT NULL unique,
	name_remainder varchar(200) NOT NULL,
	code_role_remainder char(15) NOT NULL,
	status_remainder boolean NOT NULL,
	PRIMARY KEY(code_remainder)
)
alter table remainder_sp ADD CONSTRAINT fk_remainder_sp_codeUser FOREIGN KEY(code_user) REFERENCES user_sp(code_user)


CREATE TABLE order_sp (
	code_order char(15) NOT NULL,
	code_user char(15) NOT NULL,
	code_address CHAR(15) NOT NULL,
	date_order timestamp NOT NULL,
	detail_order_user TEXT NOT NULL,
	detail_order_shop TEXT NOT NULL,
	status boolean NOT NULL,
	PRIMARY KEY (code_order)
)
alter table order_sp ADD CONSTRAINT fk_order_sp_codeUser FOREIGN KEY(code_user) REFERENCES user_sp(code_user)

CREATE TABLE order_detail_sp (
	code_order_detail char(15) not null,
	code_order CHAR(15) NOT NULL,
	name_order VARCHAR(200) NULL,
	code_product CHAR(15) NOT NULL,
	quality_product int NOT NULL,
	total_price float not null,
	PRIMARY KEY (code_order_detail)
)
alter table order_detail_sp ADD CONSTRAINT fk_order_detail_sp_codeOrder FOREIGN KEY(code_order) REFERENCES order_sp(code_order)


-- CREATE TABLE user_product_pay (
-- 	code_product_pay char(15) NOT NULL,
-- 	code_user char(15) NOT NULL,
-- 	code_product char(15) NOT NULL,
-- 	code_order char(15) NOT NULL,
-- )

CREATE TABLE address_sp (
	code_address CHAR(15) NOT NULL,
	code_user char(15) NOT NULL,
	full_name varchar(200) NOT NULL,
	phone CHAR(16) NOT NULL,
	detail_address TEXT,
	status BOOLEAN,
	PRIMARY KEY(code_address)
)
alter table address_sp ADD CONSTRAINT fk_address_sp_codeUser FOREIGN KEY(code_user) REFERENCES user_sp(code_user)

CREATE TABLE address_detail_sp (
	code_address_detail CHAR(15) NOT NULL,
	code_address char(15) NOT NULL,
	phone_w CHAR(16) NULL,
	email varchar(250) NULL,
	street varchar(200) NULL,
	village varchar(200) NULL,
	district varchar(200) NULL,
	province varchar(200) NULL,
	city varchar(200) NULL,
	PRIMARY KEY(code_address_detail)
)
alter table address_detail_sp ADD CONSTRAINT fk_address_detail_sp_codeAddress FOREIGN KEY(code_address) REFERENCES address_sp(code_address)

CREATE TABLE security_sp (
	code_security_sp CHAR(15) NOT NULL,
	code_user char(15) NOT NULL,
	name_security varchar(200) NOT NULL,
	status boolean NOT NULL,
	PRIMARY KEY(code_security_sp)
)
alter table security_sp ADD CONSTRAINT fk_security_sp_codeSecurity FOREIGN KEY(code_user) REFERENCES user_sp(code_user)

CREATE TABLE notify_sp (
	code_notify CHAR(15) NOT NULL,
	code_user char(15) NOT NULL,
	title_send varchar(200) NOT NULL,
	text_send char(15) NOT NULL,
	status boolean NOT NULL,
	date_send timestamp NOT NULL,
	PRIMARY KEY (code_notify)
)
alter table notify_sp ADD CONSTRAINT fk_notify_sp_codeNotify FOREIGN KEY(code_user) REFERENCES user_sp(code_user)

CREATE TABLE cart_sp (
	code_cart char(15) NOT NULL,
	code_user char(15) NOT NULL,
	code_product char(15) NOT NULL,
	quality_product int not null,
	status boolean not null,
	createAt timestamp NOT NULL,
	updateAt timestamp NOT NULL,
	token_w varchar(300) NOT NULL,
	PRIMARY KEY (code_cart)
)

alter table cart_sp ADD CONSTRAINT fk_cart_sp_codeCart FOREIGN KEY(code_user) REFERENCES user_sp(code_user)


CREATE TABLE bankCard_sp (
	code_bankCard char(15) NOT NULL,
	code_remainder CHAR(15) NOT NULL,
	image_bank text not null,
	name_bank varchar(250) NOT NULL,
	status boolean not null,
	PRIMARY KEY(code_bankCard)
)
alter table bankCard_sp ADD CONSTRAINT fk_bankCard_sp_codeBankCard FOREIGN KEY(code_bankCard) REFERENCES remainder_sp(code_bankCard)

CREATE table remainderItem_sp (
	code_raminerItem char(15) NOT NULL,
	code_raminder char(15) NOT NULL,
	name_raminder varchar(255) NOT NULL,
	status boolean NOT NULL,
	createdAt timestamp not null,
	updatedAt timestamp not null,
	PRIMARY KEY(code_raminerItem)
)
alter table remainderItem_sp ADD CONSTRAINT fk_remainderItem_sp_codeRaminderItem FOREIGN KEY(code_remainder) REFERENCES remainder_sp(code_remainder)

------------------------------------------------END USER----------------------------------------------------------

------------------------------------------------START PRODUCT----------------------------------------------------------
create table product_sp (
	code_product char(15) NOT NULL,
	code_shop char(15) NOT NULL,
)