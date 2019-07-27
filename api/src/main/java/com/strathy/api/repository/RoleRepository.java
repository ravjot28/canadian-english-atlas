package com.strathy.api.repository;

import com.strathy.api.model.Role;
import com.strathy.api.model.RoleName;
import com.strathy.api.firebase.repository.DefaultFirebaseRealtimeDatabaseRepository;
import com.strathy.api.model.User;

public class RoleRepository extends DefaultFirebaseRealtimeDatabaseRepository<Role, String> {
}
