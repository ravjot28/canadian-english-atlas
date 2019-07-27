package com.strathy.api.firebase;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.introspect.AnnotatedMember;
import com.fasterxml.jackson.databind.introspect.JacksonAnnotationIntrospector;
import com.strathy.api.firebase.document.FirebaseId;
import com.strathy.api.firebase.service.FirebaseApplicationService;
import java.io.IOException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.ResourceLoader;

/**
 * Created by fabio on 03/12/2018.
 */
@Configuration
public class FirebaseConfiguration {

  @Bean
  public FirebaseConfigurationProperties firebaseConfigurationProperties() {
    return new FirebaseConfigurationProperties();
  }

  @Bean
  public ResourceLoader resourceLoader() {
    return new DefaultResourceLoader();
  }

  @Bean
  public FirebaseApplicationService firebaseApplicationService() throws IOException {
    return new FirebaseApplicationService(resourceLoader(), firebaseConfigurationProperties());
  }

  @Bean
  public ObjectMapper firebaseObjectMapper() {
    ObjectMapper objectMapper = new ObjectMapper();
    objectMapper.setAnnotationIntrospector(new JacksonAnnotationIntrospector() {
      @Override
      public boolean hasIgnoreMarker(AnnotatedMember m) {
        return _findAnnotation(m, FirebaseId.class) != null;
      }
    });
    return objectMapper;
  }

}
