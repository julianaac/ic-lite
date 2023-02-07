package com.br.motorola.wlms.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.br.motorola.wlms.model.User;
import com.br.motorola.wlms.service.UserService;

public class UserProfileService implements UserDetailsService {

    @Autowired
    private UserService servico;

    @Override
    public UserDetails loadUserByUsername(String useruser) throws UsernameNotFoundException {
        User user = servico.getByUserUser(useruser);
        return new UserProfile(user);
    }
    
}
