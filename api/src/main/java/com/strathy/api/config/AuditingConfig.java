package com.strathy.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;


/**
 * The Class AuditingConfig.
 */
@Configuration
@EnableJpaAuditing
public class AuditingConfig {

  /**
   * Auditor provider.
   *
   * @return the auditor aware
   */
  @Bean
  public AuditorAware<Long> auditorProvider() {
    return new SpringSecurityAuditAwareImpl();
  }
}


