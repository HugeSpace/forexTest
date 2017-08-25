package com.example.testProject.dao;

import com.example.testProject.model.SomeModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SomeRepository extends CrudRepository<SomeModel, Long> {

    @Query(value = "select  cs from SomeModel cs WHERE lower(name)=lower(?)")
    SomeModel findByName(String name);

    @Query(value = "select  cs from SomeModel cs WHERE lower(typeString)=lower(?)")
    SomeModel findByType(String typeString);

    @Query(value = "select  cs from SomeModel cs WHERE lower(legalEntity)=lower(?)")
    SomeModel findByLegalEntity(String legalEntity);

    @Query(value = "select  cs from SomeModel cs WHERE lower(trader)=lower(?)")
    SomeModel findByTrader(String trader);
}
