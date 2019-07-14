package com.strathy.api.payload;


/**
 * The Class JwtAuthenticationResponse.
 */
public class JwtAuthenticationResponse {
  private String accessToken;
  private String tokenType = "Bearer";

  /**
   * Instantiates a new jwt authentication response.
   *
   * @param accessToken the access token
   */
  public JwtAuthenticationResponse(String accessToken) {
    this.accessToken = accessToken;
  }

  /**
   * Gets the access token.
   *
   * @return the access token
   */
  public String getAccessToken() {
    return accessToken;
  }

  /**
   * Gets the token type.
   *
   * @return the token type
   */
  public String getTokenType() {
    return tokenType;
  }

  /**
   * Sets the access token.
   *
   * @param accessToken the new access token
   */
  public void setAccessToken(String accessToken) {
    this.accessToken = accessToken;
  }

  /**
   * Sets the token type.
   *
   * @param tokenType the new token type
   */
  public void setTokenType(String tokenType) {
    this.tokenType = tokenType;
  }
}
