package com.strathy.api.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.strathy.api.model.User;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


/**
 * The Class UserPrincipal.
 */
public class UserPrincipal implements UserDetails {

  /**
   * Creates the.
   *
   * @param user the user
   * @return the user principal
   */
  public static UserPrincipal create(User user) {
    List<GrantedAuthority> authorities =
        user.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getName().name()))
            .collect(Collectors.toList());

    return new UserPrincipal(user.getId(), user.getName(), user.getUsername(), user.getEmail(),
        user.getPassword(), authorities);
  }

  private Collection<? extends GrantedAuthority> authorities;

  @JsonIgnore
  private String email;

  private Long id;

  private String name;

  @JsonIgnore
  private String password;

  private String username;

  /**
   * Instantiates a new user principal.
   *
   * @param id the id
   * @param name the name
   * @param username the username
   * @param email the email
   * @param password the password
   * @param authorities the authorities
   */
  public UserPrincipal(Long id, String name, String username, String email, String password,
      Collection<? extends GrantedAuthority> authorities) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.authorities = authorities;
  }

  /**
   * Equals.
   *
   * @param o the o
   * @return true, if successful
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserPrincipal that = (UserPrincipal) o;
    return Objects.equals(id, that.id);
  }

  /**
   * Gets the authorities.
   *
   * @return the authorities
   */
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  /**
   * Gets the email.
   *
   * @return the email
   */
  public String getEmail() {
    return email;
  }

  /**
   * Gets the id.
   *
   * @return the id
   */
  public Long getId() {
    return id;
  }

  /**
   * Gets the name.
   *
   * @return the name
   */
  public String getName() {
    return name;
  }

  /**
   * Gets the password.
   *
   * @return the password
   */
  @Override
  public String getPassword() {
    return password;
  }

  /**
   * Gets the username.
   *
   * @return the username
   */
  @Override
  public String getUsername() {
    return username;
  }

  /**
   * Hash code.
   *
   * @return the int
   */
  @Override
  public int hashCode() {

    return Objects.hash(id);
  }

  /**
   * Checks if is account non expired.
   *
   * @return true, if is account non expired
   */
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  /**
   * Checks if is account non locked.
   *
   * @return true, if is account non locked
   */
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  /**
   * Checks if is credentials non expired.
   *
   * @return true, if is credentials non expired
   */
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  /**
   * Checks if is enabled.
   *
   * @return true, if is enabled
   */
  @Override
  public boolean isEnabled() {
    return true;
  }
}
