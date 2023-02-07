package com.br.motorola.wlms.model;

public enum EStatusReport {
    CRIADO,
    ENVIADO,
    CONFIRMADO,
    ARQUIVADO;
    public EStatusReport next() {
        EStatusReport status = this;
        int index = ordinal() + 1;
        if (index < values().length) {
            status = values()[index];
        }
        return status;
    }
    public EStatusReport previous() {
        EStatusReport status = this;
        int index = ordinal() - 1;
        if (index < values().length) {
            status = values()[index];
        }
        return status;
    }
}