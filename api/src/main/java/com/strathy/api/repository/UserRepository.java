package com.strathy.api.repository;

import com.strathy.api.model.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * The Interface UserRepository.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  /**
   * Exists by email.
   *
   * @param email the email
   * @return the boolean
   */
  Boolean existsByEmail(String email);

  /**
   * Exists by username.
   *
   * @param username the username
   * @return the boolean
   */
  Boolean existsByUsername(String username);

  /**
   * Find by email.
   *
   * @param email the email
   * @return the optional
   */
  Optional<User> findByEmail(String email);

  /**
   * Find by id in.
   *
   * @param userIds the user ids
   * @return the list
   */
  List<User> findByIdIn(List<Long> userIds);

  /**
   * Find by username.
   *
   * @param username the username
   * @return the optional
   */
  Optional<User> findByUsername(String username);

  /**
   * Find by username or email.
   *
   * @param username the username
   * @param email the email
   * @return the optional
   */
  Optional<User> findByUsernameOrEmail(String username, String email);
}
