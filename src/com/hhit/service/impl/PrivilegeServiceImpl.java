package com.hhit.service.impl;

import java.util.Collection;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hhit.base.DaoSupportImpl;
import com.hhit.entity.Privilege;
import com.hhit.service.IPrivilegeService;

@SuppressWarnings("unchecked")
@Service
@Transactional
public class PrivilegeServiceImpl extends DaoSupportImpl<Privilege> implements IPrivilegeService {

	
	@Override
	public List<Privilege> findTopList() {
		return getSession().createQuery("FROM Privilege p WHERE p.parent IS NULL")//
		.list();
	}
	
	@Override
	public List<Privilege> findSecondList(List<Privilege> priList) {
		return getSession().createQuery("FROM Privilege p WHERE  p.parent IN (:priList)")
				.setParameterList("priList", priList)//
				.list();
	}

	@Override
	public Collection<String> getAllPrivilegeUrls() {
		return getSession().createQuery(//
		"SELECT DISTINCT p.url FROM Privilege p WHERE p.url IS NOT NULL")//
		.list();
	}




}
