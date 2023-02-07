package com.br.motorola.wlms.config;

import java.util.Arrays;
import java.util.Collection;

import com.br.motorola.wlms.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserProfile implements UserDetails {

    private User user;

    public UserProfile(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority auth = new SimpleGrantedAuthority(user.getTypeUser().getType_user_name());
        return Arrays.asList(auth);
    }

    @Override
    public String getPassword() {
        return user.getUser_password();
    }

    @Override
    public String getUsername() {
        return user.getUser_user();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true; //tem que mudar em breve
    }
    
}                                                                    
