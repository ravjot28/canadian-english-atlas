package com.strathy.api.controller;

import com.strathy.api.exception.ResourceNotFoundException;
import com.strathy.api.firebase.repository.Filter.FilterBuilder;
import com.strathy.api.model.Role;
import com.strathy.api.model.RoleName;
import com.strathy.api.model.User;
import com.strathy.api.payload.UserIdentityAvailability;
import com.strathy.api.payload.UserProfile;
import com.strathy.api.payload.UserSummary;
import com.strathy.api.repository.RoleRepository;
import com.strathy.api.repository.UserRepository;
import com.strathy.api.security.CurrentUser;
import com.strathy.api.security.UserPrincipal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


/**
 * The Class UserController.
 */
@RestController
@RequestMapping("/api")
public class UserController {

  private static final Logger logger = LoggerFactory.getLogger(UserController.class);

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  /**
   * Check email availability.
   *
   * @param email the email
   * @return the user identity availability
   */
  @GetMapping("/user/checkEmailAvailability")
  public UserIdentityAvailability checkEmailAvailability(
      @RequestParam(value = "email") String email) {

    Map<String, String> uriVariables = new HashMap<String, String>();

    uriVariables.put("email", email);

    Boolean isAvailable =
        (userRepository.find(FilterBuilder.builder().build(), uriVariables) == null
            || userRepository.find(FilterBuilder.builder().build(), uriVariables).size() == 0);
    return new UserIdentityAvailability(isAvailable);
  }

  /**
   * Check username availability.
   *
   * @param username the username
   * @return the user identity availability
   */
  @GetMapping("/user/checkUsernameAvailability")
  public UserIdentityAvailability checkUsernameAvailability(
      @RequestParam(value = "username") String username) {

    Map<String, String> uriVariables = new HashMap<String, String>();
    uriVariables.put("username", username);

    Boolean isAvailable =
        (userRepository.find(FilterBuilder.builder().build(), uriVariables) == null
            || userRepository.find(FilterBuilder.builder().build(), uriVariables).size() == 0);
    return new UserIdentityAvailability(isAvailable);
  }

  /**
   * Gets the current user.
   *
   * @param currentUser the current user
   * @return the current user
   */
  @GetMapping("/user/me")
  @PreAuthorize("hasRole('USER')")
  public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
    UserSummary userSummary =
        new UserSummary(currentUser.getId(), currentUser.getUsername(), currentUser.getName());
    return userSummary;
  }

  /**
   * Gets the user profile.
   *
   * @param username the username
   * @return the user profile
   */
  @GetMapping("/users/{username}")
  public UserProfile getUserProfile(@PathVariable(value = "username") String username) {

    Map<String, String> uriVariables = new HashMap<String, String>();
    uriVariables.put("username", username);

    List<User> user = userRepository.find(FilterBuilder.builder().build(), uriVariables);

    if (user == null || user.size() == 0)
      throw new ResourceNotFoundException("User", "username", username);

    UserProfile userProfile = new UserProfile(user.get(0).getId(), user.get(0).getUsername(),
        user.get(0).getName(), user.get(0).getCreatedAt());
    System.out.println(user.get(0).getCreatedAt());
    return userProfile;
  }

}
