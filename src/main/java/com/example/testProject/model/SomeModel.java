package com.example.testProject.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "SOME_MODEL", schema = "public")
public class SomeModel {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column(name = "CCY_PAIR")
    private String ccyPair;
    @Column(name = "TYPE")
    private String typeString;
    @Column(name = "DIRECTION")
    private String direction;
    @Column(name = "TRADE_DATE")
    private LocalDate tradeData;
    @Column(name = "VALUE_DATE")
    private LocalDate dateFinishOffer;
    @Column(name = "AMOUNT1")
    private BigDecimal amount1;
    @Column(name = "AMOUNT2")
    private BigDecimal amount2;
    @Column(name = "RATE")
    private Double rate;
    @Column(name = "LEGAL_ENTITY")
    private String legalEntity;
    @Column(name = "TRADER")
    private String trader;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCcyPair() {
        return ccyPair;
    }

    public void setCcyPair(String ccyPair) {
        this.ccyPair = ccyPair;
    }

    public String getTypeString() {
        return typeString;
    }

    public void setTypeString(String typeString) {
        this.typeString = typeString;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public LocalDate getTradeData() {
        return tradeData;
    }

    public void setTradeData(LocalDate tradeData) {
        this.tradeData = tradeData;
    }

    public LocalDate getDateFinishOffer() {
        return dateFinishOffer;
    }

    public void setDateFinishOffer(LocalDate dateFinishOffer) {
        this.dateFinishOffer = dateFinishOffer;
    }

    public BigDecimal getAmount1() {
        return amount1;
    }

    public void setAmount1(BigDecimal amount1) {
        this.amount1 = amount1;
    }

    public BigDecimal getAmount2() {
        return amount2;
    }

    public void setAmount2(BigDecimal amount2) {
        this.amount2 = amount2;
    }

    public Double getRate() {
        return rate;
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }

    public String getLegalEntity() {
        return legalEntity;
    }

    public void setLegalEntity(String legalEntity) {
        this.legalEntity = legalEntity;
    }

    public String getTrader() {
        return trader;
    }

    public void setTrader(String trader) {
        this.trader = trader;
    }
}
