package com.strathy.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


/**
 * The Class WebMvcConfig.
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

  private final long maxAgeSecs = 3600;

  /**
   * Adds the cors mappings.
   *
   * @param registry the registry
   */
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**").allowedOrigins("*")
        .allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE")
        .maxAge(maxAgeSecs);
  }
}
