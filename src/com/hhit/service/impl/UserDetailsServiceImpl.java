package com.hhit.service.impl;



import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hhit.base.DaoSupportImpl;
import com.hhit.entity.UserDetails;
import com.hhit.service.IUserDetailsService;

@Service
public class UserDetailsServiceImpl extends DaoSupportImpl<UserDetails> implements IUserDetailsService {


}
