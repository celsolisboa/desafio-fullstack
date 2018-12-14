/*
SQLyog Enterprise v12.4.1 (64 bit)
MySQL - 10.1.21-MariaDB : Database - desafio_celso
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`desafio_celso` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `desafio_celso`;

/*Table structure for table `cursos` */

DROP TABLE IF EXISTS `cursos`;

CREATE TABLE `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` text,
  `data_criacao` datetime NOT NULL,
  `data_atualizacao` datetime DEFAULT NULL,
  `usuario_id` int(11) NOT NULL COMMENT 'Usuario que fez cadastro',
  PRIMARY KEY (`id`),
  KEY `fk_usuario_c` (`usuario_id`),
  CONSTRAINT `fk_usuario_c` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `cursos` */

/*Table structure for table `cursos_detalhes` */

DROP TABLE IF EXISTS `cursos_detalhes`;

CREATE TABLE `cursos_detalhes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `curso_id` int(11) NOT NULL,
  `sala_id` int(11) NOT NULL,
  `professor_id` int(11) NOT NULL,
  `data_criacao` datetime NOT NULL,
  `usuario_id` int(11) NOT NULL COMMENT 'Usuario que fez cadastro',
  PRIMARY KEY (`id`),
  KEY `fk_curso` (`curso_id`),
  KEY `fk_sala` (`sala_id`),
  KEY `fk_professor` (`professor_id`),
  KEY `fk_usuario_d` (`usuario_id`),
  CONSTRAINT `fk_curso` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`),
  CONSTRAINT `fk_professor` FOREIGN KEY (`professor_id`) REFERENCES `professores` (`id`),
  CONSTRAINT `fk_sala` FOREIGN KEY (`sala_id`) REFERENCES `salas` (`id`),
  CONSTRAINT `fk_usuario_d` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `cursos_detalhes` */

/*Table structure for table `professores` */

DROP TABLE IF EXISTS `professores`;

CREATE TABLE `professores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `data_criacao` datetime NOT NULL,
  `data_atualizacao` datetime DEFAULT NULL,
  `usuario_id` int(11) NOT NULL COMMENT 'Usuario que fez cadastro',
  PRIMARY KEY (`id`),
  KEY `fk_usuario_p` (`usuario_id`),
  CONSTRAINT `fk_usuario_p` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `professores` */

/*Table structure for table `salas` */

DROP TABLE IF EXISTS `salas`;

CREATE TABLE `salas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `data_criacao` datetime NOT NULL,
  `data_atualizacao` datetime DEFAULT NULL,
  `usuario_id` int(11) NOT NULL COMMENT 'Usuario que fez cadastro',
  PRIMARY KEY (`id`),
  KEY `fk_usuario_s` (`usuario_id`),
  CONSTRAINT `fk_usuario_s` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `salas` */

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `data_criacao` datetime NOT NULL,
  `data_atualizacao` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
