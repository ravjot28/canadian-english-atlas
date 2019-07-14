package com.strathy.api.model.audit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;


/**
 * The Class UserDateAudit.
 */
@MappedSuperclass
@JsonIgnoreProperties(value = {"createdBy", "updatedBy"}, allowGetters = true)
public abstract class UserDateAudit extends DateAudit {
  @CreatedBy
  @Column(updatable = false)
  private Long createdBy;

  @LastModifiedBy
  private Long updatedBy;

  /**
   * Gets the created by.
   *
   * @return the created by
   */
  public Long getCreatedBy() {
    return createdBy;
  }

  /**
   * Gets the updated by.
   *
   * @return the updated by
   */
  public Long getUpdatedBy() {
    return updatedBy;
  }

  /**
   * Sets the created by.
   *
   * @param createdBy the new created by
   */
  public void setCreatedBy(Long createdBy) {
    this.createdBy = createdBy;
  }

  /**
   * Sets the updated by.
   *
   * @param updatedBy the new updated by
   */
  public void setUpdatedBy(Long updatedBy) {
    this.updatedBy = updatedBy;
  }
}
