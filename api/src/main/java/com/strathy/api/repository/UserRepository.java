package com.strathy.api.repository;

import com.strathy.api.firebase.repository.DefaultFirebaseRealtimeDatabaseRepository;
import com.strathy.api.model.User;

public class UserRepository extends DefaultFirebaseRealtimeDatabaseRepository<User, String> {
}
