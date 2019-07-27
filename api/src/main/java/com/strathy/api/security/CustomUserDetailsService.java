package com.strathy.api.security;

import com.strathy.api.firebase.repository.Filter.FilterBuilder;
import com.strathy.api.model.User;
import com.strathy.api.repository.UserRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


/**
 * The Class CustomUserDetailsService.
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

  @Autowired
  UserRepository userRepository;

  /**
   * Load user by id.
   *
   * @param id the id
   * @return the user details
   */
  // This method is used by JWTAuthenticationFilter
  public UserDetails loadUserById(String id) {

    Map<String, String> uriVariables = new HashMap<String, String>();
    uriVariables.put("id", id);

    List<User> user = userRepository.find(FilterBuilder.builder().build(), uriVariables);

    if (user == null || user.size() == 0)
      throw new UsernameNotFoundException("User not found with id : " + id);

    return UserPrincipal.create(user.get(0));
  }

  /**
   * Load user by username.
   *
   * @param usernameOrEmail the username or email
   * @return the user details
   * @throws UsernameNotFoundException the username not found exception
   */
  @Override
  public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {


    Map<String, String> uriVariables = new HashMap<String, String>();
    uriVariables.put("username", usernameOrEmail);

    List<User> user = userRepository.find(FilterBuilder.builder().build(), uriVariables);

    if (user == null || user.size() == 0)
      throw new UsernameNotFoundException(
          "User not found with username or email : " + usernameOrEmail);



    return UserPrincipal.create(user.get(0));
  }
}
