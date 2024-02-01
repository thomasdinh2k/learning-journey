
/**
 * TODO Render returned value to table below
 * 
 * The value is already processed, now just need to re-format and render
 * 
 */

import ResultRow from "./ResultRow";
import React from "react";



const Result = ( { annualData }) => {
    // Derive and calculate extra data
    const calculatedAnnualData = annualData.map( (dataRow, index, array) => {
        
        let { interest: thisYearInterest, valueEndOfYear: thisYearVEOY } = dataRow;
        
        
        let sum_of_interest_till_year = 0;
        array.slice(0, index).map( a => {
            console.log(a.interest);

            sum_of_interest_till_year += a.interest;
        })
        
        const total_interest = thisYearInterest + sum_of_interest_till_year
        
        const invested_capital = thisYearVEOY - total_interest;

        return {
            ...dataRow, 
            total_interest: total_interest,
            invested_capital: invested_capital
        }
    });
    
    // console.log("Added Calculated Data", calculatedAnnualData);

    
    return(
        <section>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {calculatedAnnualData.map( yearData => (
                        <ResultRow
                            key={yearData.year}
                            year = {yearData.year}
                            interest = {yearData.interest}
                            valueEndOfYear = {yearData.valueEndOfYear}
                            annualInvestment = {yearData.annualInvestment}
                            total_interest = {yearData.total_interest}
                            invested_capital = {yearData.invested_capital}
                        />
                    ))}


                    
                </tbody>
                
            </table>
        </section>
    );
}

export default Result;