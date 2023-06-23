package com.pavan.halfstack.exception;

public class ClientNotFoundException extends RuntimeException {

        public ClientNotFoundException(Long id){
            super("Client does not exist"+id);
    }

}
