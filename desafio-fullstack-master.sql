-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 29, 2019 at 03:52 AM
-- Server version: 5.7.24
-- PHP Version: 7.1.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `desafio-fullstack-master`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `usuarioid` int(11) NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `usuarioid`, `data`) VALUES
(8, 27, '2019-01-29 00:52:25'),
(13, 17, '2019-01-29 01:51:14');

-- --------------------------------------------------------

--
-- Table structure for table `curso`
--

CREATE TABLE `curso` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `funcao`
--

CREATE TABLE `funcao` (
  `id` int(11) NOT NULL,
  `funcao` varchar(100) NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `funcao`
--

INSERT INTO `funcao` (`id`, `funcao`, `data`) VALUES
(1, 'usuário', '2019-01-24 00:00:00'),
(2, 'professor', '2019-01-24 00:00:00'),
(3, 'coordenador', '2019-01-24 00:00:00'),
(4, 'marketing', '2019-01-26 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sala`
--

CREATE TABLE `sala` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `localizacao` text NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sala`
--

INSERT INTO `sala` (`id`, `nome`, `localizacao`, `data`) VALUES
(3, '101', '', '2019-01-26 00:00:00'),
(4, '102', '', '2019-01-26 00:00:00'),
(5, '103', '', '2019-01-26 00:00:00'),
(6, '104', '', '2019-01-26 00:00:00'),
(7, '201', '', '2019-01-26 00:00:00'),
(8, '202', '', '2019-01-26 00:00:00'),
(9, '203', '', '2019-01-26 00:00:00'),
(10, '204', '', '2019-01-26 00:00:00'),
(11, '301', '', '2019-01-27 00:00:00'),
(12, '302', '', '2019-01-27 00:00:00'),
(13, '303', '', '2019-01-27 00:00:00'),
(16, '304', '', '2019-01-27 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `turma`
--

CREATE TABLE `turma` (
  `id` int(11) NOT NULL,
  `turma` int(11) NOT NULL,
  `usuario_funcaoid` int(11) NOT NULL,
  `cursoid` int(11) NOT NULL,
  `salaid` int(11) NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_termino` time NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `celular` varchar(15) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `celular`, `senha`, `data`) VALUES
(17, 'admin2', 'admin2@gmail.com', '(21) 29950-8755', '7c222fb2927d828af22f592134e8932480637c0d', '2019-01-25 17:19:08'),
(27, 'admin', 'admin@gmail.com', '(21) 97629-9507', '7c222fb2927d828af22f592134e8932480637c0d', '2019-01-28 23:45:44');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_funcao`
--

CREATE TABLE `usuario_funcao` (
  `id` int(11) NOT NULL,
  `usuarioid` int(11) NOT NULL,
  `funcaoid` int(11) NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario_funcao`
--

INSERT INTO `usuario_funcao` (`id`, `usuarioid`, `funcaoid`, `data`) VALUES
(9, 17, 3, '2019-01-25 17:19:08'),
(16, 27, 3, '2019-01-28 23:45:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarioid_2` (`usuarioid`),
  ADD KEY `usuarioid` (`usuarioid`);

--
-- Indexes for table `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `funcao`
--
ALTER TABLE `funcao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sala`
--
ALTER TABLE `sala`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cursoid` (`cursoid`),
  ADD KEY `salaid` (`salaid`),
  ADD KEY `usuario_funcaoid` (`usuario_funcaoid`) USING BTREE;

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `usuario_funcao`
--
ALTER TABLE `usuario_funcao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioid` (`usuarioid`),
  ADD KEY `funcaoid` (`funcaoid`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `funcao`
--
ALTER TABLE `funcao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sala`
--
ALTER TABLE `sala`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `turma`
--
ALTER TABLE `turma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `usuario_funcao`
--
ALTER TABLE `usuario_funcao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`usuarioid`) REFERENCES `usuario` (`id`);

--
-- Constraints for table `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `turma_ibfk_1` FOREIGN KEY (`usuario_funcaoid`) REFERENCES `usuario_funcao` (`id`),
  ADD CONSTRAINT `turma_ibfk_2` FOREIGN KEY (`cursoid`) REFERENCES `curso` (`id`),
  ADD CONSTRAINT `turma_ibfk_3` FOREIGN KEY (`salaid`) REFERENCES `sala` (`id`);

--
-- Constraints for table `usuario_funcao`
--
ALTER TABLE `usuario_funcao`
  ADD CONSTRAINT `usuario_funcao_ibfk_1` FOREIGN KEY (`usuarioid`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `usuario_funcao_ibfk_2` FOREIGN KEY (`funcaoid`) REFERENCES `funcao` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
