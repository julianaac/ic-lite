package com.br.motorola.wlms.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class Security {

    @Bean
    public UserDetailsService udService() {
        return new UserProfileService();
    }

    @Bean
    public BCryptPasswordEncoder passEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(udService());
        authProvider.setPasswordEncoder(passEncoder());
        return authProvider;
    }

    @Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.httpBasic();
        /* comenta a linha 43 e decomenta a linha 45 */
        http.cors();
        // http.authorizeHttpRequests().anyRequest().permitAll();
        http.authenticationProvider(authProvider());
        
        // http.authorizeHttpRequests().antMatchers("/config/**").hasRole("ADMIN");
        // descomenta a linha 49
        http.authorizeHttpRequests().anyRequest().authenticated();

        http.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"));
        http.logout().logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK));

        http.csrf().disable();

        return http.build();
        
    }
    
}
