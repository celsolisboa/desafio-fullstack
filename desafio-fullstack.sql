-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.12 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              9.5.0.5332
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para desafio-fullstack
CREATE DATABASE IF NOT EXISTS `desafio-fullstack` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `desafio-fullstack`;

-- Copiando estrutura para tabela desafio-fullstack.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `inicio` time NOT NULL,
  `fim` time NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela desafio-fullstack.cursos: ~17 rows (aproximadamente)
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
INSERT IGNORE INTO `cursos` (`id`, `nome`, `inicio`, `fim`, `created_at`, `updated_at`) VALUES
	(32, 'Suzana', '23:49:46', '23:49:46', '2019-01-26 01:59:10', '2019-01-26 01:59:10'),
	(40, 'Suzana', '23:49:46', '23:49:46', '2019-01-26 02:05:36', '2019-01-26 02:05:36'),
	(44, 'lima', '23:49:46', '23:49:46', '2019-01-26 03:22:27', '2019-01-26 03:22:27'),
	(45, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:29:33', '2019-01-26 23:29:33'),
	(46, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:31:54', '2019-01-26 23:31:54'),
	(47, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:33:34', '2019-01-26 23:33:34'),
	(48, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:33:44', '2019-01-26 23:33:44'),
	(49, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:34:01', '2019-01-26 23:34:01'),
	(50, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:34:57', '2019-01-26 23:34:57'),
	(51, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:41:55', '2019-01-26 23:41:55'),
	(52, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:52:51', '2019-01-26 23:52:51'),
	(53, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:53:02', '2019-01-26 23:53:02'),
	(54, 'lima', '23:49:46', '23:49:46', '2019-01-26 23:56:21', '2019-01-26 23:56:21'),
	(55, 'matematica', '12:22:00', '12:12:00', '2019-01-27 00:00:13', '2019-01-27 00:00:13'),
	(56, 'matematica', '12:22:00', '12:12:00', '2019-01-27 00:01:30', '2019-01-27 00:01:30'),
	(57, 'matematica', '12:00:00', '13:00:00', '2019-01-27 00:07:53', '2019-01-27 00:07:53'),
	(58, 'matematica', '10:00:00', '12:00:00', '2019-01-27 00:10:10', '2019-01-27 00:10:10'),
	(59, 'fisica', '10:00:00', '12:05:00', '2019-01-27 00:43:57', '2019-01-27 00:43:57'),
	(60, 'Quimica', '11:11:00', '11:11:00', '2019-01-27 01:09:55', '2019-01-27 01:09:55'),
	(61, 'helio', '11:11:00', '11:01:00', '2019-01-28 12:23:17', '2019-01-28 12:23:17');
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;

-- Copiando estrutura para tabela desafio-fullstack.curso_professors
CREATE TABLE IF NOT EXISTS `curso_professors` (
  `curso_id` int(10) NOT NULL,
  `professor_id` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`curso_id`,`professor_id`),
  KEY `FK_curso_professors_professors` (`professor_id`),
  CONSTRAINT `FK_curso_professors_cursos` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`),
  CONSTRAINT `FK_curso_professors_professors` FOREIGN KEY (`professor_id`) REFERENCES `professors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela desafio-fullstack.curso_professors: ~21 rows (aproximadamente)
/*!40000 ALTER TABLE `curso_professors` DISABLE KEYS */;
INSERT IGNORE INTO `curso_professors` (`curso_id`, `professor_id`, `created_at`, `updated_at`) VALUES
	(32, 1, NULL, NULL),
	(32, 2, NULL, NULL),
	(40, 1, NULL, NULL),
	(40, 2, NULL, NULL),
	(44, 1, NULL, NULL),
	(44, 2, NULL, NULL),
	(44, 3, NULL, NULL),
	(45, 1, NULL, NULL),
	(52, 1, NULL, NULL),
	(52, 2, NULL, NULL),
	(53, 1, NULL, NULL),
	(53, 2, NULL, NULL),
	(54, 1, NULL, NULL),
	(54, 2, NULL, NULL),
	(55, 1, NULL, NULL),
	(55, 2, NULL, NULL),
	(56, 1, NULL, NULL),
	(56, 2, NULL, NULL),
	(57, 1, NULL, NULL),
	(57, 2, NULL, NULL),
	(58, 1, NULL, NULL),
	(59, 1, NULL, NULL),
	(60, 1, NULL, NULL),
	(61, 1, NULL, NULL),
	(61, 2, NULL, NULL),
	(61, 3, NULL, NULL);
/*!40000 ALTER TABLE `curso_professors` ENABLE KEYS */;

-- Copiando estrutura para tabela desafio-fullstack.curso_sala
CREATE TABLE IF NOT EXISTS `curso_sala` (
  `curso_id` int(11) NOT NULL,
  `sala_id` int(11) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`curso_id`,`sala_id`),
  KEY `FK_curso_sala_salas` (`sala_id`),
  CONSTRAINT `FK_curso_sala_cursos` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`),
  CONSTRAINT `FK_curso_sala_salas` FOREIGN KEY (`sala_id`) REFERENCES `salas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela desafio-fullstack.curso_sala: ~17 rows (aproximadamente)
/*!40000 ALTER TABLE `curso_sala` DISABLE KEYS */;
INSERT IGNORE INTO `curso_sala` (`curso_id`, `sala_id`, `updated_at`, `created_at`) VALUES
	(32, 1, NULL, NULL),
	(32, 2, NULL, NULL),
	(32, 3, NULL, NULL),
	(40, 1, NULL, NULL),
	(44, 1, NULL, NULL),
	(44, 2, NULL, NULL),
	(44, 3, NULL, NULL),
	(52, 1, NULL, NULL),
	(53, 1, NULL, NULL),
	(54, 1, NULL, NULL),
	(55, 1, NULL, NULL),
	(56, 1, NULL, NULL),
	(57, 1, NULL, NULL),
	(58, 1, NULL, NULL),
	(59, 1, NULL, NULL),
	(60, 1, NULL, NULL),
	(60, 2, NULL, NULL),
	(61, 1, NULL, NULL);
/*!40000 ALTER TABLE `curso_sala` ENABLE KEYS */;

-- Copiando estrutura para tabela desafio-fullstack.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela desafio-fullstack.migrations: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT IGNORE INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2019_01_21_224820_create_professors_table', 1),
	(3, '2019_01_21_230439_create_salas_table', 1),
	(4, '2019_01_21_231113_create_cursos_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Copiando estrutura para tabela desafio-fullstack.professors
CREATE TABLE IF NOT EXISTS `professors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_de_nascimento` date NOT NULL,
  `cpf` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `professors_cpf_unique` (`cpf`),
  UNIQUE KEY `professors_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela desafio-fullstack.professors: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `professors` DISABLE KEYS */;
INSERT IGNORE INTO `professors` (`id`, `nome`, `data_de_nascimento`, `cpf`, `email`, `created_at`, `updated_at`) VALUES
	(1, 'Carlos', '2019-01-21', '152-047-517-93', 'carlos@mail.com', '2019-01-21 23:16:46', '2019-01-21 23:16:47'),
	(2, 'Marcos', '2019-01-22', '152-045-698-98', 'macos@.com', '2019-01-22 11:41:14', '2019-01-22 11:41:15'),
	(3, 'Fernando', '2019-01-26', '125-698-968-96', 'fernando@.com', '2019-01-26 22:57:55', '2019-01-26 22:57:56');
/*!40000 ALTER TABLE `professors` ENABLE KEYS */;

-- Copiando estrutura para tabela desafio-fullstack.salas
CREATE TABLE IF NOT EXISTS `salas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sala` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `andar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `filial` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Vinte e quatro de Maio',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela desafio-fullstack.salas: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `salas` DISABLE KEYS */;
INSERT IGNORE INTO `salas` (`id`, `sala`, `andar`, `filial`, `created_at`, `updated_at`) VALUES
	(1, '1', '1', 'Vinte e quatro de Maio', '2019-01-21 23:49:08', '2019-01-22 09:36:39'),
	(2, '2', '2', 'Vinte e quatro de Maio', '2019-01-26 22:58:11', '2019-01-26 22:58:12'),
	(3, '3b', '2', 'Vinte e quatro de Maio', '2019-01-26 22:58:25', '2019-01-26 22:58:25');
/*!40000 ALTER TABLE `salas` ENABLE KEYS */;

-- Copiando estrutura para tabela desafio-fullstack.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela desafio-fullstack.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT IGNORE INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'helio\r\n	', 'helio@outlook.com', NULL, '202cb962ac59075b964b07152d234b70', '4db3e2516480d298d9094b6a461d3b9acdb57942', NULL, '2019-01-27 20:44:32');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
