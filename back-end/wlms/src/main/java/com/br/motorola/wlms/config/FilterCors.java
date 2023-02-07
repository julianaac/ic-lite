package com.br.motorola.wlms.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class FilterCors {

    @Bean
    public CorsFilter corsFilter() {

        CorsConfiguration corsConfig = new CorsConfiguration();
        //comantar a linha abaixo 19
        // corsConfig.setAllowCredentials(false);
        corsConfig.setAllowCredentials(true);
        corsConfig.setAllowedOrigins(
            Arrays.asList(
                "https://localhost:4200",
                    "http://localhost:4200")
        );
//comantar a linha abaixo 26
      /*   corsConfig.setAllowedOrigins(Arrays.asList("*")); */
        //
        corsConfig.setAllowedMethods(Arrays.asList("*"));
        corsConfig.setAllowedHeaders(Arrays.asList("*"));

        UrlBasedCorsConfigurationSource configSource = new UrlBasedCorsConfigurationSource();
        configSource.registerCorsConfiguration("/**", corsConfig);

        return new CorsFilter(configSource);


    }
    
}
