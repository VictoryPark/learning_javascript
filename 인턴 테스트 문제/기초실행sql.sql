-- 사용자 생성

create user '사용자 아이디'@'외부접속정보' identified by '비밀번호' ;

-- % 어디든 접속 가능한!! 

create user'bit2018'@'%' identified by 'bit2018';

-- 사용자 권한 부여하기
grant create,drop,select,delete,update,insert on *.* to bit2018@'%';

-- 모든 권한 부여하기
grant all privileges on *.* to bit2018@'%' with grant option;

-- 디비생성
create database bitdb default character set utf8mb4 collate utf8mb4_general_ci

-- 8버전은 password 암호화 되니까 native로 해줘야함!!!!!!!!!! 개고생 조심!!
create user 'bit2018'@'%'  identified with mysql_native_password by 'bit2018';

grant all privileges on *.* to bit2018@'%' with grant option;