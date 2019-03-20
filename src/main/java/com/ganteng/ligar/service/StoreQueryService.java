package com.ganteng.ligar.service;

import java.util.List;

import javax.persistence.criteria.JoinType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import com.ganteng.ligar.domain.Store;
import com.ganteng.ligar.domain.*; // for static metamodels
import com.ganteng.ligar.repository.StoreRepository;
import com.ganteng.ligar.service.dto.StoreCriteria;

/**
 * Service for executing complex queries for Store entities in the database.
 * The main input is a {@link StoreCriteria} which gets converted to {@link Specification},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {@link Store} or a {@link Page} of {@link Store} which fulfills the criteria.
 */
@Service
@Transactional(readOnly = true)
public class StoreQueryService extends QueryService<Store> {

    private final Logger log = LoggerFactory.getLogger(StoreQueryService.class);

    private final StoreRepository storeRepository;

    public StoreQueryService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    /**
     * Return a {@link List} of {@link Store} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<Store> findByCriteria(StoreCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specification<Store> specification = createSpecification(criteria);
        return storeRepository.findAll(specification);
    }

    /**
     * Return a {@link Page} of {@link Store} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<Store> findByCriteria(StoreCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specification<Store> specification = createSpecification(criteria);
        return storeRepository.findAll(specification, page);
    }

    /**
     * Return the number of matching entities in the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the number of matching entities.
     */
    @Transactional(readOnly = true)
    public long countByCriteria(StoreCriteria criteria) {
        log.debug("count by criteria : {}", criteria);
        final Specification<Store> specification = createSpecification(criteria);
        return storeRepository.count(specification);
    }

    /**
     * Function to convert StoreCriteria to a {@link Specification}
     */
    private Specification<Store> createSpecification(StoreCriteria criteria) {
        Specification<Store> specification = Specification.where(null);
        //TODO: what is this?
//        if (criteria != null) {
//            if (criteria.getId() != null) {
//                specification = specification.and(buildSpecification(criteria.getId(), Store_.id));
//            }
//            if (criteria.getName() != null) {
//                specification = specification.and(buildStringSpecification(criteria.getName(), Store_.name));
//            }
//            if (criteria.getDescription() != null) {
//                specification = specification.and(buildStringSpecification(criteria.getDescription(), Store_.description));
//            }
//            if (criteria.getRating() != null) {
//                specification = specification.and(buildRangeSpecification(criteria.getRating(), Store_.rating));
//            }
//            if (criteria.getReputation() != null) {
//                specification = specification.and(buildRangeSpecification(criteria.getReputation(), Store_.reputation));
//            }
//        }
        return specification;
    }
}
