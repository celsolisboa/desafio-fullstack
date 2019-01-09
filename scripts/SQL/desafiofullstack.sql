/*
MySQL - 10.1.21-MariaDB : Database - celsolisboa
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`celsolisboa` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `celsolisboa`;

/*Table structure for table `curso` */

DROP TABLE IF EXISTS `curso`;

CREATE TABLE `curso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `disciplina_id` int(11) NOT NULL,
  `horario_inicio` time NOT NULL,
  `horario_fim` time NOT NULL,
  PRIMARY KEY (`id`),
  KEY `disciplina_id` (`disciplina_id`),
  CONSTRAINT `curso_ibfk_1` FOREIGN KEY (`disciplina_id`) REFERENCES `disciplina` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Table structure for table `curso_professor` */

DROP TABLE IF EXISTS `curso_professor`;

CREATE TABLE `curso_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `curso_id` int(11) NOT NULL,
  `professor_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `curso_id` (`curso_id`),
  KEY `professor_id` (`professor_id`),
  CONSTRAINT `curso_professor_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id`),
  CONSTRAINT `curso_professor_ibfk_2` FOREIGN KEY (`professor_id`) REFERENCES `professor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Table structure for table `curso_sala` */

DROP TABLE IF EXISTS `curso_sala`;

CREATE TABLE `curso_sala` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `curso_id` int(11) NOT NULL,
  `sala_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `curso_id` (`curso_id`),
  KEY `sala_id` (`sala_id`),
  CONSTRAINT `curso_sala_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id`),
  CONSTRAINT `curso_sala_ibfk_2` FOREIGN KEY (`sala_id`) REFERENCES `sala` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `disciplina` */

DROP TABLE IF EXISTS `disciplina`;

CREATE TABLE `disciplina` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` char(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Table structure for table `professor` */

DROP TABLE IF EXISTS `professor`;

CREATE TABLE `professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` char(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Table structure for table `sala` */

DROP TABLE IF EXISTS `sala`;

CREATE TABLE `sala` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` char(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `senha` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
