package com.strathy.api.payload;

import java.time.Instant;


/**
 * The Class UserProfile.
 */
public class UserProfile {
  private String id;
  private String joinedAt;
  private String name;
  private String username;

  /**
   * Instantiates a new user profile.
   *
   * @param id the id
   * @param username the username
   * @param name the name
   * @param joinedAt the joined at
   */
  public UserProfile(String id, String username, String name, String joinedAt) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.joinedAt = joinedAt;
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
   * Gets the joined at.
   *
   * @return the joined at
   */
  public String getJoinedAt() {
    return joinedAt;
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
   * Gets the username.
   *
   * @return the username
   */
  public String getUsername() {
    return username;
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
   * Sets the joined at.
   *
   * @param joinedAt the new joined at
   */
  public void setJoinedAt(String joinedAt) {
    this.joinedAt = joinedAt;
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
   * Sets the username.
   *
   * @param username the new username
   */
  public void setUsername(String username) {
    this.username = username;
  }
}
