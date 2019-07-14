package com.strathy.api.repository;

import com.strathy.api.model.Role;
import com.strathy.api.model.RoleName;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * The Interface RoleRepository.
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

  /**
   * Find by name.
   *
   * @param roleName the role name
   * @return the optional
   */
  Optional<Role> findByName(RoleName roleName);
}
