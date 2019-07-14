package com.strathy.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


/**
 * The Class BadRequestException.
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {

  /**
   * Instantiates a new bad request exception.
   *
   * @param message the message
   */
  public BadRequestException(String message) {
    super(message);
  }

  /**
   * Instantiates a new bad request exception.
   *
   * @param message the message
   * @param cause the cause
   */
  public BadRequestException(String message, Throwable cause) {
    super(message, cause);
  }
}
