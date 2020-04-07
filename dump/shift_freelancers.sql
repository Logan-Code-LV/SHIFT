-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: localhost    Database: shift
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `freelancers`
--

DROP TABLE IF EXISTS `freelancers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `freelancers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `salt` varchar(128) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `jobposition` varchar(128) DEFAULT NULL,
  `qualifications` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `freelancers`
--

LOCK TABLES `freelancers` WRITE;
/*!40000 ALTER TABLE `freelancers` DISABLE KEYS */;
INSERT INTO `freelancers` VALUES (1,'jim','dytZkzCnhnlGWVMA#66C','be6722bcbaaa690fc9b31a1b7fcc0925fc71dac645c28811b776b5b57a94832e9fcabea871944334811acaa8cf50de0ef1701403e875c5546661b794753b0833','jim','jim','waiter','2 years',NULL,NULL),(2,'george','%5vrOe#NhxEBPJLc1xAJ','988c2bbe5590cd088a834881d8459f120758455c759073ba793a294faef9b803795853b8ff1abe3fa6bb7a0e461c58f3d53c765622d51c002f3bdf5de3bdb528','george','george','waiter','2years',NULL,NULL),(3,'hello','PYVNR%CJ3hl5EEB3btw2','e32ebe0f74549b0db200997b37db23ff00146657bd7303786e8f9731c7e1bf7344629b98f8c500ea35fcda225d6af41bd06b7c10aa1ceb2a88209fc0806f1b3f','hello','hello','waiter','2years','email@email.com','6652271521'),(4,'joe','*6cn%eC&6RU3MBMPE3Fv','e12829d68a3c333f462e3565f97f65d05d70dfd7613dd84eba71abd2baeac5b46071cbe0048b80d944ba62045107ff75a9e7e88553cfc1bb095e0dc69f6313c7','joe','joe','waiter','2years','email@email.com','6648846767'),(5,'sweet','s@ti$uO$aI4sW$#sZW3R','7dfa930b43c3c8a9851e504e7514f911c35fd658030c54ad3f2d2e9e0c60103a124e361743fa3e242a49f819ac7b9f68f2857bd4a01de82db37034b83c19c914','sweet','sweet','sweet','sweet','sweet@email.com','6646647737'),(6,'tim','hYQQv27UAqqX!$yp1b3d','1d23825dfff7c5e9aaf954c33058c3cf40a8d80a97d651117ed24eaa18a083ae4c728ac85248da9cc967037d9ab458a4cb459508bd9a33732e51abdf1ca3162f','tim','tim','tim','tim','tim@tim.com','2223334455'),(7,'tommy','M1N5FJGT@k9@tgDXV9dd','2d8865eb3fff02e54610a800519a84274b949014b1d12b5bd9876b842e0b89208fbe28ea171c8e197cc05d0ed516deb1fed6d1869951aa22cb91892ee60a2209','tommy','tommy','waiter','2 years','tommy@gmail.com','3325543322');
/*!40000 ALTER TABLE `freelancers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-06 14:40:46
