package com.example.testProject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.BAD_REQUEST, reason="legalEntityError not exists")
public class LegalEntityException extends RuntimeException{
}
