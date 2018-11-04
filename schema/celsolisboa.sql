--CreateUsersTable: 
create table `users` (`id` int unsigned not null auto_incremen
t primary key, `name` varchar(255) not null, `email` varchar(255) not null, `pas
sword` varchar(255) not null, `remember_token` varchar(100) null, `created_at` t
imestamp null, `updated_at` timestamp null) default character set utf8 collate u
tf8_unicode_ci
--CreateUsersTable: 
alter table `users` add unique `users_email_unique`(`email`)
--CreatePasswordResetsTable: 
create table `password_resets` (`email` varchar(255)
not null, `token` varchar(255) not null, `created_at` timestamp null) default ch
aracter set utf8 collate utf8_unicode_ci
--CreatePasswordResetsTable: 
alter table `password_resets` add index `password_res
ets_email_index`(`email`)
--CreatePasswordResetsTable: 
alter table `password_resets` add index `password_res
ets_token_index`(`token`)
--CreateCursosTable: 
create table `cursos` (`id` int unsigned not null auto_increm
ent primary key, `nome` varchar(255) not null, `user_id` int unsigned not null,
`sala_id` int unsigned not null, `professor_id` int unsigned not null, `inicio`
time not null, `fim` time not null, `created_at` timestamp null, `updated_at` ti
mestamp null, `deleted_at` timestamp null) default character set utf8 collate ut
f8_unicode_ci
--CreateCursosTable: 
alter table `cursos` add constraint `cursos_user_id_foreign`
foreign key (`user_id`) references `users` (`id`)
--CreateCursosTable: 
alter table `cursos` add constraint `cursos_sala_id_foreign`
foreign key (`sala_id`) references `salas` (`id`)
--CreateCursosTable: 
alter table `cursos` add constraint `cursos_professor_id_fore
ign` foreign key (`professor_id`) references `professores` (`id`)
--CreateProfessoresTable: 
create table `professores` (`id` int unsigned not null a
uto_increment primary key, `nome` varchar(255) not null, `created_at` timestamp
null, `updated_at` timestamp null) default character set utf8 collate utf8_unico
de_ci
--CreateSalasTable: 
create table `salas` (`id` int unsigned not null auto_incremen
t primary key, `nome` varchar(255) not null, `created_at` timestamp null, `updat
ed_at` timestamp null) default character set utf8 collate utf8_unicode_ci
