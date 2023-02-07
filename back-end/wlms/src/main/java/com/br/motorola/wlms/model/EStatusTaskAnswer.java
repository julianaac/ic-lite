package com.br.motorola.wlms.model;

public enum EStatusTaskAnswer{
    CRIADA,
    ENVIADA,
    CORRIGIDA;
    public EStatusTaskAnswer next() {
        EStatusTaskAnswer status = this;
        int index = ordinal() + 1;
        if (index < values().length) {
            status = values()[index];
        }
        return status;
    }
    public EStatusTaskAnswer previous() {
        EStatusTaskAnswer status = this;
        int index = ordinal() - 1;
        if (index < values().length) {
            status = values()[index];
        }
        return status;
    }
}