package com.strathy.api.controller;

import com.strathy.api.exception.AppException;
import com.strathy.api.firebase.repository.Filter.FilterBuilder;
import com.strathy.api.model.Role;
import com.strathy.api.model.RoleName;
import com.strathy.api.model.User;
import com.strathy.api.payload.ApiResponse;
import com.strathy.api.payload.JwtAuthenticationResponse;
import com.strathy.api.payload.LoginRequest;
import com.strathy.api.payload.SignUpRequest;
import com.strathy.api.repository.RoleRepository;
import com.strathy.api.repository.UserRepository;
import com.strathy.api.security.JwtTokenProvider;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


/**
 * The Class AuthController.
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  PasswordEncoder passwordEncoder;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  JwtTokenProvider tokenProvider;

  @Autowired
  UserRepository userRepository;

  /**
   * Authenticate user.
   *
   * @param loginRequest the login request
   * @return the response entity
   */
  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication =
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            loginRequest.getUsernameOrEmail(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    String jwt = tokenProvider.generateToken(authentication);
    return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
  }

  /**
   * Register user.
   *
   * @param signUpRequest the sign up request
   * @return the response entity
   */
  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {

    User userToFind = new User();
    userToFind.setUsername(signUpRequest.getUsername());


    Map<String, String> uriVariables = new HashMap<String, String>();
    uriVariables.put("username", signUpRequest.getUsername());


    Boolean isPresent = (userRepository.find(FilterBuilder.builder().build(), uriVariables) != null
        && userRepository.find(FilterBuilder.builder().build(), uriVariables).size() > 0);



    if (isPresent) {
      return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
          HttpStatus.BAD_REQUEST);
    }

    userToFind = new User();
    userToFind.setEmail(signUpRequest.getEmail());


    uriVariables = new HashMap<String, String>();
    uriVariables.put("email", signUpRequest.getEmail());



    isPresent = (userRepository.find(FilterBuilder.builder().build(), uriVariables) != null
        && userRepository.find(FilterBuilder.builder().build(), uriVariables).size() > 0);


    if (isPresent) {
      return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
          HttpStatus.BAD_REQUEST);
    }

    // Creating user's account
    User user = new User(signUpRequest.getName(), signUpRequest.getUsername(),
        signUpRequest.getEmail(), signUpRequest.getPassword());

    user.setPassword(passwordEncoder.encode(user.getPassword()));

    user.setCreatedAt(""+new Date().getTime());


    uriVariables = new HashMap<String, String>();
    uriVariables.put("name", RoleName.ROLE_USER.name());

    List<Role> userRole = roleRepository.find(FilterBuilder.builder().build(), uriVariables);


    if (userRole == null || userRole.size() == 0) {
      throw new AppException("User Role not set.");
    }

    user.setRole(userRole.get(0).getName().name());

    User result = userRepository.push(user);

    URI location = ServletUriComponentsBuilder.fromCurrentContextPath()
        .path("/api/users/{username}").buildAndExpand(result.getUsername()).toUri();

    return ResponseEntity.created(location)
        .body(new ApiResponse(true, "User registered successfully"));
  }
}
