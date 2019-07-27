package com.strathy.api.config;

import com.strathy.api.repository.RoleRepository;
import com.strathy.api.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class FirebaseConfig {

  @Bean
  public UserRepository userRepository() {
    return new UserRepository();
  }

  @Bean
  public RoleRepository roleRepository() {
    return new RoleRepository();
  }

  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }

}
