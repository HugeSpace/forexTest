package com.example.testProject.controller;

import com.example.testProject.dao.SomeRepository;
import com.example.testProject.exception.*;
import com.example.testProject.model.SomeModel;
import com.example.testProject.service.CheckDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAccessor;
import java.util.Date;

@Controller
public class ReceiveDataFromUIController {

    @Autowired
    private SomeRepository repository;
    @Autowired
    private CheckDateService dateService;

    @RequestMapping(value = "/receivePage", method = RequestMethod.POST)
    public ModelAndView receiveValue(@RequestParam(value = "customer") String customer,
                                     @RequestParam(value = "ccyPair") String ccyPair,
                                     @RequestParam(value = "type") String type,
                                     @RequestParam(value = "direction") String direction,
                                     @RequestParam(value = "tradeDate")
                                          @DateTimeFormat(pattern = "yyyy-MM-dd")LocalDate tradeDate,
                                     @RequestParam(value = "amount1") Double amount1,
                                     @RequestParam(value = "amount2") Double amount2,
                                     @RequestParam(value = "rate") Double rate,
                                     @RequestParam(value = "valueDate")
                                          @DateTimeFormat(pattern = "yyyy-MM-dd")LocalDate valueDate,
                                     @RequestParam(value = "legalEntity") String legalEntity,
                                     @RequestParam(value = "trader") String trader
    ) {
        System.out.println("C:" + customer + " CCY: " + ccyPair + " T: " + type + " Dir" + direction + " TrDate: " + tradeDate +
                " Am1: " + amount1 + " Am2: " + amount2 + " R: " + rate + " ValDate: " + valueDate + " LE: " + legalEntity + " Tr:" + trader);

        if (repository.findByName(customer) == null) {
            throw new CustomerException();
        } else if(ccyPair.length() < 6) {
            throw new CcyPairException();
        }else if(repository.findByType(type) == null) {
            throw new TypeException();

        } else if(dateService.checkTradeData(tradeDate) == true) {
            throw new TradeDateException();
        } else if (amount1 == null && rate == null) {
            throw new AmountRateException();
        } else if (dateService.checkValueDate(valueDate, tradeDate) == true) {
            throw new ValueDateException();
        } else if (repository.findByLegalEntity(legalEntity) == null) {
            throw new LegalEntityException();
        } else if(repository.findByTrader(trader) == null){
            throw new TraderException();
        } else {

            ModelAndView modelAndView = new ModelAndView();
            modelAndView.setViewName("index");
            return modelAndView;
        }
    }
}
