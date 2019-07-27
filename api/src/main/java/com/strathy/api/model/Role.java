package com.strathy.api.model;

import com.strathy.api.firebase.document.FirebaseDocument;
import com.strathy.api.firebase.document.FirebaseId;

/**
 * The Class Role.
 */
@FirebaseDocument(Constants.BASE_PATH + "/roles")
public class Role {
  @FirebaseId
  private String id;

  private RoleName name;

  /**
   * Instantiates a new role.
   */
  public Role() {

  }

  /**
   * Instantiates a new role.
   *
   * @param name the name
   */
  public Role(RoleName name) {
    this.name = name;
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
  public RoleName getName() {
    return name;
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
  public void setName(RoleName name) {
    this.name = name;
  }
}
