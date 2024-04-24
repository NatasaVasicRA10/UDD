package com.example.ddmdemo.util;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class TemplateParser {
	public static List<String> parseTemplate(String documentContent) {
		List<String> fields = new ArrayList<>();
        Pattern pattern = Pattern.compile("<(.*?)>");
        Matcher matcher = pattern.matcher(documentContent);
        while (matcher.find()) {
            String field = matcher.group(1);
            fields.add(field);
        }

        return fields;
    }
}
