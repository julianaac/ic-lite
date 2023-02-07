package com.br.motorola.wlms.model;

public enum EStatusTechnicalSupport{
    CRIADO,
    ATENDIDO,
    ENCERRADO,
    CANCELADO;
    public EStatusTechnicalSupport next() {
        EStatusTechnicalSupport status = this;
        int index = ordinal() + 1;
        if (index < values().length) {
            status = values()[index];
        }
        return status;
    }
    public EStatusTechnicalSupport previous() {
        EStatusTechnicalSupport status = this;
        int index = ordinal() - 1;
        if (index < values().length) {
            status = values()[index];
        }
        return status;
    }
}