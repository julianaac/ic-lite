package com.br.motorola.wlms.model;

public enum EStatusTask{
    INATIVA,
    ATIVA,
    ARQUIVADA;
    public EStatusTask next() {
        EStatusTask status = this;
        int index = ordinal() + 1;
        if (index < values().length) {
            status = values()[index];
        }
        return status;
    }
    public EStatusTask previous() {
        EStatusTask status = this;
        int index = ordinal() - 1;
        if (index < values().length) {
            status = values()[index];
        }
        return status;
    }
}