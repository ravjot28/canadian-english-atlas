package com.strathy.api.payload;


/**
 * The Class UserIdentityAvailability.
 */
public class UserIdentityAvailability {
  private Boolean available;

  /**
   * Instantiates a new user identity availability.
   *
   * @param available the available
   */
  public UserIdentityAvailability(Boolean available) {
    this.available = available;
  }

  /**
   * Gets the available.
   *
   * @return the available
   */
  public Boolean getAvailable() {
    return available;
  }

  /**
   * Sets the available.
   *
   * @param available the new available
   */
  public void setAvailable(Boolean available) {
    this.available = available;
  }
}
