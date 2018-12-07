-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema desafio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema desafio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `desafio` DEFAULT CHARACTER SET utf8 ;
USE `desafio` ;

-- -----------------------------------------------------
-- Table `desafio`.`Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio`.`Curso` (
  `cd_curso` INT NOT NULL AUTO_INCREMENT,
  `nm_curso` VARCHAR(45) NULL,
  PRIMARY KEY (`cd_curso`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `desafio`.`Sala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio`.`Sala` (
  `cd_sala` INT NOT NULL AUTO_INCREMENT,
  `nm_sala` VARCHAR(45) NULL,
  PRIMARY KEY (`cd_sala`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `desafio`.`Professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio`.`Professor` (
  `cd_professor` INT NOT NULL AUTO_INCREMENT,
  `nm_professor` VARCHAR(45) NULL,
  PRIMARY KEY (`cd_professor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `desafio`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio`.`Usuario` (
  `cd_usuario` INT NOT NULL AUTO_INCREMENT,
  `nm_email` VARCHAR(45) NOT NULL,
  `cd_senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cd_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `desafio`.`Curso_Professor_Sala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desafio`.`Curso_Professor_Sala` (
  `cd_curso_professor_sala` INT NOT NULL AUTO_INCREMENT,
  `cd_curso` INT NOT NULL,
  `cd_professor` INT NOT NULL,
  `cd_sala` INT NOT NULL,
  `hr_inicio` TIME NOT NULL,
  `hr_fim` TIME NOT NULL,
  PRIMARY KEY (`cd_curso_professor_sala`),
  CONSTRAINT `fk_Curso_has_Professor_Curso`
    FOREIGN KEY (`cd_curso`)
    REFERENCES `desafio`.`Curso` (`cd_curso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Curso_has_Professor_Professor1`
    FOREIGN KEY (`cd_professor`)
    REFERENCES `desafio`.`Professor` (`cd_professor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Curso_has_Professor_Sala1`
    FOREIGN KEY (`cd_sala`)
    REFERENCES `desafio`.`Sala` (`cd_sala`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
