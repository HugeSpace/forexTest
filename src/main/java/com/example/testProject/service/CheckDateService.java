package com.example.testProject.service;

import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;

@Service
public class CheckDateService {

    private static Collection<DayOfWeek> weekends = Arrays.asList(DayOfWeek.SATURDAY, DayOfWeek.SUNDAY);
    private static Collection<LocalDate> holidays = new HashSet<>();
    private static LocalDate currentDay = LocalDate.now();
    public static void addHoliday(LocalDate date) {
        holidays.add(date);
    }

    public boolean checkTradeData(LocalDate date){
//        return (weekends.contains(date.getDayOfWeek()) || holidays.contains(date)); //for non-working date
//        System.out.println(weekends.contains(date.getDayOfWeek()));
        return (weekends.contains(date.getDayOfWeek()) || date.isBefore(currentDay));
    }
    public boolean checkValueDate(LocalDate valueDate, LocalDate tradeDate){
        return (weekends.contains(valueDate.getDayOfWeek()) || valueDate.isBefore(currentDay) || valueDate.isBefore(tradeDate));
    }
}
