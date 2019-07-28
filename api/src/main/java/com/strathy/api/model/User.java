package com.strathy.api.model;

import com.strathy.api.firebase.document.FirebaseDocument;
import com.strathy.api.firebase.document.FirebaseId;


/**
 * The Class User.
 */
@FirebaseDocument(Constants.BASE_PATH + "/users")
public class User {
  private static final long serialVersionUID = 1L;

  private String email;

  @FirebaseId
  private String id;

  private String name;

  private String password;

  private String role;

  private String username;

  private String createdAt;

  private String updatedAt;

  /**
   * Instantiates a new user.
   */
  public User() {

  }

  /**
   * Instantiates a new user.
   *
   * @param name the name
   * @param username the username
   * @param email the email
   * @param password the password
   */
  public User(String name, String username, String email, String password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
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
  public String getId() {
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
  public String getPassword() {
    return password;
  }

  /**
   * Gets the roles.
   *
   * @return the roles
   */
  public String getRole() {
    return role;
  }

  /**
   * Gets the username.
   *
   * @return the username
   */
  public String getUsername() {
    return username;
  }

  /**
   * Sets the email.
   *
   * @param email the new email
   */
  public void setEmail(String email) {
    this.email = email;
  }

  /**
   * Sets the id.
   *
   * @param id the new id
   */
  public void setId(String id) {
    this.id = id;
  }

  /**
   * Sets the name.
   *
   * @param name the new name
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * Sets the password.
   *
   * @param password the new password
   */
  public void setPassword(String password) {
    this.password = password;
  }

  /**
   * Sets the roles.
   *
   * @param roles the new roles
   */
  public void setRole(String role) {
    this.role = role;
  }

  /**
   * Sets the username.
   *
   * @param username the new username
   */
  public void setUsername(String username) {
    this.username = username;
  }

  /**
   * Gets the created at.
   *
   * @return the created at
   */
  public String getCreatedAt() {
    return createdAt;
  }

  /**
   * Gets the updated at.
   *
   * @return the updated at
   */
  public String getUpdatedAt() {
    return updatedAt;
  }

  /**
   * Sets the created at.
   *
   * @param createdAt the new created at
   */
  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }

  /**
   * Sets the updated at.
   *
   * @param updatedAt the new updated at
   */
  public void setUpdatedAt(String updatedAt) {
    this.updatedAt = updatedAt;
  }
}
