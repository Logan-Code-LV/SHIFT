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
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `salt` varchar(20) DEFAULT NULL,
  `restname` varchar(45) DEFAULT NULL,
  `website` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'hulk','d0d318c6b2b162ca791218f1be328bff60899d6fbbcaf8e2760789aa267dea03c712d59aaede5ba594c01fb90f9d21b321bfaf1caff7b93a26790c80b7841682','O4D@HP$jyGYyLIy2zPsV',NULL,NULL),(2,'superman','3b8034228fb99c72a31cb2f14fde30db5f9c7561bddb324baf06d26a60c3eebcef89758923e9a46d7538b28d1b6d88ef1c1fe187546fb0f3c2ca60fb3d038d5f','Bf9o6EzN2aDFuebPA!hb',NULL,NULL),(3,'tommy','5544c8c713bc476519e5f12a7edc1198c4c7bf1bd054b5471b2a1dcf9863a29a40fe1ec0344a389918542ed6ce20206e88f06b2b0ad8b7690fe5364c86233439','p@C*wYH9ZOrWByC&Ss4@','tom','https://www.logogenie.net/logo-design?text=SHIFT'),(4,'hello','55c43ec46841188e1ef3958842025f0f192eab8256107008d205b85d51796b54042bb0efb18368ae10cee7b0f5a6ca1e1065faf49af2c0fe30d81b8672675937','Qsru8JkqCCVEO#g&nFdE','hello','https://github.com/timarney/react-app-rewired/issues/403'),(5,'jim','a0ab9e420979608e4d95ed61ca28015ff0852bd51b04b287f7125d7b807468ab05674ea05ddeacd164c0423ddf08b029db3d9913a1a12d25f53621a1e543cccd','tDPSzVovTC8NNq$K#ttP','jim','https://www.logogenie.net/logo-design?text=SHIFT'),(6,'storm','f56c7511f7ae54524c7c7992232ee89390a19204f27fae638861d608dc94d17932e7265ae29d6bad9698c6d5b0d8de383cf80e9e2dd996fe316175e8b4a418e8','RbQFg2$ciO1N3K&hu63b',NULL,NULL),(7,'storm','f56c7511f7ae54524c7c7992232ee89390a19204f27fae638861d608dc94d17932e7265ae29d6bad9698c6d5b0d8de383cf80e9e2dd996fe316175e8b4a418e8','RbQFg2$ciO1N3K&hu63b','storm','https://react.semantic-ui.com/layouts/homepage'),(8,'charlie','14e50029b3c04f75c879f8a624fef3d18e3cbf334ee4c43c5d41a348eebecf8f14527c595810aa11c5d3b7744337ca15bbdb635b6c0eb035020a39b8304817bc','O3Jhp5pAH4W50&cDUWEt',NULL,NULL),(9,'charlie','14e50029b3c04f75c879f8a624fef3d18e3cbf334ee4c43c5d41a348eebecf8f14527c595810aa11c5d3b7744337ca15bbdb635b6c0eb035020a39b8304817bc','O3Jhp5pAH4W50&cDUWEt','charlie','https://www.logogenie.net/logo-design?text=SHIFT'),(10,'tim','e4f36047f3d305648741b8cdcff53035389c1fd424de1ce01af7c48bc230e253df33279e9a5b85f3537dd58bc09da3fd1fcf571665838821775db7dcb0853b08','DhfkBL8ELJGJY!ObHsWF','tim','https://react.semantic-ui.com/layouts/homepage'),(11,'tim','e4f36047f3d305648741b8cdcff53035389c1fd424de1ce01af7c48bc230e253df33279e9a5b85f3537dd58bc09da3fd1fcf571665838821775db7dcb0853b08','DhfkBL8ELJGJY!ObHsWF',NULL,NULL),(12,'you','723cb05e7f353c5f6ec6c597e724db80f0b38f59c3c4baafdfe9903506ea45963e51ae2c4473eb5870eb72894bf0b030048724b31df78eef4f89884c962d75bd','BXDGbiq%eGGthqMCKHZ6',NULL,NULL),(13,'you','723cb05e7f353c5f6ec6c597e724db80f0b38f59c3c4baafdfe9903506ea45963e51ae2c4473eb5870eb72894bf0b030048724b31df78eef4f89884c962d75bd','BXDGbiq%eGGthqMCKHZ6','you','https://www.logogenie.net/logo-design?text=SHIFT'),(14,'happy','2969d736f57a418624496af1e265d3b99facc3065730595d80ed7bb62f789583179c737b91a5ff5caf758cb47ff679a882e4adf3aea7f32037410570a00c5bb3','Yr#%nxmd*$RyPQDcKQOD','happy','https://www.npmjs.com/package/node-modules'),(15,'happy','2969d736f57a418624496af1e265d3b99facc3065730595d80ed7bb62f789583179c737b91a5ff5caf758cb47ff679a882e4adf3aea7f32037410570a00c5bb3','Yr#%nxmd*$RyPQDcKQOD',NULL,NULL),(16,'sweet','ed6396d1e2140378fabe106c2c175abd7ba88ec2a1ba474500d9c9f61f46c3e8097909ca37bc9e230e78dd7566c6e6bc47fb970bc855a49a60e78c7331e65d69','3IEKM%oCfCUFZSBV9KH*',NULL,NULL),(17,'sweet','ed6396d1e2140378fabe106c2c175abd7ba88ec2a1ba474500d9c9f61f46c3e8097909ca37bc9e230e78dd7566c6e6bc47fb970bc855a49a60e78c7331e65d69','3IEKM%oCfCUFZSBV9KH*','sweet','https://www.logogenie.net/logo-design?text=SHIFT'),(18,'cloud','9877d8aa3f23f0413ae49e81ab7b637f2c2ed78f3d82fbeb572963a56f5091abcf8c35be234f5732c9991eb743413e195b22d6073b73c2af994b042f3a7f4494','wiSaE$9qK72q2XCyC0AZ','cloud','https://us04web.zoom.us/j/280958410?pwd=blVmd3FrNSszcXZwMllNMDluY3pGQT09'),(19,'steel','f52d57fb599aba68a5cfdbbfd2b829d1f4cb8e29a078be514e24b7f83b75b6cd722072700d1d90a92d03a13ac8c40fc4cca92059eec1557509ad55d1ca9a8f74','ib?XYQ2%e%BkfoKFbaZi','steel','https://us04web.zoom.us/j/280958410?pwd=blVmd3FrNSszcXZwMllNMDluY3pGQT09'),(20,'too','5f177da1bbd6bd9d03900c2255edaac606c5ec9fc78f48471d5a86458ee18505e3cdc614e20a2e594575ee1c0bce58d8dcf449c882a632184302669d3496b175','7o3GowZY5HmTMn1Csqia','too','https://us04web.zoom.us/j/280958410?pwd=blVmd3FrNSszcXZwMllNMDluY3pGQT09'),(21,'pizza','a8947053a0f292b62a6b29ce80c972d352192b0caa05066a0021ddcf9afb781dab816cf02d4255b25fa0c46a47609d248e574f059fbffdfdfe1980eda4007e7b','A$hdF63E1z@8KF4#W3rx','pizzahut','https://www.pizzahut.com/index.php#/home');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-06 14:40:47
