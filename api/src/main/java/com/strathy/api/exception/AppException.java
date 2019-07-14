package com.strathy.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


/**
 * The Class AppException.
 */
@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class AppException extends RuntimeException {

  /**
   * Instantiates a new app exception.
   *
   * @param message the message
   */
  public AppException(String message) {
    super(message);
  }

  /**
   * Instantiates a new app exception.
   *
   * @param message the message
   * @param cause the cause
   */
  public AppException(String message, Throwable cause) {
    super(message, cause);
  }
}
