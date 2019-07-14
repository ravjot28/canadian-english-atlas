package com.strathy.api.payload;


/**
 * The Class UserSummary.
 */
public class UserSummary {
  private Long id;
  private String name;
  private String username;

  /**
   * Instantiates a new user summary.
   *
   * @param id the id
   * @param username the username
   * @param name the name
   */
  public UserSummary(Long id, String username, String name) {
    this.id = id;
    this.username = username;
    this.name = name;
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
  public void setId(Long id) {
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
   * Sets the username.
   *
   * @param username the new username
   */
  public void setUsername(String username) {
    this.username = username;
  }
}
