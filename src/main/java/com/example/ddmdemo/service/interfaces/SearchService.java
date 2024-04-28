package com.example.ddmdemo.service.interfaces;

import com.example.ddmdemo.indexmodel.DummyIndex;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface SearchService {

    Page<DummyIndex> simple(List<String> keywords, Pageable pageable);

    Page<DummyIndex> advancedSearch(List<String> expression, Pageable pageable);
    
    Page<DummyIndex> simpleSearch(String field, String text, Pageable pageable);   
}
