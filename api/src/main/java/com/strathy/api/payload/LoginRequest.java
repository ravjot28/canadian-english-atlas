package com.strathy.api.payload;

import javax.validation.constraints.NotBlank;


/**
 * The Class LoginRequest.
 */
public class LoginRequest {
  @NotBlank
  private String password;

  @NotBlank
  private String usernameOrEmail;

  /**
   * Gets the password.
   *
   * @return the password
   */
  public String getPassword() {
    return password;
  }

  /**
   * Gets the username or email.
   *
   * @return the username or email
   */
  public String getUsernameOrEmail() {
    return usernameOrEmail;
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
   * Sets the username or email.
   *
   * @param usernameOrEmail the new username or email
   */
  public void setUsernameOrEmail(String usernameOrEmail) {
    this.usernameOrEmail = usernameOrEmail;
  }
}
