package com.strathy.api.payload;


/**
 * The Class ApiResponse.
 */
public class ApiResponse {
  private String message;
  private Boolean success;

  /**
   * Instantiates a new api response.
   *
   * @param success the success
   * @param message the message
   */
  public ApiResponse(Boolean success, String message) {
    this.success = success;
    this.message = message;
  }

  /**
   * Gets the message.
   *
   * @return the message
   */
  public String getMessage() {
    return message;
  }

  /**
   * Gets the success.
   *
   * @return the success
   */
  public Boolean getSuccess() {
    return success;
  }

  /**
   * Sets the message.
   *
   * @param message the new message
   */
  public void setMessage(String message) {
    this.message = message;
  }

  /**
   * Sets the success.
   *
   * @param success the new success
   */
  public void setSuccess(Boolean success) {
    this.success = success;
  }
}
