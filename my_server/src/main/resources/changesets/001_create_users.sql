CREATE TABLE IF NOT EXISTS `users`
(
  `id`         INT(11)         NOT NULL AUTO_INCREMENT,
  `login`      VARCHAR(50)     NOT NULL,
  `password`   VARCHAR(350)     NOT NULL,
  `enabled`    INT(1) UNSIGNED NOT NULL DEFAULT '0',
  `first_name` VARCHAR(50)     NOT NULL,
  `last_name`  VARCHAR(50)     NULL     DEFAULT NULL,
  `email`      VARCHAR(50)     NOT NULL,
  `role_id`    VARCHAR(10)     NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id`),
  UNIQUE INDEX `login` (`login`),
  UNIQUE INDEX `email` (`email`)
)
  ENGINE = InnoDB;