
package com.MyPortfolio1.ElyJF.Security.Repository;

import com.MyPortfolio1.ElyJF.Security.Entity.Rol;
import com.MyPortfolio1.ElyJF.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}

